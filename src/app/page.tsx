import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSections";
import { getAllExperience } from "@/lib/experience";
import { getAllProjects } from "@/lib/project";
import Image from "next/image";

export default function Home() {
  const experiences = getAllExperience();
  const projects = getAllProjects();

  return (
    <>
      <HeroSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <Footer />
    </>
  );
}
