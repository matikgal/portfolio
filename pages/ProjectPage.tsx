import { useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code, CheckCircle2 } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { projectsData } from "@/data/projects";
import { Project, Translations } from "@/types";

function ProjectLinks({ project, t }: { project: Project; t: Translations }) {
  return (
    <div className="space-y-4">
        {project.demoUrl && (
            <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-slate-900 font-bold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20"
            >
                <ExternalLink className="w-4 h-4" />
                {t.projects.links.demo}
            </a>
        )}
        <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-white dark:bg-transparent border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
        >
            <Github className="w-4 h-4" />
            {t.projects.links.source}
        </a>
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useApp();
  
  // Find project
  const project = projectsData.find((p) => p.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-24"
    >
      {/* Back Button - Inline for Desktop REMOVED (Moved to Header) */}

      {/* Mobile Fixed Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-[60] xl:hidden p-3 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg text-slate-900 dark:text-white active:scale-95 transition-all group"
        aria-label={language === 'pl' ? 'Wróć' : 'Go back'}
      >
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      {/* Hero Section */}
      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white font-display">
            {project.title}
            </h1>
            
            <button
                onClick={() => navigate(-1)}
                className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 shadow-lg shadow-slate-900/10"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>{language === 'pl' ? 'Wróć' : 'Go back'}</span>
            </button>
        </div>
        
        {/* Image with bottom fade */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-white/5">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover max-h-[70vh] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
                width={1920}
                height={1080}
                loading="eager"
            />
        </div>

        <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
            <span
                key={tag}
                className="text-sm font-bold font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
            >
                {tag}
            </span>
            ))}
        </div>

        {/* Mobile Links - Visible only on mobile */}
        <div className="md:hidden">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">{t.projects.links.title}</h3>
            <ProjectLinks project={project} t={t} />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-12 lg:gap-16">
        <div className="space-y-12">
            
            {/* Description */}
            <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description[language]}
                </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid gap-8">
                <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 uppercase tracking-wider font-mono">
                        <Code className="w-5 h-5" /> {t.projects.modal.challenge}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {project.challenge ? project.challenge[language] : project.description[language]}
                    </p>
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="text-lg font-bold text-emerald-500 mb-4 flex items-center gap-2 uppercase tracking-wider font-mono">
                        <CheckCircle2 className="w-5 h-5" /> {t.projects.modal.solution}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {project.solution ? project.solution[language] : "Solution description..."}
                    </p>
                </div>
            </div>

            


            {/* Bottom Back Button */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 w-full">
                <button
                    onClick={() => navigate(-1)}
                    className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-all active:scale-[0.99]"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">{language === 'pl' ? 'Wróć do projektów' : 'Back to projects'}</span>
                </button>
            </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8 hidden md:block md:sticky md:top-32 h-fit">
            {/* Desktop Links - Hidden on mobile */}
            <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">{t.projects.links.title}</h3>
                <ProjectLinks project={project} t={t} />
            </div>

             {/* Features */}
             <div>
                 <h3 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">{t.projects.modal.features}</h3>
                 <ul className="space-y-3">
                    {project.features && project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                             <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2.5 shrink-0" />
                             <span>{feature[language]}</span>
                        </li>
                    ))}
                 </ul>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
