import Contact from "./componets/Contact";
import HeroSection from "./componets/HeroSection";
import Projects from "./componets/Projects";
import DigitalResume from "./componets/Resume";
import Resume from "./componets/Resume";
import SkillsSection from "./componets/Skills";
import Footer from "./componets/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Projects />
      <SkillsSection />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}