import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MetricsBand from "@/components/MetricsBand";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import WorkShowcase from "@/components/WorkShowcase";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <CursorGlow />
      <div aria-hidden="true" className="vignette" />
      <div aria-hidden="true" className="grain" />
      <Nav />
      <Hero />
      <Marquee />
      <MetricsBand />
      <ExperienceTimeline />
      <WorkShowcase />
      <ProjectsGrid />
      <SkillsGrid />
      <Contact />
      <Footer />
    </main>
  );
}
