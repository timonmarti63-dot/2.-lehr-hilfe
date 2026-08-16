(function () {
  var TB_NAMES = window.TB_NAMES;
  var DATA = window.CURRICULUM;

  var STORAGE_KEY = "metallbau-lernplattform-v2";
  var state = {};
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    state = {};
  }
  // migrate from the v1 flat-topic store if present, so nobody loses progress
  if (!Object.keys(state).length) {
    try {
      var old = JSON.parse(localStorage.getItem("metallbau-lernplattform-v1"));
      if (old) state = old;
    } catch (e) { /* ignore */ }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
  function getTopicState(id) {
    if (!state[id]) state[id] = { done: false, notes: "", flashKnown: {}, subDone: {}, subNotes: {} };
    var ts = state[id];
    if (!ts.flashKnown) ts.flashKnown = {};
    if (!ts.subDone) ts.subDone = {};
    if (!ts.subNotes) ts.subNotes = {};
    return ts;
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // ---------------------------------------------------------------------
  // Completion model: a topic with subtopics ("Kapitel") is done once every
  // subtopic is done; a subtopic (or a topic without subtopics) is done
  // once its Prüfung is passed, or — if it has no Prüfung yet — once it is
  // marked complete manually.
  // ---------------------------------------------------------------------
  function isSubDone(ts, idx) { return !!ts.subDone[idx]; }
  function isTopicDone(t, ts) {
    if (t.subtopics && t.subtopics.length) {
      for (var i = 0; i < t.subtopics.length; i++) if (!isSubDone(ts, i)) return false;
      return true;
    }
    return !!ts.done;
  }
  function setSubDone(t, ts, idx, val) {
    ts.subDone[idx] = !!val;
    ts.done = isTopicDone(t, ts);
    saveState();
  }
  function setTopicDone(t, ts, val) {
    ts.done = !!val;
    saveState();
  }

  var byId = {};
  DATA.forEach(function (s) { s.topics.forEach(function (t) { byId[t.id] = { t: t, sem: s }; }); });

  // ---------------------------------------------------------------------
  // Board (overview) — groupable either by semester (curriculum order) or
  // by Themenbereich (TB1–TB12), same underlying data either way.
  // ---------------------------------------------------------------------
  var boardView = document.getElementById("boardView");
  var topicView = document.getElementById("topicView");
  var board = document.getElementById("board");
  var semTabs = document.getElementById("semTabs");
  var tbChips = document.getElementById("tbChips");
  var activeTB = null;
  var searchTerm = "";
  var activeColIdx = 0;
  var boardBuilt = false;

  var VIEW_KEY = "metallbau-lernplattform-view";
  var groupMode = "semester";
  try { groupMode = localStorage.getItem(VIEW_KEY) === "tb" ? "tb" : "semester"; } catch (e) { /* ignore */ }

  function semesterGroups() {
    return DATA.map(function (s) {
      return {
        key: "sem" + s.sem, tabLabel: "Sem. " + s.sem, title: s.title, sub: null,
        items: s.topics.map(function (t) { return { t: t, sem: s }; })
      };
    });
  }
  function tbGroups() {
    var map = {}, order = [];
    DATA.forEach(function (s) {
      s.topics.forEach(function (t) {
        if (!map[t.tb]) { map[t.tb] = { key: t.tb, tabLabel: t.tb, title: t.tb, sub: TB_NAMES[t.tb], items: [] }; order.push(t.tb); }
        map[t.tb].items.push({ t: t, sem: s });
      });
    });
    order.sort(function (a, b) { return parseInt(a.replace("TB", ""), 10) - parseInt(b.replace("TB", ""), 10); });
    return order.map(function (k) { return map[k]; });
  }
  function currentGroups() { return groupMode === "tb" ? tbGroups() : semesterGroups(); }

  function setGroupMode(mode) {
    groupMode = mode;
    try { localStorage.setItem(VIEW_KEY, mode); } catch (e) { /* ignore */ }
    Array.prototype.forEach.call(document.querySelectorAll(".view-btn"), function (b) {
      b.classList.toggle("active", b.dataset.view === mode);
    });
    activeColIdx = 0;
    buildBoard();
  }

  function buildTBChipsOnce() {
    var usedTB = [];
    DATA.forEach(function (s) { s.topics.forEach(function (t) { if (usedTB.indexOf(t.tb) === -1) usedTB.push(t.tb); }); });
    usedTB.sort(function (a, b) { return parseInt(a.replace("TB", ""), 10) - parseInt(b.replace("TB", ""), 10); });
    var allChip = document.createElement("span");
    allChip.className = "chip active";
    allChip.textContent = "Alle Bereiche";
    allChip.onclick = function () { activeTB = null; renderTBFilterState(); applyFilters(); };
    tbChips.appendChild(allChip);
    usedTB.forEach(function (tb) {
      var c = document.createElement("span");
      c.className = "chip";
      c.textContent = tb + " · " + TB_NAMES[tb];
      c.dataset.tb = tb;
      c.onclick = function () { activeTB = activeTB === tb ? null : tb; renderTBFilterState(); applyFilters(); };
      tbChips.appendChild(c);
    });
  }
  function renderTBFilterState() {
    Array.prototype.forEach.call(tbChips.children, function (c) {
      c.className = "chip" + ((c.dataset.tb || null) === activeTB ? " active" : "");
    });
  }

  function buildControlsOnce() {
    buildTBChipsOnce();
    Array.prototype.forEach.call(document.querySelectorAll(".view-btn"), function (b) {
      b.classList.toggle("active", b.dataset.view === groupMode);
      b.addEventListener("click", function () { setGroupMode(b.dataset.view); });
    });
    document.getElementById("searchInput").addEventListener("input", function (e) {
      searchTerm = e.target.value;
      applyFilters();
    });
    document.getElementById("resetProgress").addEventListener("click", function () {
      if (!confirm("Wirklich den gesamten Fortschritt und alle Notizen zurücksetzen? Dies kann nicht rückgängig gemacht werden.")) return;
      state = {};
      saveState();
      renderBoardRows();
      updateProgress();
    });
  }

  function buildBoard() {
    board.innerHTML = "";
    semTabs.innerHTML = "";
    var groups = currentGroups();

    groups.forEach(function (g, idx) {
      var tabBtn = document.createElement("button");
      tabBtn.textContent = g.tabLabel;
      tabBtn.title = g.sub || "";
      tabBtn.className = idx === activeColIdx ? "active" : "";
      tabBtn.onclick = function () {
        activeColIdx = idx;
        Array.prototype.forEach.call(semTabs.children, function (btn, i) { btn.className = i === idx ? "active" : ""; });
        Array.prototype.forEach.call(board.children, function (col, i) { col.classList.toggle("active", i === idx); });
      };
      semTabs.appendChild(tabBtn);

      var col = document.createElement("div");
      col.className = "col" + (idx === activeColIdx ? " active" : "");
      col.dataset.groupKey = g.key;

      var totalLekt = g.items.reduce(function (a, x) { return a + x.t.lekt; }, 0);
      var titleHtml = g.sub
        ? escapeHtml(g.title) + ' <span class="col-title-sub">· ' + escapeHtml(g.sub) + '</span>'
        : escapeHtml(g.title);
      var head = document.createElement("div");
      head.className = "col-head";
      head.innerHTML =
        '<div class="col-head-top"><span class="col-title">' + titleHtml + '</span><span class="col-lekt">' + totalLekt + ' Lekt.</span></div>' +
        '<div class="bar tick"><div class="bar-fill" data-fill></div></div>' +
        '<div class="col-progress-num"><span data-done>0 Lekt. erledigt</span><span data-pct>0%</span></div>';
      col.appendChild(head);

      var body = document.createElement("div");
      body.className = "col-body";
      g.items.forEach(function (x) {
        var row = document.createElement("button");
        row.type = "button";
        row.className = "topic-row";
        row.dataset.id = x.t.id;
        row.dataset.name = x.t.name.toLowerCase();
        row.dataset.tb = x.t.tb;
        row.dataset.sem = x.sem.sem;
        row.addEventListener("click", function () { navigate("#/topic/" + x.t.id); });
        body.appendChild(row);
      });
      col.appendChild(body);

      board.appendChild(col);
    });

    renderBoardRows();
    updateProgress();
  }

  function renderBoardRows() {
    Array.prototype.forEach.call(board.querySelectorAll(".topic-row"), function (row) {
      var info = byId[row.dataset.id];
      var t = info.t, sem = info.sem;
      var ts = getTopicState(t.id);
      var done = isTopicDone(t, ts);
      var subLabel = "";
      if (t.subtopics && t.subtopics.length) {
        var n = 0;
        for (var i = 0; i < t.subtopics.length; i++) if (isSubDone(ts, i)) n++;
        subLabel = '<span class="lekt-chip">' + n + '/' + t.subtopics.length + ' Unterthemen</span>';
      }
      var metaChip = groupMode === "tb"
        ? '<span class="tb-chip">Sem. ' + sem.sem + '</span>'
        : '<span class="tb-chip">' + t.tb + '</span>';
      row.className = "topic-row" + (done ? " done" : "");
      row.innerHTML =
        '<span class="row-status" aria-hidden="true">' + (done ? "&#10003;" : "") + '</span>' +
        '<span class="topic-titles">' +
          '<span class="topic-name">' + escapeHtml(t.name) + '</span>' +
          '<span class="topic-meta">' + metaChip + '<span class="lekt-chip">' + t.lekt + ' Lekt.</span>' + subLabel + '</span>' +
        '</span>' +
        '<span class="chev">&rsaquo;</span>';
    });
    applyFilters();
  }

  function applyFilters() {
    var term = searchTerm.trim().toLowerCase();
    Array.prototype.forEach.call(board.querySelectorAll(".topic-row"), function (row) {
      var matchesTB = !activeTB || row.dataset.tb === activeTB;
      var matchesTerm = !term || row.dataset.name.indexOf(term) !== -1;
      row.classList.toggle("hidden", !(matchesTB && matchesTerm));
    });
    Array.prototype.forEach.call(board.children, function (col) {
      var anyVisible = col.querySelector(".topic-row:not(.hidden)");
      col.classList.toggle("col-empty", !anyVisible);
    });
  }

  function updateProgress() {
    var grandTotal = 0, grandDone = 0;
    Array.prototype.forEach.call(board.children, function (col) {
      var total = 0, done = 0;
      Array.prototype.forEach.call(col.querySelectorAll(".topic-row"), function (row) {
        var t = byId[row.dataset.id].t;
        total += t.lekt;
        if (isTopicDone(t, getTopicState(t.id))) done += t.lekt;
      });
      grandTotal += total; grandDone += done;
      var pct = total ? Math.round((done / total) * 100) : 0;
      col.querySelector("[data-fill]").style.width = pct + "%";
      col.querySelector("[data-done]").textContent = done + " / " + total + " Lekt. erledigt";
      col.querySelector("[data-pct]").textContent = pct + "%";
    });
    var overallPct = grandTotal ? Math.round((grandDone / grandTotal) * 100) : 0;
    document.getElementById("overallFill").style.width = overallPct + "%";
    document.getElementById("overallPct").textContent = overallPct + "%";
    document.getElementById("overallSub").textContent = grandDone + " / " + grandTotal + " Lekt. erledigt";
  }

  // ---------------------------------------------------------------------
  // Shared content-mode renderers (used by both topic pages and chapter
  // pages, since both are just "a thing with theory/cards/aufgaben/
  // anwendung/prüfung").
  // ---------------------------------------------------------------------
  var MODES = [
    { key: "theorie", label: "Theorie & Formeln" },
    { key: "karten", label: "Karteikarten" },
    { key: "aufgaben", label: "Aufgaben" },
    { key: "anwendung", label: "Anwendung" },
    { key: "pruefung", label: "Prüfung" }
  ];

  function exerciseListHtml(exercises) {
    var html = '<div class="exercise-list">';
    exercises.forEach(function (ex, i) {
      if (ex.group) html += '<div class="exercise-group">' + escapeHtml(ex.group) + '</div>';
      html +=
        '<div class="exercise-item">' +
          '<div class="exercise-task"><span class="exercise-num">' + (i + 1) + '.</span> ' + escapeHtml(ex.task) + '</div>' +
          '<button class="btn exercise-toggle" type="button" data-ex-toggle>Lösung anzeigen</button>' +
          '<div class="exercise-solution" data-ex-solution hidden>' + escapeHtml(ex.answer) + '</div>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }
  function wireExerciseToggles(container) {
    Array.prototype.forEach.call(container.querySelectorAll(".exercise-item"), function (item) {
      var btn = item.querySelector("[data-ex-toggle]");
      var sol = item.querySelector("[data-ex-solution]");
      btn.addEventListener("click", function () {
        var show = sol.hidden;
        sol.hidden = !show;
        btn.textContent = show ? "Lösung verstecken" : "Lösung anzeigen";
      });
    });
  }

  // Structured theory content used by richly-authored Unterthemen: a flat
  // list of typed blocks (heading / paragraph / bullet list / formula code
  // / callout note / table), rendered in order.
  function theorySectionHtml(sec) {
    switch (sec.type) {
      case "h": return '<div class="theory-h">' + escapeHtml(sec.text) + '</div>';
      case "p": return '<p class="explain">' + escapeHtml(sec.text) + '</p>';
      case "code": return '<div class="formula-box">' + escapeHtml(sec.text) + '</div>';
      case "note": return '<div class="method-box' + (sec.tone === "warn" ? " method-warn" : "") + '"><span class="method-label">' + (sec.tone === "warn" ? "Achtung" : "Merksatz") + '</span><span class="method-text">' + escapeHtml(sec.text) + '</span></div>';
      case "list":
        return '<ul class="theory-list">' + sec.items.map(function (it) { return "<li>" + escapeHtml(it) + "</li>"; }).join("") + '</ul>';
      case "table":
        var thead = "<tr>" + sec.headers.map(function (h) { return "<th>" + escapeHtml(h) + "</th>"; }).join("") + "</tr>";
        var tbody = sec.rows.map(function (row) { return "<tr>" + row.map(function (c) { return "<td>" + escapeHtml(c) + "</td>"; }).join("") + "</tr>"; }).join("");
        return '<div class="theory-table-wrap"><table class="theory-table"><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table></div>';
      default: return "";
    }
  }

  function renderTheorie(container, content) {
    var html = "";
    if (content.theorySections && content.theorySections.length) {
      html += content.theorySections.map(theorySectionHtml).join("");
    } else {
      html += '<p class="explain">' + escapeHtml(content.explain || "Für dieses Thema ist noch keine Theorie hinterlegt. Du kannst unten in den Notizen eigenen Unterrichtsstoff einfügen.") + '</p>';
      if (content.formulas) html += '<div class="formula-box">' + escapeHtml(content.formulas) + '</div>';
    }
    if (content.method) html += '<div class="method-box"><span class="method-label">Lernmethode</span><span class="method-text">' + escapeHtml(content.method) + '</span></div>';
    if (content.examples && content.examples.length) {
      html += '<div class="examples-head">Beispiele</div><div class="examples">';
      content.examples.forEach(function (ex) {
        html += '<div class="example-item"><div class="example-problem">' + escapeHtml(ex.problem) + '</div><div class="example-solution">' + escapeHtml(ex.solution) + '</div></div>';
      });
      html += '</div>';
    }
    container.innerHTML = html;
  }

  function renderKarten(container, content, knownStore) {
    if (!content.flashcards || !content.flashcards.length) {
      container.innerHTML = '<div class="empty-pane">Für dieses Thema gibt es noch keine Karteikarten. Sobald du Lernstoff dazu einfügst (Notizen unten), lohnt es sich, ein paar Frage/Antwort-Karten zu ergänzen.</div>';
      return;
    }
    var cards = content.flashcards;
    var order = [];
    var pos = 0;
    var revealed = false;

    container.innerHTML =
      '<div class="flash-head"><span class="flash-title">Karteikarten</span><span class="flash-progress" data-flash-progress></span></div>' +
      '<div class="flashcard" data-flashcard>' +
        '<div class="flashcard-label" data-flashcard-label>Frage</div>' +
        '<div class="flashcard-text" data-flashcard-text></div>' +
      '</div>' +
      '<div class="flash-controls">' +
        '<button class="btn" type="button" data-flash-reveal>Antwort zeigen</button>' +
        '<button class="btn flash-know" type="button" data-flash-know hidden>Weiss ich</button>' +
        '<button class="btn flash-dontknow" type="button" data-flash-dontknow hidden>Nochmal üben</button>' +
        '<button class="btn" type="button" data-flash-shuffle>Mischen</button>' +
        '<button class="btn" type="button" data-flash-reset>Zurücksetzen</button>' +
      '</div>';

    var cardEl = container.querySelector("[data-flashcard]");
    var labelEl = container.querySelector("[data-flashcard-label]");
    var textEl = container.querySelector("[data-flashcard-text]");
    var progressEl = container.querySelector("[data-flash-progress]");
    var revealBtn = container.querySelector("[data-flash-reveal]");
    var knowBtn = container.querySelector("[data-flash-know]");
    var dontknowBtn = container.querySelector("[data-flash-dontknow]");

    function knownCount() { var n = 0; for (var i = 0; i < cards.length; i++) if (knownStore[i]) n++; return n; }
    function buildOrder() {
      var open = [];
      for (var i = 0; i < cards.length; i++) if (!knownStore[i]) open.push(i);
      order = shuffle(open);
      pos = 0;
    }
    function render() {
      progressEl.textContent = knownCount() + " / " + cards.length + " gewusst";
      if (!order.length) {
        cardEl.classList.remove("is-flipped");
        labelEl.textContent = "Runde geschafft";
        textEl.textContent = knownCount() === cards.length
          ? "Alle Karten dieses Themas sind als „gewusst“ markiert. Mit Zurücksetzen kannst du erneut starten."
          : "Alle offenen Karten dieser Runde wurden gezeigt. Mischen startet eine neue Runde mit den verbleibenden Karten.";
        revealBtn.hidden = true; knowBtn.hidden = true; dontknowBtn.hidden = true;
        return;
      }
      revealBtn.hidden = false;
      var card = cards[order[pos]];
      revealed = false;
      labelEl.textContent = "Frage " + (pos + 1) + " / " + order.length;
      textEl.textContent = card.q;
      cardEl.classList.remove("is-flipped");
      knowBtn.hidden = true; dontknowBtn.hidden = true;
    }
    function reveal() {
      if (!order.length || revealed) return;
      revealed = true;
      var card = cards[order[pos]];
      labelEl.textContent = "Antwort";
      textEl.textContent = card.a;
      cardEl.classList.add("is-flipped");
      revealBtn.hidden = true; knowBtn.hidden = false; dontknowBtn.hidden = false;
    }
    function next(markKnown) {
      var idx = order[pos];
      if (markKnown) { knownStore[idx] = true; order.splice(pos, 1); } else { pos++; }
      if (pos >= order.length) pos = 0;
      saveState();
      render();
    }
    revealBtn.addEventListener("click", reveal);
    knowBtn.addEventListener("click", function () { next(true); });
    dontknowBtn.addEventListener("click", function () { next(false); });
    container.querySelector("[data-flash-shuffle]").addEventListener("click", function () { buildOrder(); render(); });
    container.querySelector("[data-flash-reset]").addEventListener("click", function () {
      Object.keys(knownStore).forEach(function (k) { delete knownStore[k]; });
      saveState(); buildOrder(); render();
    });
    buildOrder();
    render();
  }

  function renderAufgaben(container, content) {
    if (!content.exercises || !content.exercises.length) {
      container.innerHTML = '<div class="empty-pane">Für dieses Thema sind noch keine Übungsaufgaben hinterlegt.</div>';
      return;
    }
    container.innerHTML = '<div class="exercise-head">Aufgaben zum Lösen</div>' + exerciseListHtml(content.exercises);
    wireExerciseToggles(container);
  }

  function renderAnwendung(container, content) {
    if (!content.applications || !content.applications.length) {
      container.innerHTML = '<div class="empty-pane">Für dieses Thema sind noch keine Praxis-Anwendungen hinterlegt.</div>';
      return;
    }
    var html = '<div class="exercise-head">Formel &amp; Theorie anwenden</div><div class="exercise-list">';
    content.applications.forEach(function (ex, i) {
      html +=
        '<div class="exercise-item app-item">' +
          '<div class="exercise-task"><span class="exercise-num app-num">' + (i + 1) + '.</span> ' + escapeHtml(ex.task) + '</div>' +
          '<button class="btn exercise-toggle" type="button" data-ex-toggle>Lösung anzeigen</button>' +
          '<div class="exercise-solution" data-ex-solution hidden>' + escapeHtml(ex.answer) + '</div>' +
        '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
    wireExerciseToggles(container);
  }

  // Two exam formats:
  //  - `exam`: multiple-choice, auto-graded, pass = strict majority correct.
  //  - `examOpen`: open/graded questions with point values (as authored in
  //    the coursebook-style Prüfungen) — answers are shown for self-check
  //    and the learner enters their own achieved score against a printed
  //    pass threshold, since free-text answers can't be auto-graded.
  // onPass() is called once an attempt passes; completion persists
  // regardless of later retakes.
  function renderPruefung(container, content, passed, onPass, manual) {
    var hasAny = (content.exam && content.exam.length) || content.examOpen;
    if (passed) {
      container.innerHTML =
        '<div class="exam-banner exam-pass">Bestanden ✓ — dieser Teil ist abgeschlossen.</div>' +
        (hasAny ? '<button class="btn" type="button" data-exam-retry>Nochmals üben</button>' : '');
      var retryBtn = container.querySelector("[data-exam-retry]");
      if (retryBtn) retryBtn.addEventListener("click", renderForm);
      return;
    }
    renderForm();

    function renderForm() {
      if (content.examOpen) { renderOpenExamForm(container, content.examOpen, onPass, manual); return; }
      if (content.exam && content.exam.length) { renderMcExamForm(container, content.exam, onPass, manual); return; }
      container.innerHTML =
        '<div class="empty-pane">Für dieses Thema ist noch keine Prüfung hinterlegt.</div>' +
        '<button class="btn" type="button" data-manual-complete>Als abgeschlossen markieren</button>';
      var btn = container.querySelector("[data-manual-complete]");
      if (btn) btn.addEventListener("click", function () { manual(true); onPass(); });
    }
  }

  function renderMcExamForm(container, exam, onPass, manual) {
    var html = '<div class="exam-intro">' + exam.length + ' Fragen · bestanden ab mehr als der Hälfte richtig.</div>';
    exam.forEach(function (q, qi) {
      html += '<div class="exam-question" data-exam-q="' + qi + '"><div class="exam-q-text">' + (qi + 1) + '. ' + escapeHtml(q.q) + '</div><div class="exam-options">';
      q.options.forEach(function (opt, oi) {
        html += '<label class="exam-option"><input type="radio" name="exq' + qi + '" value="' + oi + '"><span>' + escapeHtml(opt) + '</span></label>';
      });
      html += '</div></div>';
    });
    html += '<button class="btn" type="button" data-exam-submit>Prüfung auswerten</button><div class="exam-result" data-exam-result hidden></div>';
    container.innerHTML = html;

    container.querySelector("[data-exam-submit]").addEventListener("click", function () {
      var total = exam.length;
      var correct = 0;
      var unanswered = false;
      exam.forEach(function (q, qi) {
        var qEl = container.querySelector('[data-exam-q="' + qi + '"]');
        var picked = qEl.querySelector('input[name="exq' + qi + '"]:checked');
        qEl.classList.remove("is-correct", "is-wrong");
        if (!picked) { unanswered = true; return; }
        if (parseInt(picked.value, 10) === q.correct) { correct++; qEl.classList.add("is-correct"); }
        else { qEl.classList.add("is-wrong"); }
      });
      var resultEl = container.querySelector("[data-exam-result]");
      resultEl.hidden = false;
      if (unanswered) {
        resultEl.className = "exam-result exam-result-warn";
        resultEl.textContent = "Bitte beantworte alle Fragen, bevor du auswertest.";
        return;
      }
      var threshold = Math.floor(total / 2) + 1;
      if (correct >= threshold) {
        resultEl.className = "exam-result exam-result-pass";
        resultEl.textContent = "Bestanden! " + correct + " / " + total + " richtig.";
        manual(true);
        onPass();
      } else {
        resultEl.className = "exam-result exam-result-fail";
        resultEl.textContent = "Noch nicht bestanden — " + correct + " / " + total + " richtig (nötig: " + threshold + "). Richtige/falsche Antworten sind markiert, versuch es nochmal.";
      }
    });
  }

  function renderOpenExamForm(container, examOpen, onPass, manual) {
    var html = '<div class="exam-intro">' + examOpen.timeMin + ' Min · ' + examOpen.totalPoints + ' Punkte total · bestanden ab ' + examOpen.passPoints + ' Punkten (' + Math.round(examOpen.passPoints / examOpen.totalPoints * 100) + '%).</div>';
    examOpen.parts.forEach(function (part, pi) {
      html += '<div class="exam-part-title">' + escapeHtml(part.title) + '</div><div class="exercise-list">';
      part.questions.forEach(function (q, qi) {
        html +=
          '<div class="exercise-item">' +
            '<div class="exercise-task"><span class="point-badge">' + q.points + (q.points === 1 ? " Punkt" : " Punkte") + '</span> ' + escapeHtml(q.q) + '</div>' +
            '<button class="btn exercise-toggle" type="button" data-ex-toggle>Lösung anzeigen</button>' +
            '<div class="exercise-solution" data-ex-solution hidden>' + escapeHtml(q.answer) + '</div>' +
          '</div>';
      });
      html += '</div>';
    });
    html +=
      '<div class="score-entry">' +
        '<label for="examScoreInput">Deine erreichte Punktzahl (0–' + examOpen.totalPoints + ')</label>' +
        '<div class="score-entry-row">' +
          '<input type="number" id="examScoreInput" min="0" max="' + examOpen.totalPoints + '" step="1">' +
          '<button class="btn" type="button" data-exam-submit>Auswerten</button>' +
        '</div>' +
        '<div class="score-entry-hint">Selbsteinschätzung anhand der Musterlösungen oben — vergib die Punkte ehrlich, so bringt dir die Prüfung am meisten.</div>' +
      '</div>' +
      '<div class="exam-result" data-exam-result hidden></div>';
    container.innerHTML = html;
    wireExerciseToggles(container);

    container.querySelector("[data-exam-submit]").addEventListener("click", function () {
      var input = container.querySelector("#examScoreInput");
      var raw = input.value.trim();
      var resultEl = container.querySelector("[data-exam-result]");
      resultEl.hidden = false;
      if (raw === "" || isNaN(raw)) {
        resultEl.className = "exam-result exam-result-warn";
        resultEl.textContent = "Bitte trage deine erreichte Punktzahl ein.";
        return;
      }
      var score = Math.max(0, Math.min(examOpen.totalPoints, Math.round(Number(raw))));
      if (score >= examOpen.passPoints) {
        resultEl.className = "exam-result exam-result-pass";
        resultEl.textContent = "Bestanden! " + score + " / " + examOpen.totalPoints + " Punkte.";
        manual(true);
        onPass();
      } else {
        resultEl.className = "exam-result exam-result-fail";
        resultEl.textContent = "Noch nicht bestanden — " + score + " / " + examOpen.totalPoints + " Punkte (nötig: " + examOpen.passPoints + "). Sieh dir die Musterlösungen nochmal an und versuch es erneut.";
      }
    });
  }

  function renderNotes(container, value, onChange) {
    container.innerHTML =
      '<div class="notes-label"><span>Eigene Notizen &amp; Unterrichtsstoff</span><span class="savehint" data-savehint>gespeichert</span></div>' +
      '<textarea class="notes" placeholder="Füge hier eigenen Unterrichtsstoff, Merksätze, Links oder Beispiele ein …" data-notes>' + escapeHtml(value || "") + '</textarea>';
    var notesEl = container.querySelector("[data-notes]");
    var saveHint = container.querySelector("[data-savehint]");
    var debounceTimer;
    notesEl.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        onChange(notesEl.value);
        saveHint.classList.add("show");
        setTimeout(function () { saveHint.classList.remove("show"); }, 1400);
      }, 400);
    });
  }

  // Renders the mode tab bar + active pane into `container` for a given
  // `content` object ({explain, formulas, method, examples, flashcards,
  // exercises, applications, exam}), plus a persistent notes box.
  function renderModePage(container, opts) {
    var mode = opts.mode;
    var content = opts.content;
    var html = '<div class="tabbar" role="tablist">';
    MODES.forEach(function (m) {
      html += '<button class="tab' + (mode === m.key ? " active" : "") + '" type="button" data-mode="' + m.key + '">' + m.label + '</button>';
    });
    html += '</div><div class="pane" data-pane></div><div class="notes-section" data-notes-section></div>';
    container.innerHTML = html;

    Array.prototype.forEach.call(container.querySelectorAll("[data-mode]"), function (btn) {
      btn.addEventListener("click", function () { opts.onModeChange(btn.dataset.mode); });
    });

    var pane = container.querySelector("[data-pane]");
    if (mode === "theorie") renderTheorie(pane, content);
    else if (mode === "karten") renderKarten(pane, content, opts.flashKnownStore);
    else if (mode === "aufgaben") {
      if (opts.governedBySubtopics) renderGovernedNotice(pane, opts, "Aufgaben");
      else renderAufgaben(pane, content);
    } else if (mode === "anwendung") {
      if (opts.governedBySubtopics) renderGovernedNotice(pane, opts, "Anwendungen");
      else renderAnwendung(pane, content);
    } else if (mode === "pruefung") {
      if (opts.governedBySubtopics) renderChapterChecklist(pane, opts);
      else renderPruefung(pane, content, opts.isDone, opts.onPass, opts.onManualToggle);
    }

    renderNotes(container.querySelector("[data-notes-section]"), opts.notesValue, opts.onNotesChange);
  }

  function renderGovernedNotice(pane, opts, label) {
    pane.innerHTML = '<div class="empty-pane">' + label + ' sind pro Unterthema organisiert. Wähle unten ein Unterthema aus, um dort Theorie, Karteikarten, Aufgaben, Anwendung und Prüfung zu sehen.</div>';
  }

  function renderChapterChecklist(pane, opts) {
    var t = opts.topic, ts = opts.ts;
    var done = 0;
    var html = '<div class="exam-intro">Dieses Thema besteht aus ' + t.subtopics.length + ' Unterthemen. Bestehe die Prüfung jedes Unterthemas, um „' + escapeHtml(t.name) + '“ komplett abzuschliessen.</div><div class="chapters">';
    t.subtopics.forEach(function (sub, i) {
      var d = isSubDone(ts, i);
      if (d) done++;
      html += '<div class="chapter chapter-flat' + (d ? " is-done" : "") + '" data-goto-chapter="' + i + '">' +
        '<div class="chapter-head">' +
          '<span class="chapter-tag">' + escapeHtml(sub.chapter) + '</span>' +
          '<span class="chapter-title">' + escapeHtml(sub.title) + '</span>' +
          '<span class="chapter-status">' + (d ? "Bestanden ✓" : "Offen") + '</span>' +
        '</div></div>';
    });
    html += '</div><div class="chapter-summary">' + done + ' / ' + t.subtopics.length + ' Unterthemen abgeschlossen</div>';
    pane.innerHTML = html;
    Array.prototype.forEach.call(pane.querySelectorAll("[data-goto-chapter]"), function (row) {
      row.addEventListener("click", function () { navigate("#/topic/" + t.id + "/chapter/" + row.dataset.gotoChapter); });
    });
  }

  // ---------------------------------------------------------------------
  // Topic detail page
  // ---------------------------------------------------------------------
  function renderTopicPage(topicId, chapterIdx, mode) {
    var info = byId[topicId];
    if (!info) { navigate("#/"); return; }
    var t = info.t, sem = info.sem;
    var ts = getTopicState(t.id);

    if (chapterIdx != null && t.subtopics && t.subtopics[chapterIdx]) {
      renderChapterPage(t, sem, ts, chapterIdx, mode);
      return;
    }

    var hasSubtopics = !!(t.subtopics && t.subtopics.length);
    var done = isTopicDone(t, ts);

    var html =
      '<div class="breadcrumb"><a href="#/" data-nav>Übersicht</a></div>' +
      '<div class="page-header">' +
        '<div class="page-header-top">' +
          '<span class="tb-chip">' + t.tb + ' · ' + escapeHtml(TB_NAMES[t.tb] || "") + '</span>' +
          '<span class="status-pill' + (done ? " status-done" : "") + '">' + (done ? "Abgeschlossen ✓" : "In Bearbeitung") + '</span>' +
        '</div>' +
        '<h2 class="page-title">' + escapeHtml(t.name) + '</h2>' +
        '<div class="page-sub">' + escapeHtml(sem.title) + ' · ' + t.lekt + ' Lektionen' + '</div>' +
      '</div>';

    if (hasSubtopics) {
      html += '<div class="chapters-head">Unterthemen (' + t.subtopics.length + ')</div><div class="chapters" data-chapter-toc></div>';
    }
    html += '<div class="topic-body-inner" data-mode-root></div>';
    topicView.innerHTML = html;

    if (hasSubtopics) {
      var tocEl = topicView.querySelector("[data-chapter-toc]");
      var tocHtml = "";
      t.subtopics.forEach(function (sub, i) {
        var d = isSubDone(ts, i);
        tocHtml += '<div class="chapter chapter-flat' + (d ? " is-done" : "") + '" data-goto-chapter="' + i + '">' +
          '<div class="chapter-head">' +
            '<span class="chapter-tag">' + escapeHtml(sub.chapter) + '</span>' +
            '<span class="chapter-title">' + escapeHtml(sub.title) + '</span>' +
            '<span class="chapter-status">' + (d ? "Bestanden ✓" : "Offen") + '</span>' +
          '</div></div>';
      });
      tocEl.innerHTML = tocHtml;
      Array.prototype.forEach.call(tocEl.querySelectorAll("[data-goto-chapter]"), function (row) {
        row.addEventListener("click", function () { navigate("#/topic/" + t.id + "/chapter/" + row.dataset.gotoChapter); });
      });
    }

    renderModePage(topicView.querySelector("[data-mode-root]"), {
      mode: mode || "theorie",
      content: t,
      topic: t,
      ts: ts,
      governedBySubtopics: hasSubtopics,
      isDone: done,
      flashKnownStore: ts.flashKnown,
      notesValue: ts.notes,
      onNotesChange: function (v) { ts.notes = v; saveState(); },
      onModeChange: function (m) { navigate("#/topic/" + t.id + "?mode=" + m); },
      onManualToggle: function (v) { setTopicDone(t, ts, v); },
      onPass: function () { setTopicDone(t, ts, true); refreshHeader(t, ts); }
    });

    wireBreadcrumb();

    function refreshHeader(topic, topicState) {
      var pill = topicView.querySelector(".status-pill");
      var isDone = isTopicDone(topic, topicState);
      pill.className = "status-pill" + (isDone ? " status-done" : "");
      pill.textContent = isDone ? "Abgeschlossen ✓" : "In Bearbeitung";
    }
  }

  function renderChapterPage(t, sem, ts, chapterIdx, mode) {
    var sub = t.subtopics[chapterIdx];
    var done = isSubDone(ts, chapterIdx);

    var html =
      '<div class="breadcrumb"><a href="#/" data-nav>Übersicht</a> <span class="crumb-sep">/</span> <a href="#/topic/' + t.id + '" data-nav>' + escapeHtml(t.name) + '</a></div>' +
      '<div class="page-header">' +
        '<div class="page-header-top">' +
          '<span class="tb-chip">' + escapeHtml(sub.chapter) + '</span>' +
          '<span class="status-pill' + (done ? " status-done" : "") + '">' + (done ? "Bestanden ✓" : "Offen") + '</span>' +
        '</div>' +
        '<h2 class="page-title">' + escapeHtml(sub.title) + '</h2>' +
        '<div class="page-sub">Unterthema aus „' + escapeHtml(t.name) + '“</div>' +
      '</div>' +
      '<div class="topic-body-inner" data-mode-root></div>';
    topicView.innerHTML = html;

    renderModePage(topicView.querySelector("[data-mode-root]"), {
      mode: mode || "theorie",
      content: sub,
      topic: t,
      ts: ts,
      governedBySubtopics: false,
      isDone: done,
      flashKnownStore: {},
      notesValue: ts.subNotes[chapterIdx],
      onNotesChange: function (v) { ts.subNotes[chapterIdx] = v; saveState(); },
      onModeChange: function (m) { navigate("#/topic/" + t.id + "/chapter/" + chapterIdx + "?mode=" + m); },
      onManualToggle: function (v) { setSubDone(t, ts, chapterIdx, v); },
      onPass: function () { setSubDone(t, ts, chapterIdx, true); refreshHeader(); }
    });

    wireBreadcrumb();

    function refreshHeader() {
      var pill = topicView.querySelector(".status-pill");
      var isDone = isSubDone(ts, chapterIdx);
      pill.className = "status-pill" + (isDone ? " status-done" : "");
      pill.textContent = isDone ? "Bestanden ✓" : "Offen";
    }
  }

  function wireBreadcrumb() {
    Array.prototype.forEach.call(topicView.querySelectorAll("[data-nav]"), function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        navigate(a.getAttribute("href"));
      });
    });
  }

  // ---------------------------------------------------------------------
  // Router
  // ---------------------------------------------------------------------
  function navigate(hash) { location.hash = hash; }

  function route() {
    var raw = location.hash.replace(/^#\/?/, "");
    var parts = raw.split("?");
    var path = parts[0];
    var query = {};
    if (parts[1]) {
      parts[1].split("&").forEach(function (kv) {
        var pair = kv.split("=");
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
      });
    }
    var segs = path.split("/").filter(Boolean);

    if (segs[0] === "topic" && segs[1]) {
      var chapterIdx = null;
      if (segs[2] === "chapter" && segs[3] != null) chapterIdx = parseInt(segs[3], 10);
      boardView.hidden = true;
      topicView.hidden = false;
      renderTopicPage(segs[1], chapterIdx, query.mode || "theorie");
      window.scrollTo(0, 0);
    } else {
      boardView.hidden = false;
      topicView.hidden = true;
      if (!boardBuilt) {
        boardBuilt = true;
        buildControlsOnce();
        buildBoard();
      } else {
        renderBoardRows();
        updateProgress();
      }
    }
  }

  document.getElementById("homeLink").addEventListener("click", function (e) { e.preventDefault(); navigate("#/"); });
  window.addEventListener("hashchange", route);
  route();
})();
