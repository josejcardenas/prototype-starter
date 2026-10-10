# Prototype Starter Kit

Use this starter kit when creating a new full-stack prototype. It gives each prototype the same basic shape:

- a reusable prompt/spec document
- a Vite + vanilla JavaScript landing page
- a FastAPI backend with a working message endpoint
- feature tracking from idea intake through verification

## How To Use

1. Copy this directory into a new prototype workspace.
2. Rename placeholders such as `__PRODUCT_NAME__`, `__TARGET_USER__`, and `__MVP_FEATURE_*__`.
3. Fill in `prototype_spec.md` before implementation starts.
4. Keep the Feature Tracker updated as work is implemented.
5. Use the working form-to-backend flow as the first integration check.

Example:

```bash
mkdir -p prototypes
cp -R templates/prototype_starter_kit prototypes/my_new_prototype
cd prototypes/my_new_prototype
```

## Included Structure

```text
prototype_starter_kit
  README.md
  prototype_spec.md
  frontend
    index.html
    package.json
    vite.config.js
    src
      main.js
      api.js
      state.js
      components
        shell.js
      styles
        styles.css
  backend
    pyproject.toml
    app
      main.py
      routes
        health.py
        message.py
```

## Frontend

The frontend is intentionally minimal:

- Vite
- vanilla JavaScript
- no UI framework
- landing page shell
- form that sends a message to FastAPI
- stable layout for fast prototyping

Run it with:

```bash
cd frontend
nvm use 22
npm install
npm run dev
```

For the starter smoke test, run the backend in one terminal and the frontend in a second terminal, then submit the landing-page form.

## Backend

The backend is intentionally tiny but functional:

- `GET /health` returns service status
- `POST /message` accepts `{ "message": "..." }`
- the response includes an answer, echoed message, and character count

Run it with:

```bash
cd backend
uv sync
uv run fastapi dev app/main.py
```

## Status Rules

Use only these feature statuses:

- `Planned`
- `In Progress`
- `Implemented`
- `Verified`
- `Deferred`

Do not mark a feature as `Verified` unless the verification column contains evidence.
