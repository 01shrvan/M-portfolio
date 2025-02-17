import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { SectionTwo } from "./components/Sectiontwo";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />
      <AboutSection />
      <ExperienceSection />
      <Footer/>
    </div>
  );
}