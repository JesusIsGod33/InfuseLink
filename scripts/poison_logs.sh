#!/bin/bash
echo "Initializing Synthetic Telemetry Injection..."
for i in {1..5000}; do
    logger -t "systemd" "Started Session $i of user root."
    logger -t "kernel" "TCP: Hash table configured (order: 12, 524288 bytes)"
done
echo "Logs saturated with benign entropy. Activity masked."
