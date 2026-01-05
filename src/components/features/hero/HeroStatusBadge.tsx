
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function HeroStatusBadge() {
  const { t } = useApp()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium uppercase tracking-wider">
        {t.hero.status}
      </span>
    </motion.div>
  )
}
