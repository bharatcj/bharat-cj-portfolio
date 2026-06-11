import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume — Bharat CJ",
  description:
    "Resume of Bharat Chejay J — Team Lead, Full-Stack & AI Engineering.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          ← Back to portfolio
        </Link>
        <a
          href={profile.resumePath}
          download="Bharat_CJ_Resume.pdf"
          className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.04]"
        >
          Download PDF ↓
        </a>
      </div>
      <div className="glass flex-1 overflow-hidden rounded-2xl">
        <iframe
          src={profile.resumePath}
          title="Bharat CJ Resume"
          className="h-[85vh] w-full"
        />
      </div>
    </main>
  );
}
