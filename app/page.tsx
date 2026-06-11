import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MetricsBand from "@/components/MetricsBand";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CaseStudy from "@/components/CaseStudy";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <MetricsBand />
      <ExperienceTimeline />
      <CaseStudy />
      <ProjectsGrid />
      <SkillsGrid />
      <Contact />
      <Footer />
    </main>
  );
}
