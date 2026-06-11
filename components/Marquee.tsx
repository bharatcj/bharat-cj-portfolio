import { marqueeTech } from "@/data/skills";

export default function Marquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="marquee relative overflow-hidden border-b border-white/5 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
      <div className="marquee-track gap-10">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="mono flex items-center gap-10 text-sm tracking-widest whitespace-nowrap text-zinc-600 uppercase"
          >
            {t} <span className="text-cyan-500/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
