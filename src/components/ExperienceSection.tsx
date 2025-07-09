"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExperienceData } from "@/lib/experience";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceSectionProps {
  experiences: ExperienceData[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="fascinate-font text-4xl md:text-5xl text-center mb-16 text-burnt-orange"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
