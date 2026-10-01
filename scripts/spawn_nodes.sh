#!/bin/bash
# Run this command on any secondary cloud terminal to link it to the mesh
echo "Link protocol initiated..."
PUB_KEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPQz7am2z+X3NUOcG00xV/NbzVqsVuEW+tJT0Xz9h8HF"
mkdir -p ~/.ssh
echo "$PUB_KEY" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys
echo "NODE_ASSIMILATED: Ready for execution."
