#!/usr/bin/env bash
set -uo pipefail

WORKSPACE_ROOT="${WORKSPACE_ROOT:-$HOME/ecosystem}"
LOG_DIR="${LOG_DIR:-$WORKSPACE_ROOT/knowledge_base/logs}"
TIMESTAMP=$(date '+%Y-%m-%d_%H-%M-%S')
LOG_FILE="$LOG_DIR/${TIMESTAMP}_orchestrator_run.md"

mkdir -p "$LOG_DIR"

echo "# Orchestrator Execution Log - $TIMESTAMP" > "$LOG_FILE"
echo '```' >> "$LOG_FILE"

{
    echo "[*] Initializing repository resolution..."
    python3 "$WORKSPACE_ROOT/workspace_orchestrator/orchestrator/resolver.py"

    echo "[*] Executing task chain..."
    if [ -f "$WORKSPACE_ROOT/workspace_orchestrator/task.json" ]; then
        python3 "$WORKSPACE_ROOT/workspace_orchestrator/orchestrator/chain.py" "$WORKSPACE_ROOT/workspace_orchestrator/task.json"
    else
        echo "[*] No task.json found, skipping chain."
    fi
} 2>&1 | tee -a "$LOG_FILE"

echo '```' >> "$LOG_FILE"
echo "[*] Run complete. Log saved to $LOG_FILE"
