# Happy Loy Krathong 💙

A tiny private greeting site with a password gate, a short Q&A flow, and a server route that forwards answers to Web3Forms (or SMTP if you prefer).

## Quick start

```bash
# 1) Install deps
npm install

# 2) Copy env and fill values
cp .env.local.example .env.local

# 3) Run
npm run dev
```

If you prefer to re-create via `create-next-app`:

```bash
npx create-next-app@latest happy-loy-krathong --ts --eslint --tailwind --app --src-dir false --import-alias "@/*"
```

## Environment variables

- `SITE_PASS` – password for the gate (server only)
- `WEB3FORMS_ACCESS_KEY` – your Web3Forms access key (free)
- Optional SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SEND_TO`

## Notes

- Cookie name: `lk_auth`
- Middleware protects everything except `/` and `/api/login`.
- Not intended for strong security; just a sweet private page.

