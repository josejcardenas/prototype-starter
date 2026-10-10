# __PRODUCT_NAME__ Prototype Specification

Use this document as the working prompt, product spec, and feature tracker for the prototype. Keep it current as features are planned, implemented, verified, deferred, or added.

## Prompt To Give Codex

Create a minimal but functional prototype for a tool called **__PRODUCT_NAME__**.

The prototype should help **__TARGET_USER__** solve this problem:

> __PROBLEM_STATEMENT__

Build the MVP first. Prefer real interactions over fake demos. The starter kit begins with a landing page form that sends a message to the FastAPI backend and renders the JSON answer.

## Product Brief

**Product name:** __PRODUCT_NAME__

**Purpose:** __PURPOSE__

**Target user:** __TARGET_USER__

**Problem solved:** __PROBLEM_STATEMENT__

**MVP principle:** Minimal full-stack flow first, then replace the example form with the product workflow.

## MVP Features

- __MVP_FEATURE_1__
- __MVP_FEATURE_2__
- __MVP_FEATURE_3__

## User Flow

1. User opens the Vite frontend.
2. User sees a landing page with the product name and message form.
3. User enters a message and submits it.
4. Frontend sends `POST /message` to the FastAPI backend.
5. Backend validates the message and returns JSON.
6. Frontend renders the answer, echoed message, and character count.
7. Replace the example form with the prototype-specific workflow.

## Architecture

Build the starter as a minimal full-stack app:

- **Frontend:** Vite + vanilla JavaScript.
- **Styling:** Plain CSS.
- **Backend:** FastAPI with `uv`.
- **Communication:** REST API over JSON.
- **Initial endpoint:** `POST /message`.
- **Health endpoint:** `GET /health`.

Optional upgrade path:

- **Execution:** Python services, local database, external API, or job runner as needed.
- **Persistence:** Add only after the basic full-stack workflow is proven.

## App Layers

| Layer | Responsibility | MVP Location | Upgrade Path |
| --- | --- | --- | --- |
| Input layer | Collect and validate user input | Browser form | Backend validation |
| API layer | Send and receive JSON | Frontend API module | Additional REST routes |
| Processing layer | Transform input into useful output | FastAPI route | Python services or database |
| Presentation layer | Render controls, output, states, and feedback | Browser UI | Same frontend with API calls |
| Tracking layer | Track planned, implemented, and verified features | This spec | Project board or issue tracker |

## Suggested Folder Structure

```text
/project
  /frontend
    index.html
    package.json
    vite.config.js
    /src
      main.js
      api.js
      state.js
      /components
        shell.js
      /styles
        styles.css

  /backend
    pyproject.toml
    /app
      main.py
      /routes
        health.py
        message.py
```

## Feature Status Rules

Use only these statuses:

- `Planned`: accepted for implementation but not started.
- `In Progress`: actively being worked on.
- `Implemented`: code exists and the basic flow works.
- `Verified`: manually or automatically tested with evidence.
- `Deferred`: intentionally postponed or out of MVP scope.

## Feature Tracker

| ID | Feature | Layer | Priority | Status | Implemented In | Verification | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MVP-001 | Landing page shell | Frontend | P0 | Planned |  |  | Replace copy for each prototype. |
| MVP-002 | Message form | Frontend | P0 | Planned |  |  | Sends user input to backend. |
| MVP-003 | Message API endpoint | Backend | P0 | Planned |  |  | Returns JSON answer. |
| MVP-004 | __MVP_FEATURE_1__ | Product | P0 | Planned |  |  | Replace starter demo with product workflow. |

## Feature Intake

Use this section for feature ideas before they become planned work.

```text
Feature idea:
User value:
Affected layer:
Dependencies:
Acceptance criteria:
Decision:
```

## Implementation Checklist

- [ ] Confirm the copied starter kit path.
- [ ] Replace all `__PLACEHOLDER__` values.
- [ ] Run frontend and backend together.
- [ ] Confirm the message form receives a backend answer.
- [ ] Replace the starter form with product-specific workflow.
- [ ] Keep controls functional or document them as deferred.
- [ ] Add loading, empty, error, and success states.
- [ ] Update the Feature Tracker while implementing.
- [ ] Add setup instructions to the final project README.
- [ ] Run available checks and record verification evidence.

## Acceptance Criteria

- User can run frontend and backend locally.
- User can submit the landing page form and receive a backend answer.
- User can complete the core MVP flow after the starter form is adapted.
- All visible controls work or are explicitly deferred.
- Error and empty states are handled.
- Feature Tracker reflects actual implementation status.
- Local setup instructions are accurate.

## Test Scenarios

- Valid primary input renders expected output.
- Empty primary input shows a useful message.
- Invalid primary input shows a useful error.
- Repeated interactions do not break state.
- Responsive layout remains usable at desktop and tablet widths.

## Setup Instructions

Frontend:

```bash
cd frontend
nvm use 22
npm install
npm run dev
```

Backend, only if promoted:

```bash
cd backend
uv sync
uv run fastapi dev app/main.py
```
