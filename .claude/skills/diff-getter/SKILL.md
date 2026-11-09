---
name: diff-getter
description: Собирает дифф ветки (git diff main...HEAD) и бэклог и передаёт их агенту review-by-requirements для ревью на соответствие требованиям. Вызывается для ревью текущей ветки, не напрямую пользователем.
allowed-tools: Bash(git diff main...HEAD), Bash(cat docs/backlog.md)
user-invocable: false
agent: review-by-requirements
context: fork
---

diff: !`git diff main...HEAD`
requirements: !`cat docs/backlog.md`
