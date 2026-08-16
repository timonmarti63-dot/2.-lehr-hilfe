// Curriculum data for the Konstrukteurspult learning platform.
// Sourced from the "Themenübersicht Metallbaukonstrukteur/in Zusatzlehre gem. Ausbildungsprogramm".
window.TB_NAMES = {
  TB1: "Arbeitsorganisation & Grundlagen",
  TB2: "Sicherheit & Normen",
  TB3: "Mathematik & Physik",
  TB4: "Offener Bereich",
  TB5: "Bauphysik",
  TB6: "Skizzieren & Konstruktion",
  TB7: "Verbindungstechnik",
  TB8: "Statik & Festigkeitslehre",
  TB9: "Werkstoffe & Beton",
  TB10: "Oberfläche & Ökologie",
  TB11: "Kalkulation",
  TB12: "Beschläge & Wartung"
};

window.CURRICULUM = [
  { sem: 1, title: "Semester 1", topics: [
    { id: "s1-01", name: "Arbeitsabläufe", lekt: 5, tb: "TB1",
      explain: "Systematische Abfolge der Arbeitsschritte in Werkstatt und Montage – von Materialbereitstellung über Zuschnitt und Bearbeitung bis zur Übergabe. Ziel ist es, Wege, Wartezeiten und Fehlerquellen durch eine durchdachte Reihenfolge zu minimieren.",
      method: "Erstelle für 2–3 typische Aufträge dein eigenes Ablaufdiagramm (Post-its oder Flowchart) und vergleiche es mit dem tatsächlichen Vorgehen im Betrieb." },
    { id: "s1-02", name: "Unfallverhütung", lekt: 5, tb: "TB2",
      explain: "Grundsätze der Suva-Unfallverhütung im Metallbau: persönliche Schutzausrüstung, Absturzsicherung, sicherer Umgang mit Maschinen (Sägen, Schweissgeräte, Kran) sowie Verhalten bei Notfällen.",
      method: "Karteikarten mit „Gefahr → Schutzmassnahme“ erstellen und wöchentlich 5 Karten per Spaced Repetition abfragen." },
    { id: "s1-03", name: "Algebra", lekt: 33, tb: "TB3",
      explain: "Grundlage des technischen Rechnens, komplett aufgebaut nach dem Lehrmittel „Algebra – Einführung in die Elemente der Algebra für Berufsschulen“. Unten in 8 Unterthemen gegliedert (eigener Lern-Fahrplan 3.1–3.8): von den Grundrechenarten über ganze Zahlen, Bruchrechnen und Gleichungen bis zu Textaufgaben, Proportionen und Gleichungssystemen – jede mit Theorie, Karteikarten, Aufgaben, Anwendung und Prüfung.",
      formulas: "Grundrechenarten: a+b=b+a  ·  a·b=b·a\nPotenzen: aᵏ · aⁿ = aᵏ⁺ⁿ   aᵏ : aⁿ = aᵏ⁻ⁿ\nKlammern: +(a−b) = a−b     −(a−b) = −a+b\nGleichung lösen: Waage-Prinzip — was links passiert, muss rechts auch passieren.",
      method: "Kapitel für Kapitel durcharbeiten: zuerst Erklärung + Beispiele lesen, dann die Aufgaben selbst rechnen und erst danach die Lösung aufdecken. Formelkarte für Potenz-, Klammer- und Gleichungsregeln griffbereit halten.",
      flashcards: [
        { q: "Was besagt das kommutative Gesetz der Addition?", a: "Die Reihenfolge der Summanden darf vertauscht werden: a + b + c = a + c + b." },
        { q: "Wie multipliziert man zwei Potenzen mit gleicher Basis?", a: "Man addiert die Exponenten und behält die Basis bei: aᵏ · aⁿ = aᵏ⁺ⁿ" },
        { q: "Wie dividiert man zwei Potenzen mit gleicher Basis?", a: "Man subtrahiert die Exponenten und behält die Basis bei: aᵏ : aⁿ = aᵏ⁻ⁿ" },
        { q: "Wie löst man eine Klammer auf, vor der ein Minuszeichen steht?", a: "Man lässt die Klammer weg und kehrt alle Vorzeichen darin um: −(a−b) = −a+b" },
        { q: "Wie löst man eine Klammer auf, vor der ein Pluszeichen steht?", a: "Man lässt die Klammer einfach weg, die Vorzeichen bleiben gleich: +(a−b) = a−b" },
        { q: "Wie multipliziert man zwei Summen (Klammer mal Klammer)?", a: "Jedes Glied der ersten Summe mit jedem Glied der zweiten multiplizieren: (a+b)(c+d) = ac+ad+bc+bd" },
        { q: "Nenne die drei binomischen Formeln.", a: "(a+b)² = a²+2ab+b²  ·  (a−b)² = a²−2ab+b²  ·  (a+b)(a−b) = a²−b²" },
        { q: "Welche zwei Grundregeln gelten beim Umformen von Gleichungen?", a: "1) Auf beiden Seiten darf dieselbe Zahl addiert/subtrahiert werden. 2) Beide Seiten dürfen mit derselben Zahl (≠0) multipliziert/dividiert werden." },
        { q: "Wie addiert man zwei ganze Zahlen mit gleichem Vorzeichen?", a: "Beträge addieren, das gemeinsame Vorzeichen übernehmen." },
        { q: "Wie addiert man zwei ganze Zahlen mit ungleichem Vorzeichen?", a: "Den kleineren Betrag vom grösseren subtrahieren, das Vorzeichen des grösseren Betrags übernehmen." },
        { q: "Was ist der grösste gemeinsame Teiler (ggT)?", a: "Die grösste Zahl, durch die zwei oder mehr Zahlen ohne Rest teilbar sind." },
        { q: "Wie kürzt man einen Bruch?", a: "Zähler und Nenner durch dieselbe Zahl dividieren – der Wert des Bruchs bleibt unverändert." }
      ],
      subtopics: [
        {
          chapter: "3.1", title: "Grundlagen & Rechnen mit natürlichen Zahlen",
          theorySections: [
            { type: "h", text: "1.1 Grössen, Zahlen und Buchstaben" },
            { type: "list", items: ["Physikalische Grösse = Zahlenwert × Einheit. Beispiel: Masse m = 4 kg.", "Der Zahlenwert stammt aus einer Zählung, Messung, Schätzung oder Rechnung.", "Natürliche Zahlen: 0, 1, 2, 3, 4, … Die untere Grenze ist die Null, nach oben ist der Zahlenraum unbegrenzt (∞).", "Bestimmte Zahlen werden mit Ziffern geschrieben (5, 17, 240).", "Unbestimmte Zahlen werden mit Buchstaben geschrieben (a, b, x). Beispiel: Fläche des Rechtecks = a · b.", "Vorzahl (Koeffizient): die Zahl vor einer Buchstabengrösse → 2a, 3a. Die Vorzahl 1 wird nie geschrieben (a bedeutet 1a).", "Wichtigste Regel: Ein Buchstabe kann jede beliebige Zahl bedeuten – innerhalb derselben Rechnung hat er aber immer denselben Wert."] },
            { type: "h", text: "1.2 Die vier Grundrechnungsarten – Fachbegriffe" },
            { type: "table", headers: ["Rechnungsart", "Beispiel", "1. Zahl", "Zeichen", "2. Zahl", "Resultat"], rows: [["Addition", "8 + 5 = 13", "Summand", "plus", "Summand", "Summe"], ["Subtraktion", "8 − 5 = 3", "Minuend", "minus", "Subtrahend", "Differenz"], ["Multiplikation", "8 · 5 = 40", "Faktor", "mal", "Faktor", "Produkt"], ["Division", "15 : 5 = 3", "Dividend", "durch", "Divisor", "Quotient"]] },
            { type: "h", text: "1.3 Addition" },
            { type: "p", text: "a) Kommutatives Gesetz: Die Reihenfolge der Summanden darf beliebig verändert werden." },
            { type: "code", text: "5 + 7 + 9 + 11 = 5 + 11 + 7 + 9\na + b + c + d  = a + d + b + c" },
            { type: "p", text: "b) Nur Gleichartiges darf addiert werden. «Äpfel + Birnen» geht nicht." },
            { type: "code", text: "3 kg + 5 kg = 8 kg\n5a + 3b + 6a + 9b = 11a + 12b" },
            { type: "note", tone: "tip", text: "Merksatz: Gleiche Buchstaben = gleiche Sorte. Man addiert nur die Vorzahlen, der Buchstabe bleibt stehen." },
            { type: "h", text: "1.4 Subtraktion" },
            { type: "list", items: ["In den natürlichen Zahlen ist die Subtraktion nur möglich, wenn der Minuend grösser ist als der Subtrahend.", "Die Reihenfolge darf verändert werden – aber jede Zahl behält ihr Zeichen: Minuend bleibt Minuend, Subtrahend bleibt Subtrahend."] },
            { type: "code", text: "135 − 68 + 238 − 75 = 135 + 238 − 68 − 75 = 373 − 143 = 230\na − b + c = a + c − b" },
            { type: "h", text: "1.5 Multiplikation" },
            { type: "p", text: "a) Kommutatives Gesetz: Die Reihenfolge der Faktoren ist beliebig." },
            { type: "code", text: "15 · 13 · 20 = 20 · 15 · 13\na · b · c = c · b · a" },
            { type: "p", text: "b) Ist ein einziger Faktor gleich null, so ist das ganze Produkt null." },
            { type: "code", text: "3 · 2d · 6u · 0 = 0" },
            { type: "note", tone: "tip", text: "Bei Buchstaben werden die Vorzahlen multipliziert und die Buchstaben aneinandergehängt: 7a · 5b · 3c = 105abc" },
            { type: "h", text: "1.6 Division" },
            { type: "p", text: "a) Die Division ist die Umkehrung der Multiplikation. Eine Vertauschung von Dividend und Divisor ist nicht erlaubt." },
            { type: "code", text: "48 kg : 8 = 6 kg      Probe: 6 kg · 8 = 48 kg\n72ab : 12a = 6b      Probe: 12a · 6b = 72ab" },
            { type: "p", text: "b) Bruchform: In technischen Lehrbüchern wird die Division meist als Bruch geschrieben." },
            { type: "code", text: "45/5 = 9        Zähler / Nenner = Bruchwert" },
            { type: "h", text: "1.7 Potenzen" },
            { type: "p", text: "Ein Produkt aus lauter gleichen Faktoren wird als Potenz geschrieben." },
            { type: "code", text: "5 · 5 · 5 · 5 = 5⁴          a · a · a · a = a⁴" },
            { type: "list", items: ["Grundzahl / Basis = die Zahl, die multipliziert wird (5 bzw. a)", "Exponent = gibt an, wie oft die Basis als Faktor gesetzt ist (4)"] },
            { type: "table", headers: ["Regel", "Formel", "Beispiel"], rows: [["Addieren/Subtrahieren", "nur bei gleicher Basis UND gleichem Exponent → nur Vorzahlen verrechnen", "3a² + 5b² + 6a² − 3b² = 9a² + 2b²"], ["Multiplizieren", "aᵐ · aⁿ = a^(m+n)", "a³ · a⁴ = a⁷"], ["Dividieren", "aᵐ : aⁿ = a^(m−n)", "6a⁵ : 2a³ = 3a²"]] },
            { type: "note", tone: "warn", text: "Achtung Stolperfalle: a² + a³ lässt sich nicht zusammenfassen (verschiedene Exponenten). a² · a³ = a⁵ dagegen schon." },
            { type: "code", text: "Zehnerpotenzen (Technik):\n1 000 000 = 10⁶\n7 000 000 = 7 · 10⁶\n25 000 000 000 = 25 · 10⁹" },
            { type: "h", text: "1.8 Klammern" },
            { type: "p", text: "Durch Klammern werden mehrere Grössen zu einer Grösse zusammengefasst." },
            { type: "p", text: "a) Plus vor der Klammer → Klammer kann einfach weggelassen werden" },
            { type: "code", text: "a + (b + c) = a + b + c\na + (b − c) = a + b − c" },
            { type: "p", text: "b) Minus vor der Klammer → Klammer weglassen UND alle Zeichen in der Klammer umkehren" },
            { type: "code", text: "a − (b + c) = a − b − c\na − (b − c) = a − b + c" },
            { type: "p", text: "c) Multiplikation eines Klammerausdrucks → jedes Glied multiplizieren" },
            { type: "code", text: "a(b + c) = ab + ac\n7(5a + 6b − 7c) = 35a + 42b − 49c" },
            { type: "p", text: "d) Division eines Klammerausdrucks → jedes Glied dividieren" },
            { type: "code", text: "(a + b) : c = a:c + b:c\n(125xyz + 75xz − 25x) : 25x = 5yz + 3z − 1" },
            { type: "p", text: "e) Mehrfache Klammern: Zuerst die inneren Klammern ( ), erst nachher die äusseren [ ] auflösen." }
          ],
          flashcards: [
            { q: "Woraus besteht eine physikalische Grösse?", a: "Aus dem Produkt «Zahlenwert × Einheit», z. B. m = 4 kg." },
            { q: "Was ist eine Vorzahl und wann wird sie nicht geschrieben?", a: "Die Zahl vor einer Buchstabengrösse (z. B. die 2 in 2a). Die Vorzahl 1 wird nie geschrieben – a bedeutet 1a." },
            { q: "Wie heissen die Glieder und das Resultat einer Subtraktion?", a: "Minuend − Subtrahend = Differenz." },
            { q: "Wie heissen die Glieder und das Resultat einer Division?", a: "Dividend : Divisor = Quotient." },
            { q: "Welche Grössen dürfen addiert werden?", a: "Nur gleichartige Grössen (gleiche Einheit bzw. gleicher Buchstabenteil). Addiert werden dabei nur die Vorzahlen: 5a + 6a = 11a." },
            { q: "Wann ist ein Produkt gleich null?", a: "Sobald mindestens ein einziger Faktor null ist." },
            { q: "Darf man bei der Subtraktion die Reihenfolge vertauschen?", a: "Ja, aber jedes Glied behält sein Zeichen: a − b + c = a + c − b." },
            { q: "Darf man bei der Division Dividend und Divisor vertauschen?", a: "Nein. Die Division ist nicht kommutativ." },
            { q: "Wie heissen die beiden Teile einer Potenz aⁿ?", a: "a = Grundzahl (Basis), n = Exponent (gibt an, wie oft a als Faktor gesetzt wird)." },
            { q: "Regel für die Multiplikation von Potenzen mit gleicher Basis?", a: "Exponenten addieren, Basis beibehalten: aᵐ · aⁿ = a^(m+n)." },
            { q: "Regel für die Division von Potenzen mit gleicher Basis?", a: "Exponenten subtrahieren, Basis beibehalten: aᵐ : aⁿ = a^(m−n)." },
            { q: "Unter welcher Bedingung dürfen Potenzen addiert oder subtrahiert werden?", a: "Nur bei gleicher Grundzahl und gleichem Exponenten; verrechnet werden dann nur die Vorzahlen." },
            { q: "Was passiert beim Auflösen einer Klammer, vor der ein Minuszeichen steht?", a: "Die Klammer fällt weg und alle Zeichen im Innern werden umgekehrt: a − (b − c) = a − b + c." },
            { q: "Wie multipliziert man einen Klammerausdruck mit einer Zahl?", a: "Jedes einzelne Glied der Klammer wird multipliziert: a(b + c) = ab + ac." },
            { q: "In welcher Reihenfolge löst man mehrfache Klammern auf?", a: "Zuerst die inneren runden Klammern ( ), danach die äusseren eckigen Klammern [ ]." },
            { q: "Schreibe 25 000 000 000 als Zehnerpotenz.", a: "25 · 10⁹." }
          ],
          exercises: [
            { group: "Block A – Gleichartige Glieder zusammenfassen", task: "7a + 12b + 15a + 9b =", answer: "22a + 21b" },
            { task: "45m − 18m + 27n − 12n =", answer: "27m + 15n" },
            { task: "8x + 14y − 3x + 6y − 2x =", answer: "3x + 20y" },
            { task: "24p − 9q − 15p + 21q − 5p =", answer: "4p + 12q" },
            { task: "16c + 8d + 23c − 5d + 9c =", answer: "48c + 3d" },
            { group: "Block B – Multiplikation und Division", task: "6a · 7b · 2c =", answer: "84abc" },
            { task: "12x · 5y · 0 =", answer: "0" },
            { task: "9r · 2s · 4t =", answer: "72rst" },
            { task: "48ab : 6a =", answer: "8b" },
            { task: "72xyz : 9xz =", answer: "8y" },
            { task: "144rst / (12t) =", answer: "12rs" },
            { group: "Block C – Potenzen", task: "Schreibe kürzer: 5 · 5 · 5 · 5 · 5 · 5 =", answer: "5⁶" },
            { task: "4a³ · 5a² =", answer: "20a⁵" },
            { task: "24b⁷ : 6b³ =", answer: "4b⁴" },
            { task: "7c² + 12c² − 5c² =", answer: "14c²" },
            { task: "3x² + 5x³ + 8x² − 2x³ =", answer: "11x² + 3x³" },
            { task: "20s²t² : 4st =", answer: "5st" },
            { task: "Schreibe als Zehnerpotenz: 4 000 000 =", answer: "4 · 10⁶" },
            { group: "Block D – Klammern", task: "15a + (8a − 3b) =", answer: "23a − 3b" },
            { task: "42m − (17m + 9n) =", answer: "25m − 9n" },
            { task: "(25c + 14d) − (12c − 6d) =", answer: "13c + 20d" },
            { task: "9(4x + 7y) =", answer: "36x + 63y" },
            { task: "7a²b(9a² + 15ab + 8b²) =", answer: "63a⁴b + 105a³b² + 56a²b³" },
            { task: "(36a² + 24ab) : 12a =", answer: "3a + 2b" },
            { task: "(50xy + 15xz + 10x) : 5x =", answer: "10y + 3z + 2" },
            { task: "8[5a − (2a + 3b)] =", answer: "24a − 24b" },
            { task: "20a − [8a + (5a − 3b)] =", answer: "7a + 3b" },
            { group: "Block E – Vereinfachen und einsetzen", task: "6a + 15b − 2a + 5b für a = 4; b = 3", answer: "vereinfacht: 4a + 20b → eingesetzt: 4·4 + 20·3 = 16 + 60 = 76" },
            { task: "5(m + n) − 3(m − n) für m = 10; n = 4", answer: "vereinfacht: 2m + 8n → eingesetzt: 2·10 + 8·4 = 20 + 32 = 52" },
            { task: "(h/3)·(R² + R·r + r²) für h = 9; R = 4; r = 2", answer: "R²+Rr+r² = 16+8+4 = 28 → 9/3=3 → 3·28 = 84" },
            { task: "(28m² − 35mn + 70m) : 7m für m = 8; n = 4", answer: "vereinfacht: 4m − 5n + 10 → eingesetzt: 4·8 − 5·4 + 10 = 32 − 20 + 10 = 22" },
            { group: "Block F – Anwendung Werkstatt", task: "Der Umfang eines Rechtecks ist U = 2a + 2b. Vereinfache die Formel durch Ausklammern und berechne U für a = 35 mm und b = 18 mm.", answer: "U = 2(a+b) → 2·(35+18) = 2·53 = 106 mm" },
            { task: "Von einem Stab werden 8 Stücke von je 45 mm Länge abgeschnitten. Pro Schnitt gehen 1,5 mm Material verloren, das Reststück misst 32 mm. Stelle die Formel für die Gesamtlänge L auf und berechne sie.", answer: "L = n·s + n·v + r = 8·45 + 8·1,5 + 32 = 360 + 12 + 32 = 404 mm" }
          ],
          applications: [
            { task: "Beispiel 1 – Gleichartige Glieder ordnen: 12a + 7b + 9a − 3b =", answer: "1) Gleiche Buchstaben gruppieren: (12a+9a) + (7b−3b)\n2) Nur Vorzahlen verrechnen\n3) Ergebnis: 21a + 4b" },
            { task: "Beispiel 2 – Potenzen multiplizieren: 15a⁴b² · 4a²b³ =", answer: "1) Vorzahlen: 15·4=60\n2) Basen: a⁴·a²=a⁶ und b²·b³=b⁵\n3) Ergebnis: 60a⁶b⁵" },
            { task: "Beispiel 3 – Potenzen dividieren: 90x⁵y³ : 15x²y =", answer: "1) Vorzahlen: 90:15=6\n2) Basen: x⁵:x²=x³ und y³:y¹=y²\n3) Ergebnis: 6x³y²\nProbe: 15x²y · 6x³y² = 90x⁵y³ ✔" },
            { task: "Beispiel 4 – Minusklammer auflösen: 45x − (18x − 12y) + (7x − 5y) =", answer: "1) Minus-Klammer: Zeichen umkehren → 45x−18x+12y\n2) Plus-Klammer: weglassen → +7x−5y\n3) Zusammenfassen: 45x−18x+7x + 12y−5y = 34x + 7y" },
            { task: "Beispiel 5 – Mehrfache Klammern: 20a − [8a + (5a − 3b)] =", answer: "1) Innere Klammer (Plus davor, weglassen): 20a − [8a+5a−3b]\n2) Zusammenfassen in [ ]: 20a − [13a−3b]\n3) Minus vor [ ]: Zeichen umkehren: 20a−13a+3b\n4) Ergebnis: 7a + 3b" },
            { task: "Beispiel 6 – Klammerausdruck dividieren: (144e³f² + 108e²f² + 60ef) : 12ef =", answer: "144e³f²:12ef=12e²f ; 108e²f²:12ef=9ef ; 60ef:12ef=5\nErgebnis: 12e²f + 9ef + 5\nProbe: 12ef·(12e²f+9ef+5) = 144e³f²+108e²f²+60ef ✔" },
            { task: "Beispiel 7 – Praxis Konstruktion: In einen Flacheisenstab von 860 mm Länge werden 10 Löcher gebohrt, Lochabstand (Teilung) 85 mm. Wie gross sind die beiden Endabstände?", answer: "1) 10 Löcher → 9 Zwischenräume (n−1)\n2) Lochstrecke: 9·85 = 765 mm\n3) Restlänge: 860−765 = 95 mm\n4) Auf beide Enden verteilen: 95:2 = 47,5 mm\nFormel: e = [L−(n−1)·t] / 2" }
          ],
          examOpen: { timeMin: 30, totalPoints: 20, passPoints: 12, parts: [
            { title: "Teil 1 – Theorie (5 Punkte)", questions: [
                { q: "Wie heissen die drei Glieder einer Division?", points: 1, answer: "Dividend : Divisor = Quotient" },
                { q: "Nenne die Bedingung, unter der zwei Potenzen addiert werden dürfen.", points: 1, answer: "Gleiche Basis UND gleicher Exponent (dann werden nur die Vorzahlen addiert)" },
                { q: "Formuliere die Regel für das Auflösen einer Klammer, vor der ein Minuszeichen steht.", points: 1, answer: "Klammer weglassen und alle Vorzeichen im Innern umkehren" },
                { q: "Was passiert mit einem Produkt, wenn ein Faktor null ist?", points: 1, answer: "Das ganze Produkt wird null" },
                { q: "Was bedeutet die Vorzahl in 7x, und welche Vorzahl steht unsichtbar bei y?", points: 1, answer: "7 ist die Vorzahl (Koeffizient) von x; bei y steht unsichtbar die Vorzahl 1" }
              ] },
            { title: "Teil 2 – Rechnen (9 Punkte)", questions: [
                { q: "18a + 25b − 7a + 14b =", points: 1, answer: "11a + 39b" },
                { q: "8r · 3s · 5t =", points: 1, answer: "120rst" },
                { q: "96a³b² : 12ab =", points: 1, answer: "8a²b" },
                { q: "9m² + 14m³ − 4m² + 6m³ =", points: 1, answer: "5m² + 20m³" },
                { q: "(42c + 28d) − (15c − 12d) =", points: 1, answer: "27c + 40d" },
                { q: "6x(4x + 9y − 3) =", points: 1, answer: "24x² + 54xy − 18x" },
                { q: "(75p²q + 45pq² − 15pq) : 15pq =", points: 1, answer: "5p + 3q − 1" },
                { q: "30k − [12k + (8k − 5l)] =", points: 2, answer: "innere Klammer (Plus davor, stehen lassen): 12k+8k−5l=20k−5l → 30k−[20k−5l] = 30k−20k+5l = 10k + 5l" }
              ] },
            { title: "Teil 3 – Einsetzen und Anwenden (6 Punkte)", questions: [
                { q: "Vereinfache 4(2a + 3b) − 2(3a − b) und berechne den Wert für a = 6 und b = 5.", points: 2, answer: "vereinfacht: 8a+12b−6a+2b = 2a+14b → eingesetzt: 2·6+14·5 = 12+70 = 82" },
                { q: "Berechne (a + b)/2 · h für a = 18; b = 14; h = 8.", points: 2, answer: "(18+14)/2 · 8 = 32/2 · 8 = 16·8 = 128" },
                { q: "Ein Flacheisen von 1200 mm Länge erhält 6 Löcher mit einer Teilung von 180 mm. Berechne die beiden gleich grossen Endabstände.", points: 2, answer: "5 Zwischenräume (n−1) · 180 = 900 mm Lochstrecke → Restlänge 1200−900=300 mm → je Ende 300:2 = 150 mm" }
              ] }
            ] }
        },
        {
          chapter: "3.2", title: "Rechnen mit ganzen Zahlen (Vorzeichen)",
          explain: "Der Zahlenraum wird um die negativen Zahlen erweitert. Zwei ganze Zahlen mit gleichem Vorzeichen werden addiert, indem man ihre Beträge addiert und das gemeinsame Vorzeichen übernimmt. Bei ungleichem Vorzeichen wird der kleinere Betrag vom grösseren subtrahiert; das Ergebnis erhält das Vorzeichen des grösseren Betrags. Subtraktion = Addition mit umgekehrtem Vorzeichen des Subtrahenden.\n\nEine algebraische Summe ist eine Vereinigung positiver und negativer Glieder. Additionszeichen und Klammern mit + davor können weggelassen werden. Steht vor einer Klammer ein Minuszeichen, werden beim Weglassen alle Vorzeichen darin umgekehrt. Bei mehrfachen Klammern löst man zuerst die inneren ( ), dann die äusseren [ ] auf.\n\nZwei ganze Zahlen mit gleichem Vorzeichen ergeben ein positives, mit verschiedenem Vorzeichen ein negatives Produkt. Für häufig wiederkehrende Klammerprodukte gibt es die binomischen Formeln – sie lohnen sich auswendig, weil sie im Metallbau bei Flächen- und Kraftberechnungen ständig vorkommen.\n\nZwei ganze Zahlen mit gleichem Vorzeichen ergeben einen positiven, mit verschiedenem Vorzeichen einen negativen Quotienten. Ein Klammerausdruck wird durch eine Zahl dividiert, indem jedes Glied einzeln dividiert wird. Lässt sich der Dividend faktorisieren (z.B. als binomische Formel), kann oft direkt gekürzt werden.",
          examples: [
            { problem: "(+2) + (−6)", solution: "= −4  (ungleiche Vorzeichen: 6−2=4, Vorzeichen des grösseren Betrags −)" },
            { problem: "(−7) − (−10)", solution: "= −7 + 10 = +3" },
            { problem: "(+16) + (−13) + (+15) + (−27) + (+14)", solution: "= 16 − 13 + 15 − 27 + 14 = 5" },
            { problem: "15a + [13a − (20a + 9a)]", solution: "innere Klammer: 20a+9a=29a → 13a−29a=−16a → 15a + (−16a) = −a" },
            { problem: "(a + b)²", solution: "= a² + 2ab + b²" },
            { problem: "(a − b)(a + b)", solution: "= a² − b²  (Differenz der Quadrate)" },
            { problem: "(24a − 16b) : 8", solution: "= 3a − 2b   Probe: 8 · (3a − 2b) = 24a − 16b" }
          ],
          exercises: [
            { task: "(+14) + (+18) =", answer: "+32" },
            { task: "(−15) + (−25) =", answer: "−40" },
            { task: "(+18) − (+25) =", answer: "−7" },
            { task: "(−25) − (+13) =", answer: "−38" },
            { task: "(+40b) − (−50b) =", answer: "90b" },
            { task: "(5x − 3y) + (6x + 2y) =", answer: "11x − y" },
            { task: "(+5a) + (+7a) − (+12a) − (+13a) + (−9a) =", answer: "−22a" },
            { task: "15a + [13a − (20a + 9a)] =", answer: "−a" },
            { task: "(a + 2)² =", answer: "a² + 4a + 4" },
            { task: "(5c − 6)² =", answer: "25c² − 60c + 36" },
            { task: "48 · 32 = , löse mit dem Kunstgriff (40+8)(40−8)", answer: "40² − 8² = 1600 − 64 = 1536" },
            { task: "x² − y² als Produkt schreiben", answer: "= (x + y)(x − y)" },
            { task: "6ab : (−2a) =", answer: "−3b" },
            { task: "a³ : a² =", answer: "a" },
            { task: "(a² − b²) : (a + b) =", answer: "a² − b² = (a+b)(a−b) → gekürzt bleibt: a − b" }
          ],
          applications: [
            { task: "Die Temperatur in der Werkstatt beträgt morgens −3°C. Bis Mittag steigt sie um 11°C. Welche Temperatur herrscht dann?", answer: "−3 + 11 = 8°C" },
            { task: "Ein Kontostand beginnt bei 0. Es gibt Einnahmen von +450, Ausgaben von −180 und −95 sowie eine Einnahme von +60. Wie hoch ist der Kontostand als algebraische Summe?", answer: "450−180−95+60 = 235" },
            { task: "Ein Blech mit Seitenlänge (a+3) cm soll quadratisch zugeschnitten werden. Wie gross ist die Fläche als ausmultiplizierter Ausdruck?", answer: "(a+3)² = a² + 6a + 9" },
            { task: "Ein Gesamtgewicht von (24a−16b) kg soll auf 8 gleiche Kisten verteilt werden. Wie viel kg enthält jede Kiste?", answer: "(24a−16b) : 8 = 3a − 2b kg" }
          ],
          exam: [
            { q: "(+2) + (−6) = ?", options: ["+8", "-4", "+4", "-8"], correct: 1 },
            { q: "Wie addiert man zwei ganze Zahlen mit ungleichem Vorzeichen?", options: ["Beträge addieren, kleineres Vorzeichen nehmen", "Kleineren Betrag vom grösseren abziehen, Vorzeichen des grösseren übernehmen", "Beide Beträge multiplizieren", "Ist nicht möglich"], correct: 1 },
            { q: "(−7) − (−10) = ?", options: ["-17", "+3", "-3", "+17"], correct: 1 },
            { q: "Was versteht man unter einer algebraischen Summe?", options: ["Nur positive Zahlen", "Eine Vereinigung positiver und negativer Glieder", "Nur Multiplikationen", "Eine Bruchrechnung"], correct: 1 },
            { q: "15a + [13a − (20a + 9a)] = ?", options: ["-a", "37a", "17a", "-17a"], correct: 0 },
            { q: "Bei mehrfachen Klammern löst man zuerst auf:", options: ["Die äusseren [ ]", "Die inneren ( )", "Beide gleichzeitig", "Egal welche zuerst"], correct: 1 },
            { q: "(a+b)² = ?", options: ["a²+b²", "a²+2ab+b²", "a²-2ab+b²", "2a+2b"], correct: 1 },
            { q: "(a−b)(a+b) = ?", options: ["a²-b²", "a²+b²", "a²-2ab-b²", "2ab"], correct: 0 },
            { q: "48 · 32 lässt sich elegant lösen als:", options: ["(40+8)(40-8)", "(50-2)(30+2)", "48+32", "48²-32²"], correct: 0 },
            { q: "(a²−b²) : (a+b) = ?", options: ["a-b", "a+b", "a²-b", "ab"], correct: 0 },
            { q: "Zwei Zahlen mit verschiedenem Vorzeichen ergeben bei der Division:", options: ["immer positiv", "immer negativ", "0", "unmöglich"], correct: 1 },
            { q: "a³ : a² = ?", options: ["a", "a⁵", "a⁶", "1"], correct: 0 }
          ]
        },
        {
          chapter: "3.3", title: "Gemeinsame Teiler, Vielfache, Ausklammern",
          explain: "Primzahlen sind nur durch 1 und sich selbst teilbar. Der grösste gemeinsame Teiler (ggT) zweier Zahlen ist die grösste Zahl, durch die beide ohne Rest teilbar sind – man zerlegt beide in Primfaktoren und nimmt die gemeinsamen Faktoren in kleinster Anzahl. Das kleinste gemeinsame Vielfache (kgV) bildet man analog, aber mit den Faktoren in grösster vorkommender Anzahl.",
          examples: [
            { problem: "ggT von 8a²b und 12a²b²c", solution: "8a²b = 2·2·2·a·a·b ; 12a²b²c = 2·2·3·a·a·b·b·c → gemeinsam: 2·2·a·a·b = 4a²b" },
            { problem: "kgV von 28 und 36", solution: "28 = 2²·7 ; 36 = 2²·3² → kgV = 2²·3²·7 = 252" }
          ],
          exercises: [
            { task: "ggT von 125 und 75 =", answer: "25" },
            { task: "ggT von 84 und 96 =", answer: "12" },
            { task: "kgV von 10, 15 und 20 =", answer: "60" },
            { task: "kgV von 12, 18 und 24 =", answer: "72" }
          ],
          applications: [
            { task: "Zwei Stahlprofile sollen ohne Rest in gleich lange Stücke von maximaler Länge geschnitten werden: eines ist 84 cm, das andere 96 cm lang. Wie lang werden die Stücke maximal?", answer: "ggT(84,96) = 12 → 12 cm" }
          ],
          exam: [
            { q: "Der ggT von 125 und 75 ist:", options: ["15", "25", "5", "50"], correct: 1 },
            { q: "Das kgV von 12, 18 und 24 ist:", options: ["36", "48", "72", "144"], correct: 2 },
            { q: "Primzahlen sind teilbar durch:", options: ["Jede Zahl", "Nur 1 und sich selbst", "Nur gerade Zahlen", "Nur 2 und 3"], correct: 1 }
          ]
        },
        {
          chapter: "3.4", title: "Rechnen mit Brüchen (rationale Zahlen)",
          explain: "Bei echten Brüchen ist der Zähler kleiner als der Nenner, bei unechten grösser. Erweitern heisst: Zähler und Nenner mit derselben Zahl multiplizieren – der Wert bleibt gleich. Kürzen heisst: beide durch dieselbe Zahl dividieren. Ein Bruch ist positiv, wenn Zähler und Nenner gleiches Vorzeichen haben, sonst negativ; der Nenner wird immer positiv geschrieben.\n\nGleichnamige Brüche werden addiert/subtrahiert, indem man die Zähler addiert/subtrahiert und den Nenner beibehält; ungleichnamige werden zuerst gleichnamig gemacht (Hauptnenner). Brüche werden multipliziert, indem Zähler mit Zähler und Nenner mit Nenner multipliziert werden. Durch einen Bruch dividiert man, indem man mit dem umgekehrten (reziproken) Bruch multipliziert.",
          examples: [
            { problem: "1/2 mit 3 erweitern", solution: "= 3/6" },
            { problem: "8/12 kürzen", solution: "durch 4: = 2/3" },
            { problem: "5/x + 3/y", solution: "= (5y + 3x) / xy" },
            { problem: "3/4 : 7/10", solution: "= 3/4 · 10/7 = 30/28 = 15/14" }
          ],
          exercises: [
            { task: "Kürze: 8/24", answer: "1/3" },
            { task: "Kürze: 24/(−80)", answer: "−3/10" },
            { task: "Erweitere 2/5 auf den Nenner 20", answer: "8/20" },
            { task: "1/2 + 1/3 + 1/4 =", answer: "13/12 (= 1 1/12)" },
            { task: "3/15 · 4/25 · 5/24 =", answer: "1/150" },
            { task: "252/121 : 12 =", answer: "21/121" },
            { task: "15a² : (2/a) =", answer: "15a³/2" }
          ],
          applications: [
            { task: "Von einer Materialrolle mit 24 m Länge werden 8/24 verbraucht. Wie viel Meter wurden verbraucht, wenn du den Bruch zuerst kürzt?", answer: "8/24 = 1/3 → 1/3 von 24 m = 8 m" },
            { task: "Drei Teilbestellungen benötigen je 1/2, 1/3 und 1/4 einer Materialrolle. Wie viele ganze Rollen müssen mindestens bestellt werden?", answer: "1/2+1/3+1/4 = 13/12 = 1 1/12 Rollen → 2 Rollen bestellen" }
          ],
          exam: [
            { q: "Bei einem echten Bruch ist der Zähler:", options: ["grösser als der Nenner", "kleiner als der Nenner", "gleich dem Nenner", "immer 1"], correct: 1 },
            { q: "24/(−80) gekürzt ergibt:", options: ["3/10", "-3/10", "-4/15", "3/8"], correct: 1 },
            { q: "Erweitern bedeutet:", options: ["Zähler und Nenner durch dieselbe Zahl dividieren", "Zähler und Nenner mit derselben Zahl multiplizieren", "Nur den Zähler verändern", "Den Bruch umdrehen"], correct: 1 },
            { q: "Brüche werden multipliziert, indem man:", options: ["Zähler und Nenner addiert", "Zähler mit Zähler, Nenner mit Nenner multipliziert", "Nur die Zähler multipliziert", "Über Kreuz addiert"], correct: 1 },
            { q: "Eine Division durch einen Bruch macht man durch:", options: ["Multiplikation mit dem gleichen Bruch", "Multiplikation mit dem reziproken (umgekehrten) Bruch", "Addition des Kehrwerts", "Division der Nenner"], correct: 1 },
            { q: "1/2 + 1/3 + 1/4 = ?", options: ["3/9", "13/12", "1/9", "6/12"], correct: 1 }
          ]
        },
        {
          chapter: "3.5", title: "Gleichungen 1. Grades, eine Unbekannte",
          explain: "Eine Gleichung verbindet zwei Ausdrücke mit dem Gleichheitszeichen. Sie darf umgeformt werden, ohne die Gleichheit zu stören: 1) auf beiden Seiten darf dieselbe Zahl addiert oder subtrahiert werden, 2) beide Seiten dürfen mit derselben Zahl (≠0) multipliziert oder dividiert werden. Ziel ist, die Unbekannte allein auf einer Seite zu isolieren – zum Schluss immer die Probe machen.\n\nBei zusammengesetzten Gleichungen wird zuerst jede Klammer aufgelöst, dann werden gleichartige Glieder auf jeder Seite zusammengefasst, bevor die Unbekannte isoliert wird. Bei Bruchgleichungen bringt man zuerst alle Glieder auf den gemeinsamen Nenner (Hauptnenner) und multipliziert die ganze Gleichung damit – danach ist sie bruchfrei und wird wie gewohnt gelöst.\n\nNeben der Unbekannten (meist x) kommen weitere Buchstaben als bekannte Grössen vor. Es gelten dieselben Umformungsregeln wie bei Zahlengleichungen; das Ergebnis ist ein Term in den übrigen Buchstaben statt einer einzelnen Zahl.",
          examples: [
            { problem: "x + 7 = 10", solution: "x = 10 − 7 = 3   Probe: 3 + 7 = 10" },
            { problem: "5x − 8 = 12", solution: "5x = 20 → x = 4   Probe: 5·4−8=12" },
            { problem: "(x − 3)(x + 5) = x² + 25", solution: "x²+2x−15 = x²+25 → das x² fällt weg → 2x = 40 → x = 20" },
            { problem: "x/5 + x/3 + 2 = 10", solution: "3x/15 + 5x/15 = 8 → 8x/15 = 8 → 8x = 120 → x = 15" },
            { problem: "x + a = b", solution: "x = b − a" },
            { problem: "ax − b = cx + d", solution: "ax − cx = b + d → x(a−c) = b+d → x = (b+d)/(a−c)" }
          ],
          exercises: [
            { task: "x + 5 = 14", answer: "x = 9" },
            { task: "15g = 75", answer: "g = 5" },
            { task: "4a + a = 20", answer: "a = 4" },
            { task: "(5x + 1) + (2x + 3) = 18", answer: "7x + 4 = 18 → 7x = 14 → x = 2" },
            { task: "(a + 3)² + (a + 2)² = (a + 5)² + (a + 1)²", answer: "2a²+10a+13 = 2a²+12a+26 → −13 = 2a → a = −6,5" },
            { task: "x/3 + x/4 = 42", answer: "7x/12 = 42 → 7x = 504 → x = 72" },
            { task: "1/g + 1/(2g) = 3", answer: "3/(2g) = 3 → 3 = 6g → g = 0,5" },
            { task: "x + r = s", answer: "x = s − r" },
            { task: "ax + bx = c", answer: "x(a+b) = c → x = c/(a+b)" },
            { task: "x/a = 1", answer: "x = a" }
          ],
          applications: [
            { task: "Ein Materialrest von x kg plus 5,5 kg neu gelieferter Ware ergibt total 20 kg auf Lager. Wie viel kg Rest waren vorhanden?", answer: "x + 5,5 = 20 → x = 14,5 kg" },
            { task: "Zwei Materiallängen x/3 m und x/4 m ergeben zusammen 42 m Bedarf für ein Projekt. Wie lang ist x?", answer: "x/3 + x/4 = 42 → 7x/12 = 42 → x = 72 m" },
            { task: "Die Formel für die Fläche eines Rechtecks lautet A = a · b. Löse nach b auf, um bei bekannter Fläche A und Länge a die Breite zu berechnen.", answer: "b = A / a" }
          ],
          exam: [
            { q: "Welche Umformung ist bei Gleichungen erlaubt?", options: ["Nur Addition", "Addition/Subtraktion und Multiplikation/Division derselben Zahl auf beiden Seiten", "Nur Multiplikation", "Beliebige einseitige Änderung"], correct: 1 },
            { q: "x + 5 = 14 → x = ?", options: ["19", "9", "-9", "5"], correct: 1 },
            { q: "15g = 75 → g = ?", options: ["5", "15", "60", "90"], correct: 0 },
            { q: "Bei Bruchgleichungen bringt man zuerst alle Glieder auf:", options: ["Null", "Den gemeinsamen Nenner (Hauptnenner)", "Eine Potenz", "Den kleinsten Zähler"], correct: 1 },
            { q: "x/3 + x/4 = 42 → x = ?", options: ["12", "42", "72", "126"], correct: 2 },
            { q: "(x−3)(x+5) = x² + 25 → x = ?", options: ["8", "15", "20", "25"], correct: 2 },
            { q: "x + a = b, aufgelöst nach x:", options: ["x=a-b", "x=b-a", "x=a+b", "x=b/a"], correct: 1 },
            { q: "ax + bx = c, aufgelöst nach x:", options: ["x=c-a-b", "x=c/(a+b)", "x=c·(a+b)", "x=(a+b)/c"], correct: 1 },
            { q: "x/a = 1, aufgelöst nach x:", options: ["x=1", "x=a", "x=1/a", "x=0"], correct: 1 }
          ]
        },
        {
          chapter: "3.6", title: "Angewandte Aufgaben (Textaufgaben)",
          explain: "Vorgehen in 4 Schritten: 1) Wahl der Unbekannten – welche gesuchte Grösse wird x genannt? 2) Aufstellung der Gleichung aus dem Text. 3) Auflösung der Gleichung. 4) Probe – erfüllt das Ergebnis die Bedingungen der Aufgabe?",
          examples: [
            { problem: "Ich denke mir eine Zahl, zähle 6 dazu und verdopple die Summe. Das ergibt gleich viel, wie wenn ich vom Dreifachen der Zahl 10 subtrahiere. Wie heisst die Zahl?", solution: "Gleichung: (x+6)·2 = 3x−10 → 2x+12 = 3x−10 → x = 22   Probe: (22+6)·2=56 ; 3·22−10=56" }
          ],
          exercises: [
            { task: "Welche Zahl muss man zu 14,5 addieren, um 20 zu erhalten?", answer: "x + 14,5 = 20 → x = 5,5" },
            { task: "Das Dreifache und das Fünffache einer Zahl geben zusammen 56. Wie gross ist die Zahl?", answer: "3x + 5x = 56 → 8x = 56 → x = 7" },
            { task: "Der Umfang eines Rechtecks misst 72 m, die Länge ist 4 m grösser als die Breite. Wie lang und breit ist es?", answer: "2(l+b)=72 → l+b=36, mit l=b+4 → 2b+4=36 → b=16 m, l=20 m" }
          ],
          applications: [
            { task: "Ein Metallbauer schneidet von einem 6 m langen Rohr 5 gleich lange Stücke; dabei entstehen 4 Schnitte à 1,5 mm Verlust und ein Reststück von 850 mm. Stelle die Gleichung für die Stücklänge x auf und löse sie.", answer: "5x + 4·1,5mm + 850mm = 6000mm → 5x = 5144mm → x ≈ 1028,8 mm" }
          ],
          exam: [
            { q: "Die 4 Schritte einer Textaufgabe sind (in Reihenfolge):", options: ["Probe, Gleichung, Lösung, Unbekannte", "Wahl der Unbekannten, Gleichung aufstellen, Auflösen, Probe", "Auflösen, Probe, Gleichung, Unbekannte", "Nur Gleichung und Lösung"], correct: 1 },
            { q: "Das Dreifache und Fünffache einer Zahl ergeben zusammen 56. Die Zahl ist:", options: ["6", "7", "8", "9"], correct: 1 },
            { q: "Wofür dient die Probe am Schluss?", options: ["Um die Aufgabe zu verlängern", "Um zu prüfen, ob das Ergebnis die Bedingungen erfüllt", "Sie ist optional und nutzlos", "Um eine neue Gleichung zu bilden"], correct: 1 }
          ]
        },
        {
          chapter: "3.7", title: "Verhältnis und Proportion",
          explain: "Zwei Grössen gleicher Art werden im Verhältnis a:b verglichen. Sind zwei Verhältnisse gleich (a:b = c:d), spricht man von einer Proportion. Es gilt die Produktengleichung: das Produkt der äusseren Glieder ist gleich dem Produkt der inneren Glieder (a·d = b·c). Damit lässt sich in einer Proportion die vierte, unbekannte Grösse (die vierte Proportionale) berechnen.",
          examples: [
            { problem: "Prüfe: 5:8 = 15:24", solution: "Produktengleichung: 5·24 = 8·15 → 120 = 120 ✓ Proportion stimmt" }
          ],
          exercises: [
            { task: "Kürze das Verhältnis 9:12", answer: "3:4" },
            { task: "Löse die Proportion: 5:8 = 10:x", answer: "5x = 8·10 = 80 → x = 16" },
            { task: "Eine Familie hat Fr. 5400.– Einkommen und zahlt Fr. 1200.– Miete. In welchem (gekürzten) Verhältnis steht Einkommen zu Mietzins?", answer: "5400:1200, gekürzt durch 600 → 9:2" }
          ],
          applications: [
            { task: "Ein Bauplan ist im Massstab 1:40 gezeichnet. Eine Strecke misst auf dem Plan 18 cm. Wie lang ist sie in Wirklichkeit?", answer: "18 cm · 40 = 720 cm = 7,2 m" }
          ],
          exam: [
            { q: "In einer Proportion a:b=c:d gilt:", options: ["a+d=b+c", "a·d=b·c", "a·b=c·d", "a-c=b-d"], correct: 1 },
            { q: "5:8 = 10:x → x = ?", options: ["12", "16", "20", "6.4"], correct: 1 },
            { q: "Ein Verhältnis von Fr. 5400.– zu Fr. 1200.– gekürzt ergibt:", options: ["4:1", "9:2", "5:1", "3:1"], correct: 1 }
          ]
        },
        {
          chapter: "3.8", title: "Gleichungen mit zwei/drei Unbekannten",
          explain: "Bei zwei Gleichungen mit zwei Unbekannten gibt es drei Lösungswege: Einsetzungsmethode (eine Gleichung nach einer Unbekannten auflösen und einsetzen), Additions-/Subtraktionsmethode (Gleichungen so multiplizieren, dass eine Unbekannte beim Addieren/Subtrahieren wegfällt) und Gleichungsmethode (beide nach derselben Unbekannten auflösen und gleichsetzen). Bei drei Unbekannten eliminiert man zuerst eine, bis zwei Gleichungen mit zwei Unbekannten übrig bleiben.",
          examples: [
            { problem: "3x + 4y = 64 ; 2x − y = 6  (Einsetzungsmethode)", solution: "aus 2): y = 2x−6, eingesetzt in 1): 3x+4(2x−6)=64 → 11x=88 → x=8, y=10" },
            { problem: "2x + 3y = 28 ; 3x − 2y = 3  (Additionsmethode)", solution: "1)·2: 4x+6y=56 ; 2)·3: 9x−6y=9 → addieren: 13x=65 → x=5, y=6" }
          ],
          exercises: [
            { task: "x + y = 17 ; x − y = 9", answer: "addieren: 2x=26 → x=13, y=4" },
            { task: "Die Summe zweier Zahlen beträgt 600, ihre Differenz 100. Wie heissen die Zahlen?", answer: "x+y=600, x−y=100 → 2x=700 → x=350, y=250" }
          ],
          applications: [
            { task: "Zwei Materiallängen x und y ergeben zusammen 17 m; ihre Differenz beträgt 9 m. Wie lang ist jedes Stück?", answer: "x+y=17, x−y=9 → x=13 m, y=4 m" }
          ],
          exam: [
            { q: "Bei der Einsetzungsmethode geht man vor, indem man:", options: ["Beide Gleichungen addiert", "Eine Gleichung nach einer Unbekannten auflöst und einsetzt", "Beide Gleichungen subtrahiert", "Nur eine Gleichung verwendet"], correct: 1 },
            { q: "x+y=17, x−y=9 → x=?, y=?", options: ["x=13,y=4", "x=4,y=13", "x=8,y=9", "x=17,y=9"], correct: 0 },
            { q: "Bei drei Unbekannten eliminiert man zuerst:", options: ["Alle drei gleichzeitig", "Eine, bis zwei Gleichungen mit zwei Unbekannten bleiben", "Keine, man rät die Lösung", "Nur die grösste Zahl"], correct: 1 }
          ]
        }
      ] },
    { id: "s1-04", name: "Physikalische Grundlagen", lekt: 22, tb: "TB3",
      explain: "Physikalische Grössen als Zahlenwert × Einheit: Kraft, Masse, Dichte, Arbeit, Leistung, elektrische Grundgrössen. Basis für reale Berechnungen wie Stahlgewicht, Hebelkräfte oder Widerstände in Anlagen.",
      formulas: "Dichte: ρ = m / V\nArbeit: W = F · s      Leistung: P = F · s / t\nHebelgesetz: Kraft × Hebelarm = Last × Hebelarm der Last\nOhm'sches Gesetz: U = I · R      Widerstand: R = ρ · l / A",
      method: "Formelsammlung mit Einheiten führen; zu jeder Formel eine konkrete Metallbau-Anwendung notieren, z.B. Gewicht eines Stahlträgers berechnen.",
      flashcards: [
        { q: "Wie ist die Dichte definiert?", a: "ρ = m / V  (Masse durch Volumen)" },
        { q: "Formel für mechanische Arbeit?", a: "W = F · s  (Kraft mal Weg)" },
        { q: "Formel für Leistung?", a: "P = F · s / t = W / t  (Arbeit pro Zeit)" },
        { q: "Wie lautet das Hebelgesetz?", a: "Kraft × Hebelarm der Kraft = Last × Hebelarm der Last" },
        { q: "Wie lautet das Ohm'sche Gesetz?", a: "U = I · R  (Spannung = Stromstärke mal Widerstand)" },
        { q: "Formel für den elektrischen Widerstand eines Leiters?", a: "R = ρ · l / A  (spez. Widerstand mal Länge, durch Querschnitt)" },
        { q: "Was ist der Unterschied zwischen Masse und Gewichtskraft?", a: "Masse (kg) ist die Menge an Materie; Gewichtskraft (N) = Masse × Erdbeschleunigung: F = m · g" }
      ],
      exercises: [
        { task: "Ein Stahlblock hat eine Masse von 39 kg und ein Volumen von 5 dm³. Berechne die Dichte.", answer: "ρ = m/V = 39 kg / 5 dm³ = 7,8 kg/dm³" },
        { task: "Eine Kraft von 250 N hebt eine Last über eine Strecke von 3 m. Berechne die Arbeit.", answer: "W = F·s = 250 N · 3 m = 750 J" },
        { task: "Eine Maschine leistet eine Arbeit von 1200 J in 4 Sekunden. Berechne die Leistung.", answer: "P = W/t = 1200 J / 4 s = 300 W" },
        { task: "An einem zweiarmigen Hebel wirkt eine Kraft von 60 N im Abstand von 80 cm vom Drehpunkt. In welchem Abstand muss eine Last von 240 N angreifen, damit Gleichgewicht besteht?", answer: "60·80 = 240·x → x = 4800/240 = 20 cm" },
        { task: "Durch einen Leiter mit R = 15 Ohm fliesst ein Strom von 4 A. Berechne die Spannung.", answer: "U = I·R = 4 A · 15 Ω = 60 V" },
        { task: "Ein Kupferdraht (ρ = 0,0175) ist 200 m lang und hat einen Querschnitt von 2,5 mm². Berechne den Widerstand.", answer: "R = ρ·l/A = 0,0175 · 200 / 2,5 = 1,4 Ω" }
      ],
      applications: [
        { task: "Ein Geländerpfosten aus Stahl (Dichte 7,85 kg/dm³) hat ein Volumen von 0,6 dm³. Wie schwer ist er, und mit welcher Kraft (in N) drückt er auf den Boden (g=9,81 m/s²)?", answer: "m = ρ·V = 7,85·0,6 = 4,71 kg  ;  F = m·g = 4,71·9,81 ≈ 46,2 N" },
        { task: "Ein Motor hebt eine Stahlträger-Last von 180 kg um 3,5 m in 6 Sekunden. Berechne die geleistete Arbeit und die Leistung.", answer: "F=m·g=180·9,81=1765,8 N ; W=F·s=1765,8·3,5≈6180 J ; P=W/t=6180/6=1030 W" },
        { task: "In einer Anlage wird ein Kupferkabel mit 1,5 mm² Querschnitt und 40 m Länge verlegt (ρ=0,0175). Wie gross ist der Widerstand, und welche Spannung fällt bei 8 A ab?", answer: "R=ρ·l/A=0,0175·40/1,5≈0,47 Ω ; U=I·R=8·0,47≈3,73 V" }
      ],
      exam: [
        { q: "Wie lautet die Formel für die Dichte?", options: ["ρ=m·V", "ρ=m/V", "ρ=V/m", "ρ=m+V"], correct: 1 },
        { q: "Ein Bauteil mit m=12 kg und V=3 dm³ hat welche Dichte?", options: ["4 kg/dm³", "36 kg/dm³", "0,25 kg/dm³", "15 kg/dm³"], correct: 0 },
        { q: "Welche Einheit hat die Leistung P?", options: ["Joule", "Newton", "Watt", "Ohm"], correct: 2 },
        { q: "Ein Hebel: Kraft 40 N wirkt im Abstand 60 cm vom Drehpunkt. Bei welchem Abstand x hält eine Last von 120 N das Gleichgewicht?", options: ["10 cm", "20 cm", "30 cm", "40 cm"], correct: 1 },
        { q: "Wie lautet das Ohm'sche Gesetz?", options: ["U=I/R", "U=I·R", "U=R/I", "I=U+R"], correct: 1 }
      ] },
    { id: "s1-05", name: "Sicherheitsvorschriften", lekt: 5, tb: "TB2",
      explain: "Betriebliche und gesetzliche Sicherheitsvorschriften (EKAS-Richtlinien, ArGV) für Werkstatt und Montage, insbesondere Gerüst-, Kran- und Hebezeugsicherheit.",
      method: "Jede Vorschrift in max. 3 eigenen Sätzen zusammenfassen und mit einem konkreten Baustellenbeispiel verknüpfen." },
    { id: "s1-06", name: "Trigonometrie", lekt: 20, tb: "TB3",
      explain: "Winkelberechnung im rechtwinkligen und allgemeinen Dreieck (Sinus, Cosinus, Tangens, Sinus- und Cosinussatz) – zentral für Schrägschnitte, Treppenwinkel, Geländer und Dachkonstruktionen.",
      formulas: "sin α = Gegenkathete / Hypotenuse\ncos α = Ankathete / Hypotenuse\ntan α = Gegenkathete / Ankathete\nSinussatz: a/sin α = b/sin β = c/sin γ",
      method: "Zu jeder Formel eine Skizze eines realen Metallbauteils (z.B. Treppenwinkel) zeichnen, dann erst rechnen.",
      flashcards: [
        { q: "sin α = ?", a: "Gegenkathete / Hypotenuse" },
        { q: "cos α = ?", a: "Ankathete / Hypotenuse" },
        { q: "tan α = ?", a: "Gegenkathete / Ankathete" },
        { q: "Wie lautet der Sinussatz?", a: "a / sin α = b / sin β = c / sin γ" },
        { q: "Wie gross ist die Winkelsumme in jedem Dreieck?", a: "180°" },
        { q: "Wann verwendet man den Kosinussatz statt den Sinussatz?", a: "Wenn zwei Seiten und der eingeschlossene Winkel bekannt sind, oder wenn alle drei Seiten bekannt sind (kein passendes Winkel-Seiten-Paar für den Sinussatz vorhanden)." }
      ],
      exercises: [
        { task: "In einem rechtwinkligen Dreieck ist die Hypotenuse c = 10 cm und der Winkel α = 30°. Berechne die Gegenkathete a.", answer: "a = c · sin α = 10 · sin30° = 10 · 0,5 = 5 cm" },
        { task: "Berechne im selben Dreieck die Ankathete b.", answer: "b = c · cos α = 10 · cos30° ≈ 10 · 0,866 = 8,66 cm" },
        { task: "Ein Geländerpfosten steht senkrecht, eine Strebe führt im Winkel von 45° zum Boden und ist 1,4 m lang. Wie hoch liegt der Anschlusspunkt über dem Boden?", answer: "Höhe = 1,4 · sin45° ≈ 1,4 · 0,707 ≈ 0,99 m" },
        { task: "Ein Dreieck hat die Seiten a = 7 cm, b = 9 cm und den eingeschlossenen Winkel γ = 60°. Berechne die Seite c mit dem Kosinussatz.", answer: "c² = a²+b²−2ab·cosγ = 49+81−2·7·9·0,5 = 130−63 = 67 → c ≈ 8,19 cm" },
        { task: "In einem Dreieck sind die Winkel α = 50° und β = 70° bekannt. Wie gross ist γ?", answer: "γ = 180° − 50° − 70° = 60°" }
      ],
      applications: [
        { task: "Eine Rampe steigt auf einer Länge von 6 m um einen Winkel von 12° an. Wie hoch ist der Höhenunterschied?", answer: "h = 6 · sin12° ≈ 6 · 0,208 ≈ 1,25 m" },
        { task: "Ein Handlauf verläuft entlang einer Treppe mit Steigungswinkel 34°. Die horizontale Ausladung beträgt 3,2 m. Wie lang muss der Handlauf mindestens sein?", answer: "Hypotenuse = 3,2 / cos34° ≈ 3,2 / 0,829 ≈ 3,86 m" },
        { task: "Ein Dreiecksverband hat die Seiten a=4,5 m, b=6 m und den eingeschlossenen Winkel γ=75°. Berechne die dritte Seite c mit dem Kosinussatz.", answer: "c²=a²+b²−2ab·cosγ=20,25+36−54·0,259≈42,3 → c≈6,5 m" }
      ],
      exam: [
        { q: "sin α entspricht welchem Verhältnis?", options: ["Ankathete/Hypotenuse", "Gegenkathete/Hypotenuse", "Gegenkathete/Ankathete", "Hypotenuse/Gegenkathete"], correct: 1 },
        { q: "Ein rechtwinkliges Dreieck: Hypotenuse=12 cm, α=40°. Wie lang ist die Gegenkathete a?", options: ["7,71 cm", "9,19 cm", "12 cm", "5,14 cm"], correct: 0 },
        { q: "Wann verwendet man den Kosinussatz?", options: ["Immer bei rechtwinkligen Dreiecken", "Wenn zwei Seiten und der eingeschlossene Winkel bekannt sind", "Nur bei gleichseitigen Dreiecken", "Nie in der Praxis"], correct: 1 },
        { q: "Wie gross ist die Winkelsumme in jedem Dreieck?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { q: "tan α = ?", options: ["Gegenkathete/Hypotenuse", "Ankathete/Hypotenuse", "Gegenkathete/Ankathete", "Hypotenuse/Ankathete"], correct: 2 }
      ] },
    { id: "s1-07", name: "Qualitätsmanagementsysteme", lekt: 5, tb: "TB1",
      explain: "Aufbau und Zweck von QM-Systemen (z.B. ISO 9001) im Betrieb: Prozessdokumentation, Prüfprotokolle, kontinuierliche Verbesserung nach dem PDCA-Zyklus.",
      method: "Den PDCA-Zyklus (Plan–Do–Check–Act) an einem eigenen Werkstattbeispiel durchdenken und schriftlich festhalten." },
    { id: "s1-08", name: "SIA-Normen", lekt: 5, tb: "TB2",
      explain: "Für den Metallbau relevante SIA-Normen (z.B. SIA 263 Stahlbau, SIA 261 Einwirkungen auf Tragwerke) regeln Bemessung, Ausführung und Verantwortlichkeiten.",
      method: "Übersichtstabelle führen: Normnummer → Thema → Relevanz für die eigene Praxis." },
    { id: "s1-09", name: "Bauphysik Wärme", lekt: 7, tb: "TB5",
      explain: "Wärmetransport durch Bauteile via Leitung, Konvektion und Strahlung. Metall leitet Wärme sehr gut, deshalb sind Wärmebrücken bei Fenstern und Fassaden ein zentrales Thema.",
      method: "Eine Schnittzeichnung eines Fensterprofils anfertigen und den Wärmefluss mit Pfeilen einzeichnen." },
    { id: "s1-10", name: "Bauphysik U-Wert", lekt: 6, tb: "TB5",
      explain: "Der U-Wert beschreibt den Wärmedurchgang eines Bauteils in W/(m²K) – je kleiner, desto besser die Dämmung.",
      formulas: "U = 1 / R_total\nR (pro Schicht) = d / λ   (d = Dicke, λ = Wärmeleitfähigkeit)",
      method: "Den U-Wert eines einfachen Beispielprofils selbst durchrechnen und mit MINERGIE-Grenzwerten vergleichen." },
    { id: "s1-11", name: "Skizzieren: Treppen, Geländer, Fenster, Türen", lekt: 30, tb: "TB6",
      explain: "Freihand- und Massstabskizzen von Standardbaugruppen: Wangentreppen und Stufenanschlüsse, Geländer (Pfosten, Handlauf, Füllstäbe), Fenster- und Türprofile inkl. Anschlussdetails.",
      method: "Täglich eine Baugruppe dreifach üben: Vorlage abzeichnen → aus dem Gedächtnis skizzieren → mit Bemassung beschriften." },
    { id: "s1-12", name: "Skizzieren: Gitter, Vordächer, Stahlbau", lekt: 19, tb: "TB6",
      explain: "Skizzieren von Gitterrostkonstruktionen, Vordachtragwerken (Konsolen, Wasserabläufe) und klassischen Stahlbauteilen wie Trägern, Stützen und Anschlüssen.",
      method: "Reale Bauteile fotografieren und als bemasste Skizze nachzeichnen (Foto-zu-Skizze-Übung)." }
  ]},
  { sem: 2, title: "Semester 2", topics: [
    { id: "s2-01", name: "Bauphysik U-Wert (Vertiefung)", lekt: 7, tb: "TB5",
      explain: "Vertiefung der U-Wert-Berechnung für zusammengesetzte Metall-Glas-Konstruktionen inkl. linearem Wärmebrückenverlust Ψ an Anschlussdetails.",
      method: "Eine komplette U-Wert-Berechnung eines Fassadenelements Schritt für Schritt rechnen und mit dem SIA-Grenzwert vergleichen." },
    { id: "s2-02", name: "Längen-, Winkel-, Flächen-, Körperberechnungen", lekt: 15, tb: "TB3",
      explain: "Umrechnen von Längen, Flächen und Hohlraum-/Volumenmassen zwischen den gebräuchlichen Einheiten – Grundlage für jede Massangabe im Werkplan.",
      formulas: "Längenmasse (Faktor 10 je Stufe): mm → cm → dm → m → …→ km\n1000 mm = 100 cm = 10 dm = 1 m ; 1000 m = 1 km\n\nFlächenmasse (Faktor 100 je Stufe): mm² → cm² → dm² → m² → a → ha → km²\n1 000 000 mm² = 10 000 cm² = 100 dm² = 1 m² ; 1 000 000 m² = 10 000 a = 100 ha = 1 km²\n\nHohlmasse (Faktor 10 je Stufe, 1 cm³ = 1 ml): ml → cl → dl → l(=dm³) → hl\n1000 ml = 100 cl = 10 dl = 1 l ; 100 l = 1 hl",
      method: "Für jede Grösse eine eigene „Umrechnungstreppe“ zeichnen und laminieren; täglich 5 Umrechnungen ohne Formelblatt rechnen, danach kontrollieren.",
      flashcards: [
        { q: "Um welchen Faktor unterscheiden sich zwei benachbarte Längeneinheiten (z.B. cm → dm)?", a: "Faktor 10" },
        { q: "Um welchen Faktor unterscheiden sich zwei benachbarte Flächeneinheiten (z.B. cm² → dm²)?", a: "Faktor 100" },
        { q: "Wie viele mm sind 1 m?", a: "1000 mm" },
        { q: "Wie viele cm² sind 1 m²?", a: "10 000 cm²" },
        { q: "Wie viele m² sind 1 ha?", a: "10 000 m²" },
        { q: "Was gilt: 1 cm³ = ? ml", a: "1 cm³ = 1 ml" },
        { q: "Wie viele Liter sind 1 hl?", a: "100 l" },
        { q: "Wie viele dl sind 1 Liter?", a: "10 dl" }
      ],
      exercises: [
        { task: "Rechne um: 3,5 m in cm", answer: "350 cm" },
        { task: "Rechne um: 0,045 km in m", answer: "45 m" },
        { task: "Rechne um: 2,4 m² in cm²", answer: "24 000 cm²" },
        { task: "Rechne um: 850 dm² in m²", answer: "8,5 m²" },
        { task: "Rechne um: 3,2 a in m²", answer: "320 m²" },
        { task: "Rechne um: 0,6 hl in Liter", answer: "60 l" },
        { task: "Rechne um: 275 ml in cl", answer: "27,5 cl" },
        { task: "Ein rechteckiges Blech misst 1,2 m × 0,85 m. Berechne die Fläche in m² und in cm².", answer: "1,2 · 0,85 = 1,02 m² = 10 200 cm²" }
      ],
      applications: [
        { task: "Ein Fassadenblech misst 2,4 m × 1,15 m. Wie viel m² sind das, und wie viele Bleche braucht es für 50 m² Fassadenfläche (aufgerundet)?", answer: "Fläche=2,4·1,15=2,76 m² ; 50/2,76≈18,1 → 19 Bleche" },
        { task: "Ein Wassertank für die Werkstattkühlung fasst 3,5 hl. Wie viele Liter sind das, und wie viele 10-Liter-Kanister braucht es, um ihn zu füllen?", answer: "3,5 hl = 350 l ; 350/10 = 35 Kanister" },
        { task: "Ein Baugrundstück ist 480 a gross. Wie viele ha und km² sind das?", answer: "480 a = 4,8 ha = 0,048 km²" }
      ],
      exam: [
        { q: "Wie viele mm sind 1 m?", options: ["10", "100", "1000", "10000"], correct: 2 },
        { q: "Wie viele cm² sind 1 m²?", options: ["100", "1000", "10000", "100000"], correct: 2 },
        { q: "1 cm³ entspricht wie vielen ml?", options: ["0,1 ml", "1 ml", "10 ml", "100 ml"], correct: 1 },
        { q: "Wie viele m² sind 3,5 a?", options: ["35 m²", "350 m²", "3,5 m²", "0,35 m²"], correct: 1 },
        { q: "Wie viele Liter sind 2 hl?", options: ["20 l", "200 l", "2000 l", "0,2 l"], correct: 1 }
      ] },
    { id: "s2-03", name: "Schrauben, Nieten, Schweissen", lekt: 10, tb: "TB7",
      explain: "Verbindungstechniken im Metallbau: Schraubenverbindungen (Festigkeitsklassen, Anzugsdrehmomente), Nietverbindungen (Blind-/Vollniete) und Schweissverfahren (MIG/MAG, WIG, Elektrode) inkl. Nahtarten und Prüfung.",
      method: "Vergleichstabelle erstellen: Verbindungsart | Einsatzgebiet | Vor-/Nachteil | typische Norm." },
    { id: "s2-04", name: "Präsentation praktische Beispiele", lekt: 5, tb: "TB1",
      explain: "Aufbereitung und mündliche Präsentation eines eigenen Praxisbeispiels – vom selbst gefertigten Bauteil bis zur Montage – inkl. Herausforderungen und Lösungsweg.",
      method: "3-Satz-Struktur üben: Ausgangslage – Vorgehen – Ergebnis/Lernpunkt. Laut vor Kolleg:innen oder Spiegel vortragen." },
    { id: "s2-05", name: "Bauphysik Feuchtigkeit", lekt: 10, tb: "TB5",
      explain: "Feuchteschutz bei Metallkonstruktionen: Tauwasserbildung, Diffusion und Kondensat an kalten Metallteilen – zentrales Korrosionsrisiko an Wärmebrücken.",
      method: "Ein Glaser-Diagramm einmal komplett von Hand durchrechnen, um die Kondensationsebene zu verstehen." },
    { id: "s2-06", name: "Statische Systeme", lekt: 10, tb: "TB8",
      explain: "Grundlegende statische Systeme: Einfeldträger, Kragarm, Durchlaufträger, Fachwerk. Bestimmung von Lagerarten (fest, los, eingespannt) und Freiheitsgraden.",
      method: "Für jedes System zuerst ein Freikörperbild zeichnen und die Lagerreaktionen benennen – erst danach rechnen." },
    { id: "s2-07", name: "Auflager, Querkraft, Moment", lekt: 7, tb: "TB8",
      explain: "Berechnung der Auflagerreaktionen aus den Gleichgewichtsbedingungen (ΣF = 0, ΣM = 0) und daraus Ableitung von Querkraft- und Momentenverlauf entlang des Trägers.",
      formulas: "ΣFvertikal = 0     ΣFhorizontal = 0     ΣM(Drehpunkt) = 0",
      method: "Festes 4-Schritt-Schema üben: 1) Freikörperbild 2) Gleichgewicht aufstellen 3) Auflagerkräfte lösen 4) Q- und M-Linie zeichnen." },
    { id: "s2-08", name: "Werkstoffprüfungen / Zulassungen", lekt: 5, tb: "TB9",
      explain: "Prüfverfahren für Metallwerkstoffe (Zugversuch, Härteprüfung, Kerbschlagbiegeversuch) und Zulassungsnachweise wie CE-Kennzeichnung und Werkszeugnisse.",
      method: "Pro Prüftyp eine Karteikarte: Was wird geprüft? Welche Kennwerte liefert er? (z.B. Zugversuch → Streckgrenze, Zugfestigkeit)." },
    { id: "s2-09", name: "Festigkeitslehre", lekt: 30, tb: "TB8",
      explain: "Spannungen (Zug, Druck, Biegung, Schub) und Verformungen in Bauteilen; Nachweis der Beanspruchung gegen Fliess- und Bruchgrenze.",
      formulas: "Normalspannung: σ = F / A\nBiegespannung: σb = M / W\nNachweis: σvorhanden ≤ σzulässig",
      method: "Aufgaben immer in fester Reihenfolge lösen: Querschnittswerte bestimmen → Beanspruchung berechnen → mit zulässiger Spannung vergleichen. Formeln inkl. Einheiten auf Karteikarten." },
    { id: "s2-10", name: "Architektenpläne", lekt: 4, tb: "TB1",
      explain: "Lesen und Interpretieren von Architektenplänen: Grundriss, Schnitt, Ansicht, Massstäbe und Planköpfe als Grundlage der Metallbau-Werkplanung.",
      method: "Einen echten Plan Zeile für Zeile „übersetzen“: Was bedeutet jedes Symbol, jede Massangabe für den Metallbau konkret?" },
    { id: "s2-11", name: "Skizzieren: Fenster, Türen", lekt: 44, tb: "TB6",
      explain: "Vertiefte Skizzierpraxis für Fenster- und Türkonstruktionen inkl. Beschlaganschluss, Dichtungsebenen und Fassadenanschluss.",
      method: "Von einfach zu komplex steigern: pro Woche 3 neue Anschlussdetails skizzieren und vollständig beschriften." },
    { id: "s2-12", name: "Skizzieren: Vordächer, Stahlbau", lekt: 15, tb: "TB6",
      explain: "Skizzieren von Vordachtragwerken und stahlbaulichen Standarddetails wie Stützenfuss, Trägeranschluss und Verband.",
      method: "Bestehende Werkpläne aus dem Betrieb als Vorlage nehmen und in eigener Handschrift neu skizzieren." }
  ]},
  { sem: 3, title: "Semester 3", topics: [
    { id: "s3-01", name: "Oberflächenbehandlungen", lekt: 15, tb: "TB10",
      explain: "Verfahren zum Oberflächenschutz von Metall: Feuerverzinken, galvanisches Verzinken, Pulverbeschichtung, Eloxieren von Aluminium und Anstriche inkl. Vor- und Nachbehandlung.",
      method: "Vergleichstabelle mit Musterplatten führen: Verfahren | Schichtdicke | Einsatzbereich | Kosten/Aufwand." },
    { id: "s3-02", name: "Korrosionseinflüsse", lekt: 5, tb: "TB10",
      explain: "Korrosionsarten wie elektrochemische Korrosion, Kontaktkorrosion zwischen unterschiedlichen Metallen und Lochkorrosion – abhängig von Feuchte, Salz und Luftschadstoffen.",
      method: "Eigene Merkliste „Wann rostet was mit was?“ nach der galvanischen Reihe erstellen und im Alltag anwenden." },
    { id: "s3-03", name: "Kalkulation 1", lekt: 15, tb: "TB11",
      explain: "Grundlagen der Angebotskalkulation: Material-, Lohn- und Maschinenkosten, Zuschläge für Gemeinkosten, Gewinn und Risiko, Aufbau einer einfachen Offertkalkulation.",
      method: "Eine reale Materialliste nehmen und komplett von Hand durchkalkulieren." },
    { id: "s3-04", name: "Auflager, Querkraft, Moment (Vertiefung)", lekt: 18, tb: "TB8",
      explain: "Vertiefung: Auflager-, Querkraft- und Momentenberechnung bei mehrfeldrigen Systemen und kombinierten Lastfällen.",
      method: "Dasselbe 4-Schritt-Schema aus Semester 2 anwenden, aber mit mehreren gleichzeitig wirkenden Lasten üben." },
    { id: "s3-05", name: "Beton", lekt: 5, tb: "TB9",
      explain: "Beton als Verbundwerkstoff für Fundamente und Befestigungen von Metallkonstruktionen: Betongüten, Bewehrung, chemische und mechanische Verankerungstechnik.",
      method: "Dübeltabellen eines Herstellers durchgehen und Tragfähigkeiten an eigenen Beispielen nachvollziehen." },
    { id: "s3-06", name: "Kalkulation 2", lekt: 15, tb: "TB11",
      explain: "Vertiefte Kalkulation: Nachkalkulation, Soll-Ist-Vergleich, Abrechnung bei Regie- und Pauschalaufträgen sowie Umgang mit Nachträgen.",
      method: "Eine abgeschlossene Baustelle aus dem eigenen Betrieb nachkalkulieren und mit der ursprünglichen Offerte vergleichen." },
    { id: "s3-07", name: "Beschläge", lekt: 5, tb: "TB12",
      explain: "Beschlagstechnik für Fenster, Türen und Tore: Bänder, Schlösser, Schliessbleche, Dichtungen und Automatiktüren – Auswahl nach Einsatzbereich.",
      method: "Beschlagskatalog-Übung: zu 5 Bauteilen den passenden Beschlag auswählen und die Wahl begründen." },
    { id: "s3-08", name: "Dimensionierung", lekt: 20, tb: "TB8",
      explain: "Bemessung von Bauteilquerschnitten (Profile, Bleche) anhand von Lastannahmen und Nachweisen nach SIA 263 – Auswahl des kleinsten ausreichenden Profils.",
      method: "Für ein Standardbauteil drei Profilvarianten durchrechnen und die wirtschaftlichste begründet auswählen." },
    { id: "s3-09", name: "Bauphysik Akustik", lekt: 11, tb: "TB5",
      explain: "Schallschutz bei Metallkonstruktionen: Luft- und Körperschall, Schalldämmmass und die Entkopplung von Metallteilen zur Vermeidung von Schallbrücken.",
      method: "Ein eigenes Bauteil (z.B. Fensterrahmen) auf mögliche Schallbrücken untersuchen und Gegenmassnahmen skizzieren." },
    { id: "s3-10", name: "Ökologie", lekt: 8, tb: "TB10",
      explain: "Ökologische Aspekte im Metallbau: Recyclingfähigkeit von Stahl und Aluminium, graue Energie, nachhaltige Oberflächenbehandlung und Lebenszyklusbetrachtung.",
      method: "Graue-Energie-Vergleich zweier Materialvarianten (z.B. Stahl vs. Aluminium) für ein Bauteil recherchieren und gegenüberstellen." },
    { id: "s3-11", name: "Skizzieren: Fassadenbau, Lichtdächer, Schaufenster", lekt: 23, tb: "TB6",
      explain: "Skizzieren komplexer Glasfassaden-, Lichtdach- und Schaufensterkonstruktionen inkl. Statik- und Dichtungsdetails.",
      method: "Fassadendetails aus Fachzeitschriften oder Katalogen nachskizzieren, danach eine eigene Variante entwerfen." },
    { id: "s3-12", name: "Skizzieren: Tore, Vordächer, Stahlbau", lekt: 20, tb: "TB6",
      explain: "Skizzieren von Torkonstruktionen (Schiebe-, Sektional-, Falttore), Vordächern und weiteren Stahlbaudetails.",
      method: "Funktionsprinzip jedes Tortyps zuerst in eigenen Worten erklären, dann erst skizzieren – Verständnis vor Darstellung." }
  ]},
  { sem: 4, title: "Semester 4", topics: [
    { id: "s4-01", name: "Arbeitsabläufe: Materiallieferung bis Montage", lekt: 5, tb: "TB1",
      explain: "Gesamtprozess eines Projekts: Materialdisposition, Lieferung, Zwischenlagerung, Vorfertigung, Transport und Montage vor Ort inkl. Schnittstellen zu anderen Gewerken.",
      method: "Prozesslandkarte des letzten eigenen Projekts zeichnen und Engpässe markieren." },
    { id: "s4-02", name: "Anforderungen aus Normen", lekt: 5, tb: "TB2",
      explain: "Zusammenführung der wichtigsten normativen Anforderungen (SIA, EN, Suva) für die praktische Bauausführung im Metallbau.",
      method: "Ein eigenes Normen-Merkblatt „Was gilt wann?“ als Referenzkarte für die Baustelle erstellen." },
    { id: "s4-03", name: "Bauschäden", lekt: 10, tb: "TB2",
      explain: "Typische Bauschäden an Metallkonstruktionen: Korrosionsschäden, Wärmebrückenschäden, Ausführungsfehler bei Anschlüssen und mangelhafte Entwässerung.",
      method: "Schadensfälle aus dem eigenen Betrieb sammeln und die Ursache-Wirkung-Kette mit der 5-Why-Methode analysieren." },
    { id: "s4-04", name: "Vordimensionierung", lekt: 30, tb: "TB8",
      explain: "Schnelle, überschlägige Bemessung von Bauteilen in der frühen Projektphase mit Faustformeln/Tabellenwerken, bevor die genaue Bemessung erfolgt.",
      method: "Faustformel-Kärtchen für häufige Bauteile (Träger, Stütze, Geländerpfosten) erstellen und später mit der genauen Berechnung verifizieren." },
    { id: "s4-05", name: "Montagekonzept", lekt: 10, tb: "TB6",
      explain: "Planung der Montagereihenfolge, Hebe- und Befestigungstechnik, Baustellenlogistik und Sicherung während der Montage von Metallbauteilen.",
      method: "Für ein Bauteil ein Montagekonzept in 5 Schritten aufschreiben: Vorbereitung, Transport, Heben, Befestigen, Sichern/Kontrolle." },
    { id: "s4-06", name: "Wartung und Pflege", lekt: 10, tb: "TB12",
      explain: "Wartungspläne für Metallbauteile wie Türen, Tore und Fassaden: Schmierung von Beschlägen, Kontrolle von Dichtungen, Nachbehandlung von Oberflächen, Serviceintervalle.",
      method: "Eine Wartungscheckliste für ein reales Bauteil erstellen: Was? Wie oft? Womit?" },
    { id: "s4-07", name: "Offener Bereich · Vertiefung", lekt: 21, tb: "TB4",
      explain: "Freier Themenbereich für individuelle Vertiefung – eigene Praxisthemen, Wiederholung schwacher Bereiche oder betriebsspezifische Inhalte.",
      method: "Wähle dein schwächstes Thema aus einem anderen Semester aus und vertiefe es gezielt in diesem Slot." },
    { id: "s4-08", name: "Offener Bereich · Prüfungstraining", lekt: 21, tb: "TB4",
      explain: "Zweiter freier Themenbereich – ideal zur gezielten Prüfungsvorbereitung über alle bisherigen Semester hinweg.",
      method: "Alte Prüfungen unter Zeitdruck simulieren, danach jeden Fehler einzeln analysieren und dem passenden Thema zuordnen." },
    { id: "s4-09", name: "Skizzieren: Fassadenbau, Lichtdächer, Schaufenster (Vertiefung)", lekt: 28, tb: "TB6",
      explain: "Vertiefte Praxis komplexer Fassaden-, Lichtdach- und Schaufensterdetails mit Fokus auf Ausführungsreife auf Werkplanniveau.",
      method: "Eine vollständige Werkplan-Skizze eines Fassadenausschnitts inkl. Bemassung und Beschriftung anfertigen." },
    { id: "s4-10", name: "Skizzieren: Tore, Vordächer, Stahlbau (Vertiefung)", lekt: 20, tb: "TB6",
      explain: "Abschliessende Vertiefung der Tor-, Vordach- und Stahlbauskizzen auf Prüfungsniveau.",
      method: "Unter Zeitdruck wie in der Prüfung eine Skizze in max. 20 Minuten anfertigen und die eigene Qualität danach selbst bewerten." }
  ]}
];
