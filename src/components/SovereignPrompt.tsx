'use client';

import { dispatchMandate } from '@/app/actions/mesh-actions';
import { useState, useTransition } from 'react';

export default function SovereignPrompt() {
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    const commandToSend = value;
    setInput('');

    startTransition(async () => {
      await dispatchMandate('USER_DIRECTIVE', commandToSend);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 w-full bg-black border-t border-teal-900/60 p-3 flex items-center gap-3 font-mono z-50"
    >
      <span className="text-teal-600 text-[10px] shrink-0">EXE_&gt;</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isPending}
        placeholder="Enter live terminal command (e.g., ls -la, uname -a, whoami)..."
        className="flex-1 bg-transparent border-none outline-none text-[11px] text-teal-300 placeholder:text-teal-900 caret-teal-400 disabled:opacity-40"
      />
      <button
        type="submit"
        disabled={isPending || !input.trim()}
        className="border border-teal-900 bg-black px-3 py-1 text-[9px] text-teal-500 hover:bg-teal-900/30 transition-colors disabled:opacity-30 uppercase tracking-widest"
      >
        {isPending ? 'Exec...' : 'Send'}
      </button>
    </form>
  );
}
