import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Folder, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import SpotlightCard from "@/components/SpotlightCard";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { Project } from "@/types";

export default function Projects() {
  const { t, language } = useApp();
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  // Mouse position for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the floating image
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }; // More responsive spring
  const downloadX = useSpring(mouseX, springConfig);
  const downloadY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="pt-32 pb-20 relative min-h-screen"
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display">
            {t.projects.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link to={`/projects/${project.id}`} className="block">
                <SpotlightCard className="group cursor-none sm:cursor-pointer hover:border-primary/50 transition-colors duration-300 h-full">
                  <div className="flex flex-col p-8 h-full">
                    {/* Header: Title & WIP Badge */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors font-display">
                        {project.title}
                      </h3>
                      {project.isWorkInProgress && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/90 backdrop-blur-md rounded-lg text-white shadow-lg border border-amber-400/20">
                          <span className="text-xs font-bold font-mono uppercase tracking-wider">
                            {language === 'pl' ? 'W trakcie prac' : 'In Progress'}
                          </span>
                        </div>
                      )}
                      {project.isExperimental && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-fuchsia-500/90 backdrop-blur-md rounded-lg text-white shadow-lg border border-fuchsia-400/20">
                          <span className="text-xs font-bold font-mono uppercase tracking-wider">
                            {language === 'pl' ? 'Eksperyment' : 'Experimental'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-4xl">
                      {project.description[language]}
                    </p>

                    <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold font-mono px-2.5 py-1 rounded text-primary bg-primary/5 border border-primary/10 whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center shrink-0">
                        <div
                          className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium group-hover:bg-slate-800 dark:group-hover:bg-slate-200 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-200 dark:shadow-none whitespace-nowrap"
                        >
                          {t.projects.readMore}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Floating Hover Image */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                x: downloadX,
                y: downloadY,
                translateX: "10%", // Offset from cursor to right
                translateY: "-50%", // Center vertically relative to cursor
                zIndex: 9999, // Ensure it's on top of everything
              }}
              className="pointer-events-none fixed top-0 left-0 hidden md:block w-[320px] aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white dark:border-slate-800 bg-slate-900 ring-1 ring-black/10"
            >
              <img
                src={hoveredProject.imageUrl}
                alt={hoveredProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-10">
                 <p className="text-white font-bold text-sm truncate">{hoveredProject.title}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
