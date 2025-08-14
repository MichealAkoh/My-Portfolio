// src/app/page.tsx
import dynamic from 'next/dynamic';
import Loading from './loading';

// Dynamically import components that are not immediately needed
const ProjectsSection = dynamic(
  () => import('@/components/projects/ProjectsSection'),
  {
    loading: () => <Loading />,
    ssr: true
  }
);

const ContactSection = dynamic(
  () => import('@/components/contact/ContactSection'),
  {
    loading: () => <Loading />,
    ssr: true
  }
);

const ExperienceSection = dynamic(
  () => import('@/components/experience/ExperienceSection'),
  {
    loading: () => <Loading />,
    ssr: true
  }
);



// Keep critical components imported normally
import Navbar from "@/components/navigationbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";

import Footer from "@/components/footer/Footer";

export default function ProfilePage() {
  return (
    <main className="section-spacing min-h-screen p-8 text-black">
      <div className="p-4">
        <Navbar />
      </div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
