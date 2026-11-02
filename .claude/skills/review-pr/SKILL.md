---
name: review-pr
description: Review a pull request by number, check for matching the requirements, find issues
argument-hint: '[pull request number]'
allowed-tools: Bash(gh *)
disable-model-invocation:  true
---
diff: !`gh pr diff $ARGUMENTS`
discr: !`gh pr view $ARGUMENTS`

Task requirements in 'docs/backlog.md'
Answer at english

1 - Check the diff for code issues, potential bugs, and meets the requirements:
  -  new components created following the example of Button and TextField ( src/components/Button,  src/components/TextField).
  - new hook does not duplicate existing hooks in src/hooks.
  - all new elements covered with tests.

2 - if issues are found, say it
3 - show result as a list of issues, including file and line references, ordered by descending importance—suitable for inclusion as a comment in a PR