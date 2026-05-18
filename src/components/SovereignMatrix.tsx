'use client';

import { dispatchMandate } from '@/app/actions/mesh-actions';
import { useTransition } from 'react';

interface MatrixDomain {
  label: string;
  color: string;
  commands: { id: string; label: string }[];
}

const DOMAINS: MatrixDomain[] = [
  {
    label: 'ORCHESTRATION',
    color: 'teal',
    commands: [
      { id: 'L7_BYPASS', label: 'L7 Bypass' },
      { id: 'MESH_SYNC', label: 'Mesh Sync' },
      { id: 'NODE_PING', label: 'Node Ping' },
      { id: 'CORE_DUMP', label: 'Core Dump' },
      { id: 'SWARM_INIT', label: 'Swarm Init' },
      { id: 'BRIDGE_LOCK', label: 'Bridge Lock' },
    ],
  },
  {
    label: 'CREDENTIALS',
    color: 'yellow',
    commands: [
      { id: 'VAULT_CHECK', label: 'Vault Check' },
      { id: 'TOKEN_ROTATE', label: 'Token Rotate' },
      { id: 'KEY_AUDIT', label: 'Key Audit' },
      { id: 'CERT_VERIFY', label: 'Cert Verify' },
      { id: 'AUTH_SWEEP', label: 'Auth Sweep' },
      { id: 'SEAL_VAULT', label: 'Seal Vault' },
    ],
  },
  {
    label: 'NETWORKING',
    color: 'cyan',
    commands: [
      { id: 'VPC_PULSE', label: 'VPC Pulse' },
      { id: 'SOCKET_RELAY', label: 'Socket Relay' },
      { id: 'DNS_TUNNEL', label: 'DNS Tunnel' },
      { id: 'PACKET_AUDIT', label: 'Packet Audit' },
      { id: 'ROUTE_TRACE', label: 'Route Trace' },
      { id: 'GATEWAY_CHECK', label: 'Gateway Check' },
    ],
  },
  {
    label: 'LOGISTICS',
    color: 'emerald',
    commands: [
      { id: 'DEPLOY_SOCK', label: 'Deploy Sock' },
      { id: 'PUSH_IMAGE', label: 'Push Image' },
      { id: 'VERIFY_DIG', label: 'Verify Dig' },
      { id: 'DISK_AUDIT', label: 'Disk Audit' },
      { id: 'MEM_PROFILE', label: 'Mem Profile' },
      { id: 'PROC_SCAN', label: 'Proc Scan' },
    ],
  },
];

const DOMAIN_STYLES: Record<string, { border: string; text: string; hover: string; heading: string }> = {
  teal:    { border: 'border-teal-900',    text: 'text-teal-400',    hover: 'hover:bg-teal-900/30',    heading: 'text-teal-600' },
  yellow:  { border: 'border-yellow-900',  text: 'text-yellow-400',  hover: 'hover:bg-yellow-900/30',  heading: 'text-yellow-600' },
  cyan:    { border: 'border-cyan-900',    text: 'text-cyan-400',    hover: 'hover:bg-cyan-900/30',    heading: 'text-cyan-600' },
  emerald: { border: 'border-emerald-900', text: 'text-emerald-400', hover: 'hover:bg-emerald-900/30', heading: 'text-emerald-600' },
};

export default function SovereignMatrix() {
  const [isPending, startTransition] = useTransition();

  const triggerAction = (name: string) => {
    startTransition(async () => {
      await dispatchMandate(name);
    });
  };

  return (
    <div className="space-y-4">
      {DOMAINS.map((domain) => {
        const style = DOMAIN_STYLES[domain.color];
        return (
          <div key={domain.label}>
            <h3 className={`text-[9px] ${style.heading} uppercase tracking-[0.25em] mb-2`}>
              {domain.label}
            </h3>
            <div className="grid grid-cols-6 gap-1">
              {domain.commands.map((cmd) => (
                <button
                  key={cmd.id}
                  disabled={isPending}
                  onClick={() => triggerAction(cmd.id)}
                  className={`${style.border} border bg-black p-2 text-[9px] ${style.text} font-mono ${style.hover} transition-colors disabled:opacity-40`}
                >
                  {cmd.label}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
