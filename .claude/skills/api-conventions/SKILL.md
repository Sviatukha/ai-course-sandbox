---
name: api-conventions
description:  Conventions for making HTTP requests in this project -  always via the api() wrapper in src/api/client.ts. Use when adding or reviewing a network request, a new src/api/<resource>.ts file, or a fetch call. api conventions, how to call the API, add request, fetch wrapper, ApiError, правила работы с API, какделать запрос.
user-invocable: false
---

# API conventions

All network access goes through the single wrapper  in `src/api/client.ts`. Components and hooks never call `fetch` directly — they import functions from `src/api/<resource>.ts`, which call `api`.


- **Base URL** — `BASE_URL` (`VITE_API_URL`, or `''` when unset) is prepended to `path`. Pass a relative path (`/users`), never a full URL.
- **Headers** — `Content-Type: application/json` is set by default. Because `...init` is spread *after* `headers`, your own `init.headers` **replaces** the default object (no per-key merge). To add `Authorization` and keep `Content-Type`, pass both in your `headers`.
- **Errors** — on `!res.ok` it throws `ApiError(status, statusText)`, a class with a numeric `.status` field.
- **Success** — always parses `res.json()` and returns it typed as `T`.

## Rules for calling code

1. Pass a **relative `path`**; don't build URLs or set `Content-Type` by hand.
2. **Set the response type** via the generic: `api<User[]>('/users')`. Without it you get `unknown`.
3. **Serialize the body yourself**: `api('/signup', { method: 'POST', body: JSON.stringify(values) })`. The wrapper does not call `JSON.stringify`.
4. **Catch `ApiError`** and branch on `.status` (401 → login, 404 → not found, …). Import it: `import { ApiError } from './client'`.
5. When passing **custom headers**, include the full set (incl. `Content-Type`) — `init.headers` overwrites the default, it doesn't merge.
6. `api` **always calls `res.json()`** — it is not suitable for empty-body responses (e.g. `204 No Content`).

