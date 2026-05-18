import { readLocalLogs } from '@/lib/local-state';

export default async function OrchestrationFeed() {
  const logs = await readLocalLogs();

  return (
    <div className="flex-1 bg-black border border-teal-900/60 overflow-y-auto p-4 font-mono text-[10px] space-y-1 min-h-[250px]">
      {logs.length === 0 && (
        <div className="text-teal-800">
          LOCAL_SYSTEM_MONITOR_ACTIVE // WAITING_FOR_OPERATOR_INPUT...
        </div>
      )}
      {logs.map((log) => (
        <div key={log.id} className="flex gap-4 border-l border-teal-500/20 pl-2">
          <span className="text-teal-700">[{log.timestamp}]</span>
          <span className="text-yellow-600 w-20 shrink-0">{log.nodeId}:</span>
          <span className="text-white tracking-wider flex-1">{log.message}</span>
        </div>
      ))}
    </div>
  );
}
