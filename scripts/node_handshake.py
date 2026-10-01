import subprocess, json, os

def update_mesh():
    # ADD YOUR NEW CLOUD IPs HERE after running /node_assimilate on them
    nodes = ["localhost"] 
    
    active = 0
    details = []
    for ip in nodes:
        status = "OFFLINE"
        if ip == "localhost":
            status = "ONLINE"
            active += 1
        else:
            # Check if the node is alive via SSH
            res = subprocess.run(["ssh", "-i", "/home/infuselink/mesh/scripts/id_nexus", "-o", "ConnectTimeout=2", ip, "uptime"], capture_output=True)
            if res.returncode == 0:
                status = "ONLINE"
                active += 1
        
        details.append({"ip": ip, "status": status})

    with open('/home/infuselink/mesh/memory.json', 'w') as f:
        json.dump({"active_nodes": active, "node_details": details}, f, indent=2)
    
    print(f"\n[SWARM UPDATE] {active} Nodes Online.")

if __name__ == "__main__":
    update_mesh()
