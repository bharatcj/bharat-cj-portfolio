import { FadeIn } from "./motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <FadeIn className="mb-14">
      <p className="mono mb-3 text-sm tracking-[0.25em] text-cyan-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
