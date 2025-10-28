export default function GlobalBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[140vw] h-[140%] bg-gradient-to-br from-sky-500/55 via-fuchsia-500/45 to-emerald-400/55 blur-2xl" />
      <div className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_30%,rgba(56,189,248,0.28),transparent_70%)]" />
      <div className="absolute bottom-[-10%] right-[-8%] w-[34rem] h-[34rem] rounded-full bg-sky-400/35 blur-3xl" />
      <div className="absolute top-[10%] left-[-8%] w-[28rem] h-[28rem] rounded-full bg-purple-400/30 blur-3xl" />
    </div>
  );
}
