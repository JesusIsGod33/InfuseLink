import OrchestrationFeed from '@/components/OrchestrationFeed';
import SovereignMatrix from '@/components/SovereignMatrix';
import SovereignPrompt from '@/components/SovereignPrompt';

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-black text-teal-400 font-mono p-6 pb-20 flex flex-col gap-6">
      <header className="border-b border-teal-900/60 pb-4">
        <h1 className="text-sm tracking-[0.3em] uppercase">
          InfuseLink // Autonomous Orchestration Console
        </h1>
        <p className="text-[10px] text-teal-700 mt-1">
          FILE_IPC_ACTIVE — SUBPROCESS_BRIDGE_ONLINE — LIVE_EXECUTION_MODE
        </p>
      </header>

      <section>
        <h2 className="text-[10px] text-teal-600 uppercase tracking-widest mb-3">
          Sovereign Command Matrix
        </h2>
        <SovereignMatrix />
      </section>

      <section className="flex-1 flex flex-col">
        <h2 className="text-[10px] text-teal-600 uppercase tracking-widest mb-3">
          Global Orchestration Feed
        </h2>
        <OrchestrationFeed />
      </section>

      <SovereignPrompt />
    </div>
  );
}
