'use server';

import { writeLocalLog } from '@/lib/local-state';
import { getNodeById, validateNodeCapabilities } from '@/lib/mesh-registry';
import type { NodeDomain } from '@/lib/mesh-registry';
import { revalidatePath } from 'next/cache';
import { execSync } from 'child_process';

function runShell(cmd: string): string {
  try {
    return execSync(cmd, { timeout: 8000, encoding: 'utf-8' }).trim();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return `EXEC_TIMEOUT_OR_FAULT: ${message.slice(0, 200)}`;
  }
}

// ---------------------------------------------------------------------------
// 24-NODE COMMAND MAP — predefined matrix button handlers
// ---------------------------------------------------------------------------

const COMMAND_MAP: Record<string, () => Promise<void>> = {
  // --- ORCHESTRATION ---
  L7_BYPASS: async () => {
    const result = runShell('curl -s -I -m 5 http://localhost:3000 | head -n 3 || echo "NO_RESPONSE"');
    await writeLocalLog('NETWORK', `L7_PROBE_RESULT: ${result}`, 'NETWORK_SIGNAL');
  },
  MESH_SYNC: async () => {
    const result = runShell('date -u +"%Y-%m-%dT%H:%M:%SZ" && uptime -p');
    await writeLocalLog('ORCHESTRATOR', `SYNC_CLOCK: ${result}`, 'COMMAND');
  },
  NODE_PING: async () => {
    const result = runShell('ping -c 1 -W 2 127.0.0.1 | tail -1 || echo "PING_FAILED"');
    await writeLocalLog('NETWORK', `NODE_PING: ${result}`, 'NETWORK_SIGNAL');
  },
  CORE_DUMP: async () => {
    const result = runShell('cat /proc/loadavg && echo "---" && nproc');
    await writeLocalLog('SYSTEM', `LOAD_PROFILE: ${result}`, 'SYSTEM_UPGRADE');
  },
  SWARM_INIT: async () => {
    const result = runShell('ps aux --sort=-%cpu | head -6');
    await writeLocalLog('ORCHESTRATOR', `PROCESS_SWARM: ${result}`, 'COMMAND');
  },
  BRIDGE_LOCK: async () => {
    const result = runShell('ip addr show | head -12 || echo "INTERFACE_QUERY_FAILED"');
    await writeLocalLog('NETWORK', `BRIDGE_INTERFACES: ${result}`, 'NETWORK_SIGNAL');
  },

  // --- CREDENTIALS ---
  VAULT_CHECK: async () => {
    const keys = ['NODE_ENV', 'HOME', 'PATH', 'SHELL'];
    const report = keys.map(k => `${k}=${process.env[k] ? 'SET' : 'UNSET'}`).join(' | ');
    await writeLocalLog('SECURITY', `ENV_AUDIT: ${report}`, 'COMMAND');
  },
  TOKEN_ROTATE: async () => {
    const token = runShell('openssl rand -hex 16');
    await writeLocalLog('SECURITY', `NEW_SESSION_TOKEN: ${token}`, 'COMMAND');
  },
  KEY_AUDIT: async () => {
    const result = runShell('ls -la ~/.ssh/ 2>/dev/null | head -5 || echo "NO_SSH_DIR"');
    await writeLocalLog('SECURITY', `SSH_KEY_INVENTORY: ${result}`, 'COMMAND');
  },
  CERT_VERIFY: async () => {
    const result = runShell('curl -sI -m 5 https://www.google.com | head -3 || echo "TLS_HANDSHAKE_FAILED"');
    await writeLocalLog('SECURITY', `TLS_CERT_PROBE: ${result}`, 'NETWORK_SIGNAL');
  },
  AUTH_SWEEP: async () => {
    const result = runShell('whoami && id');
    await writeLocalLog('SECURITY', `AUTH_IDENTITY: ${result}`, 'COMMAND');
  },
  SEAL_VAULT: async () => {
    const result = runShell('stat -c "%a %U %G" /home/ubuntu/.ssh 2>/dev/null || echo "VAULT_NOT_FOUND"');
    await writeLocalLog('SECURITY', `VAULT_PERMISSIONS: ${result}`, 'COMMAND');
  },

  // --- NETWORKING ---
  VPC_PULSE: async () => {
    const externalIp = runShell('curl -s --max-time 5 https://api.ipify.org || echo "GATEWAY_TIMEOUT"');
    await writeLocalLog('NETWORK', `ACTIVE_WAN_GATEWAY: ${externalIp}`, 'NETWORK_SIGNAL');
  },
  SOCKET_RELAY: async () => {
    const result = runShell('nmap -p 80,443,3000 localhost 2>/dev/null | grep -E "open|closed|filtered" || echo "NO_ACTIVE_SERVICES"');
    await writeLocalLog('ANALYST', `PORT_MAP_SCAN: ${result}`, 'NETWORK_SIGNAL');
  },
  DNS_TUNNEL: async () => {
    const result = runShell('getent hosts google.com || echo "DNS_RESOLUTION_FAILED"');
    await writeLocalLog('ANALYST', `DNS_RESOLVE: ${result}`, 'NETWORK_SIGNAL');
  },
  PACKET_AUDIT: async () => {
    const result = runShell('ss -tulpn 2>/dev/null | head -8 || echo "NO_SOCKET_DATA"');
    await writeLocalLog('ANALYST', `SOCKET_AUDIT: ${result}`, 'NETWORK_SIGNAL');
  },
  ROUTE_TRACE: async () => {
    const result = runShell('ip route show default 2>/dev/null || echo "NO_DEFAULT_ROUTE"');
    await writeLocalLog('ANALYST', `ROUTE_TABLE: ${result}`, 'NETWORK_SIGNAL');
  },
  GATEWAY_CHECK: async () => {
    const result = runShell('curl -s -o /dev/null -w "%{http_code} %{time_total}s" --max-time 5 https://www.google.com || echo "GATEWAY_UNREACHABLE"');
    await writeLocalLog('NETWORK', `GATEWAY_LATENCY: ${result}`, 'NETWORK_SIGNAL');
  },

  // --- LOGISTICS ---
  DEPLOY_SOCK: async () => {
    const result = runShell('docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" 2>/dev/null || echo "DOCKER_ENGINE_OFFLINE"');
    await writeLocalLog('LOGISTICS', `CONTAINER_STATUS: ${result}`, 'SYSTEM_UPGRADE');
  },
  PUSH_IMAGE: async () => {
    const result = runShell('docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}" 2>/dev/null | head -6 || echo "NO_IMAGES"');
    await writeLocalLog('LOGISTICS', `IMAGE_REGISTRY: ${result}`, 'SYSTEM_UPGRADE');
  },
  VERIFY_DIG: async () => {
    const result = runShell('curl -s --max-time 5 https://api.ipify.org || echo "RESOLUTION_FAILED"');
    await writeLocalLog('LOGISTICS', `EXTERNAL_RESOLVE: ${result}`, 'NETWORK_SIGNAL');
  },
  DISK_AUDIT: async () => {
    const result = runShell('df -h / | tail -1');
    await writeLocalLog('LOGISTICS', `DISK_USAGE: ${result}`, 'SYSTEM_UPGRADE');
  },
  MEM_PROFILE: async () => {
    const result = runShell('free -h | head -2');
    await writeLocalLog('LOGISTICS', `MEMORY_PROFILE: ${result}`, 'SYSTEM_UPGRADE');
  },
  PROC_SCAN: async () => {
    const result = runShell('top -bn1 | head -5');
    await writeLocalLog('LOGISTICS', `PROCESS_SNAPSHOT: ${result}`, 'SYSTEM_UPGRADE');
  },
};

