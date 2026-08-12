# Konstrukteurspult

Persönliche Lernplattform für die Zusatzlehre **Metallbaukonstrukteur/in EFZ**. Alle 4 Semester des Ausbildungsprogramms, jeder Themenbereich einzeln anwählbar, mit eigenen Erklärungen, Lernmethoden, einem Notizfeld zum Einfüttern von Unterrichtsstoff sowie Fortschrittsbalken pro Semester und gesamthaft.

## Struktur

Reine statische Web-App, kein Build-Schritt nötig:

```
index.html      Seitenstruktur
css/style.css    Design (Light/Dark, responsive)
js/data.js       Lehrplan-Daten (Semester, Themen, Erklärungen, Formeln, Lernmethoden)
js/app.js        Rendering, Filter/Suche, Fortschritt, Notizen (localStorage)
```

Fortschritt und eigene Notizen werden ausschliesslich lokal im Browser gespeichert (`localStorage`), es gibt keinen Server und keine Datenbank.

## Lokal öffnen

Einfach `index.html` im Browser öffnen, oder mit einem simplen lokalen Server:

```bash
npx serve .
# oder
python3 -m http.server 8080
```

## Deployment auf Vercel

1. Dieses Repository bei [vercel.com](https://vercel.com) importieren ("Add New… → Project → Import Git Repository").
2. Framework Preset: **Other** (kein Build-Schritt, keine Konfiguration nötig).
3. Root Directory: `.` (Standard) lassen.
4. Deploy klicken – fertig, die Seite ist danach unter der Vercel-URL erreichbar.

Jeder Push auf den verbundenen Branch erstellt automatisch ein neues Deployment (Preview-Deployments für andere Branches, Production-Deployment für den Hauptbranch).

## Inhalte erweitern

Neue oder geänderte Themen werden direkt in `js/data.js` im `CURRICULUM`-Array gepflegt (Semester → Themen → `name`, `lekt`, `tb`, `explain`, optional `formulas`, `method`). Neue Themenbereich-Codes (`TB13`, …) zusätzlich in `TB_NAMES` benennen.
