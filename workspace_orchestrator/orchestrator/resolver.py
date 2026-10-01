#!/usr/bin/env python3
import os
import json
import subprocess
import sys

def run_cmd(cmd, cwd=None):
    print(f"[Resolver] Executing: {cmd}")
    result = subprocess.run(cmd, shell=True, cwd=cwd, text=True, capture_output=True)
    if result.returncode != 0:
        print(f"[Error] Command failed: {result.stderr}")
    return result.returncode == 0, result.stdout

def main():
    manifest_path = os.path.expanduser("~/ecosystem/workspace_orchestrator/manifest.json")
    if not os.path.exists(manifest_path):
        print(f"[Error] Manifest not found at {manifest_path}")
        sys.exit(1)

    with open(manifest_path, "r") as f:
        data = json.load(f)

    for repo in data.get("repositories", []):
        name = repo["name"]
        url = repo["url"]
        branch = repo["branch"]
        path = os.path.expanduser(repo["local_path"])

        if os.path.exists(path) and os.path.exists(os.path.join(path, ".git")):
            print(f"[Resolver] Repository {name} exists. Pulling latest state...")
            run_cmd(f"git pull origin {branch} --allow-unrelated-histories", cwd=path)
        else:
            print(f"[Resolver] Cloning {name} from {url}...")
            os.makedirs(path, exist_ok=True)
            run_cmd(f"git clone -b {branch} {url} .", cwd=path)

if __name__ == "__main__":
    main()
