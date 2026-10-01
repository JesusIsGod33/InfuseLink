#!/usr/bin/env python3
import sys
import json
import subprocess

def main():
    print("[Chain] Starting DAG Task Execution Engine...")
    task_file = sys.argv[1] if len(sys.argv) > 1 else "task.json"
    
    try:
        with open(task_file, "r") as f:
            tasks = json.load(f)
    except FileNotFoundError:
        print(f"[Chain] No task file found at {task_file}. Exiting.")
        sys.exit(0)

    for task in tasks.get("steps", []):
        name = task.get("name", "Unnamed Task")
        cmd = task.get("command")
        print(f"[Chain] Running step: {name} -> {cmd}")
        res = subprocess.run(cmd, shell=True, text=True)
        if res.returncode != 0:
            print(f"[Error] Step '{name}' failed with code {res.returncode}")
            sys.exit(res.returncode)

    print("[Chain] All task steps completed successfully.")

if __name__ == "__main__":
    main()
