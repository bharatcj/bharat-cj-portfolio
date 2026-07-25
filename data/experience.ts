export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-time" | "Internship";
  accent: "emerald" | "teal" | "green";
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "PartyWitty",
    role: "Team Lead",
    period: "Mar 2026 - Jul 2026",
    location: "India",
    type: "Full-time",
    accent: "emerald",
    current: true,
  },
  {
    company: "Nablasol",
    role: "Software Developer (AI / Full-Stack)",
    period: "Feb 2022 - Feb 2026",
    location: "New Delhi, India",
    type: "Full-time",
    accent: "teal",
  },
  {
    company: "Quantum Leap",
    role: "Full Stack Developer",
    period: "Jun 2018 - Feb 2022",
    location: "Bengaluru, India",
    type: "Full-time",
    accent: "green",
  },
];
