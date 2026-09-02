"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { workPillars, workIntro, type WorkPillar } from "@/data/work";
import SectionHeading from "./SectionHeading";
import Parallax from "./Parallax";
import { CountUp, DepthRise, TiltCard } from "./motion";

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

const statTile: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function WorkShowcase() {
  const reduce = useReducedMotion();
  const tileVariants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } },
      }
    : statTile;
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-28"
    >
      <Parallax speed={70} className="glow-emerald pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-50" />
      <Parallax speed={-55} className="glow-teal pointer-events-none absolute bottom-0 -right-24 h-[26rem] w-[26rem] rounded-full opacity-40" />

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
              <DepthRise key={p.id} angle={-12} y={48} duration={0.9} stagger={0.08}>
                <TiltCard max={3} glare depth className="group relative rounded-3xl">
                  <div className="glass border-glow absolute inset-0 overflow-hidden rounded-3xl border border-white/5 transition-colors group-hover:border-emerald-500/35">
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${glowClass[p.accent]}`}
                    />
                  </div>

                  <div className="relative grid gap-6 p-8 md:grid-cols-[1.4fr_1fr] md:p-10 [transform-style:preserve-3d]">
                    <div className={`relative flex flex-col ${reversed ? "md:order-2" : ""}`}>
                      <div className="flex items-start gap-5">
                        <span className="pillar-index z-lift-3 mono text-6xl font-bold leading-none md:text-7xl">
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
                        className="z-lift-1 mt-6 flex flex-wrap gap-2"
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
                            className={`mono chip-pop rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400 ${accentChipHover[p.accent]}`}
                          >
                            {t}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    <div className={`z-lift-2 relative grid grid-cols-1 gap-3 self-center sm:grid-cols-3 md:grid-cols-1 ${reversed ? "md:order-1" : ""}`}>
                      {p.stats.map((s) => (
                        <motion.div
                          key={s.label}
                          variants={tileVariants}
                          className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center md:text-left"
                        >
                          <div className="mono gradient-text text-2xl font-bold md:text-3xl">
                            <CountUp value={s.value} suffix={s.suffix} />
                          </div>
                          <div className="mt-1 text-xs leading-relaxed text-zinc-500">
                            {s.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </DepthRise>
            );
          })}
        </div>
      </div>
    </section>
  );
}
