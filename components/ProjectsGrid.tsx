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
  emerald: "group-hover:border-emerald-500/40",
  teal: "group-hover:border-teal-500/40",
  green: "group-hover:border-green-500/40",
};

const accentBtn: Record<Project["accent"], string> = {
  emerald: "bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500 hover:text-white",
  teal: "bg-teal-500/15 text-teal-300 hover:bg-teal-500 hover:text-white",
  green: "bg-green-500/15 text-green-300 hover:bg-green-500 hover:text-white",
};

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Things I've shipped"
        description="Production systems with real users and real stakes, not weekend demos."
      />

      <Stagger className="project-stage mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <StaggerItem key={p.name} className="project-cell">
            <TiltCard max={4} glare depth className="group relative h-full rounded-2xl">
              <div
                className={`glass border-glow absolute inset-0 overflow-hidden rounded-2xl border border-white/5 transition-colors ${accentBorder[p.accent]}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b opacity-60 ${accentGlow[p.accent]}`}
                />
              </div>

              <article className="relative flex h-full flex-col p-7 [transform-style:preserve-3d]">
                <div className="z-lift-1 flex flex-wrap items-center gap-2">
                  {p.personal && (
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-emerald-300 uppercase">
                      Personal Project
                    </span>
                  )}
                  {p.freelance && (
                    <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-teal-300 uppercase">
                      Freelance
                    </span>
                  )}
                  {p.surface && (
                    <span className="mono rounded-full border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-zinc-400">
                      {p.surface}
                    </span>
                  )}
                </div>

                <div className="z-lift-2 mt-3">
                  <h3 className="heading text-lg font-bold text-white">
                    {p.name}
                  </h3>
                  <p className={`mt-1 text-sm font-medium ${accentText[p.accent]}`}>
                    {p.tagline}
                  </p>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>

                <div className="z-lift-1 mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="mono rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.link || p.playStore) && (
                  <div className="z-lift-3 mt-6 flex flex-wrap gap-2">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${accentBtn[p.accent]}`}
                      >
                        {p.linkLabel ?? "Open"}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                          <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                    {p.playStore && (
                      <a
                        href={p.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                          <path d="M3.6 2.3c-.2.2-.4.5-.4.9v17.6c0 .4.2.7.4.9l9.4-9.7L3.6 2.3Zm10.6 8 2.5-2.5L5.4 1.5c-.2-.1-.4-.2-.6-.2l9.4 9Zm5.2 1.4 2.6-1.5c.7-.4.7-1.4 0-1.8l-2.6-1.5-2.9 2.9 2.9 2.9Zm-5.2 1.4-9.4 9c.2 0 .4 0 .6-.2l11.3-6.3-2.5-2.5Z" />
                        </svg>
                        Play Store
                      </a>
                    )}
                  </div>
                )}
              </article>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
