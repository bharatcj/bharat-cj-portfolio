"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience, type Experience } from "@/data/experience";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

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
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tl-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: ".tl-track",
            start: "top 75%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        }
      );
      gsap.utils.toArray<HTMLElement>(".tl-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.55,
            ease: "back.out(2.6)",
            scrollTrigger: { trigger: dot, start: "top 80%" },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>(".tl-card").forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, x: card.dataset.side === "left" ? -56 : 56 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 84%" },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={rootRef}
      className="relative mx-auto max-w-6xl px-6 py-28"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Eight years, three chapters"
        description="Where and when. The work itself lives below."
      />

      <div className="tl-track relative mt-16">
        <div className="absolute top-0 bottom-0 left-[7px] w-px md:left-1/2 md:-translate-x-1/2">
          <div className="tl-line timeline-line h-full w-full" />
        </div>

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <div key={exp.company} className="relative">
              <span
                className={`tl-dot absolute top-2 left-[7px] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-[#0a0a0f] md:left-1/2 ${dotClass[exp.accent]} ${exp.current ? "pulse-ring" : ""}`}
              />
              <div
                data-side={i % 2 === 0 ? "left" : "right"}
                className={`tl-card relative pl-10 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                }`}
              >
                <div className="h-full rounded-2xl border border-white/5 bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 hover:bg-white/[0.03] hover:shadow-[0_16px_48px_-20px_rgba(16,185,129,0.35)]">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
