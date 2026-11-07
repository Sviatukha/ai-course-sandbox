---
name: diff-getter
description: use for getting diff of current branch from main. Call after editing or new tsx or html files
allowed-tools: Bash(git diff $ARGUMENTS)
user-invocable: false
agent: review-by-requirements
context:  fork
---
diff: !`git diff main...HEAD`
requirements: !`cat docs/backlog.md`
