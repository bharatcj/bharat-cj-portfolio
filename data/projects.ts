export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  accent: "emerald" | "teal" | "green";
  surface?: "Mobile App" | "Web App" | "Platform";
  personal?: boolean;
  link?: string;
  linkLabel?: string;
  playStore?: string;
};

export const projects: Project[] = [
  {
    name: "SlotItUp",
    tagline: "Book any local service, your own platform, end to end",
    description:
      "A full-stack appointment-booking and operations platform for salons, spas, barbers, clinics and more. I designed and built the entire system solo: a Flutter customer app on the Play Store, a multi-subdomain Next.js web app serving six personas (customer, partner, employee, inductor, admin, super-admin), and a hardened FastAPI backend on PostgreSQL with Firebase Phone Auth, TOTP MFA, no-show fines, a subscription plus multi-level commission ledger, and role switching shared across subdomains.",
    tech: ["Flutter", "Next.js", "FastAPI", "PostgreSQL", "Firebase", "TOTP MFA"],
    accent: "emerald",
    surface: "Platform",
    personal: true,
    link: "https://slotitup.com",
    linkLabel: "Visit site",
    playStore: "https://play.google.com/store/apps/details?id=com.slotitup.app",
  },
  {
    name: "Customer Super-App",
    tagline: "One Flutter app for bookings, tables, events and carnivals",
    description:
      "A production Flutter super-app, a monorepo of feature packages sharing one shell. Discovery feed, reels, venue and table booking, group and event bookings, bidding flows, a wallet and branded payments, all behind a flavor-driven build pipeline (production, QA, staging, develop) with Melos and FVM for multi-package orchestration.",
    tech: ["Flutter", "Dart", "Melos", "FVM", "Firebase", "REST"],
    accent: "teal",
    surface: "Mobile App",
  },
  {
    name: "Partner App",
    tagline: "The business-owner mobile surface, from bookings to accounting",
    description:
      "A production Flutter app for venue owners: table and group-booking management, event creation, cost-to-bid and bid handling, menu management, wallet and accounting, artist hiring, brand setup, subscriptions, reviews and call support. Same flavor-driven Melos monorepo as the customer app, sharing domain and data packages.",
    tech: ["Flutter", "Dart", "Melos", "FVM", "Firebase", "REST"],
    accent: "green",
    surface: "Mobile App",
  },
  {
    name: "PartyWitty Platform",
    tagline: "One booking platform, four product surfaces",
    description:
      "India's party-booking platform: venue discovery, table & event bookings, group bookings and payouts. I led engineering across the React web app, Flutter customer and partner apps, and the CodeIgniter plus Node backends, authoring nearly half of all engineering commits.",
    tech: ["PHP", "Node.js", "React", "Flutter", "MySQL", "WebSockets"],
    accent: "emerald",
    surface: "Platform",
  },
  {
    name: "Unified Payments & Wallet",
    tagline: "Four gateways, one checkout",
    description:
      "Single payment flow spanning Razorpay, Paytm, Stripe and Easebuzz with wallet co-funding, coupon engine, reward issuance and S2S webhook firewalling, engineered so gateway callbacks bypass the strict API firewall without weakening it.",
    tech: ["Razorpay", "Paytm", "Stripe", "Easebuzz", "MySQL"],
    accent: "green",
    surface: "Platform",
  },
  {
    name: "Encrypted DB Backup System",
    tagline: "Sleep-at-night database insurance",
    description:
      "Solo-built backup platform: AES-256-GCM encrypted MySQL dumps shipped to Cloudflare R2 with daily/weekly/monthly retention, TOTP-MFA dashboard, one-click restore, audit logs and email health reports.",
    tech: ["Node.js", "AES-256-GCM", "Cloudflare R2", "TOTP MFA"],
    accent: "teal",
    surface: "Web App",
  },
  {
    name: "AI Call Intelligence",
    tagline: "Every sales call, transcribed and summarized",
    description:
      "Call-center pipeline that pulls Smartflo recordings, transcribes them with AssemblyAI, summarizes with a locally-hosted LLM (Ollama), and emails AI-generated daily reports through an async queue with retry workers.",
    tech: ["Python", "AssemblyAI", "Ollama", "PHP", "Cron"],
    accent: "emerald",
    surface: "Platform",
  },
  {
    name: "WhatsApp AI Concierge",
    tagline: "A bot that actually holds a conversation",
    description:
      "WhatsApp bot on Meta Cloud API wired to Dify AI: persistent conversation sessions, message deduplication, per-user queues, typing indicators and full conversation logging to MySQL.",
    tech: ["Node.js", "Meta Cloud API", "Dify AI", "MySQL"],
    accent: "teal",
    surface: "Platform",
  },
  {
    name: "Infrastructure Security Overhaul",
    tagline: "46 hardening items, zero downtime",
    description:
      "Re-architected the platform's perimeter: VPN-only admin domain, public/partner gateway segmentation, automated SSL via Cloudflare DNS-01, Apache hardening, centralized API firewall with app-secret validation, all while keeping payments and 16 cron automations running.",
    tech: ["Linux", "Apache", "Cloudflare", "Pritunl VPN", "Certbot"],
    accent: "green",
    surface: "Platform",
  },
];
