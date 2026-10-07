# AI Course Sandbox

Учебный React-проект для практики курса «Разработка с ИИ на Claude» (`~/Downloads/ai-course`).
Здесь выполняются задания модулей 2–10, чтобы не трогать рабочие репозитории.

## Стек

Vite, React 19, TypeScript, Vitest + React Testing Library, ESLint (+ jsx-a11y), Prettier.

## Команды

| Команда             | Что делает                |
| ------------------- | ------------------------- |
| `npm run dev`       | dev-сервер                |
| `npm test`          | тесты (один прогон)       |
| `npm run lint`      | ESLint                    |
| `npm run typecheck` | `tsc` без эмиссии         |
| `npm run build`     | типы + сборка             |
| `npm run format`    | Prettier по всему проекту |

## Что в репозитории

- `src/components/Button`, `TextField` — эталонные компоненты с тестами: образец «существующего паттерна».
- `src/hooks/` — общие хуки (в модуле 3 можно записать правило «используй хуки отсюда»).
- `src/api/client.ts` — единственная обёртка над `fetch` (для skill `api-conventions`, модуль 4).
- `src/components/legacy/` — четыре намеренно плохих компонента (a11y, классы). Материал для модулей 6, 8, 9. Исключены из ESLint.
- `scripts/files.txt` — список файлов для массовой миграции (модуль 6).
- `.env` — фейковая заглушка без реальных секретов, для проверки hook-защиты (модуль 5). В git не попадает.
- `docs/backlog.md` — задания по модулям.

## Чего здесь намеренно нет

`CLAUDE.md`, `.claude/`, skills, hooks, субагентов, MCP. Их ученик создаёт сам по ходу курса.
