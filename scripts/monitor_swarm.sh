#!/bin/bash
while true; do
    clear
    echo "--- σ_nexus ACTIVE NODE MONITOR ---"
    echo "Timestamp: $(date)"
    echo "-----------------------------------"
    # Pull the real count from memory.json
    COUNT=$(grep '"active_nodes"' /home/infuselink/mesh/memory.json | awk '{print $2}' | tr -d ',')
    echo "Nodes Online: $COUNT"
    echo ""
    echo "Process Affinity:"
    ps -eo pid,ni,args | grep -E "sovereign_core|node_handshake" | grep -v grep
    sleep 5
done
