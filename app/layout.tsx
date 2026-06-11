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
  metadataBase: new URL("https://bharat-cj.vercel.app"),
  title: "Bharat CJ — Team Lead · Full-Stack & AI Engineering",
  description:
    "Team Lead — Full-Stack & AI Engineering. 7+ years across Python, PHP, React, Node, Flutter and AI: payments, LLM pipelines, secure infrastructure, and multi-surface product delivery.",
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
  ],
  openGraph: {
    title: "Bharat CJ — Team Lead · Full-Stack & AI Engineering",
    description:
      "7+ years building platforms: payments, AI pipelines, secure infrastructure, and teams that ship.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat CJ — Team Lead · Full-Stack & AI Engineering",
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
        {children}
      </body>
    </html>
  );
}
