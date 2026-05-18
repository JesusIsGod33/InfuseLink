'use client';

import { dispatchMandate } from '@/app/actions/mesh-actions';
import { submitAgentDirective } from '@/app/actions/agent-actions';
import { useState, useTransition } from 'react';

export default function SovereignPrompt() {
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const [isAgentMode, setIsAgentMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    const commandToSend = value;
    setInput('');

    startTransition(async () => {
      if (isAgentMode) {
        await submitAgentDirective(commandToSend);
      } else {
        await dispatchMandate('USER_DIRECTIVE', commandToSend);
      }
    });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-teal-900/60 p-3 flex items-center gap-3 font-mono z-50">
      <button
        type="button"
        onClick={() => setIsAgentMode(!isAgentMode)}
        className={`px-2 py-0.5 border transition-all select-none font-bold text-[9px] tracking-wider shrink-0 ${
          isAgentMode
            ? 'bg-purple-950/40 border-purple-500 text-purple-400'
            : 'bg-zinc-900 border-zinc-700 text-zinc-400'
        }`}
      >
        {isAgentMode ? 'CHATBOT' : 'TERMINAL'}
      </button>

      <form onSubmit={handleSubmit} className="flex flex-1 items-center gap-3">
        <span className={`text-[10px] shrink-0 ${isAgentMode ? 'text-purple-400' : 'text-teal-600'}`}>
          {isAgentMode ? 'AGNT_>' : 'EXE_>'}
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isPending}
          placeholder={
            isAgentMode
              ? "Instruct agent to update layout, files, or parameters..."
              : "Enter live terminal command (e.g., ls -la, uname -a, whoami)..."
          }
          className={`flex-1 bg-transparent border-none outline-none text-[11px] caret-teal-400 disabled:opacity-40 ${
            isAgentMode
              ? 'text-purple-300 placeholder:text-purple-900'
              : 'text-teal-300 placeholder:text-teal-900'
          }`}
        />
        <button
          type="submit"
          disabled={isPending || !input.trim()}
          className="border border-teal-900 bg-black px-3 py-1 text-[9px] text-teal-500 hover:bg-teal-900/30 transition-colors disabled:opacity-30 uppercase tracking-widest"
        >
          {isPending ? 'Exec...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
