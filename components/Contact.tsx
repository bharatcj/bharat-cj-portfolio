"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import Parallax from "./Parallax";
import { FadeIn, Magnetic } from "./motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  function copyEmail() {
    navigator.clipboard
      .writeText(profile.email)
      .then(() => {
        setCopied(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        window.location.href = `mailto:${profile.email}`;
      });
  }

  const swap = { duration: reduce ? 0 : 0.32, ease: [0.21, 0.47, 0.32, 0.98] as const };

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div aria-hidden="true" className="horizon-scene">
        <div className="horizon-line" />
        <div className="horizon-floor">
          <div className="horizon-tiles" />
        </div>
      </div>
      <Parallax speed={45} className="glow-emerald absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
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
            <button
              type="button"
              onClick={copyEmail}
              aria-label={`Copy email address ${profile.email}`}
              className={`inline-block cursor-pointer rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-shadow hover:shadow-emerald-500/50 ${copied ? "copy-ping" : ""}`}
            >
              <span aria-hidden="true" className="grid overflow-hidden">
                <motion.span
                  className="col-start-1 row-start-1 flex items-center justify-center"
                  animate={{ y: copied ? "-120%" : "0%" }}
                  transition={swap}
                >
                  {profile.email}
                </motion.span>
                <motion.span
                  className="col-start-1 row-start-1 flex items-center justify-center gap-2"
                  animate={{ y: copied ? "0%" : "120%" }}
                  transition={swap}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                    <motion.path
                      d="M4 12l5 5 10-11"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={{ pathLength: copied ? 1 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.35, delay: copied ? 0.1 : 0 }}
                    />
                  </svg>
                  Copied
                </motion.span>
              </span>
            </button>
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
        <span aria-live="polite" className="sr-only">
          {copied ? "Email address copied" : ""}
        </span>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-block text-xs text-zinc-500 transition-colors hover:text-zinc-300"
        >
          or open your mail app
        </a>
      </FadeIn>
    </section>
  );
}
