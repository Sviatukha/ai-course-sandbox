---
name: diff-getter
description: Get the diff of branch
allowed-tools: Bash(git diff $ARGUMENTS)
user-invocable: false
agent: review-by-requirements
context:  fork
---
diff: !`git diff main...HEAD`
requirements: !`cat docs/backlog.md`
