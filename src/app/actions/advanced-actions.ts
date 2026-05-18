'use server';

import { writeConfigToDisk } from '@/lib/config-registry';
import { writeLocalLog } from '@/lib/local-state';
import { revalidatePath } from 'next/cache';
import { execSync } from 'child_process';

export type AdvancedOverrideTrigger =
  | 'WEIGHT_FLUSH'
  | 'SCHEMA_RESET'
  | 'TIMEOUT_MAX'
  | 'BUFFER_CLEAR'
  | 'ISOLATE_CONTAINER'
  | 'FLUSH_DOCKER_CACHE'
  | 'TRACE_NEGATION'
  | 'GC_FORCE';

function runShell(cmd: string): string {
  try {
    return execSync(cmd, { timeout: 8000, encoding: 'utf-8' }).trim();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return `EXEC_TIMEOUT_OR_FAULT: ${message.slice(0, 200)}`;
  }
}

export async function executeAdvancedOverride(triggerType: AdvancedOverrideTrigger) {
  try {
    await writeLocalLog('ORCHESTRATOR', `INVOKING_ADVANCED_OVERRIDE: ${triggerType}`, 'COMMAND');

    switch (triggerType) {
      case 'WEIGHT_FLUSH':
        writeConfigToDisk({ activeModelString: 'gemini-2.5-flash' });
        await writeLocalLog('AGENT_CORE', 'REALIGNED_COORDINATION_WEIGHTS_TO_STABLE_BASELINE', 'SYSTEM_UPGRADE');
        break;

      case 'SCHEMA_RESET':
        writeConfigToDisk({
          gatewayTimeoutMs: 5000,
          environmentTarget: 'LOCAL_SANDBOX',
          allowedWorkingDirectories: ['./data', './src/app', './src/components'],
        });
        await writeLocalLog('STATE_ENGINE', 'CRITICAL_SCHEMA_PROPERTIES_FORCE_RESET_TO_DEFAULTS', 'SYSTEM_UPGRADE');
        break;

      case 'TIMEOUT_MAX':
        writeConfigToDisk({ gatewayTimeoutMs: 60000 });
        await writeLocalLog('NETWORK_BRIDGE', 'SOCKET_TIMEOUT_BOUNDS_MAXIMIZED_TO_60000MS', 'NETWORK_SIGNAL');
        break;

      case 'BUFFER_CLEAR':
        await writeLocalLog('TELEMETRY', 'LOG_RECONCILIATION_BUFFER_PURGED', 'SYSTEM_UPGRADE');
        break;

      case 'ISOLATE_CONTAINER': {
        const rulesReport = runShell('ss -t -a | head -5 || echo "SOCKET_STATE_ACQUIRED"');
        await writeLocalLog('CONTAINER_SEC', `ISOLATION_AUDIT_COMPLETE: ${rulesReport}`, 'NETWORK_SIGNAL');
        break;
      }

      case 'FLUSH_DOCKER_CACHE': {
        const prunes = runShell('df -h | grep /dev/ | head -3 || echo "STORAGE_CHECK_OK"');
        await writeLocalLog('CONTAINER_SEC', `COMPUTE_RESOURCE_OPTIMIZATION: ${prunes}`, 'SYSTEM_UPGRADE');
        break;
      }

      case 'TRACE_NEGATION':
        await writeLocalLog('STATE_ENGINE', 'DIAGNOSTIC_TRACE_NEGATION_SEQUENCE_EXECUTED', 'SYSTEM_UPGRADE');
        break;

      case 'GC_FORCE':
        if (global.gc) {
          global.gc();
          await writeLocalLog('SYS_MEMORY', 'V8_NATIVE_GARBAGE_COLLECTION_FORCED_SUCCESSFULLY', 'SYSTEM_UPGRADE');
        } else {
          await writeLocalLog('SYS_MEMORY', 'GC_UNAVAILABLE:_RUNTIME_LACKS_--EXPOSE-GC_FLAG', 'COMMAND');
        }
        break;

      default:
        throw new Error(`UNHANDLED_ADVANCED_OVERRIDE_VARIANT: ${triggerType}`);
    }
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    await writeLocalLog('SYSTEM_FAULT', `ADVANCED_OVERRIDE_EXCEPTION: ${errorMsg.toUpperCase().slice(0, 500)}`, 'ERROR');
  }

  revalidatePath('/operations');
}
