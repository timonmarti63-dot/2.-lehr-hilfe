(function () {
  var TB_NAMES = window.TB_NAMES;
  var DATA = window.CURRICULUM;

  var STORAGE_KEY = "metallbau-lernplattform-v1";
  var state = {};
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    state = {};
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
  function getTopicState(id) {
    if (!state[id]) state[id] = { done: false, notes: "" };
    return state[id];
  }

  var board = document.getElementById("board");
  var semTabs = document.getElementById("semTabs");
  var tbChips = document.getElementById("tbChips");
  var activeTB = null;
  var searchTerm = "";

  // Build TB filter chips
  var usedTB = [];
  DATA.forEach(function (s) {
    s.topics.forEach(function (t) {
      if (usedTB.indexOf(t.tb) === -1) usedTB.push(t.tb);
    });
  });
  usedTB.sort(function (a, b) {
    return parseInt(a.replace("TB", ""), 10) - parseInt(b.replace("TB", ""), 10);
  });
  var allChip = document.createElement("span");
  allChip.className = "chip active";
  allChip.textContent = "Alle Bereiche";
  allChip.onclick = function () {
    activeTB = null;
    renderFilters();
    applyFilters();
  };
  tbChips.appendChild(allChip);
  usedTB.forEach(function (tb) {
    var c = document.createElement("span");
    c.className = "chip";
    c.textContent = tb + " · " + TB_NAMES[tb];
    c.dataset.tb = tb;
    c.onclick = function () {
      activeTB = activeTB === tb ? null : tb;
      renderFilters();
      applyFilters();
    };
    tbChips.appendChild(c);
  });
  function renderFilters() {
    allChip.className = "chip" + (activeTB === null ? " active" : "");
    Array.prototype.forEach.call(tbChips.querySelectorAll(".chip[data-tb]"), function (c) {
      c.className = "chip" + (c.dataset.tb === activeTB ? " active" : "");
    });
  }

  // Build semester tabs (narrow layout)
  var activeSem = 1;
  DATA.forEach(function (s) {
    var b = document.createElement("button");
    b.textContent = "Sem. " + s.sem;
    b.className = s.sem === activeSem ? "active" : "";
    b.onclick = function () {
      activeSem = s.sem;
      Array.prototype.forEach.call(semTabs.children, function (btn, i) {
        btn.className = i === s.sem - 1 ? "active" : "";
      });
      Array.prototype.forEach.call(board.children, function (col, i) {
        col.className = "col" + (i === s.sem - 1 ? " active" : "");
      });
    };
    semTabs.appendChild(b);
  });

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Render board
  DATA.forEach(function (s, idx) {
    var col = document.createElement("div");
    col.className = "col" + (idx === 0 ? " active" : "");
    col.dataset.sem = s.sem;

    var totalLekt = s.topics.reduce(function (a, t) {
      return a + t.lekt;
    }, 0);

    var head = document.createElement("div");
    head.className = "col-head";
    head.innerHTML =
      '<div class="col-head-top"><span class="col-title">' + s.title + '</span><span class="col-lekt">' + totalLekt + ' Lekt.</span></div>' +
      '<div class="bar tick"><div class="bar-fill" data-semfill></div></div>' +
      '<div class="col-progress-num"><span data-semdone>0 Lekt. erledigt</span><span data-sempct>0%</span></div>';
    col.appendChild(head);

    var body = document.createElement("div");
    body.className = "col-body";

    s.topics.forEach(function (t) {
      var ts = getTopicState(t.id);
      var topicEl = document.createElement("div");
      topicEl.className = "topic" + (ts.done ? " done" : "");
      topicEl.dataset.id = t.id;
      topicEl.dataset.name = t.name.toLowerCase();
      topicEl.dataset.tb = t.tb;

      var headEl = document.createElement("div");
      headEl.className = "topic-head";
      headEl.innerHTML =
        '<span class="check' + (ts.done ? " checked" : "") + '" data-check>&#10003;</span>' +
        '<span class="topic-titles">' +
          '<span class="topic-name">' + escapeHtml(t.name) + '</span>' +
          '<span class="topic-meta"><span class="tb-chip">' + t.tb + '</span><span class="lekt-chip">' + t.lekt + ' Lekt.</span></span>' +
        '</span>' +
        '<span class="chev">&rsaquo;</span>';
      topicEl.appendChild(headEl);

      var bodyEl = document.createElement("div");
      bodyEl.className = "topic-body";
      var html = '<p class="explain">' + escapeHtml(t.explain) + '</p>';
      if (t.formulas) {
        html += '<div class="formula-box">' + escapeHtml(t.formulas) + '</div>';
      }
      html += '<div class="method-box"><span class="method-label">Lernmethode</span><span class="method-text">' + escapeHtml(t.method) + '</span></div>';
      html += '<div class="notes-label"><span>Eigene Notizen &amp; Unterrichtsstoff</span><span class="savehint" data-savehint>gespeichert</span></div>';
      html += '<textarea class="notes" placeholder="Füge hier eigenen Unterrichtsstoff, Merksätze, Links oder Beispiele ein …" data-notes>' + escapeHtml(ts.notes || "") + '</textarea>';
      bodyEl.innerHTML = html;
      topicEl.appendChild(bodyEl);

      // interactions
      headEl.addEventListener("click", function (e) {
        if (e.target.hasAttribute("data-check")) return;
        topicEl.classList.toggle("open");
      });
      var checkEl = headEl.querySelector("[data-check]");
      checkEl.addEventListener("click", function (e) {
        e.stopPropagation();
        ts.done = !ts.done;
        checkEl.classList.toggle("checked", ts.done);
        topicEl.classList.toggle("done", ts.done);
        saveState();
        updateProgress();
      });
      var notesEl = bodyEl.querySelector("[data-notes]");
      var saveHint = bodyEl.querySelector("[data-savehint]");
      var debounceTimer;
      notesEl.addEventListener("input", function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
          ts.notes = notesEl.value;
          saveState();
          saveHint.classList.add("show");
          setTimeout(function () {
            saveHint.classList.remove("show");
          }, 1400);
        }, 400);
      });

      body.appendChild(topicEl);
    });

    col.appendChild(body);
    board.appendChild(col);
  });

  function updateProgress() {
    var grandTotal = 0,
      grandDone = 0;
    Array.prototype.forEach.call(board.children, function (col) {
      var semIdx = parseInt(col.dataset.sem, 10) - 1;
      var s = DATA[semIdx];
      var total = 0,
        done = 0;
      s.topics.forEach(function (t) {
        total += t.lekt;
        if (getTopicState(t.id).done) done += t.lekt;
      });
      grandTotal += total;
      grandDone += done;
      var pct = total ? Math.round((done / total) * 100) : 0;
      col.querySelector("[data-semfill]").style.width = pct + "%";
      col.querySelector("[data-semdone]").textContent = done + " / " + total + " Lekt. erledigt";
      col.querySelector("[data-sempct]").textContent = pct + "%";
    });
    var overallPct = grandTotal ? Math.round((grandDone / grandTotal) * 100) : 0;
    document.getElementById("overallFill").style.width = overallPct + "%";
    document.getElementById("overallPct").textContent = overallPct + "%";
    document.getElementById("overallSub").textContent = grandDone + " / " + grandTotal + " Lekt. erledigt";
  }

  function applyFilters() {
    var term = searchTerm.trim().toLowerCase();
    Array.prototype.forEach.call(board.querySelectorAll(".topic"), function (topicEl) {
      var matchesTB = !activeTB || topicEl.dataset.tb === activeTB;
      var matchesTerm = !term || topicEl.dataset.name.indexOf(term) !== -1;
      topicEl.classList.toggle("hidden", !(matchesTB && matchesTerm));
    });
  }

  document.getElementById("searchInput").addEventListener("input", function (e) {
    searchTerm = e.target.value;
    applyFilters();
  });
  document.getElementById("expandAll").addEventListener("click", function () {
    Array.prototype.forEach.call(board.querySelectorAll(".topic:not(.hidden)"), function (t) {
      t.classList.add("open");
    });
  });
  document.getElementById("collapseAll").addEventListener("click", function () {
    Array.prototype.forEach.call(board.querySelectorAll(".topic"), function (t) {
      t.classList.remove("open");
    });
  });
  document.getElementById("resetProgress").addEventListener("click", function () {
    if (!confirm("Wirklich den gesamten Fortschritt und alle Notizen zurücksetzen? Dies kann nicht rückgängig gemacht werden.")) return;
    state = {};
    saveState();
    location.reload();
  });

  updateProgress();
  renderFilters();
})();
