#!/bin/bash
       
LIST="$1"

while read -r file; do
  echo "=== $file"
  claude -p "выполни миграцию  $file из классового react компонента в функциональный; поведение, разметка, структура должны остаться тем же. для редактироввния пользуйся инструментам Edit " \
    --allowedTools "Read,Edit" < /dev/null
    echo "exit: $?"
done < "$LIST"
