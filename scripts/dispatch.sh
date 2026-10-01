#!/bin/bash
# Usage: ./dispatch.sh "your command here"
COMMAND=$1
# Token is now handled via environment variables for security
TOKEN="${GH_TOKEN}"

echo "{\"cmd\": \"$COMMAND\"}" > /home/infuselink/mesh/scripts/task.json
git add /home/infuselink/mesh/scripts/task.json
git commit -m "Dispatch: $COMMAND"
git push https://JesusIsGod33:${TOKEN}@github.com/JesusIsGod33/InfuseLink.git main
echo "[DISPATCHED] Logic sent to GitHub Ghost Node."
