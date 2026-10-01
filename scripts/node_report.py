import os

def get_swarm_status():
    # Detects local node + any reporting ghost nodes
    local_node = 1
    ghost_files = [f for f in os.listdir('.') if f.startswith('node_') and f.endswith('_specs.txt')]
    total = local_node + len(ghost_files)
    
    print(f"--- σ_nexus SWARM TOTAL: {total} ---")
    print(f"Node 0: Local Orchestrator [ONLINE]")
    for i, file in enumerate(ghost_files):
        print(f"Node {i+1}: Ghost Node ({file}) [ACTIVE]")

if __name__ == "__main__":
    get_swarm_status()
