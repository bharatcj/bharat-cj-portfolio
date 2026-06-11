export type CaseStudyChapter = {
  number: string;
  title: string;
  subtitle: string;
  body: string[];
  stats: { value: string; label: string }[];
};

export const caseStudyIntro = {
  company: "PartyWitty",
  role: "Team Lead · Mar 2026 — Present",
  context:
    "India's party & venue booking platform — a CodeIgniter 4 core, React web app, Node services, and Flutter customer & partner apps. I lead engineering across all four product boards while staying deep in the code: 1,186 commits across 10 repositories in my first four months.",
};

export const caseStudyChapters: CaseStudyChapter[] = [
  {
    number: "01",
    title: "Rebuilding the Money Path",
    subtitle: "Backend platform & payments",
    body: [
      "The money path was the platform's biggest liability: four payment gateways stitched together inconsistently, payouts reconciled by hand, and discounts computed differently on every surface. Over sixteen weeks I took ownership of the CodeIgniter 4 core — 889 of 1,017 commits across ~75 controllers — and rebuilt it into a coherent transaction engine.",
      "Razorpay, Paytm, Easebuzz and Stripe now sit behind a single checkout-and-verify flow; Paytm's server-to-server webhook was rebuilt after I traced callbacks to a deprecated endpoint. PartyWittyPay — a co-funding wallet where venue and platform discounts resolve to one source of truth — is enforced at the API layer across both Node and PHP, with payment sessions that auto-expire via cron and payout settlement made atomic across every transaction table.",
    ],
    stats: [
      { value: "87%", label: "of backend commits" },
      { value: "4", label: "gateways, one checkout" },
      { value: "~75", label: "controllers owned" },
    ],
  },
  {
    number: "02",
    title: "One Product, Many Surfaces",
    subtitle: "Frontend & mobile",
    body: [
      "The customer experience was scattered across a React web app, a Flutter super-app and three backends that each handled identity their own way. I became the through-line: 197 commits on the React app consolidated group, table, event and carnival bookings into a single card architecture with inline QR codes, balance-due payments and history that returns users to the exact tab they left.",
      "I hardened customer identity across React, Node and CodeIgniter with shared JWT sessions and signed public IDs, auto-refactored 80+ React API endpoints to runtime environment config, and architected the Flutter super-app's split into secure feature repos — contracts, sandboxes and onboarding runbooks — so external contributors ship safely without touching the core.",
    ],
    stats: [
      { value: "197", label: "React app commits" },
      { value: "80+", label: "endpoints refactored" },
      { value: "3", label: "stacks, one identity" },
    ],
  },
  {
    number: "03",
    title: "Building the AI Layer",
    subtitle: "AI & automation",
    body: [
      "Sales calls vanished into archives, customer chats queued for humans, resumes piled up unread. Over four months I built the company an AI layer. The flagship: an async call-intelligence pipeline that transcribes every recorded call (AssemblyAI), summarizes it with a self-hosted Ollama model, and emails leadership a per-agent digest every morning — production-hardened through a 34-item checklist of retry semantics, locking and backfills.",
      "The pattern repeats across the stack: a WhatsApp concierge bot (Meta Cloud API + Dify) shipped solo in a single day, later extended to the web as AskWitty chat sharing one AI brain across channels; an AI resume screener productionized in a day; AI review moderation with admin-editable rules; and a cohort-normalized feed ranking algorithm tunable from an admin UI without redeploys.",
    ],
    stats: [
      { value: "5", label: "AI surfaces shipped" },
      { value: "1 day", label: "WhatsApp bot, solo" },
      { value: "100%", label: "calls auto-summarized" },
    ],
  },
  {
    number: "04",
    title: "Infrastructure You Can Sleep On",
    subtitle: "DevOps & security",
    body: [
      "I built the platform's missing safety layers in deliberate order. First, recovery: a MySQL backup platform written entirely solo — AES-256-GCM encrypted dumps streamed to Cloudflare R2, TOTP MFA, tiered retention, one-click permission-aware restore and audit logging. Then the perimeter: SSH behind a Pritunl VPN, service ports firewalled, internal tools off the public internet with automated DNS-01 SSL renewals.",
      "The centerpiece was a week-long, 46-item security overhaul — global route middleware, centralized CORS across 18+ controllers, app-secret validation, and a split-domain architecture separating the VPN-only staff dashboard from the public API gateway — engineered carefully enough that payment webhooks and all 16 production cron jobs kept running without a single interruption.",
    ],
    stats: [
      { value: "46/46", label: "hardening items closed" },
      { value: "0", label: "downtime incidents" },
      { value: "100%", label: "sole-author backup system" },
    ],
  },
  {
    number: "05",
    title: "Process as an Engineering Artifact",
    subtitle: "Leadership",
    body: [
      "I inherited a four-board product portfolio and a team spread across PHP, React, Node and Flutter. My answer was to make process itself an engineering artifact: I built a Trello-integrated workflow engine into the admin backend — API sync, webhooks, cron reporting, a release dashboard — then ran the team and myself through it: 211 daily status updates across 173 cards in 16 weeks.",
      "Leading never meant stepping back from the code. I kept an 87% commit share on the backend while reviewing and merging teammates' changes, rolled out a company-wide Django HRMS as sole author (geofenced, face-verified mobile attendance, payroll, auto-checkout), and assembled an AI-powered hiring pipeline in a single day. The through-line: a lead who builds the systems his team runs on, then holds himself to them first.",
    ],
    stats: [
      { value: "4", label: "product boards led" },
      { value: "211", label: "daily updates logged" },
      { value: "173", label: "cards delivered" },
    ],
  },
];
