#!/bin/bash

FILE=$(jq -r '.tool_input.file_path // empty')
case "$FILE" in
  */.env|*/package-lock.json) 
  echo "No permissions for editing file. Ask user about it." >&2
  exit 2
  ;;
esac
exit 0