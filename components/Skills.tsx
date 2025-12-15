import React from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import SpotlightCard from './SpotlightCard'
import {
	SiReact,
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiNodedotjs,
	SiGit,
	SiFigma,
	SiSupabase,
	SiFirebase,
	SiFramer,
	SiVercel,
	SiVite,
	SiPostgresql,
	SiGithub,
	SiNpm,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiRedux,
	SiMongodb,
	SiGraphql,
	SiDocker,
	SiNetlify,
} from 'react-icons/si'

const Skills: React.FC = () => {
	const { t } = useApp()

	const skillCategories = [
		{
			title: t.about.skillCats.core,
			skills: [
				{ name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
				{ name: 'CSS3', icon: SiCss3, color: '#1572B6' },
				{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
				{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			],
		},
		{
			title: t.about.skillCats.frameworks,
			skills: [
				{ name: 'React', icon: SiReact, color: '#61DAFB' },
				{ name: 'Next.js', icon: SiNextdotjs, color: '#6e40c9' },
				{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
				{ name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
				{ name: 'Redux', icon: SiRedux, color: '#764ABC' },
				{ name: 'Vite', icon: SiVite, color: '#646CFF' },
			],
		},
		{
			title: t.about.skillCats.backend,
			skills: [
				{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
				{ name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
				{ name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
				{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
				{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
				{ name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
			],
		},
		{
			title: t.about.skillCats.tools,
			skills: [
				{ name: 'Git', icon: SiGit, color: '#F05032' },
				{ name: 'GitHub', icon: SiGithub, color: '#6e40c9' },
				{ name: 'Figma', icon: SiFigma, color: '#F24E1E' },
				{ name: 'Vercel', icon: SiVercel, color: '#6e40c9' },
				{ name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
				{ name: 'npm', icon: SiNpm, color: '#CB3837' },
				{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
			],
		},
	]

	return (
		<div className="mt-12 pt-12 border-t border-slate-200 dark:border-white/5">
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
				<h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-widest">{t.about.skillsTitle}</h2>

				<div className="grid gap-10">
					{skillCategories.map((category, catIndex) => (
						<div key={category.title}>
							<h3 className="text-slate-800 dark:text-slate-200 font-medium mb-4 text-lg">{category.title}</h3>
							<div className="flex flex-wrap gap-3">
								{category.skills.map((skill, index) => (
									<SpotlightCard key={skill.name} className="!rounded-lg !bg-white dark:!bg-white/5">
										<motion.div
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: catIndex * 0.1 + index * 0.05 }}
											className="px-4 py-2 text-slate-600 dark:text-slate-300 text-sm font-medium relative z-10 flex items-center gap-2">
											<skill.icon className="w-4 h-4" style={{ color: skill.color }} />
											{skill.name}
										</motion.div>
									</SpotlightCard>
								))}
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</div>
	)
}

export default Skills
