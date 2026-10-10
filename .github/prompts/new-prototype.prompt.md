---
description: "Initialize a new prototype by replacing all placeholder tokens throughout the codebase. Use when starting a new prototype from the starter kit."
name: "New Prototype"
argument-hint: "Product name, target user, problem statement"
agent: "agent"
---

Replace every placeholder token in this codebase with real product values. Follow the steps below exactly.

## Inputs needed

Ask the user to confirm or provide these values before making any changes. If the argument already contains them, extract them from there.

| Token | Value to collect |
|---|---|
| `__PRODUCT_NAME__` | The product or app name (e.g. "TaskFlow") |
| `__TARGET_USER__` | Primary user persona (e.g. "solo freelancers") |
| `__PROBLEM_STATEMENT__` | One-sentence problem the product solves |
| `__PURPOSE__` | Brief product purpose (1–2 sentences) |
| `__ONE_SENTENCE_VALUE_PROP__` | Hero tagline shown on the landing page |
| `__MVP_FEATURE_1__` | First MVP feature (short noun phrase) |
| `__MVP_FEATURE_2__` | Second MVP feature |
| `__MVP_FEATURE_3__` | Third MVP feature |

## Steps

1. **Collect values** — Confirm all token values with the user before editing any file.
2. **Replace tokens** — Do a global find-and-replace for each token in every file in the workspace. Do not rename files.
3. **Verify** — Grep for any remaining `__` tokens and report them to the user.
4. **Update prototype_spec.md** — Ensure the Feature Tracker section reflects the three MVP features as "Planned".
5. **Summarize** — List every file that was changed.
