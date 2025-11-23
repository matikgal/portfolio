import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Folder, X, ArrowRight, CheckCircle2, Code } from 'lucide-react'
import { Project } from '../types'
import { useApp } from '../context/AppContext'
import SpotlightCard from './SpotlightCard'

export const projectsData: Project[] = [
	{
		id: 1,
		title: 'PopStack',
		description: {
			en: 'A comprehensive entertainment tracking platform similar to Filmweb. Browse popular movies, games, and TV series, create watchlists and play queues, write reviews and ratings.',
			pl: 'Kompleksowa platforma do śledzenia rozrywki podobna do Filmweb. Przeglądaj popularne filmy, gry i seriale, twórz kolejki do obejrzenia/zagrania, pisz recenzje i oceny.',
		},
		challenge: {
			en: 'Creating a unified platform for tracking different types of entertainment (movies, games, series) while maintaining a consistent user experience. Managing complex user interactions like friend profiles, statistics, and personalized recommendations.',
			pl: 'Stworzenie zunifikowanej platformy do śledzenia różnych typów rozrywki (filmy, gry, seriale) przy zachowaniu spójnego doświadczenia użytkownika. Zarządzanie złożonymi interakcjami jak profile znajomych, statystyki i personalizowane rekomendacje.',
		},
		solution: {
			en: 'Built a modular architecture that handles different content types with shared components. Integrated Supabase as the backend database for storing user data, reviews, ratings, watchlists, and social connections. Implemented user authentication, social features for following friends and viewing their profiles, comprehensive statistics tracking, and theme customization with dark/light modes and multi-language support.',
			pl: 'Zbudowałem modularną architekturę obsługującą różne typy treści ze współdzielonymi komponentami. Zintegrowałem Supabase jako bazę danych backend do przechowywania danych użytkowników, recenzji, ocen, kolejek i połączeń społecznościowych. Zaimplementowałem uwierzytelnianie użytkowników, funkcje społecznościowe do obserwowania znajomych i przeglądania ich profili, kompleksowe śledzenie statystyk oraz personalizację motywów z trybem ciemnym/jasnym i obsługą wielu języków.',
		},
		features: [
			{ en: 'Browse popular movies, games, and TV series', pl: 'Przeglądaj popularne filmy, gry i seriale' },
			{ en: 'Create watchlists and play queues', pl: 'Twórz kolejki do obejrzenia i zagrania' },
			{ en: 'Write reviews and ratings', pl: 'Pisz recenzje i oceny' },
			{ en: 'Follow friends and view their profiles', pl: 'Obserwuj znajomych i przeglądaj ich profile' },
			{ en: 'Track personal statistics', pl: 'Śledź osobiste statystyki' },
			{ en: 'Dark/Light theme support', pl: 'Obsługa motywu ciemnego/jasnego' },
			{ en: 'Multi-language support', pl: 'Obsługa wielu języków' },
		],
		tags: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'API Integration'],
		imageUrl: './popstack.png',
		repoUrl: 'https://github.com/matikgal/popstack',
		demoUrl: 'https://pop-stack-edbycvpod-matikgals-projects.vercel.app/',
	},
	{
		id: 2,
		title: 'VORTEX',
		description: {
			en: 'A fully interactive "Awwwards-style" portfolio showcasing advanced frontend capabilities. Combines brutalism and acid design aesthetics with cutting-edge web technologies like WebGL.',
			pl: 'W pełni interaktywne portfolio w stylu "Awwwards", prezentujące zaawansowane możliwości frontendu. Łączy estetykę brutalizmu i acid design z najnowszymi technologiami webowymi jak WebGL.',
		},
		challenge: {
			en: 'Creating an immersive, unique user experience that demonstrates creative development skills, 3D animations, and complex interaction design while maintaining performance and usability.',
			pl: 'Stworzenie immersyjnego, unikalnego doświadczenia użytkownika, które demonstruje umiejętności kreatywnego developmentu, animacji 3D i złożonego projektowania interakcji przy zachowaniu wydajności i użyteczności.',
		},
		solution: {
			en: 'Built with React and TypeScript, leveraging Three.js for 3D graphics and WebGL rendering. Implemented smooth animations with Framer Motion, custom scroll interactions using Lenis, and styled with Tailwind CSS for a modern, performant interface.',
			pl: 'Zbudowane w React i TypeScript, wykorzystujące Three.js do grafiki 3D i renderowania WebGL. Zaimplementowałem płynne animacje z Framer Motion, niestandardowe interakcje przewijania przy użyciu Lenis oraz stylizację z Tailwind CSS dla nowoczesnego, wydajnego interfejsu.',
		},
		features: [
			{ en: '3D graphics with Three.js and WebGL', pl: 'Grafika 3D z Three.js i WebGL' },
			{ en: 'Advanced animations with Framer Motion', pl: 'Zaawansowane animacje z Framer Motion' },
			{ en: 'Smooth scroll interactions with Lenis', pl: 'Płynne interakcje przewijania z Lenis' },
			{ en: 'Brutalism and acid design aesthetics', pl: 'Estetyka brutalizmu i acid design' },
			{ en: 'Immersive user experience', pl: 'Immersyjne doświadczenie użytkownika' },
		],
		tags: ['React', 'TypeScript', 'Three.js', 'WebGL', 'Framer Motion', 'Tailwind'],
		imageUrl: './vortex.png',
		repoUrl: 'https://github.com/matikgal/vortex-portfolio',
		demoUrl: 'https://matikgal.github.io/vortex-portfolio/',
	},
	{
		id: 3,
		title: 'FluxBoard',
		description: {
			en: 'An experimental, minimalist Kanban project management application emphasizing unique design, typography, and interaction inspired by digital brutalism and Swiss Style.',
			pl: 'Eksperymentalna, minimalistyczna aplikacja Kanban do zarządzania projektami, kładąca nacisk na unikalny design, typografię i interakcję inspirowaną brutalizmem cyfrowym i Swiss Style.',
		},
		challenge: {
			en: 'Moving away from traditional office tool aesthetics to create a performant drag-and-drop interface with a raw, brutalist design while maintaining usability and smooth interactions.',
			pl: 'Odejście od tradycyjnej estetyki narzędzi biurowych, aby stworzyć wydajny interfejs drag-and-drop z surowym, brutalistycznym designem przy zachowaniu użyteczności i płynnych interakcji.',
		},
		solution: {
			en: 'Built with React 19 and TypeScript, featuring a fully typed architecture. Implemented dual themes (Void dark and Paper light), comprehensive task management with subtasks, tags, priorities, time tracking, and audit logs. All data persists automatically in LocalStorage with support for keyboard shortcuts and real-time filtering.',
			pl: 'Zbudowane w React 19 i TypeScript z w pełni typowaną architekturą. Zaimplementowałem podwójne motywy (Void ciemny i Paper jasny), kompleksowe zarządzanie zadaniami z podzadaniami, tagami, priorytetami, śledzeniem czasu i historią zmian. Wszystkie dane zapisują się automatycznie w LocalStorage z obsługą skrótów klawiszowych i filtrowaniem w czasie rzeczywistym.',
		},
		features: [
			{ en: 'Smooth drag-and-drop task management', pl: 'Płynne przeciąganie i upuszczanie zadań' },
			{ en: 'Dual themes: Void (dark) and Paper (light)', pl: 'Podwójne motywy: Void (ciemny) i Paper (jasny)' },
			{ en: 'Subtasks, tags, and prioritization', pl: 'Podzadania, tagi i priorytetyzacja' },
			{ en: 'Time tracking and audit log', pl: 'Śledzenie czasu i historia zmian' },
			{ en: 'Column collapsing (Focus Mode)', pl: 'Zwijanie kolumn (Tryb Skupienia)' },
			{ en: 'Keyboard shortcuts support', pl: 'Obsługa skrótów klawiszowych' },
			{ en: 'Real-time filtering', pl: 'Filtrowanie w czasie rzeczywistym' },
			{ en: 'Automatic LocalStorage persistence', pl: 'Automatyczny zapis w LocalStorage' },
		],
		tags: ['React', 'TypeScript', 'Tailwind', 'Brutalism', 'Swiss Style'],
		imageUrl: './fluxboard.png',
		repoUrl: 'https://github.com/matikgal/kanban-system',
		demoUrl: 'https://matikgal.github.io/kanban-system/',
	},
]

