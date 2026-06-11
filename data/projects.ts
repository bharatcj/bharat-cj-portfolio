export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  accent: "emerald" | "teal" | "amber";
  link?: string;
};

export const projects: Project[] = [
  {
    name: "PartyWitty Platform",
    tagline: "One booking platform, four product surfaces",
    description:
      "India's party-booking platform: venue discovery, table & event bookings, group bookings and payouts. I led engineering across the React web app, Flutter customer and partner apps, and the CodeIgniter plus Node backends, authoring nearly half of all engineering commits.",
    tech: ["PHP", "Node.js", "React", "Flutter", "MySQL", "WebSockets"],
    accent: "emerald",
  },
  {
    name: "Unified Payments & Wallet",
    tagline: "Four gateways, one checkout",
    description:
      "Single payment flow spanning Razorpay, Paytm, Stripe and Easebuzz with wallet co-funding, coupon engine, reward issuance and S2S webhook firewalling, engineered so gateway callbacks bypass the strict API firewall without weakening it.",
    tech: ["Razorpay", "Paytm", "Stripe", "Easebuzz", "MySQL"],
    accent: "amber",
  },
  {
    name: "Encrypted DB Backup System",
    tagline: "Sleep-at-night database insurance",
    description:
      "Solo-built backup platform: AES-256-GCM encrypted MySQL dumps shipped to Cloudflare R2 with daily/weekly/monthly retention, TOTP-MFA dashboard, one-click restore, audit logs and email health reports.",
    tech: ["Node.js", "AES-256-GCM", "Cloudflare R2", "TOTP MFA"],
    accent: "teal",
  },
  {
    name: "AI Call Intelligence",
    tagline: "Every sales call, transcribed and summarized",
    description:
      "Call-center pipeline that pulls Smartflo recordings, transcribes them with AssemblyAI, summarizes with a locally-hosted LLM (Ollama), and emails AI-generated daily reports through an async queue with retry workers.",
    tech: ["Python", "AssemblyAI", "Ollama", "PHP", "Cron"],
    accent: "emerald",
  },
  {
    name: "WhatsApp AI Concierge",
    tagline: "A bot that actually holds a conversation",
    description:
      "WhatsApp bot on Meta Cloud API wired to Dify AI: persistent conversation sessions, message deduplication, per-user queues, typing indicators and full conversation logging to MySQL.",
    tech: ["Node.js", "Meta Cloud API", "Dify AI", "MySQL"],
    accent: "teal",
  },
  {
    name: "Infrastructure Security Overhaul",
    tagline: "46 hardening items, zero downtime",
    description:
      "Re-architected the platform's perimeter: VPN-only admin domain, public/partner gateway segmentation, automated SSL via Cloudflare DNS-01, Apache hardening, centralized API firewall with app-secret validation, all while keeping payments and 16 cron automations running.",
    tech: ["Linux", "Apache", "Cloudflare", "Pritunl VPN", "Certbot"],
    accent: "amber",
  },
];
