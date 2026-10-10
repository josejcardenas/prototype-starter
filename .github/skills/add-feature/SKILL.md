---
name: add-feature
description: "Add a new full-stack feature to the prototype: backend route, frontend API helper, and UI component. Use when adding a new endpoint, wiring up a new UI flow, or extending the prototype beyond the starter example."
argument-hint: "Describe the feature to add (e.g. 'a /summarize endpoint that returns a summary of user input')"
---

# Add Feature

Adds a complete feature end-to-end: FastAPI route → `api.js` helper → frontend component.

## When to use

- Adding a new backend endpoint
- Wiring up a new UI form or interaction
- Replacing the starter message demo with the prototype-specific workflow

## Procedure

### 1. Backend route

1. Create `backend/app/routes/<feature>.py`.
2. Define `router = APIRouter()`.
3. Add request/response Pydantic models (`BaseModel`) in the same file.
4. Implement the route handler.
5. In `backend/app/main.py`, add:
   ```python
   from app.routes.<feature> import router as <feature>_router
   app.include_router(<feature>_router)
   ```

Reference pattern: [message.py](../../backend/app/routes/message.py)

### 2. Frontend API helper

In `frontend/src/api.js`, add a new exported async function:

```js
export async function callFeature(apiBaseUrl, payload) {
  const response = await fetch(`${apiBaseUrl}/<endpoint>`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(data?.detail || "Request failed.");
  return data;
}
```

Never call `fetch` directly inside a component.

### 3. Frontend component

1. Create `frontend/src/components/render<Feature>.js`.
2. Export a single function `render<Feature>(root, state)`.
3. Set `root.innerHTML` with the HTML, then attach event listeners — no innerHTML after initial render.
4. Import the API helper from `../api.js`.
5. Wire the component into `frontend/src/main.js`.

Reference pattern: [shell.js](../../frontend/src/components/shell.js)

### 4. State (if needed)

If the feature needs new shared state, add the field to `createInitialState()` in `frontend/src/state.js` with a sensible default.

### 5. Update the spec

Mark the feature as **In Progress** in the Feature Tracker section of [prototype_spec.md](../../prototype_spec.md). Update to **Done** once verified end-to-end.
