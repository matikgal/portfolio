import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Terminal, FileText } from 'lucide-react'
import cvFile from '@/assets/CV.pdf'
import { useApp } from '@/context/AppContext'
import HeroStatusBadge from '@/components/features/hero/HeroStatusBadge'
import TechStack from '@/components/features/hero/TechStack'
import FeaturedProjects from '@/components/features/hero/FeaturedProjects'

export default function Hero() {
	const { t } = useApp()

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 md:pt-32">
			{/* --- HERO INTRO --- */}
			<section className="flex flex-col items-start min-h-[60vh] justify-center mb-24">
				{/* Status Badge */}
				<HeroStatusBadge />

				{/* Main Heading Area */}
				<div className="mb-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="mb-4">
						<h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-display flex flex-wrap items-center gap-2">
							<span className="text-slate-600 dark:text-slate-300 font-medium">{t.hero.greeting}</span>
							<span className="text-gradient">{t.hero.name}</span>
							<span className="inline-block animate-wave origin-[70%_70%]">👋</span>
						</h1>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="flex items-center gap-3">
						<div className="p-2 bg-primary/10 rounded-xl text-primary hidden md:block">
							<Terminal className="w-6 h-6 md:w-8 md:h-8" />
						</div>
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
							{t.hero.role}
						</h2>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-10">
					<span dangerouslySetInnerHTML={{ __html: t.hero.description }} />
					<Link
						to="/about#timeline"
						className="inline-flex items-center gap-1 ml-2 text-sm text-primary font-medium transition-all hover:gap-2 group align-baseline">
						{t.hero.buttons.checkHistory} <ArrowRight className="w-4 h-4" />
					</Link>
				</motion.div>

				{/* Actions */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="flex flex-wrap gap-4 mb-16">
					<a
						href="https://github.com/matikgal"
						target="_blank"
						rel="noopener noreferrer"
						className="relative group flex items-center gap-3 px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-medium transition-all duration-300 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:scale-105">
						<Github className="w-5 h-5" />
						<span>{t.hero.buttons.github}</span>
					</a>

					<a
						href="https://www.linkedin.com/in/mateusz-ga%C5%82uszka-981900231/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 px-7 py-3.5 bg-transparent border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white rounded-full font-medium transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:scale-105">
						<Linkedin className="w-5 h-5 transition-colors" />
						<span>{t.hero.buttons.linkedin}</span>
					</a>

					<a
						href={cvFile}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 px-7 py-3.5 bg-transparent border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white rounded-full font-medium transition-all duration-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:scale-105">
						<FileText className="w-5 h-5 transition-colors" />
						<span>{t.hero.buttons.viewCV}</span>
					</a>
				</motion.div>

				{/* Mini Tech Stack */}
				<TechStack />
			</section>

			{/* --- FEATURED PROJECTS --- */}
			<FeaturedProjects />
		</motion.div>
	)
}
