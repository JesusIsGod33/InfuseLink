import os
from datetime import datetime

KB_DIR = os.path.expanduser("~/ecosystem/knowledge_base/logs")

def log_event(title, content):
    os.makedirs(KB_DIR, exist_ok=True)
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    filepath = os.path.join(KB_DIR, f"{timestamp}_{title.lower().replace(' ', '_')}.md")
    with open(filepath, "w") as f:
        f.write(f"# {title}\n*Timestamp: {timestamp}*\n\n{content}\n")
    print(f"[KB] Logged: {filepath}")

if __name__ == "__main__":
    log_event("Ecosystem Boot", "Unified system spine initialized successfully.")
