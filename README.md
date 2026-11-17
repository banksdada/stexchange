# UK Student Exposure Programme — stexchange.baseuse.xyz

Public credibility site (Phase 1) for the BJK Global Consult UK Student Exposure Programme, built on the Quick-Stack template.

- `packages/ui` — Next.js 14 + Tailwind: home, how it works, eligibility, safeguards, universities, FAQ, contact, privacy.
- `packages/api` — FastAPI + SQLModel: stores enquiries (`POST /enquiries`), token-protected list (`GET /admin/enquiries`), `GET /health`.

The contact form posts to the Next.js route `/api/enquiry`, which forwards to the API using the runtime variable `API_URL`.

## Run locally
```
cp .env.template .env
docker compose up --build        # site on http://localhost:3000
```

## Deploy on Coolify
Create two applications from this repo (Dockerfile build, base directory `/`):
1. **api** — Dockerfile `packages/api/Dockerfile`, port 8000, add a PostgreSQL database and set `DATABASE_URL`, `ADMIN_TOKEN`, optional SMTP vars.
2. **ui** — Dockerfile `packages/ui/Dockerfile`, port 3000, domain `stexchange.baseuse.xyz`, set `API_URL` to the api service's internal URL and `NEXT_PUBLIC_SITE_URL`.

## Tests
`packages/api/tests` (pytest). Content comes from the programme documents; partner names, statistics and visa claims are deliberately not published until confirmed.
