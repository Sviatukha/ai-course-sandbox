# CLAUDE.md

## What this repo is

Practice sandbox for the course «Разработка с ИИ на Claude». Tasks are listed per module in `docs/backlog.md`; each task is done on its own `feat/<name>` branch. Documentation, comments and test names are in Russian.

## Commands

| Command | Purpose |
| --- | --- |
| `npx vitest run src/components/Button/Button.test.tsx` | run a single test file |
| `npx vitest run -t "вызывает onClick"` | run tests matching a name |

No new runtime libraries should be added for backlog tasks unless the task says so (React + React DOM only).

## Code structure

- `src/components/<Name>/` — one folder per component: `Name.tsx`, optional `Name.css`, `Name.test.tsx`, and `index.ts` re-exporting the named export.
- `src/hooks/` — shared hooks (`useToggle`). Reuse these before writing new state logic.
- `src/api/client.ts` — the only `fetch` wrapper. all new requests make via client.ts.
- `src/components/legacy/` — four intentionally bad class components, do not "fix" them unless a task asks.

## Rules
- create new components following the example of Button and TextField ( src/components/Button,  src/components/TextField).
- before create new hook check src/hooks, new hooks place here.
- all new elements cover with tests.
- after end changing run tests and lint and  npm run typecheck
- ask before add new component to App.tsx 