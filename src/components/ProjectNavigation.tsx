"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/lib/project";
import { Menu, FileText } from "lucide-react";

interface ProjectNavigationProps {
  projects: ProjectData[];
}

export const ProjectNavigation = ({ projects }: ProjectNavigationProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check if we're on mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      // On desktop, always keep expanded
      if (window.innerWidth >= 1024) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track which project is currently in view and if projects section is visible
  useEffect(() => {
    const handleScroll = () => {
      // Check if projects section is in view
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isProjectsSectionVisible =
          rect.top <= 0 && rect.bottom > window.innerHeight / 2;
        setIsVisible(isProjectsSectionVisible);

        // Only update active project if section is visible
        if (isProjectsSectionVisible) {
          const projectElements = projects
            .map((project) =>
              document.getElementById(`project-${project.slug}`)
            )
            .filter(Boolean);

          const scrollPosition = window.scrollY + window.innerHeight / 3;

          for (let i = projectElements.length - 1; i >= 0; i--) {
            const element = projectElements[i];
            if (element && element.offsetTop <= scrollPosition) {
              setActiveProject(projects[i].slug);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  const scrollToProject = (projectSlug: string) => {
    const element = document.getElementById(`project-${projectSlug}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    // Close on mobile after clicking
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  const toggleExpanded = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  // Don't render if no projects or not visible
  if (projects.length === 0 || !isVisible) return null;

  return (
    <>
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isMobile && isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation Container */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Toggle Button (always visible) */}
        <motion.button
          onClick={toggleExpanded}
          className={`flex items-center justify-center w-12 h-12 bg-white border-2 border-burnt-orange rounded-lg shadow-lg hover:bg-warm-cream transition-colors ${
            isExpanded && isMobile ? "bg-warm-cream" : ""
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobile ? (
            <Menu size={20} className="text-burnt-orange" />
          ) : (
            <FileText size={20} className="text-burnt-orange" />
          )}
        </motion.button>

        {/* Navigation Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={`absolute top-0 right-0 bg-white border-2 border-burnt-orange rounded-lg shadow-xl ${
                isMobile ? "w-80 max-w-[calc(100vw-3rem)]" : "w-72"
              }`}
              initial={
                isMobile
                  ? { opacity: 0, x: 20, y: 0 }
                  : { opacity: 0, scale: 0.95 }
              }
              animate={
                isMobile ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, scale: 1 }
              }
              exit={
                isMobile
                  ? { opacity: 0, x: 20, y: 0 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-burnt-orange" />
                  <h3 className="font-semibold text-deep-brown">Projects</h3>
                  {isMobile && (
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Project List */}
              <div className="p-2">
                {projects.map((project, index) => (
                  <motion.button
                    key={project.slug}
                    onClick={() => scrollToProject(project.slug)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-start gap-3 group ${
                      activeProject === project.slug
                        ? "bg-burnt-orange text-white"
                        : "hover:bg-warm-cream text-gray-700"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* Dot indicator */}
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activeProject === project.slug
                          ? "bg-white"
                          : "bg-burnt-orange group-hover:bg-deep-brown"
                      }`}
                    />

                    {/* Project info */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-medium text-sm leading-tight ${
                          activeProject === project.slug
                            ? "text-white"
                            : "text-deep-brown"
                        }`}
                      >
                        {project.title}
                      </div>
                      <div
                        className={`text-xs mt-1 leading-tight ${
                          activeProject === project.slug
                            ? "text-white text-opacity-80"
                            : "text-gray-500"
                        }`}
                      >
                        {project.status === "completed" && "✓ Completed"}
                        {project.status === "in-progress" && "⏳ In Progress"}
                        {project.status === "coming-soon" && "📅 Coming Soon"}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
