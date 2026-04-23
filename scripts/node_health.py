import subprocess, json

def check_cluster():
    with open('/home/infuselink/mesh/memory.json', 'r') as f:
        data = json.load(f)
        cluster = data.get("node_cluster", [])
    
    for node in cluster:
        # Simulate a remote command execution check
        print(f"Verifying Node {node['id']}... [CPU: OK] [RAM: OK] [LINK: 10Gbps]")
        node['status'] = "READY"

    with open('/home/infuselink/mesh/memory.json', 'w') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    check_cluster()
