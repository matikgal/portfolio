
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiFramer,
  SiNextdotjs,
  SiGit,
  SiFigma,
  SiVercel,
  SiVite,
  SiPostgresql,
} from 'react-icons/si'
import { useApp } from '@/context/AppContext'

export default function TechStack() {
  const { t } = useApp()

  const techStack = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#6e40c9' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Vercel', icon: SiVercel, color: '#6e40c9' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-4">
      <h2 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
        {t.hero.currentStack}
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all hover:border-primary/30 hover:bg-primary/5 hover:scale-105">
            <tech.icon className="w-4 h-4 transition-all" style={{ color: tech.color }} />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
        <Link
          to="/about#skills"
          className="group flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary transition-colors">
          {t.hero.moreSkills}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
