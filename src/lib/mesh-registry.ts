export type NodeDomain = 'SYS' | 'NET' | 'TELEMETRY' | 'LOGISTICS';

export interface MeshNode {
  id: string;
  alias: string;
  endpoint: string;
  status: 'ONLINE' | 'OFFLINE';
  token: string;
  allowedDomains: NodeDomain[];
}

const SECURE_NODE_REGISTRY: MeshNode[] = [
  {
    id: 'NEXUS_CORE_01',
    alias: 'Local Container Gateway',
    endpoint: 'http://127.0.0.1:3000',
    status: 'ONLINE',
    token: process.env.MESH_CORE_TOKEN || 'DEFAULT_LOCAL_ROOT_TOKEN',
    allowedDomains: ['SYS', 'NET', 'TELEMETRY', 'LOGISTICS'],
  },
  {
    id: 'NODE_ALPHA',
    alias: 'External Telemetry Hub',
    endpoint: 'http://10.8.0.2:8080',
    status: 'ONLINE',
    token: process.env.NODE_ALPHA_TOKEN || 'NODE_AUTH_SIGMA_9',
    allowedDomains: ['NET', 'TELEMETRY'],
  },
];

export function getRegisteredNodes(): MeshNode[] {
  return SECURE_NODE_REGISTRY;
}

export function getNodeById(nodeId: string): MeshNode | undefined {
  return SECURE_NODE_REGISTRY.find((n) => n.id === nodeId);
}

export function validateNodeCapabilities(nodeId: string, domain: NodeDomain): boolean {
  const node = SECURE_NODE_REGISTRY.find((n) => n.id === nodeId);
  if (!node || node.status !== 'ONLINE') return false;
  return node.allowedDomains.includes(domain);
}
