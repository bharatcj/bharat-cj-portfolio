"use client";

import { motion } from "framer-motion";
import { workPillars, workIntro, type WorkPillar } from "@/data/work";
import SectionHeading from "./SectionHeading";
import { CountUp, TiltCard } from "./motion";

const railClass: Record<WorkPillar["accent"], string> = {
  emerald: "accent-rail-emerald",
  teal: "accent-rail-teal",
  green: "accent-rail-green",
};

const glowClass: Record<WorkPillar["accent"], string> = {
  emerald: "glow-emerald",
  teal: "glow-teal",
  green: "glow-green",
};

const accentText: Record<WorkPillar["accent"], string> = {
  emerald: "text-emerald-300",
  teal: "text-teal-300",
  green: "text-green-300",
};

const accentChipHover: Record<WorkPillar["accent"], string> = {
  emerald: "hover:border-emerald-500/50 hover:text-emerald-200",
  teal: "hover:border-teal-500/50 hover:text-teal-200",
  green: "hover:border-green-500/50 hover:text-green-200",
};

export default function WorkShowcase() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-28"
    >
      <div className="glow-emerald pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-50" />
      <div className="glow-teal pointer-events-none absolute bottom-0 -right-24 h-[26rem] w-[26rem] rounded-full opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work that shipped"
          title={workIntro.title}
          description={workIntro.description}
        />

        <div className="mt-16 space-y-8">
          {workPillars.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <TiltCard
                  max={3}
                  className="group glass glass-hover relative grid gap-6 overflow-hidden rounded-3xl p-8 md:grid-cols-[1.4fr_1fr] md:p-10"
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${glowClass[p.accent]}`}
                  />

                  <div className={`relative flex flex-col ${reversed ? "md:order-2" : ""}`}>
                    <div className="flex items-start gap-5">
                      <span className="pillar-index mono text-6xl font-bold leading-none md:text-7xl">
                        {p.index}
                      </span>
                      <div className="h-full w-1 self-stretch rounded-full">
                        <span className={`block h-full w-full rounded-full ${railClass[p.accent]}`} />
                      </div>
                      <div>
                        <h3 className="heading text-xl font-bold text-white md:text-2xl">
                          {p.title}
                        </h3>
                        <p className={`mt-1 text-sm font-medium ${accentText[p.accent]}`}>
                          {p.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                      {p.blurb}
                    </p>

                    <motion.div
                      className="mt-6 flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.05 } },
                      }}
                    >
                      {p.tech.map((t) => (
                        <motion.span
                          key={t}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          className={`mono rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400 transition-colors ${accentChipHover[p.accent]}`}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  <div className={`relative grid grid-cols-1 gap-3 self-center sm:grid-cols-3 md:grid-cols-1 ${reversed ? "md:order-1" : ""}`}>
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center md:text-left"
                      >
                        <div className="mono gradient-text text-2xl font-bold md:text-3xl">
                          <CountUp value={s.value} suffix={s.suffix} />
                        </div>
                        <div className="mt-1 text-xs leading-relaxed text-zinc-500">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