// ---------------------------------------------------------------------------
// PRIMARY DISPATCH — matrix buttons + raw terminal execution
// ---------------------------------------------------------------------------

export async function dispatchMandate(mandateId: string, customMsg?: string) {
  const isRawCommand = mandateId === 'USER_DIRECTIVE' && customMsg;
  const identifier = isRawCommand ? 'OPERATOR' : mandateId;
  const commandText = customMsg || `EXECUTE_${mandateId}`;

  await writeLocalLog(identifier, commandText, 'COMMAND');

  try {
    if (isRawCommand) {
      // --- RAW TERMINAL EXECUTION ---
      // Passes the prompt input directly to the host shell
      const stdout = execSync(customMsg, {
        encoding: 'utf-8',
        timeout: 10000,
        cwd: process.cwd(),
      });

      const cleanedOutput = stdout.trim() || 'COMMAND_EXECUTED_SUCCESSFULLY_WITH_NO_STDOUT';
      await writeLocalLog('ANALYST', cleanedOutput, 'NETWORK_SIGNAL');
    } else {
      // --- PREDEFINED MATRIX GRID BUTTONS ---
      const handler = COMMAND_MAP[mandateId];
      if (handler) {
        await handler();
      }
    }
  } catch (error: unknown) {
    const err = error as { stderr?: Buffer; message?: string };
    const errorOutput = err.stderr?.toString().trim() || err.message || 'UNKNOWN_EXECUTION_EXCEPTION';
    await writeLocalLog('SYSTEM_FAULT', `EXEC_ERROR: ${errorOutput.slice(0, 500)}`, 'ERROR');
  }

  revalidatePath('/');
  revalidatePath('/operations');
  return { success: true };
}

