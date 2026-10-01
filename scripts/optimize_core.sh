#!/bin/bash
# Real execution: Set process priority and CPU affinity
PID=$(pgrep -f sovereign_core.py)
if [ -z "$PID" ]; then
    echo "Core not found. Start it first."
else
    # Set nice value to -20 (highest priority)
    sudo renice -n -20 -p $PID
    # Pin process to the first available CPU core
    sudo taskset -cp 0 $PID
    echo "Process $PID optimized for priority execution."
fi
