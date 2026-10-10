# Copilot Agent Instructions

This is a **prototype starter kit** — a minimal full-stack template for spinning up new prototypes quickly. Each prototype replaces placeholder tokens and adds product-specific routes/components on top of the base structure.

## Dev Commands

Run both servers simultaneously (separate terminals):

```bash
# Backend — FastAPI on http://127.0.0.1:8000
cd backend
uv run fastapi dev app/main.py

# Frontend — Vite on http://127.0.0.1:5173
cd frontend
nvm use 22
npm install   # first time only
npm run dev
```

No test suite is included by default. Verify the integration manually: submit the landing-page form and confirm the backend returns JSON.

## Architecture

| Layer | Tech | Entry point |
|---|---|---|
| Frontend | Vite + vanilla JS | `frontend/src/main.js` |
| Backend | FastAPI (Python ≥ 3.11, uv) | `backend/app/main.py` |
| API contract | REST / JSON | `frontend/src/api.js` |

CORS is pre-configured for `http://127.0.0.1:5173` ↔ `http://127.0.0.1:8000`.

## Key Conventions

### Backend
- One file per route group under `backend/app/routes/`. Register each router in `backend/app/main.py` with `app.include_router(...)`.
- Use Pydantic models for all request/response bodies (see `message.py` as the reference).
- Dependencies go in `backend/pyproject.toml` under `[project] dependencies`.
- Use library dependencies and run / test scripts using uv.

### Frontend
- All backend calls go through `frontend/src/api.js`. Add new fetch helpers there, not inline.
- Components are plain functions: `renderX(root, state)`. They write to `root.innerHTML` and attach event listeners.
- Shared state lives in `frontend/src/state.js` via `createInitialState()`. Pass the state object down to components — do not use global variables.
- Styles go in `frontend/src/styles/styles.css`. No CSS framework is used.
- Use nvm tool to select the node version. Select 22 version by default. If you need a more recent one install it and then use it.

## Placeholder Tokens

When starting a new prototype, replace these tokens throughout the codebase:

| Token | Meaning |
|---|---|
| `__PRODUCT_NAME__` | Product / app name |
| `__TARGET_USER__` | Primary user persona |
| `__PROBLEM_STATEMENT__` | One-sentence problem |
| `__PURPOSE__` | Brief product purpose |
| `__MVP_FEATURE_*__` | Numbered MVP features |
| `__ONE_SENTENCE_VALUE_PROP__` | Hero tagline |

## Project Spec

See [prototype_spec.md](prototype_spec.md) for the product brief, MVP features, and feature tracker. Keep it updated as features are planned, implemented, or deferred.
