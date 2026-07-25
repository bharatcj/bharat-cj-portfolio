"use client";

import { motion } from "framer-motion";
import { experience, type Experience } from "@/data/experience";
import SectionHeading from "./SectionHeading";

const railClass: Record<Experience["accent"], string> = {
  emerald: "accent-rail-emerald",
  teal: "accent-rail-teal",
  green: "accent-rail-green",
};

const dotClass: Record<Experience["accent"], string> = {
  emerald: "bg-emerald-500",
  teal: "bg-teal-400",
  green: "bg-green-400",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Eight years, three chapters"
        description="Where and when — the work itself lives below."
      />

      <div className="relative mt-16">
        <div className="timeline-line absolute top-0 bottom-0 left-[7px] w-px md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`relative pl-10 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-14 md:text-right md:ml-0" : "md:ml-auto md:pl-14"
              }`}
            >
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 -translate-x-[5px] rounded-full ring-4 ring-[#0a0a0f] md:left-auto ${
                  i % 2 === 0
                    ? "md:-right-[5px] md:left-auto md:translate-x-0"
                    : "md:-left-[5px] md:translate-x-0"
                } ${dotClass[exp.accent]} ${exp.current ? "pulse-ring" : ""}`}
              />
              <div className={`h-full rounded-2xl border border-white/5 bg-white/[0.015] p-6`}>
                <div className={`flex items-center gap-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className={`block h-10 w-1 rounded-full ${railClass[exp.accent]}`} />
                  <div className={i % 2 === 0 ? "md:order-first" : ""}>
                    <h3 className="heading text-lg font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-teal-300/90">{exp.role}</p>
                  </div>
                </div>
                <div className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="mono">{exp.period}</span>
                  <span className="text-zinc-700">·</span>
                  <span>{exp.location}</span>
                  <span className="text-zinc-700">·</span>
                  <span className="rounded-full bg-white/[0.04] px-2 py-0.5 text-zinc-400">{exp.type}</span>
                  {exp.current && (
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">Current</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
