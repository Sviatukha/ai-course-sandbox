#!/bin/bash

INPUT=$(cat)
ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active')
if [ "$ACTIVE" = "true" ]; then
  echo "Stop hook is active. Exiting." >&2
  exit 0
fi
cd "$CLAUDE_PROJECT_DIR"
OUTPUT=$(NO_COLOR=1 npm run typecheck 2>&1)
if [ $? -ne 0 ]; then
  echo "Type check failed:" >&2
  echo "$OUTPUT"  | tail -40 >&2
  exit 2
fi
OUTPUT=$(NO_COLOR=1 npm run test 2>&1)
if [ $? -ne 0 ]; then
  echo "Tests failed:" >&2
  echo "$OUTPUT"  | tail -40 >&2
  exit 2
fi
exit 0

