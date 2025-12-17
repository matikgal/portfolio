import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Terminal } from 'lucide-react'
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
import { useApp } from '../context/AppContext'
import SpotlightCard from './SpotlightCard'
import { projectsData } from '../data/projects'

const Hero: React.FC = () => {
	const { t, language } = useApp()
	const featuredProjects = projectsData.slice(0, 3)

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
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 md:pt-32">
			{/* --- HERO INTRO --- */}
			<section className="flex flex-col items-start min-h-[60vh] justify-center mb-24">
				{/* Status Badge */}
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

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-10">
					{t.hero.description}
				</motion.p>

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
				</motion.div>

				{/* Mini Tech Stack */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-4">
					<h2 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
						{t.hero.currentStack}
					</h2>
					<div className="flex flex-wrap gap-3">
						{techStack.map((tech, i) => (
							<div
								key={tech.name}
								className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all hover:border-primary/30 hover:bg-primary/5 hover:scale-105">
								<tech.icon className="w-4 h-4 transition-all" style={{ color: tech.color }} />
								<span className="text-sm font-medium">{tech.name}</span>
							</div>
						))}
						<Link
							to="/about#skills"
							className="group flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
							{t.hero.moreSkills}
							<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</div>
				</motion.div>
			</section>

			{/* --- FEATURED PROJECTS --- */}
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
												{project.tags.slice(0, 3).map(tag => (
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
											className="md:w-64 w-full h-48 md:h-40 bg-slate-100 dark:bg-white/5 rounded-xl overflow-hidden relative shadow-inner order-1 md:order-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
												className="w-full h-full object-cover opacity-90 dark:opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
											/>
											<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
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
		</motion.div>
	)
}

export default Hero
