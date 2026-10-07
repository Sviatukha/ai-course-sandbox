# Бэклог песочницы

Задачи для практики. Один шаг за раз; на каждую заводи ветку `feat/<имя>`.

## Модуль 2. Рабочий процесс

- [ ] **SignupForm**: форма регистрации (email, пароль, подтверждение) на базе `TextField` и `Button`.
  - Валидация: email по формату, пароль от 8 символов, пароли совпадают.
  - Ошибки показываются после blur и после submit.
  - Тесты на RTL для каждого правила. Новых библиотек не добавлять.
  - Итог: коммит и PR (нужен remote: создай пустой репозиторий и `git remote add origin ...`).
- [ ] Заметка `docs/notes/module-2.md`: где пришлось поправлять ИИ и почему.

## Модуль 3. CLAUDE.md и разрешения

- [ ] `/init`, сократить вдвое, довести до ~50 строк.
- [ ] Добавить 5–7 правил (подсказка: хуки из `src/hooks`, один `api` из `src/api/client.ts`).
- [ ] Разрешения для `npm test`, `npm run lint`, `git commit` в `.claude/settings.json`.

## Модуль 4. Skills

- [ ] `/new-component <Имя>`: компонент + css + тест по образцу `Button`.
- [ ] `/review-pr <номер>` (`disable-model-invocation: true`, `allowed-tools: Bash(gh *)`).
- [ ] Фоновый skill `api-conventions` по `src/api/client.ts`.

## Модуль 5. Hooks

- [ ] `PostToolUse`: Prettier + ESLint для изменённого файла.
- [ ] `PreToolUse`: блок правок `.env` и `package-lock.json` (exit 2).
- [ ] `Stop`: `npm run typecheck && npm test`, учесть `stop_hook_active`.
- Проверка: попроси Claude изменить `.env` и испортить форматирование в `src/App.tsx`.

## Модуль 6. Субагенты

- [ ] `a11y-reviewer` (Read, Grep, Glob): запусти на `src/components/legacy/*` — должен найти реальные проблемы.
- [ ] Схема writer/reviewer на задаче из модуля 2.
- [ ] Массовая миграция: классы в `legacy/` → функциональные компоненты, `scripts/files.txt` + цикл `claude -p` (сначала 2 файла, потом все).

## Модуль 7. MCP

- [ ] Подключить трекер задач, пройти «тикет → код → PR».
- [ ] Hook с матчером `mcp__<сервер>__.*` для логирования вызовов.

## Модуль 8. UI-проверка

- [ ] Экран по макету (положи макет в `docs/design/`), скриншот и сверка.
- [ ] Playwright: `npm i -D @playwright/test && npx playwright install chromium`, e2e на ключевой сценарий, добавить в `Stop`-hook.
- [ ] Ревью доступности субагентом.

## Модуль 9. Agent SDK

- [ ] Агент-ревьюер компонентов в отдельной папке `agent/` (TypeScript).
- [ ] 10 входных компонентов с ожидаемыми замечаниями — `agent/evals/`. Основа: `src/components/legacy/*`.

## Модуль 10. Плагин

- [ ] Собрать плагин из skills/hooks/субагентов модулей 4–6 в `plugin/`, `marketplace.json`, `claude plugin validate`.
