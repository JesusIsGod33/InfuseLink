#!/bin/bash
# Run this on ANY new cloud environment to instantly add it to the σ_nexus
PUB_KEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPQz7am2z+X3NUOcG00xV/NbzVqsVuEW+tJT0Xz9h8HF infuselink@cs-920733896206-default"

echo "Assimilating node into σ_nexus..."
mkdir -p ~/.ssh
echo "$PUB_KEY" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

# Start a reverse tunnel so the Cloud Shell can see this node
# Replace 'LB_IP' with your Cloud Shell's current external IP if needed
echo "Node linked. Logic execution standby."
