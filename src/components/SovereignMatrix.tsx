'use client';

import { dispatchMandate } from '@/app/actions/mesh-actions';

const MATRIX_COMMANDS = [
  { id: 'L7_BYPASS', label: 'L7 Bypass' },
  { id: 'MESH_SYNC', label: 'Mesh Sync' },
  { id: 'NODE_PING', label: 'Node Ping' },
  { id: 'CORE_DUMP', label: 'Core Dump' },
  { id: 'SWARM_INIT', label: 'Swarm Init' },
  { id: 'BRIDGE_LOCK', label: 'Bridge Lock' },
];

export default function SovereignMatrix() {
  const triggerAction = async (name: string) => {
    await dispatchMandate(name);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {MATRIX_COMMANDS.map((cmd) => (
        <button
          key={cmd.id}
          onClick={() => triggerAction(cmd.id)}
          className="border border-teal-900 bg-black p-2 text-[10px] text-teal-400 font-mono hover:bg-teal-900/30 transition-colors"
        >
          {cmd.label}
        </button>
      ))}
    </div>
  );
}
