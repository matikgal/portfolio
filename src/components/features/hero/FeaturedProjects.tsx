
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import SpotlightCard from '@/components/SpotlightCard'
import { projectsData } from '@/data/projects'

export default function FeaturedProjects() {
  const { t, language } = useApp()
  const featuredProjects = projectsData.slice(0, 3)

  return (
    <section className="mb-24">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-display">{t.hero.viewWork}</h2>
        <Link
          to="/projects"
          className="group text-sm font-medium text-primary flex items-center gap-1 transition-all hover:gap-2 w-fit">
          {t.hero.viewAll} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}>
            <Link to={`/projects/${project.id}`}>
              <SpotlightCard className="group cursor-pointer">
                <div className="p-6 md:p-8 h-full flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors font-display">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] uppercase tracking-wider font-bold font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors group/btn">
                      {t.projects.readMore}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                  <div
                    className="md:w-64 w-full h-48 md:h-40 bg-slate-100 dark:bg-white/5 rounded-xl overflow-hidden relative shadow-inner order-1 md:order-2"
                  >
                    {project.mobileImages && project.mobileImages.length > 0 ? (
                      // Mobile Mockup View for Hero
                      <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-900/50 dark:to-slate-800/50 pt-4 px-2 relative">
                        <div className="relative w-[100px] aspect-[9/19] rounded-t-[1.5rem] overflow-hidden border-[6px] border-b-0 border-slate-900 shadow-xl translate-y-1 group-hover:scale-105 transition-transform duration-700">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      // Standard Desktop View
                      <>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          loading={index === 0 ? "eager" : "lazy"}
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover opacity-90 dark:opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Link - Mobile */}
      <div className="flex justify-center mt-8">
        <Link
          to="/projects"
          className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105">
          {t.hero.viewAll}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
