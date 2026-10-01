#!/usr/bin/env bash
cd "$(dirname "$0")/.."
if [ ! -d ".git" ]; then
    git init
    git branch -M main
    echo "Initialized local Git repository."
fi
git add .
git commit -m "Auto-sync ecosystem state: $(date +'%Y-%m-%d %H:%M:%S')" || echo "No changes to commit."
echo "[Git Bridge] Repository synchronized."
