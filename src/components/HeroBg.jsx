export default function HeroBg({ variant = "gradient" }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {variant === "gradient" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]" />
        </>
      )}
      {variant === "mesh" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(40rem_30rem_at_20%_20%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(35rem_28rem_at_80%_10%,rgba(217,70,239,0.14),transparent_60%),radial-gradient(36rem_32rem_at_60%_80%,rgba(16,185,129,0.14),transparent_60%)] blur-xl" />
        </>
      )}
    </div>
  );
}
