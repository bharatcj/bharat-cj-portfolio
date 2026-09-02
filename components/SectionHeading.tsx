"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const reduce = useReducedMotion();
  const child = (hidden: object, visible: object): Variants =>
    reduce
      ? ({ hidden, visible: { ...visible, transition: { duration: 0 } } } as Variants)
      : ({ hidden, visible } as Variants);

  return (
    <motion.div
      className="mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
      }}
    >
      <motion.p
        variants={child(
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } }
        )}
        className="mono mb-3 text-sm tracking-[0.25em] text-emerald-400 uppercase"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={child(
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.8, ease: [0.77, 0, 0.18, 1] } }
        )}
        className="heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={child(
          { scaleX: 0 },
          { scaleX: 1, transition: { duration: 0.8, ease: [0.77, 0, 0.18, 1] } }
        )}
        className="mt-3 h-px w-24 origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-transparent"
      />
      {description ? (
        <motion.p
          variants={child(
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
          )}
          className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
