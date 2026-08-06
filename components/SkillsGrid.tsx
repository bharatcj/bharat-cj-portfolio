import { skillGroups } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      className="relative border-y border-white/5 bg-white/[0.015] py-28"
    >
      <div className="glow-teal absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="The full stack, literally"
          description="Leadership to Linux: everything needed to take a product from idea to production."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="glass glass-hover sheen border-glow h-full rounded-2xl p-7">
                <h3 className="heading text-base font-bold text-white">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="chip-pop rounded-full border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
