# ehi-connect

Public pages for the app, served at https://offtherecordhealth.com (GitHub Pages, custom domain in `CNAME`).

- index.html: a short home page.
- epic-return/: the page a hospital's sign-in returns to. It hands the one-time sign-in code to the app running on the same computer or phone (127.0.0.1) and removes it from the address bar. It loads nothing from elsewhere and never sees a password or access token.
- terms/ and privacy/: the terms of use and the health privacy policy. Copied from the main repository's `web/terms/` and `web/health-privacy/`; change them there first. Final text approved by the owner on 2026-11-03.
