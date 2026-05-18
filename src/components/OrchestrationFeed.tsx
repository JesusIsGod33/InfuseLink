import { readLocalLogs } from '@/lib/local-state';

const TYPE_COLORS: Record<string, string> = {
  COMMAND: 'text-white',
  NETWORK_SIGNAL: 'text-cyan-400',
  ERROR: 'text-red-400',
  SYSTEM_UPGRADE: 'text-emerald-400',
};

function getMessageColor(log: { nodeId: string; message: string; type: string }): string {
  if (log.nodeId === 'OPERATOR' && log.message.includes('AGENT_PROMPT')) return 'text-purple-400';
  if (log.nodeId === 'MESH_AGENT' && log.message.includes('ACKNOWLEDGEMENT')) return 'text-purple-400';
  return TYPE_COLORS[log.type] || 'text-white';
}

export default async function OrchestrationFeed() {
  const logs = await readLocalLogs();

  return (
    <div className="flex-1 bg-black border border-teal-900/60 overflow-y-auto p-4 font-mono text-[10px] space-y-1 min-h-[300px] max-h-[50vh]">
      <div className="text-teal-900 text-[8px] mb-2 tracking-widest">
        AXIOMATIC_COMMAND_BYPASS_AUDIT // {logs.length} ENTRIES
      </div>
      {logs.length === 0 && (
        <div className="text-teal-800">
          LOCAL_SYSTEM_MONITOR_ACTIVE // WAITING_FOR_OPERATOR_INPUT...
        </div>
      )}
      {logs.map((log) => (
        <div key={log.id} className="flex gap-3 border-l border-teal-500/20 pl-2">
          <span className="text-teal-700 shrink-0">[{log.timestamp}]</span>
          <span className="text-yellow-600 w-24 shrink-0">{log.nodeId}:</span>
          <span className={`${getMessageColor(log)} tracking-wider flex-1 break-all whitespace-pre-wrap`}>
            {log.message}
          </span>
        </div>
      ))}
    </div>
  );
}
