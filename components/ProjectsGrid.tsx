import { projects, type Project } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem, TiltCard } from "./motion";

const accentGlow: Record<Project["accent"], string> = {
  emerald: "from-emerald-500/20 to-transparent",
  teal: "from-teal-500/20 to-transparent",
  green: "from-green-400/20 to-transparent",
};

const accentText: Record<Project["accent"], string> = {
  emerald: "text-emerald-300",
  teal: "text-teal-300",
  green: "text-green-300",
};

const accentBorder: Record<Project["accent"], string> = {
  emerald: "hover:border-emerald-500/40",
  teal: "hover:border-teal-500/40",
  green: "hover:border-green-500/40",
};

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Things I've shipped"
        description="Production systems with real users and real stakes, not weekend demos."
      />

      <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <StaggerItem key={p.name}>
            <TiltCard max={4} className="h-full [transform-style:preserve-3d]">
              <article
                className={`glass border-white/5 ${accentBorder[p.accent]} group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-colors`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b opacity-60 ${accentGlow[p.accent]}`}
                />
                <h3 className="heading relative text-lg font-bold text-white">
                  {p.name}
                </h3>
                <p className={`relative mt-1 text-sm font-medium ${accentText[p.accent]}`}>
                  {p.tagline}
                </p>
                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="mono rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
