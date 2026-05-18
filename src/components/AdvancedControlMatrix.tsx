'use client';

import React, { useTransition } from 'react';
import { executeAdvancedOverride } from '@/app/actions/advanced-actions';
import type { AdvancedOverrideTrigger } from '@/app/actions/advanced-actions';

interface MatrixButtonProps {
  label: string;
  trigger: AdvancedOverrideTrigger;
  colorClass: string;
}

export default function AdvancedControlMatrix() {
  const [isPending, startTransition] = useTransition();

  const weightButtons: MatrixButtonProps[] = [
    { label: 'Model State Flush', trigger: 'WEIGHT_FLUSH', colorClass: 'text-purple-400 border-purple-900 hover:bg-purple-950/30' },
    { label: 'Schema Reset Force', trigger: 'SCHEMA_RESET', colorClass: 'text-purple-400 border-purple-900 hover:bg-purple-950/30' },
    { label: 'Timeout Max Override', trigger: 'TIMEOUT_MAX', colorClass: 'text-purple-400 border-purple-900 hover:bg-purple-950/30' },
    { label: 'Recon Buffer Clear', trigger: 'BUFFER_CLEAR', colorClass: 'text-purple-400 border-purple-900 hover:bg-purple-950/30' },
  ];

  const environmentButtons: MatrixButtonProps[] = [
    { label: 'Isolate Workspace', trigger: 'ISOLATE_CONTAINER', colorClass: 'text-amber-400 border-amber-900 hover:bg-amber-950/30' },
    { label: 'Prune Compute Cache', trigger: 'FLUSH_DOCKER_CACHE', colorClass: 'text-amber-400 border-amber-900 hover:bg-amber-950/30' },
    { label: 'Trace Negation Exec', trigger: 'TRACE_NEGATION', colorClass: 'text-amber-400 border-amber-900 hover:bg-amber-950/30' },
    { label: 'V8 Garbage Collect', trigger: 'GC_FORCE', colorClass: 'text-amber-400 border-amber-900 hover:bg-amber-950/30' },
  ];

  const handleTrigger = (trigger: AdvancedOverrideTrigger) => {
    startTransition(async () => {
      await executeAdvancedOverride(trigger);
    });
  };

  return (
    <div className="space-y-3">
      <div>
        <p className="text-[10px] text-purple-500 font-bold mb-1 tracking-widest">MODEL WEIGHT ALIGNMENT</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {weightButtons.map((btn) => (
            <button
              key={btn.trigger}
              disabled={isPending}
              onClick={() => handleTrigger(btn.trigger)}
              className={`border p-2 bg-black font-mono text-[10px] transition-all disabled:opacity-40 ${btn.colorClass}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] text-amber-500 font-bold mb-1 tracking-widest">LOCAL ENVIRONMENT TELEMETRY</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {environmentButtons.map((btn) => (
            <button
              key={btn.trigger}
              disabled={isPending}
              onClick={() => handleTrigger(btn.trigger)}
              className={`border p-2 bg-black font-mono text-[10px] transition-all disabled:opacity-40 ${btn.colorClass}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
