---
description: "Use when writing, adding, or modifying FastAPI backend code. Covers route structure, Pydantic models, dependency management, and uv conventions."
applyTo: "backend/**"
---

## Route structure

- One file per route group under `backend/app/routes/`.
- Each file exports a single `router = APIRouter()`.
- Register every new router in `backend/app/main.py` with `app.include_router(router)`.
- Reference: see `backend/app/routes/message.py` and `backend/app/main.py`.

## Pydantic models

- Every request body and response body must be a `BaseModel` subclass.
- Define request and response models in the same route file.
- Use `Field(...)` for required fields; add `min_length`/`max_length` where appropriate.
- Annotate route return types with the response model: `response_model=XxxResponse`.

## Dependencies

- Add packages to `[project] dependencies` in `backend/pyproject.toml`.
- Run with `uv run fastapi dev app/main.py` from the `backend/` directory.
- Do not pin exact versions unless there's a known incompatibility — use `>=` bounds.

## HTTP conventions

- Return 422 (via `HTTPException`) for semantic validation failures not caught by Pydantic.
- Do not swallow exceptions silently; let FastAPI's default exception handlers surface errors.
- Avoid business logic in route handlers — extract it to a helper function if it's more than a few lines.

## CORS

- CORS is pre-configured in `main.py` for `http://127.0.0.1:5173`. Do not add per-route CORS headers.
