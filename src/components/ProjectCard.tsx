"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ProjectData } from "@/lib/project";
import { serialize } from "next-mdx-remote/serialize";
import MDXContent from "./MDXContent";
import Link from "next/link";
import { ExternalLink, Github, FileText } from "lucide-react";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const renderMDX = async () => {
      const source = await serialize(project.content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      });
      setMdxSource(source);
    };
    renderMDX();
  }, [project.content]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "coming-soon":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "coming-soon":
        return "Coming Soon";
      default:
        return status;
    }
  };

  return (
    <motion.div
      id={`project-${project.slug}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ${
        project.status === "coming-soon"
          ? "bg-gray-50 opacity-75"
          : "bg-[#F5F2E8] hover:bg-white"
      }`}
      whileHover={{ y: project.status === "coming-soon" ? 0 : -4 }}
    >
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-[#4A3426]">
              {project.title}
            </h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                project.status
              )}`}
            >
              {getStatusText(project.status)}
            </span>
          </div>
          <p className="text-lg text-gray-600 mb-3">{project.description}</p>
        </div>
      </div>

      {/* Render MDX content */}
      <div className="prose prose-lg mb-6 max-w-none">
        {mdxSource && <MDXContent source={mdxSource} />}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <motion.span
            key={tech}
            className="bg-[#CC5500] text-white px-3 py-1 rounded-full text-sm hover:bg-[#4A3426] transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Action buttons */}
      {project.status !== "coming-soon" && (
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#CC5500] text-white px-4 py-2 rounded font-medium hover:bg-[#4A3426] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}

          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#CC5500] text-[#CC5500] px-4 py-2 rounded font-medium hover:bg-[#CC5500] hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Source Code
            </motion.a>
          )}

          {project.caseStudyUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.caseStudyUrl}
                className="inline-flex items-center gap-2 border-2 border-[#4A3426] text-[#4A3426] px-4 py-2 rounded font-medium hover:bg-[#4A3426] hover:text-white transition-all"
              >
                <FileText size={16} />
                Case Study
              </Link>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};
