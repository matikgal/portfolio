import { motion } from 'framer-motion'
import ubbIcon from '@/assets/ubbikon.webp'
import pz10Icon from '@/assets/pz10ikon.webp'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import Services from '@/components/Services'
import { useApp } from '@/context/AppContext'

export default function About() {
	const { t } = useApp()

	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			className="pt-32 pb-20">
			<div className="max-w-2xl">
				<h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 font-display">
					{t.about.title}
				</h1>

				<div className="prose dark:prose-invert prose-slate max-w-none mb-16">
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{t.about.p1}</p>
					<p
						className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
						dangerouslySetInnerHTML={{ __html: t.about.p2 }}
					/>
					
					<div>
						<h3 className="text-sm font-mono text-primary mb-8 uppercase tracking-widest">
							{t.about.education.title}
						</h3>
						<div className="space-y-8">
							{t.about.education.items.map((item, index) => (
								<div key={index} className="flex items-start md:items-center gap-5">
									<div className="p-3 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 shrink-0">
										<img 
											src={index < 2 ? ubbIcon : pz10Icon} 
											alt={item.school} 
											className="w-10 h-10 object-contain rounded-sm" 
										/>
									</div>
									<div className="flex-1">
										<div className="flex flex-col sm:flex-row sm:items-center  gap-1 mb-1">
											<h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
												{item.school}
											</h3>
											<span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full whitespace-nowrap self-start sm:self-auto">
												{item.year}
											</span>
										</div>
										<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
											<span className="font-semibold text-primary">{item.degree}</span>
											<span className="mx-2 opacity-50">|</span>
											{item.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<Timeline />

				<Skills />
				
				<Services />
			</div>
		</motion.section>
	)
}
