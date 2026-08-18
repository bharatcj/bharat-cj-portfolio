export type WorkStat = {
  value: number;
  suffix?: string;
  label: string;
};

export type WorkPillar = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  blurb: string;
  stats: WorkStat[];
  tech: string[];
  accent: "emerald" | "teal" | "green";
};

export const workIntro = {
  title: "Work that shipped",
  description:
    "Pulled out of three roles and four years of production. Not a job history, but the actual engineering, organized by what it does.",
};

export const workPillars: WorkPillar[] = [
  {
    id: "payments",
    index: "01",
    title: "Payment Systems & Transaction Engines",
    tagline: "Four gateways, one checkout, atomic settlement",
    blurb:
      "Razorpay, Paytm, Stripe and Easebuzz unified behind a single checkout-and-verify flow. Rebuilt a deprecated server-to-server payment webhook, made payout settlement atomic across every transaction table, and enforced a co-funding wallet at the API layer across both Node and PHP.",
    stats: [
      { value: 4, label: "gateways, one checkout" },
      { value: 87, suffix: "%", label: "of backend commits owned" },
      { value: 75, suffix: "+", label: "controllers owned" },
    ],
    tech: ["Razorpay", "Paytm", "Stripe", "Easebuzz", "CodeIgniter 4", "Node.js"],
    accent: "emerald",
  },
  {
    id: "ai",
    index: "02",
    title: "AI Pipelines & Document Intelligence",
    tagline: "Every call transcribed, every document parsed",
    blurb:
      "An async call-intelligence pipeline transcribes every recorded call with AssemblyAI, summarizes it with a self-hosted Ollama model, and emails leadership a per-agent morning digest, production-hardened through a 34-item checklist of retry semantics, locking and backfills. The same pattern powers OCR plus GPT-4 extraction at 95% accuracy and a WhatsApp concierge shipped solo in a single day.",
    stats: [
      { value: 5, label: "AI surfaces shipped" },
      { value: 95, suffix: "%", label: "extraction accuracy" },
      { value: 100, suffix: "%", label: "calls auto-summarized" },
    ],
    tech: ["AssemblyAI", "Ollama", "OpenAI / GPT-4", "Whisper", "Dify AI", "Python"],
    accent: "teal",
  },
  {
    id: "multi-surface",
    index: "03",
    title: "Multi-Surface Product Engineering",
    tagline: "React web, Flutter super-app, one identity",
    blurb:
      "Became the through-line across a React web app, a Flutter super-app and three backends that each handled identity their own way. Consolidated group, table, event and carnival bookings into a single card architecture, hardened customer identity with shared JWT sessions across React, Node and PHP, and split the Flutter super-app into secure feature repos so external contributors ship safely.",
    stats: [
      { value: 4, label: "product boards led" },
      { value: 197, label: "React app commits" },
      { value: 80, suffix: "+", label: "endpoints refactored" },
    ],
    tech: ["React", "Next.js", "Flutter", "JWT", "Node.js", "TypeScript"],
    accent: "green",
  },
  {
    id: "infra",
    index: "04",
    title: "Infrastructure, Security & Reliability",
    tagline: "Forty-six hardening items, zero downtime",
    blurb:
      "Built the platform's missing safety layers in deliberate order. Recovery first: a solo-built MySQL backup platform with AES-256-GCM encrypted dumps streamed to Cloudflare R2, TOTP MFA, tiered retention and one-click restore. Then the perimeter: a week-long, 46-item security overhaul spanning global route middleware, centralized CORS, app-secret validation and a split-domain architecture, engineered so payment webhooks and all 16 cron jobs kept running without a single interruption.",
    stats: [
      { value: 46, suffix: "/46", label: "hardening items closed" },
      { value: 0, label: "downtime incidents" },
      { value: 6, label: "exposed ports closed" },
    ],
    tech: ["Linux", "Apache", "Cloudflare R2", "AES-256-GCM", "Pritunl VPN", "Certbot"],
    accent: "emerald",
  },
  {
    id: "data",
    index: "05",
    title: "Data Engineering at Scale",
    tagline: "Twenty-four million records, searchable",
    blurb:
      "High-volume data engineering across millions of records: an Elasticsearch-based PDF search over ten-thousand-plus documents with forty-percent faster retrieval, a 1.5M-record migration with zero loss, server-timeout cuts of 47% and async helpers enabling bulk operations across 24M records, with CRM workflows automated through SugarCRM logic hooks and Apache Airflow DAGs.",
    stats: [
      { value: 24, suffix: "M", label: "records processed" },
      { value: 40, suffix: "%", label: "faster retrieval" },
      { value: 100, suffix: "K+", label: "monthly events at 99.9% uptime" },
    ],
    tech: ["Elasticsearch", "Apache Airflow", "SugarCRM", "MySQL", "GCP", "AWS"],
    accent: "teal",
  },
  {
    id: "leadership",
    index: "06",
    title: "Leadership & Engineering Process",
    tagline: "A lead who builds the systems his team runs on",
    blurb:
      "Made process itself an engineering artifact: a Trello-integrated workflow engine built into the admin backend, then ran the team and myself through it, 211 daily status updates across 173 cards in sixteen weeks. Kept an 87% commit share on the backend while reviewing and merging teammate changes, rolled out a company-wide Django HRMS as sole author, and assembled an AI-powered hiring pipeline in a single day.",
    stats: [
      { value: 48, suffix: "%", label: "of all engineering commits" },
      { value: 211, label: "daily updates logged" },
      { value: 173, label: "cards delivered" },
    ],
    tech: ["Code Review", "Trello API", "Django", "Hiring", "Mentoring", "Sprint Process"],
    accent: "green",
  },
];
