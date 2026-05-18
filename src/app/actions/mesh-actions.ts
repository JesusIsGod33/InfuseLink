'use server';

import { writeLocalLog } from '@/lib/local-state';
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
    const result = runShell('nslookup google.com 2>/dev/null | tail -4 || echo "DNS_RESOLUTION_FAILED"');
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

export async function dispatchMandate(mandateId: string, customMsg?: string) {
  const identifier = customMsg ? 'OPERATOR' : mandateId;
  const commandText = customMsg || `EXECUTE_${mandateId}`;

  await writeLocalLog(identifier, commandText, 'COMMAND');

  try {
    if (customMsg) {
      const input = customMsg.trim().toLowerCase();
      if (input === 'ping') {
        const result = runShell('curl -s -I https://www.google.com | head -n 1');
        await writeLocalLog('ANALYST', `PROMPT_PING_RESPONSE: ${result}`, 'NETWORK_SIGNAL');
      } else if (input === 'whoami') {
        const result = runShell('whoami && hostname');
        await writeLocalLog('ANALYST', `IDENTITY: ${result}`, 'COMMAND');
      } else if (input === 'uptime') {
        const result = runShell('uptime');
        await writeLocalLog('ANALYST', `SYSTEM_UPTIME: ${result}`, 'SYSTEM_UPGRADE');
      } else if (input === 'ip') {
        const result = runShell('curl -s --max-time 5 https://api.ipify.org || echo "OFFLINE"');
        await writeLocalLog('ANALYST', `EXTERNAL_IP: ${result}`, 'NETWORK_SIGNAL');
      } else if (input === 'ports') {
        const result = runShell('ss -tulpn 2>/dev/null | head -10 || echo "NO_DATA"');
        await writeLocalLog('ANALYST', `PORT_SCAN: ${result}`, 'NETWORK_SIGNAL');
      } else if (input === 'disk') {
        const result = runShell('df -h /');
        await writeLocalLog('ANALYST', `DISK_STATUS: ${result}`, 'SYSTEM_UPGRADE');
      } else if (input === 'mem') {
        const result = runShell('free -h');
        await writeLocalLog('ANALYST', `MEMORY_STATUS: ${result}`, 'SYSTEM_UPGRADE');
      } else if (input === 'docker') {
        const result = runShell('docker ps 2>/dev/null || echo "DOCKER_OFFLINE"');
        await writeLocalLog('ANALYST', `DOCKER_STATUS: ${result}`, 'SYSTEM_UPGRADE');
      } else if (input === 'help') {
        await writeLocalLog('SYSTEM', 'AVAILABLE_COMMANDS: ping, whoami, uptime, ip, ports, disk, mem, docker, help', 'COMMAND');
      } else {
        await writeLocalLog('SYSTEM', `UNKNOWN_DIRECTIVE: ${customMsg}`, 'ERROR');
      }
    } else {
      const handler = COMMAND_MAP[mandateId];
      if (handler) {
        await handler();
      }
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    await writeLocalLog('SYSTEM_FAULT', `EXECUTION_FAILED: ${message}`, 'ERROR');
  }

  revalidatePath('/');
  revalidatePath('/operations');
  return { success: true };
}
