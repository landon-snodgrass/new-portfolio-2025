"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectData } from "@/lib/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectNavigation } from "./ProjectNavigation";

interface ProjectsSectionProps {
  projects: ProjectData[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-white">
      <ProjectNavigation projects={projects} />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="fascinate-font text-4xl md:text-5xl text-center mb-16 text-burnt-orange"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
