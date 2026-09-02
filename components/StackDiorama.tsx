"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SkillGroup } from "@/data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function StackDiorama({
  groups,
  activeIndex,
}: {
  groups: SkillGroup[];
  activeIndex: number | null;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const plates = Array.from(root.querySelectorAll<HTMLElement>(".stack-plate"));
    const labels = Array.from(root.querySelectorAll<HTMLElement>(".stack-label"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      plates.forEach((p, i) => {
        p.style.transform = `translateZ(${64 + i * 36}px)`;
      });
      labels.forEach((l) => {
        l.style.opacity = "1";
      });
      return;
    }
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const section = root.closest("section");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "center center",
          scrub: 0.8,
        },
      });
      plates.forEach((p, i) => {
        tl.fromTo(p, { z: 16 + i * 10 }, { z: 64 + i * 36, ease: "none" }, 0);
      });
      labels.forEach((l) => {
        tl.fromTo(l, { autoAlpha: 0 }, { autoAlpha: 1, ease: "none" }, 0);
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute -top-6 right-0 hidden h-[360px] w-[320px] lg:block"
    >
      <div className="stack-scene h-full w-full">
        <div
          className="stack-scene-inner relative h-full w-full"
          data-has-active={activeIndex !== null ? "true" : "false"}
        >
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="stack-plate absolute inset-0 m-auto h-[200px] w-[200px] rounded-lg border border-emerald-400/35 bg-emerald-500/[0.05] shadow-[inset_0_0_32px_rgba(16,185,129,0.08)]"
              data-active={activeIndex === i ? "" : undefined}
              style={{ transform: `translateZ(${16 + i * 10}px)` }}
            >
              <span className="stack-label mono absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap text-emerald-300/70 opacity-0">
                {g.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