// ---------------------------------------------------------------------------
// MESH RPC DISPATCH — structured node-to-node task routing
// ---------------------------------------------------------------------------

export type MeshCommandType = 'PING_GATEWAY' | 'SYSTEM_RESOURCES' | 'NET_STAT_AUDIT' | 'RUN_DNS_LOOKUP' | 'AUDIT_STORAGE';

interface MeshTaskPayload {
  task: MeshCommandType;
  params?: Record<string, string>;
}

const MESH_TASK_HANDLERS: Record<MeshCommandType, (params?: Record<string, string>) => string> = {
  PING_GATEWAY: () => {
    return runShell('curl -s -o /dev/null -w "%{http_code} %{time_total}s" --max-time 5 https://www.google.com');
  },
  SYSTEM_RESOURCES: () => {
    return runShell("free -m | grep Mem | awk '{print \"TOTAL:\"$2\"MB USED:\"$3\"MB FREE:\"$4\"MB\"}'");
  },
  NET_STAT_AUDIT: () => {
    return runShell('ss -tln | grep -v State || echo "NO_SOCKETS"');
  },
  RUN_DNS_LOOKUP: (params) => {
    const target = params?.target || 'google.com';
    return runShell(`getent hosts ${target} || echo "DNS_FAILED"`);
  },
  AUDIT_STORAGE: () => {
    return runShell('df -h / | tail -1 && echo "---" && du -sh /home/ubuntu 2>/dev/null || echo "AUDIT_FAILED"');
  },
};

export async function dispatchMeshDirective(targetNodeId: string, payload: MeshTaskPayload) {
  const targetNode = getNodeById(targetNodeId);

  if (!targetNode) {
    await writeLocalLog('SECURITY_FAULT', `REJECTED: UNREGISTERED_TARGET_NODE_${targetNodeId}`, 'ERROR');
    revalidatePath('/operations');
    return { success: false, error: 'UNREGISTERED_TARGET' };
  }

  if (targetNode.status !== 'ONLINE') {
    await writeLocalLog('MESH_FAULT', `NODE_${targetNodeId}_IS_OFFLINE`, 'ERROR');
    revalidatePath('/operations');
    return { success: false, error: 'NODE_OFFLINE' };
  }

  await writeLocalLog('ORCHESTRATOR', `ROUTING_TASK_${payload.task}_TO_${targetNodeId}`, 'COMMAND');

  try {
    if (targetNodeId === 'NEXUS_CORE_01') {
      // --- LOCAL NODE EXECUTION ---
      const domainMap: Record<MeshCommandType, NodeDomain> = {
        PING_GATEWAY: 'NET',
        SYSTEM_RESOURCES: 'SYS',
        NET_STAT_AUDIT: 'TELEMETRY',
        RUN_DNS_LOOKUP: 'NET',
        AUDIT_STORAGE: 'LOGISTICS',
      };

      const requiredDomain = domainMap[payload.task];
      if (!validateNodeCapabilities(targetNodeId, requiredDomain)) {
        await writeLocalLog('SECURITY_FAULT', `DOMAIN_ACCESS_DENIED: ${requiredDomain}_ON_${targetNodeId}`, 'ERROR');
        revalidatePath('/operations');
        return { success: false, error: 'DOMAIN_ACCESS_DENIED' };
      }

      const handler = MESH_TASK_HANDLERS[payload.task];
      const result = handler(payload.params);
      await writeLocalLog('MESH_AGENT', `${payload.task}_RESULT: ${result}`, 'NETWORK_SIGNAL');
    } else {
      // --- REMOTE NODE DISPATCH (signed HTTP request) ---
      const nodeEndpoint = `${targetNode.endpoint}/api/rpc`;

      const response = await fetch(nodeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${targetNode.token}`,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) throw new Error(`NODE_RESPONSE_HTTP_${response.status}`);
      const result = await response.json();
      await writeLocalLog(targetNodeId, `EXTERNAL_SIGNAL: ${JSON.stringify(result)}`, 'NETWORK_SIGNAL');
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    await writeLocalLog('SYSTEM_FAULT', `MESH_BRIDGE_ERROR_${payload.task}: ${message.slice(0, 300)}`, 'ERROR');
  }

  revalidatePath('/operations');
  return { success: true };
}
