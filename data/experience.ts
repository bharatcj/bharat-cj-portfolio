export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "PartyWitty",
    role: "Team Lead",
    period: "Mar 2026 — Jul 2026",
    location: "India",
    current: true,
    summary:
      "Led engineering for India's party-booking platform across four product surfaces — React web, Flutter customer & partner apps, and PHP/Node backends.",
    highlights: [
      "Led a cross-stack team of PHP, React, Node and Flutter developers across 4 product boards — while personally authoring 1,186 commits across 10 repos in 4 months, 48% of all engineering commits.",
      "Owned the CodeIgniter 4 booking-and-payments backend (~75 controllers): 87% of commits, while reviewing and merging team changes for conflict-free production releases.",
      "Unified 4 payment gateways (Razorpay, Paytm, Easebuzz, Stripe) behind one checkout-verify flow; rebuilt Paytm S2S webhooks and made payout settlement atomic.",
      "Shipped 5 AI surfaces: call transcription + summaries (AssemblyAI + self-hosted Ollama) with daily per-agent digests, a WhatsApp Dify bot built solo in one day, web AI chat, review moderation, and resume screening.",
      "Drove a 46-point security overhaul in one week — global route middleware, VPN-gated admin, hardened firewall — then unified JWT sessions across React, Node and PHP.",
      "Built an encrypted MySQL backup platform solo: AES-256-GCM dumps to Cloudflare R2, TOTP MFA, tiered retention, one-click restore, audit logs.",
    ],
    tech: [
      "PHP (CodeIgniter 4)",
      "Node.js",
      "React",
      "Flutter",
      "MySQL",
      "Ollama / LLMs",
      "Cloudflare R2",
      "Linux",
    ],
  },
  {
    company: "Nablasol",
    role: "Software Developer (AI / Full-Stack)",
    period: "Feb 2022 — Feb 2026",
    location: "New Delhi, India",
    summary:
      "Built AI document intelligence and CRM automation for US clients — OCR + GPT-4 pipelines, Elasticsearch search, and high-volume data engineering.",
    highlights: [
      "Engineered OCR + GPT-4/Whisper pipelines for PDF and audio — 95% extraction accuracy, 66% faster transcription, OpenCV selfie-ID verification.",
      "Automated CRM workflows with SugarCRM logic hooks and Apache Airflow DAGs (50% efficiency gain); processed 100K+ monthly events at 99.9% uptime.",
      "Built Elasticsearch-based PDF search over 10K+ documents (40% faster retrieval); migrated 1.5M+ records with zero loss.",
      "Cut server timeouts 47% and dashboard load 40%; designed async helpers enabling bulk operations across 24M records.",
      "Integrated WhatsApp, Facebook, TikTok, Twilio and QuickBooks APIs with OAuth 2.0; built AI content moderation for social channels.",
    ],
    tech: [
      "Python",
      "PHP",
      "SugarCRM",
      "OpenAI / GPT-4",
      "Elasticsearch",
      "Apache Airflow",
      "GCP",
      "AWS",
    ],
  },
  {
    company: "Quantum Leap",
    role: "Full Stack Developer",
    period: "Jun 2018 — Feb 2022",
    location: "Bengaluru, India",
    summary:
      "Delivered web platforms end-to-end for enterprise clients, headlined by the TATA management system portal.",
    highlights: [
      "Led end-to-end development of the ISO management portal for TATA Consumer Products — adopted across 20 plants and offices on annual contracts.",
      "Standardized management processes, cutting paperwork and operational costs; built auditing tools and a voice-command interface.",
      "Shipped full-lifecycle web apps for diverse clients with PHP, Laravel, JavaScript and SQL.",
    ],
    tech: ["PHP", "Laravel", "JavaScript", "SQL", "jQuery"],
  },
];