import { useScroll } from '../context/ScrollContext'

const Projects: React.FC = () => {
	const { t, language } = useApp()
	const { stopScroll, startScroll } = useScroll()
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)

	// Lock body scroll when modal is open
	useEffect(() => {
		if (selectedProject) {
			stopScroll()
			document.body.classList.add('modal-open')
			document.documentElement.classList.add('modal-open')
		} else {
			startScroll()
			document.body.classList.remove('modal-open')
			document.documentElement.classList.remove('modal-open')
		}
		return () => {
			startScroll()
			document.body.classList.remove('modal-open')
			document.documentElement.classList.remove('modal-open')
		}
	}, [selectedProject, stopScroll, startScroll])

	return (
		<>
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				className="pt-32 pb-20">
				<div className="mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display">
						{t.projects.title}
					</h1>
					<p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">{t.projects.subtitle}</p>
				</div>

				<div className="space-y-8">
					{projectsData.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							{/* --- SPOTLIGHT CARD COMPONENT --- */}
							<SpotlightCard className="group cursor-default">
								<div className="flex flex-col gap-6 p-6 md:p-8 h-full">
									{/* Image Area */}
									<div
										className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-inner bg-slate-100 dark:bg-black/20 cursor-pointer"
										onClick={() => setSelectedProject(project)}>
										<img
											src={project.imageUrl}
											alt={project.title}
											className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
										/>
										{/* Overlay icon */}
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

										<p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 cursor-default">
											{project.description[language]}
										</p>

										<div className="flex flex-wrap gap-2 mb-8 mt-auto">
											{project.tags.map(tag => (
												<span
													key={tag}
													className="text-xs font-bold font-mono px-2.5 py-1 rounded text-primary bg-primary/5 border border-primary/10 whitespace-nowrap cursor-default">
													{tag}
												</span>
											))}
										</div>

										<div className="flex items-center gap-4">
											<button
												onClick={() => setSelectedProject(project)}
												className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-200 dark:shadow-none cursor-pointer">
												{t.projects.readMore}
												<ArrowRight className="w-4 h-4" />
											</button>
										</div>
									</div>
								</div>
							</SpotlightCard>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* --- PROJECT DETAILS MODAL --- */}
			<AnimatePresence>
				{selectedProject && (
					<div className="fixed inset-0 z-[100] overflow-hidden">
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedProject(null)}
							className="fixed inset-0 bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm"
						/>

						{/* Modal Wrapper */}
						<div
							className="fixed inset-0 flex items-center justify-center p-4 sm:p-8"
							onClick={() => setSelectedProject(null)}>
							{/* Modal Content */}
							<motion.div
								initial={{ opacity: 0, scale: 0.95, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95, y: 20 }}
								className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden"
								onClick={e => e.stopPropagation()}>
								{/* Close Button */}
								<button
									onClick={() => setSelectedProject(null)}
									className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-black/50 text-slate-500 hover:text-slate-900 dark:hover:text-white backdrop-blur transition-colors">
									<X className="w-6 h-6" />
								</button>

								<div className="overflow-y-auto flex-1" data-lenis-prevent>
									{/* Header Image */}
									<div className="relative h-48 sm:h-64 md:h-80 w-full bg-slate-100 dark:bg-white/5 shrink-0">
										<img
											src={selectedProject.imageUrl}
											alt={selectedProject.title}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent" />

										<div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
											<h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white font-display mb-4">
												{selectedProject.title}
											</h2>
											<div className="flex flex-wrap gap-2">
												{selectedProject.tags.map(tag => (
													<span
														key={tag}
														className="text-xs font-bold font-mono px-3 py-1.5 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md text-slate-900 dark:text-white border border-white/20 dark:border-white/10 cursor-default">
														{tag}
													</span>
												))}
											</div>
										</div>
									</div>

									{/* Scrollable Content */}
									<div className="p-6 md:p-10 grid md:grid-cols-[2fr,1fr] gap-12">
										<div className="space-y-10">
											<div>
												<h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2 uppercase tracking-wider font-mono">
													<Code className="w-5 h-5" /> {t.projects.modal.challenge}
												</h3>
												<p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg cursor-default">
													{selectedProject.challenge
														? selectedProject.challenge[language]
														: selectedProject.description[language]}
												</p>
											</div>

											<div>
												<h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2 uppercase tracking-wider font-mono">
													<CheckCircle2 className="w-5 h-5" /> {t.projects.modal.solution}
												</h3>
												<p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg cursor-default">
													{selectedProject.solution
														? selectedProject.solution[language]
														: 'Standard solution description goes here...'}
												</p>
											</div>

											<div>
												<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
													{t.projects.modal.features}
												</h3>
												<ul className="grid gap-3">
													{selectedProject.features &&
														selectedProject.features.map((feature, i) => (
															<li
																key={i}
																className="flex items-start gap-3 text-slate-600 dark:text-slate-400 cursor-default">
																<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
																<span>{feature[language]}</span>
															</li>
														))}
												</ul>
											</div>
										</div>

										{/* Sidebar Actions */}
										<div className="flex flex-col gap-4">
											<div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
												<h4 className="font-bold text-slate-900 dark:text-white mb-4">Links</h4>
												<div className="space-y-3">
													{selectedProject.demoUrl && (
														<a
															href={selectedProject.demoUrl}
															target="_blank"
															rel="noreferrer"
															className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-slate-900 font-bold rounded-xl hover:bg-primary/90 transition-colors">
															<ExternalLink className="w-4 h-4" />
															Live Demo
														</a>
													)}
													<a
														href={selectedProject.repoUrl}
														target="_blank"
														rel="noreferrer"
														className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-transparent border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
														<Github className="w-4 h-4" />
														GitHub Repo
													</a>
												</div>
											</div>
										</div>
									</div>

									<div className="p-6 border-t border-slate-100 dark:border-white/5 text-center md:hidden">
										<button onClick={() => setSelectedProject(null)} className="text-slate-500 font-medium">
											{t.projects.modal.close}
										</button>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Projects
