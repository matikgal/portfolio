import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function Timeline() {
	const { t } = useApp()
	const steps = t.about.timeline.steps

	return (
		<div className="mt-20" id="timeline">
			<h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-10">{t.about.timeline.title}</h2>

			<div className="relative border-l border-slate-200 dark:border-white/10 ml-3 space-y-12">
				{steps.map((step, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="relative pl-8">
						{/* Dot */}
						<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white dark:ring-black" />

						<div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 items-start">
							{/* Year - spans 2 rows */}
							<span className="text-xs font-mono font-bold px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 w-fit row-span-2 self-stretch flex items-center justify-center">
								{step.year}
							</span>

							{/* Title */}
							<h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{step.title}</h3>

							{/* Company */}
							<p className="text-sm text-slate-500 dark:text-slate-500 font-medium">{step.company}</p>
						</div>

						<p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-3">{step.desc}</p>
					</motion.div>
				))}
			</div>
		</div>
	)
}
