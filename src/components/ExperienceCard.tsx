import { ExperienceData } from "@/lib/experience";
import { motion, useInView } from "framer-motion";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useRef, useState } from "react";
import MDXContent from "./MDXContent";

interface ExperienceCardProps {
  experience: ExperienceData;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const renderMDX = async () => {
      const source = await serialize(experience.content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      });
      setMdxSource(source);
    };
    renderMDX();
  }, [experience.content]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-dark">
            {experience.title}
          </h3>
          <p className="text-lg font-medium text-burnt-orange">
            {experience.company} | {experience.location}
          </p>
        </div>
        <span className="text-lg text-gray-600">{experience.period}</span>
      </div>

      {/* Render MDX content */}
      <div className="prose prose-lg mb-4 max-w-none">
        {mdxSource && <MDXContent source={mdxSource} />}
      </div>

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <motion.span
            key={skill}
            className="bg-burnt-orange text-white px-3 py-1 rounded-full text-sm hover:bg-deep-brown transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
