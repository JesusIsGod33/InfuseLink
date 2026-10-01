import subprocess
import json

def deploy_to_nodes():
    with open('/home/infuselink/mesh/memory.json', 'r') as f:
        data = json.load(f)
    
    nodes = data.get("node_details", [])
    for node in nodes:
        if node['ip'] != "localhost" and node['status'] == "ONLINE":
            print(f"Deploying logic to {node['ip']}...")
            # Create directory on remote
            subprocess.run(["ssh", "-i", "/home/infuselink/mesh/scripts/id_nexus", node['ip'], "mkdir -p ~/mesh_agent"])
            # Push the sovereign core
            subprocess.run(["scp", "-i", "/home/infuselink/mesh/scripts/id_nexus", "/home/infuselink/mesh/scripts/sovereign_core.py", f"{node['ip']}:~/mesh_agent/"])
            # Start the core on the remote node
            subprocess.run(["ssh", "-i", "/home/infuselink/mesh/scripts/id_nexus", node['ip'], "nohup python3 ~/mesh_agent/sovereign_core.py > /dev/null 2>&1 &"])
            print(f"Node {node['ip']} is now an active agent.")

if __name__ == "__main__":
    deploy_to_nodes()
