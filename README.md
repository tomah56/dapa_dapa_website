# Dapadapa landing page

A responsive, static prelaunch website for Dapadapa. The page introduces the mentality, explains the app, and offers three interactive sample challenges.

## Files

The complete website lives in the repository root:

- `index.html` — landing page
- `style.css` — responsive styles
- `app.js` — interactive challenge preview
- `icon.svg` — favicon
- `.nojekyll` — serves the files directly on GitHub Pages

There is no build step, backend, database, or package installation.

## Preview

Run `python3 -m http.server 4173` from this directory, then open `http://localhost:4173`.

## Deployment

1. Commit and push the website files to `main` on GitHub.
2. Open the repository's **Settings → Pages**.
3. Select **Deploy from a branch**, choose **main** and **/ (root)**, and save.

GitHub Pages will publish at `https://tomah56.github.io/dapa_dapa_website/` once deployment completes. Asset paths are relative, so they work under that repository URL or a custom domain. Future pushes to `main` deploy automatically. No custom Actions workflow is required.

The challenge preview runs only in the browser and resets on reload. No personal information is collected. Fonts load from Google Fonts with system fallbacks. The page intentionally has no signup or app-store links until launch destinations are supplied.
