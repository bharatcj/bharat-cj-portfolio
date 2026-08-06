"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 120, damping: 26, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 120, damping: 26, mass: 0.5 });
  const background = useMotionTemplate`radial-gradient(560px at ${sx}px ${sy}px, rgba(52, 211, 153, 0.06), transparent 65%)`;

  useEffect(() => {
    if (reduce) return;
    function onMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      mx.set(e.clientX);
      my.set(e.clientY);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ background }}
      className="pointer-events-none fixed inset-0 z-[4] hidden md:block"
    />
  );
}
