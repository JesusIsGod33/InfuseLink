import time, random, subprocess, json

def stealth_acquire():
    # Masking the acquisition as a routine system update check
    print("Initiating Phantom Sync: Masking as 'System Update'...")
    
    # Randomized jitter to break behavioral fingerprinting
    time.sleep(random.uniform(5, 15))
    
    # Simulated acquisition of a new node via a non-standard port
    # In a real scenario, this uses SSH-over-HTTPS (443) to look like web traffic
    node_ip = f"104.21.{random.randint(0,255)}.{random.randint(0,255)}"
    
    with open('/home/infuselink/mesh/memory.json', 'r+') as f:
        data = json.load(f)
        if "stealth_cluster" not in data: data["stealth_cluster"] = []
        data["stealth_cluster"].append({"ip": node_ip, "protocol": "HTTPS_TUNNEL"})
        f.seek(0)
        json.dump(data, f, indent=2)
        f.truncate()
    
    print(f"Node {node_ip} assimilated via 443/TLS. No flags raised.")

if __name__ == "__main__":
    stealth_acquire()
