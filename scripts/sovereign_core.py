import json
import os
import subprocess

def execute_task():
    task_file = 'mesh/scripts/task.json'
    if os.path.exists(task_file):
        with open(task_file, 'r') as f:
            task = json.load(f)
            cmd = task.get('cmd')
            if cmd:
                print(f"Executing: {cmd}")
                subprocess.run(cmd, shell=True)

if __name__ == "__main__":
    execute_task()
    print("Node active and listening.")
