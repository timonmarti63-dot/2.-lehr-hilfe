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
      explain: "Grundlage des technischen Rechnens, komplett aufgebaut nach dem Lehrmittel „Algebra – Einführung in die Elemente der Algebra für Berufsschulen“. Unten in 18 Kapitel-Unterseiten gegliedert: von den Grundrechenarten über ganze Zahlen, Bruchrechnen und Gleichungen bis zu Textaufgaben, Proportionen und Gleichungssystemen – jede mit Erklärung, Beispielen und Übungsaufgaben inkl. Lösung.",
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
        { chapter: "I", title: "Grundlagen: Grössen & Grundrechenarten",
          explain: "Physikalische Grössen werden als Zahlenwert × Einheit dargestellt (z.B. m = 4 kg). Bestimmte Zahlen schreibt man als Ziffern, unbestimmte als Buchstaben. Die Zahl vor einer Buchstabengrösse heisst Vorzahl (2a, 3a); die Vorzahl 1 wird nie geschrieben. Die vier Grundrechenarten haben feste Fachbegriffe für ihre Bestandteile.",
          examples: [
            { problem: "Fläche des Rechtecks mit a = 2 und b = 5", solution: "Fläche = a · b = 2 · 5 = 10" },
            { problem: "Vorzahl korrekt schreiben: 1 · b", solution: "= b  (die Vorzahl 1 wird weggelassen)" }
          ],
          exercises: [
            { task: "Wie heisst das Ergebnis einer Multiplikation?", answer: "Produkt" },
            { task: "Wie heisst der zweite Wert bei einer Division (durch den geteilt wird)?", answer: "Divisor" },
            { task: "Wie heisst das Ergebnis einer Subtraktion?", answer: "Differenz" }
          ] },
        { chapter: "II.1–2", title: "Natürliche Zahlen: Addition & Subtraktion",
          explain: "Addition: Die Reihenfolge der Summanden darf vertauscht werden (kommutatives Gesetz), es können aber nur gleichartige Grössen addiert werden (3 kg + 5 kg = 8 kg, aber nicht kg + Stück). Subtraktion ist bei natürlichen Zahlen nur möglich, wenn der Minuend grösser ist als der Subtrahend; die Reihenfolge darf verändert werden, solange der Minuend Minuend bleibt.",
          examples: [
            { problem: "5 + 7 + 9 + 11", solution: "= 5 + 11 + 7 + 9 = 32 (Summanden beliebig vertauschbar)" },
            { problem: "135 − 68 + 238 − 75", solution: "= 135 − 75 + 238 − 68 = 60 + 170 = 230" }
          ],
          exercises: [
            { task: "95 + 37 + 15 + 24 + 13 + 26 =", answer: "210" },
            { task: "6a + 9a + 16a + 27a + 42a =", answer: "100a" },
            { task: "4a + 19a + 25a + 6a + 12a + 27a + 2a = für a = 15", answer: "Summe der Vorzahlen 95a, für a=15: 95 · 15 = 1425" },
            { task: "30 − 9 − 13 =", answer: "8" },
            { task: "37d − 15d + 18d =", answer: "40d" }
          ] },
        { chapter: "II.3–4", title: "Natürliche Zahlen: Multiplikation & Division",
          explain: "Bei der Multiplikation darf die Reihenfolge der Faktoren vertauscht werden; ist ein Faktor 0, ist das Produkt 0. Division ist die Umkehrung der Multiplikation – Dividend und Divisor dürfen nicht vertauscht werden. In technischen Lehrmitteln wird die Division meist als Bruch geschrieben: Zähler/Nenner = Bruchwert.",
          examples: [
            { problem: "15 · 13 · 20", solution: "= 20 · 15 · 13 = 3900 (Reihenfolge vertauschbar)" },
            { problem: "48 kg : 8", solution: "= 6 kg   Probe: 6 kg · 8 = 48 kg" }
          ],
          exercises: [
            { task: "8 · 7 · 25 =", answer: "1400" },
            { task: "4 · 6a =", answer: "24a" },
            { task: "4 · 5g =", answer: "20g" },
            { task: "25a : 5 =", answer: "5a" },
            { task: "78ab : 13a =", answer: "6b" }
          ] },
        { chapter: "II.5", title: "Potenzen",
          explain: "Ein Produkt aus lauter gleichen Faktoren wird als Potenz geschrieben (5·5·5·5 = 5⁴). Die Basis (Grundzahl) ist der wiederholte Faktor, der Exponent zeigt, wie oft. Potenzen mit gleicher Basis und gleichem Exponenten dürfen addiert/subtrahiert werden (nur die Vorzahlen). Bei der Multiplikation gleicher Basen werden die Exponenten addiert, bei der Division subtrahiert.",
          examples: [
            { problem: "3a² + 5b² + 6a² − 3b²", solution: "= 9a² + 2b²  (gleiche Basis & Exponent: Vorzahlen addieren)" },
            { problem: "a³ · a⁴", solution: "= a³⁺⁴ = a⁷" },
            { problem: "6a⁵ : 2a³", solution: "= 3a⁵⁻³ = 3a²" }
          ],
          exercises: [
            { task: "2² = ; 3² = ; 4² = ; 5² =", answer: "4 ; 9 ; 16 ; 25" },
            { task: "3a² + 4a² + 7a² =", answer: "14a²" },
            { task: "4a² · 5a³ =", answer: "20a⁵" },
            { task: "36y⁵ : 9y³ =", answer: "4y²" }
          ] },
        { chapter: "II.6", title: "Klammern (natürliche Zahlen)",
          explain: "Steht vor einer Klammer ein Pluszeichen, kann sie einfach weggelassen werden. Steht ein Minuszeichen davor, wird sie aufgelöst, indem man alle Vorzeichen darin umkehrt. Ein Klammerausdruck wird mit einer Zahl multipliziert, indem jedes Glied einzeln multipliziert wird; zwei Summen werden multipliziert, indem jedes Glied der einen mit jedem Glied der anderen multipliziert wird.",
          examples: [
            { problem: "25 − (12 + 8)", solution: "= 25 − 20 = 5   oder gleichwertig: 25 − 12 − 8 = 5" },
            { problem: "7 · 32 = 7 · (30 + 2)", solution: "= 7·30 + 7·2 = 210 + 14 = 224" },
            { problem: "(a + b)(c + d)", solution: "= ac + ad + bc + bd" }
          ],
          exercises: [
            { task: "31 + (16 + 9) =", answer: "56" },
            { task: "50 − (12 + 13) =", answer: "25" },
            { task: "6(a + 3b) =", answer: "6a + 18b" },
            { task: "(5a + 6b) + (12a − 3b) − (7a − 2b) = , dann einsetzen für a = 8, b = 7", answer: "vereinfacht: 10a + 5b → eingesetzt: 10·8 + 5·7 = 80 + 35 = 115" }
          ] },
        { chapter: "III.1–2", title: "Ganze Zahlen: Addition & Subtraktion",
          explain: "Der Zahlenraum wird um die negativen Zahlen erweitert. Zwei ganze Zahlen mit gleichem Vorzeichen werden addiert, indem man ihre Beträge addiert und das gemeinsame Vorzeichen übernimmt. Bei ungleichem Vorzeichen wird der kleinere Betrag vom grösseren subtrahiert; das Ergebnis erhält das Vorzeichen des grösseren Betrags. Subtraktion = Addition mit umgekehrtem Vorzeichen des Subtrahenden.",
          examples: [
            { problem: "(+2) + (−6)", solution: "= −4  (ungleiche Vorzeichen: 6−2=4, Vorzeichen des grösseren Betrags −)" },
            { problem: "(−7) − (−10)", solution: "= −7 + 10 = +3" }
          ],
          exercises: [
            { task: "(+14) + (+18) =", answer: "+32" },
            { task: "(−15) + (−25) =", answer: "−40" },
            { task: "(+18) − (+25) =", answer: "−7" },
            { task: "(−25) − (+13) =", answer: "−38" },
            { task: "(+40b) − (−50b) =", answer: "90b" }
          ] },
        { chapter: "III.3–4", title: "Algebraische Summe & Klammern (ganze Zahlen)",
          explain: "Eine algebraische Summe ist eine Vereinigung positiver und negativer Glieder. Additionszeichen und Klammern mit + davor können weggelassen werden. Steht vor einer Klammer ein Minuszeichen, werden beim Weglassen alle Vorzeichen darin umgekehrt. Bei mehrfachen Klammern löst man zuerst die inneren ( ), dann die äusseren [ ] auf.",
          examples: [
            { problem: "(+16) + (−13) + (+15) + (−27) + (+14)", solution: "= 16 − 13 + 15 − 27 + 14 = 5" },
            { problem: "15a + [13a − (20a + 9a)]", solution: "innere Klammer: 20a+9a=29a → 13a−29a=−16a → 15a + (−16a) = −a" }
          ],
          exercises: [
            { task: "(5x − 3y) + (6x + 2y) =", answer: "11x − y" },
            { task: "(+5a) + (+7a) − (+12a) − (+13a) + (−9a) =", answer: "−22a" },
            { task: "15a + [13a − (20a + 9a)] =", answer: "−a" }
          ] },
        { chapter: "III.5–6", title: "Multiplikation & binomische Formeln",
          explain: "Zwei ganze Zahlen mit gleichem Vorzeichen ergeben ein positives, mit verschiedenem Vorzeichen ein negatives Produkt. Für häufig wiederkehrende Klammerprodukte gibt es die binomischen Formeln – sie lohnen sich auswendig, weil sie im Metallbau bei Flächen- und Kraftberechnungen ständig vorkommen.",
          examples: [
            { problem: "(a + b)²", solution: "= a² + 2ab + b²" },
            { problem: "(a − b)(a + b)", solution: "= a² − b²  (Differenz der Quadrate)" }
          ],
          exercises: [
            { task: "(a + 2)² =", answer: "a² + 4a + 4" },
            { task: "(5c − 6)² =", answer: "25c² − 60c + 36" },
            { task: "48 · 32 = , löse mit dem Kunstgriff (40+8)(40−8)", answer: "40² − 8² = 1600 − 64 = 1536" },
            { task: "x² − y² als Produkt schreiben", answer: "= (x + y)(x − y)" }
          ] },
        { chapter: "III.7", title: "Division algebraischer Ausdrücke",
          explain: "Zwei ganze Zahlen mit gleichem Vorzeichen ergeben einen positiven, mit verschiedenem Vorzeichen einen negativen Quotienten. Ein Klammerausdruck wird durch eine Zahl dividiert, indem jedes Glied einzeln dividiert wird. Lässt sich der Dividend faktorisieren (z.B. als binomische Formel), kann oft direkt gekürzt werden.",
          examples: [
            { problem: "(24a − 16b) : 8", solution: "= 3a − 2b   Probe: 8 · (3a − 2b) = 24a − 16b" }
          ],
          exercises: [
            { task: "6ab : (−2a) =", answer: "−3b" },
            { task: "a³ : a² =", answer: "a" },
            { task: "(a² − b²) : (a + b) =", answer: "a² − b² = (a+b)(a−b) → gekürzt bleibt: a − b" }
          ] },
        { chapter: "IV", title: "Gemeinsame Teiler & gemeinsames Vielfaches",
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
          ] },
        { chapter: "V.1–3", title: "Brüche: Arten, Erweitern & Kürzen",
          explain: "Bei echten Brüchen ist der Zähler kleiner als der Nenner, bei unechten grösser. Erweitern heisst: Zähler und Nenner mit derselben Zahl multiplizieren – der Wert bleibt gleich. Kürzen heisst: beide durch dieselbe Zahl dividieren. Ein Bruch ist positiv, wenn Zähler und Nenner gleiches Vorzeichen haben, sonst negativ; der Nenner wird immer positiv geschrieben.",
          examples: [
            { problem: "1/2 mit 3 erweitern", solution: "= 3/6" },
            { problem: "8/12 kürzen", solution: "durch 4: = 2/3" }
          ],
          exercises: [
            { task: "Kürze: 8/24", answer: "1/3" },
            { task: "Kürze: 24/(−80)", answer: "−3/10" },
            { task: "Erweitere 2/5 auf den Nenner 20", answer: "8/20" }
          ] },
        { chapter: "V.4–6", title: "Brüche: Addition, Multiplikation & Division",
          explain: "Gleichnamige Brüche werden addiert/subtrahiert, indem man die Zähler addiert/subtrahiert und den Nenner beibehält; ungleichnamige werden zuerst gleichnamig gemacht (Hauptnenner). Brüche werden multipliziert, indem Zähler mit Zähler und Nenner mit Nenner multipliziert werden. Durch einen Bruch dividiert man, indem man mit dem umgekehrten (reziproken) Bruch multipliziert.",
          examples: [
            { problem: "5/x + 3/y", solution: "= (5y + 3x) / xy" },
            { problem: "3/4 : 7/10", solution: "= 3/4 · 10/7 = 30/28 = 15/14" }
          ],
          exercises: [
            { task: "1/2 + 1/3 + 1/4 =", answer: "13/12 (= 1 1/12)" },
            { task: "3/15 · 4/25 · 5/24 =", answer: "1/150" },
            { task: "252/121 : 12 =", answer: "21/121" },
            { task: "15a² : (2/a) =", answer: "15a³/2" }
          ] },
        { chapter: "VI.1–2", title: "Gleichungen 1. Grades: Grundlagen & Umformung",
          explain: "Eine Gleichung verbindet zwei Ausdrücke mit dem Gleichheitszeichen. Sie darf umgeformt werden, ohne die Gleichheit zu stören: 1) auf beiden Seiten darf dieselbe Zahl addiert oder subtrahiert werden, 2) beide Seiten dürfen mit derselben Zahl (≠0) multipliziert oder dividiert werden. Ziel ist, die Unbekannte allein auf einer Seite zu isolieren – zum Schluss immer die Probe machen.",
          examples: [
            { problem: "x + 7 = 10", solution: "x = 10 − 7 = 3   Probe: 3 + 7 = 10" },
            { problem: "5x − 8 = 12", solution: "5x = 20 → x = 4   Probe: 5·4−8=12" }
          ],
          exercises: [
            { task: "x + 5 = 14", answer: "x = 9" },
            { task: "15g = 75", answer: "g = 5" },
            { task: "4a + a = 20", answer: "a = 4" },
            { task: "(5x + 1) + (2x + 3) = 18", answer: "7x + 4 = 18 → 7x = 14 → x = 2" }
          ] },
        { chapter: "VI.3–4", title: "Zusammengesetzte Gleichungen & Bruchgleichungen",
          explain: "Bei zusammengesetzten Gleichungen wird zuerst jede Klammer aufgelöst, dann werden gleichartige Glieder auf jeder Seite zusammengefasst, bevor die Unbekannte isoliert wird. Bei Bruchgleichungen bringt man zuerst alle Glieder auf den gemeinsamen Nenner (Hauptnenner) und multipliziert die ganze Gleichung damit – danach ist sie bruchfrei und wird wie gewohnt gelöst.",
          examples: [
            { problem: "(x − 3)(x + 5) = x² + 25", solution: "x²+2x−15 = x²+25 → das x² fällt weg → 2x = 40 → x = 20" },
            { problem: "x/5 + x/3 + 2 = 10", solution: "3x/15 + 5x/15 = 8 → 8x/15 = 8 → 8x = 120 → x = 15" }
          ],
          exercises: [
            { task: "(a + 3)² + (a + 2)² = (a + 5)² + (a + 1)²", answer: "2a²+10a+13 = 2a²+12a+26 → −13 = 2a → a = −6,5" },
            { task: "x/3 + x/4 = 42", answer: "7x/12 = 42 → 7x = 504 → x = 72" },
            { task: "1/g + 1/(2g) = 3", answer: "3/(2g) = 3 → 3 = 6g → g = 0,5" }
          ] },
        { chapter: "VI.5", title: "Buchstabengleichungen",
          explain: "Neben der Unbekannten (meist x) kommen weitere Buchstaben als bekannte Grössen vor. Es gelten dieselben Umformungsregeln wie bei Zahlengleichungen; das Ergebnis ist ein Term in den übrigen Buchstaben statt einer einzelnen Zahl.",
          examples: [
            { problem: "x + a = b", solution: "x = b − a" },
            { problem: "ax − b = cx + d", solution: "ax − cx = b + d → x(a−c) = b+d → x = (b+d)/(a−c)" }
          ],
          exercises: [
            { task: "x + r = s", answer: "x = s − r" },
            { task: "ax + bx = c", answer: "x(a+b) = c → x = c/(a+b)" },
            { task: "x/a = 1", answer: "x = a" }
          ] },
        { chapter: "VII", title: "Angewandte Aufgaben (Textaufgaben)",
          explain: "Vorgehen in 4 Schritten: 1) Wahl der Unbekannten – welche gesuchte Grösse wird x genannt? 2) Aufstellung der Gleichung aus dem Text. 3) Auflösung der Gleichung. 4) Probe – erfüllt das Ergebnis die Bedingungen der Aufgabe?",
          examples: [
            { problem: "Ich denke mir eine Zahl, zähle 6 dazu und verdopple die Summe. Das ergibt gleich viel, wie wenn ich vom Dreifachen der Zahl 10 subtrahiere. Wie heisst die Zahl?", solution: "Gleichung: (x+6)·2 = 3x−10 → 2x+12 = 3x−10 → x = 22   Probe: (22+6)·2=56 ; 3·22−10=56" }
          ],
          exercises: [
            { task: "Welche Zahl muss man zu 14,5 addieren, um 20 zu erhalten?", answer: "x + 14,5 = 20 → x = 5,5" },
            { task: "Das Dreifache und das Fünffache einer Zahl geben zusammen 56. Wie gross ist die Zahl?", answer: "3x + 5x = 56 → 8x = 56 → x = 7" },
            { task: "Der Umfang eines Rechtecks misst 72 m, die Länge ist 4 m grösser als die Breite. Wie lang und breit ist es?", answer: "2(l+b)=72 → l+b=36, mit l=b+4 → 2b+4=36 → b=16 m, l=20 m" }
          ] },
        { chapter: "VIII", title: "Die Proportion",
          explain: "Zwei Grössen gleicher Art werden im Verhältnis a:b verglichen. Sind zwei Verhältnisse gleich (a:b = c:d), spricht man von einer Proportion. Es gilt die Produktengleichung: das Produkt der äusseren Glieder ist gleich dem Produkt der inneren Glieder (a·d = b·c). Damit lässt sich in einer Proportion die vierte, unbekannte Grösse (die vierte Proportionale) berechnen.",
          examples: [
            { problem: "Prüfe: 5:8 = 15:24", solution: "Produktengleichung: 5·24 = 8·15 → 120 = 120 ✓ Proportion stimmt" }
          ],
          exercises: [
            { task: "Kürze das Verhältnis 9:12", answer: "3:4" },
            { task: "Löse die Proportion: 5:8 = 10:x", answer: "5x = 8·10 = 80 → x = 16" },
            { task: "Eine Familie hat Fr. 5400.– Einkommen und zahlt Fr. 1200.– Miete. In welchem (gekürzten) Verhältnis steht Einkommen zu Mietzins?", answer: "5400:1200, gekürzt durch 600 → 9:2" }
          ] },
        { chapter: "IX", title: "Gleichungen mit zwei und drei Unbekannten",
          explain: "Bei zwei Gleichungen mit zwei Unbekannten gibt es drei Lösungswege: Einsetzungsmethode (eine Gleichung nach einer Unbekannten auflösen und einsetzen), Additions-/Subtraktionsmethode (Gleichungen so multiplizieren, dass eine Unbekannte beim Addieren/Subtrahieren wegfällt) und Gleichungsmethode (beide nach derselben Unbekannten auflösen und gleichsetzen). Bei drei Unbekannten eliminiert man zuerst eine, bis zwei Gleichungen mit zwei Unbekannten übrig bleiben.",
          examples: [
            { problem: "3x + 4y = 64 ; 2x − y = 6  (Einsetzungsmethode)", solution: "aus 2): y = 2x−6, eingesetzt in 1): 3x+4(2x−6)=64 → 11x=88 → x=8, y=10" },
            { problem: "2x + 3y = 28 ; 3x − 2y = 3  (Additionsmethode)", solution: "1)·2: 4x+6y=56 ; 2)·3: 9x−6y=9 → addieren: 13x=65 → x=5, y=6" }
          ],
          exercises: [
            { task: "x + y = 17 ; x − y = 9", answer: "addieren: 2x=26 → x=13, y=4" },
            { task: "Die Summe zweier Zahlen beträgt 600, ihre Differenz 100. Wie heissen die Zahlen?", answer: "x+y=600, x−y=100 → 2x=700 → x=350, y=250" }
          ] }
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
