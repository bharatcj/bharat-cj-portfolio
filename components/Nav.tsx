"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#case-study", label: "Case Study" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const visible = new Set<string>();
    const pick = () => {
      let best: string | null = null;
      let bestTop = Infinity;
      for (const id of visible) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = Math.abs(el.getBoundingClientRect().top);
        if (top < bestTop) {
          bestTop = top;
          best = id;
        }
      }
      setActive(best);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        pick();
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActive(ids[ids.length - 1]);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="heading group text-lg font-bold text-white transition-transform duration-300 hover:scale-105"
        >
          bharat
          <span className="gradient-text inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
            .cj
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-emerald-300"
                      : "nav-link text-zinc-400 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-lamp"
                    className="absolute -bottom-[5px] left-0 h-px w-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 36 }
                    }
                  />
                )}
              </li>
            );
          })}
        </ul>
        <a
          href={profile.resumePath}
          download
          className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition-all hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white"
        >
          Resume ↓
        </a>
      </nav>
    </header>
  );
}
