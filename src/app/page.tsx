import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-teal-400 font-mono flex flex-col items-center justify-center p-6">
      <div className="border border-teal-900/60 p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-lg tracking-[0.3em] uppercase">
          InfuseLink
        </h1>
        <p className="text-[10px] text-teal-700">
          LOCAL_IPC_STATE_ENGINE // FILE_BASED_ORCHESTRATION
        </p>
        <Link
          href="/operations"
          className="inline-block border border-teal-900 bg-black px-6 py-3 text-[10px] text-teal-400 hover:bg-teal-900/30 transition-colors tracking-widest uppercase"
        >
          Enter Operations Console
        </Link>
      </div>
    </div>
  );
}
