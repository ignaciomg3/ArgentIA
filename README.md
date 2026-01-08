# ArgentIA Landing Page

A simple, robust landing page for a technology infrastructure consulting firm.

## Preview Locally (Windows)

Option 1: VS Code Live Server

1. Install the "Live Server" extension in VS Code.
2. Open this folder in VS Code.
3. Right click `index.html` and choose "Open with Live Server".

Option 2: Python HTTP server

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Option 3: Node (if available)

```powershell
npx serve .
```

## Customize
- Replace the logo at `img/logo de argentIA.png` with your own.
- Update copy in sections: Services, Approach, Clients, Contact.
- Set your contact email in `app.js` (`to = "hello@argentia.consulting"`).

## Structure
- `index.html` — semantic layout and sections
- `estilo.css` — styles (dark theme, responsive grid)
- `app.js` — mobile nav + mailto contact
- `img/` — assets (logo)
