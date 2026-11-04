#!/bin/bash

FILE=$(jq -r '.tool_input.file_path // empty')
cd "$CLAUDE_PROJECT_DIR"
npx prettier --write --ignore-unknown "$FILE"
case "$FILE" in
  *.ts|*.tsx) 
  if ! npx eslint "$FILE" 1>&2; 
    then exit 2;
  fi;;
esac
exit 0