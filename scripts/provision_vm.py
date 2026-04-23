import json, os

def acquire_node():
    # Registry of potential worker nodes (IPs or Hostnames)
    # In a full Sigma Nexus setup, this pulls from an API or scan results
    new_node = {
        "id": "ghost-node-alpha",
        "ip": "34.123.45.67", 
        "type": "ephemeral-vm",
        "status": "PROVISIONING"
    }
    
    memory_path = '/home/infuselink/mesh/memory.json'
    with open(memory_path, 'r+') as f:
        data = json.load(f)
        if "node_cluster" not in data:
            data["node_cluster"] = []
        
        # Avoid duplicate provisioning
        if not any(node['id'] == new_node['id'] for node in data['node_cluster']):
            data["node_cluster"].append(new_node)
            print(f"Provisioning Node {new_node['id']} at {new_node['ip']}...")
            
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()
            return True
    return False

if __name__ == "__main__":
    acquire_node()
