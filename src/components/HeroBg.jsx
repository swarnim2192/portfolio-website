export default function HeroBg({ variant = "mesh" }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {variant === "aurora" && (
        <>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[140vw] h-[140%] bg-gradient-to-br from-sky-500/40 via-fuchsia-500/30 to-emerald-400/40 blur-3xl" />
          <div className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_30%,rgba(56,189,248,0.20),transparent_70%)]" />
        </>
      )}
      {variant === "mesh" {variant === "mesh" and ({variant === "mesh" and ( (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(40rem_30rem_at_20%_20%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(35rem_28rem_at_80%_10%,rgba(217,70,239,0.14),transparent_60%),radial-gradient(36rem_32rem_at_60%_80%,rgba(16,185,129,0.14),transparent_60%)] blur-xl" />
        </>
      )}
      {variant === "grid" && (
        <>
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:24px_24px]" />
        </>
      )}
    </div>
  );
}
