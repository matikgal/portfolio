import { motion } from "framer-motion";
import { Folder, ArrowRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import SpotlightCard from "@/components/SpotlightCard";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  const { t, language } = useApp();

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="pt-32 pb-20"
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display">
            {t.projects.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/projects/${project.id}`}>
              <SpotlightCard className="group cursor-pointer">
                <div className="flex flex-col gap-6 p-6 md:p-8 h-full">
                  {/* Image Area */}
                  <div
                    className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-inner bg-slate-100 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary"
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${project.title}`}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Folder className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors font-display">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold font-mono px-2.5 py-1 rounded text-primary bg-primary/5 border border-primary/10 whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <div
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-200 dark:shadow-none"
                      >
                        {t.projects.readMore}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
