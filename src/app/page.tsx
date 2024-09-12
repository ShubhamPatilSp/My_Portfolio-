import Contact from "./componets/Contact";
import Footer from "./componets/footer";
import HeroSection from "./componets/HeroSection";
import Projects from "./componets/Projects";
import SimpleResumeViewer from "./componets/Resume";
import SkillsSection from "./componets/Skills";

// Remove the lines with merge conflict markers and any extraneous imports or components.

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Projects />
      <SkillsSection />
      <SimpleResumeViewer />
      <Contact />
      <Footer />
    </main>
  );
}
