import subprocess
import time

def maintain_bridge():
    # Real logic: Keep a persistent SSH tunnel open to a remote listener
    # Replace 'user@remote' with your actual external VM details
    cmd = "ssh -N -R 8080:localhost:8080 user@remote_node_ip"
    while True:
        print("Checking Bridge Integrity...")
        ps = subprocess.run("pgrep -f 'ssh -N -R'", shell=True)
        if ps.returncode != 0:
            print("Bridge Down. Reconnecting...")
            subprocess.Popen(cmd, shell=True)
        time.sleep(60)

if __name__ == "__main__":
    maintain_bridge()
