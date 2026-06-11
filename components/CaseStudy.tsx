import { caseStudyChapters, caseStudyIntro } from "@/data/casestudy";
import SectionHeading from "./SectionHeading";
import { FadeIn } from "./motion";

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative border-y border-white/5 bg-white/[0.015] py-28">
      <div className="glow-cyan absolute top-0 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Case Study"
          title="Four months at PartyWitty"
          description={caseStudyIntro.context}
        />

        <div className="space-y-10">
          {caseStudyChapters.map((ch, i) => (
            <FadeIn key={ch.number} delay={i * 0.04}>
              <article className="glass glass-hover grid gap-8 rounded-3xl p-8 md:grid-cols-[auto_1fr_220px] md:p-10">
                <div className="mono gradient-text text-5xl font-bold opacity-80 md:text-6xl">
                  {ch.number}
                </div>
                <div>
                  <h3 className="heading text-2xl font-bold text-white">
                    {ch.title}
                  </h3>
                  <p className="mono mt-1 text-xs tracking-[0.2em] text-cyan-400 uppercase">
                    {ch.subtitle}
                  </p>
                  <div className="mt-5 space-y-4">
                    {ch.body.map((p, j) => (
                      <p key={j} className="text-sm leading-relaxed text-zinc-400">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row gap-4 md:flex-col md:justify-center">
                  {ch.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center md:text-left"
                    >
                      <div className="mono text-2xl font-bold text-white">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
