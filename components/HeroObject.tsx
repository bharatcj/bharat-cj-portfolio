"use client";

import { motion, useReducedMotion } from "framer-motion";

const faces = [
  "translateZ(4.5rem)",
  "rotateY(180deg) translateZ(4.5rem)",
  "rotateY(90deg) translateZ(4.5rem)",
  "rotateY(-90deg) translateZ(4.5rem)",
  "rotateX(90deg) translateZ(4.5rem)",
  "rotateX(-90deg) translateZ(4.5rem)",
];

export default function HeroObject() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="pointer-events-none absolute top-[16%] right-[6%] hidden lg:block"
    >
      <div className="scene3d float-y relative h-72 w-72">
        <div className="ring3d top-1/2 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2" />
        <div className="ring3d ring3d-slow top-1/2 left-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2" />
        <div className="cube3d absolute top-1/2 left-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2">
          {faces.map((t) => (
            <div key={t} className="cube-face" style={{ transform: t }} />
          ))}
        </div>
        <div className="glow-emerald absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70" />
      </div>
    </motion.div>
  );
}
