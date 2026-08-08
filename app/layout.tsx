import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bharatcj.tech"),
  title: "Bharat CJ | Team Lead · Full-Stack & AI Engineering",
  description:
    "Team Lead, Full-Stack & AI Engineering. 8+ years across Python, PHP, React, Node, Flutter and AI: payments, LLM pipelines, secure infrastructure, and multi-surface product delivery.",
  keywords: [
    "Bharat CJ",
    "Bharat Chejay",
    "Team Lead",
    "Full Stack Developer",
    "AI Engineer",
    "Python",
    "PHP",
    "React",
    "Flutter",
    "Next.js",
    "Fastify",
    "PostgreSQL",
    "Technical SEO",
    "NEET.info",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bharat CJ | Team Lead · Full-Stack & AI Engineering",
    description:
      "8+ years building platforms: payments, AI pipelines, secure infrastructure, and teams that ship.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat CJ | Team Lead · Full-Stack & AI Engineering",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bharat CJ",
  alternateName: "Bharat Chejay J",
  url: "https://bharatcj.tech",
  jobTitle: "Team Lead, Full-Stack & AI Engineering",
  email: "mailto:bharatchijay@gmail.com",
  sameAs: [
    "https://github.com/bharatcj",
    "https://www.linkedin.com/in/bharat-cj/",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "AI Engineering",
    "Payment Systems",
    "Technical SEO",
    "Linux Infrastructure",
    "Team Leadership",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
