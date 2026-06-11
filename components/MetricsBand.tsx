import { metrics } from "@/data/metrics";
import { CountUp, Stagger, StaggerItem } from "./motion";

export default function MetricsBand() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.015] py-16">
      <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map((m) => (
          <StaggerItem key={m.label} className="text-center">
            <div className="mono text-3xl font-bold text-white sm:text-4xl">
              <CountUp value={m.value} suffix={m.suffix} className="gradient-text" />
            </div>
            <p className="mt-2 text-sm font-medium text-zinc-300">{m.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">{m.detail}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
