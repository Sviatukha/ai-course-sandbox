#!/bin/bash

input=$(cat)
tool=$(jq -r '.tool_name' <<< "$input")

echo "Tool used: $tool at $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$CLAUDE_PROJECT_DIR"/.claude/mcp-calls.log

exit 0