import { experience } from "@/data/experience";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./motion";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Seven years, three chapters"
        description="From full-stack delivery, through AI engineering, to leading a multi-platform product team."
      />

      <div className="relative">
        <div className="timeline-line absolute top-0 bottom-0 left-4 w-px md:left-1/2" />

        <div className="space-y-16">
          {experience.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.05}>
              <div
                className={`relative flex flex-col gap-6 pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* node */}
                <div className="absolute top-2 left-4 -translate-x-1/2 md:left-1/2">
                  <span
                    className={`block h-4 w-4 rounded-full border-2 ${
                      exp.current
                        ? "border-violet-400 bg-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.8)]"
                        : "border-zinc-600 bg-zinc-800"
                    }`}
                  />
                </div>

                <div className="md:w-1/2 md:px-10">
                  <div className="glass glass-hover rounded-2xl p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="heading text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <span
                        className={`mono rounded-full px-3 py-1 text-xs ${
                          exp.current
                            ? "bg-violet-500/15 text-violet-300"
                            : "bg-white/5 text-zinc-400"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-fuchsia-300/90">
                      {exp.role} · {exp.location}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                      {exp.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2.5 text-sm leading-relaxed text-zinc-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="mono rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
