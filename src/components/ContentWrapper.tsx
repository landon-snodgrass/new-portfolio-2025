"use client";

import { ExperienceData } from "@/lib/experience";
import { ProjectData } from "@/lib/project";
import { MotionConfig } from "motion/react";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSections";
import { useEffect, useState } from "react";

interface ContentWrapperProps {
  experiences: ExperienceData[];
  projects: ProjectData[];
}

export const ContentWrapper = ({
  experiences,
  projects,
}: ContentWrapperProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const reducedMotion = isMobile ? "always" : "user";

  return (
    <MotionConfig reducedMotion={reducedMotion}>
      <HeroSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <Footer />
    </MotionConfig>
  );
};
