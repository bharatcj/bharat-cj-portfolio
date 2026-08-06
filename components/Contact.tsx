import { profile } from "@/data/profile";
import { FadeIn, Magnetic } from "./motion";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="glow-emerald absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <FadeIn className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mono mb-4 text-sm tracking-[0.25em] text-emerald-400 uppercase">
          Contact
        </p>
        <h2 className="heading text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="gradient-text">worth shipping.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
          Open to collaborations in AI, automation and platform engineering,
          and to conversations about leading teams that deliver.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="pulse-ring inline-block rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-shadow hover:shadow-emerald-500/50"
            >
              {profile.email}
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover inline-block rounded-full px-8 py-4 text-sm font-semibold text-zinc-200"
            >
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover inline-block rounded-full px-8 py-4 text-sm font-semibold text-zinc-200"
            >
              GitHub
            </a>
          </Magnetic>
        </div>
      </FadeIn>
    </section>
  );
}
