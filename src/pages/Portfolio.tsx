import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'
import { Button } from '@/components/ui/button'

const Portfolio = () => {
	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.6 },
	}

	const staggerContainer = {
		initial: {},
		whileInView: { transition: { staggerChildren: 0.1 } },
		viewport: { once: true },
	}

	const projects = [
		{
			title: 'Sielska Ostoja',
			category: 'Wizytówka',
			category2: 'Agroturystyka',
			desc: 'Strona wizytówka dla rancza i agroturystyki. Prezentuje ofertę noclegową, atrakcje dla dzieci i dorosłych oraz piękne tereny rekreacyjne w sercu natury.',
			img: '/farma-desktop.webp',
			url: 'sielska-ostoja.pl',
			tech: ['Vue.js', 'Turystyka', 'Responsive'],
			colors: ['bg-green-500', 'bg-accent', 'bg-primary'],
		},
		{
			title: 'Eleganza Salon',
			category: 'Usługi',
			category2: 'Beauty',
			desc: 'Elegancka strona dla salonu fryzjerskiego z systemem rezerwacji online, galerią stylizacji i prezentacją usług. Nowoczesny design podkreślający profesjonalizm salonu.',
			img: '/fryzjer-desktop.webp',
			url: 'eleganza-salon.pl',
			tech: ['React', 'Rezerwacje', 'Galeria'],
			colors: ['bg-pink-500', 'bg-accent', 'bg-primary'],
		},
		{
			title: 'Słodkie Marzenia',
			category: 'E-commerce',
			category2: 'Cukiernia',
			desc: 'Elegancka strona dla cukierni specjalizującej się w tortach na zamówienie. System galerii, formularz zamówień z możliwością personalizacji.',
			img: '/tort-desktop.webp',
			url: 'slodkie-marzenia.pl',
			link: 'https://slodkacukiernia.netlify.app',
			tech: ['Vue.js', 'Zamówienia', 'Galeria'],
			colors: ['bg-pink-500', 'bg-accent', 'bg-primary'],
		},
		{
			title: 'Prestige Nieruchomości',
			category: 'Nieruchomości',
			category2: 'Agencja',
			desc: 'Profesjonalna strona agencji nieruchomości z zaawansowaną wyszukiwarką ofert, mapami interaktywnymi i systemem zarządzania klientami.',
			img: '/chaty-desktop.webp',
			url: 'prestige-nieruchomosci.pl',
			tech: ['React', 'Wyszukiwarka', 'Mapy'],
			colors: ['bg-amber-500', 'bg-accent', 'bg-primary'],
		},
		{
			title: 'Prime Motors',
			category: 'Warsztat',
			category2: 'Automotive',
			desc: 'Nowoczesna strona warsztatu samochodowego z systemem umówień online i prezentacją usług serwisowych.',
			img: '/mechanik-desktop.webp',
			url: 'prime-motors.pl',
			tech: ['Next.js', 'Rezerwacje', 'Kalkulator'],
			colors: ['bg-blue-500', 'bg-accent', 'bg-primary'],
		},
		{
			title: 'Thunder Garage',
			category: 'Motocykle',
			category2: 'Sklep',
			desc: 'Dynamiczna strona sklepu motocyklowego z prezentacją oferty, galerią produktów i systemem kontaktu. Design podkreślający pasję do motoryzacji.',
			img: '/motory-desktop.png',
			url: 'thunder-garage.pl',
			tech: ['React', 'Galeria', 'Katalog'],
			colors: ['bg-gray-800', 'bg-accent', 'bg-primary'],
		},
	]

	return (
		<>
			<SEOHead
				title="uWebs - Portfolio"
				description="Zobacz nasze projekty: landing pages, strony firmowe, sklepy internetowe. Profesjonalne realizacje dla firm z różnych branż. Sprawdź nasze portfolio!"
				keywords="portfolio web design, realizacje stron internetowych, przykłady landing pages, projekty stron firmowych, case studies"
				canonical="https://uwebs.pl/portfolio"
			/>
			<Navigation />

			<main className="pt-32 pb-20 min-h-screen bg-background relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 opacity-3">
					<div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-transparent transform -rotate-12"></div>
					<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent/5 to-transparent transform rotate-12"></div>
					<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
				</div>

				<div className="container mx-auto px-6 relative z-10">
					<motion.div {...fadeInUp} className="mb-20 text-center">
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Portfolio</p>
						<h1 className="font-heading font-bold text-hero-mobile md:text-hero text-primary mb-6">
							Nasze <span className="text-secondary">Projekty</span>
						</h1>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Odkryj projekty, które łączą innowacyjny design z biznesową skutecznością. Każda realizacja to unikalna
							historia sukcesu.
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="space-y-16">
						{projects.map((project, index) => {
							const isEven = index % 2 === 0

							return (
								<motion.div
									key={index}
									variants={fadeInUp}
									className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
									{/* Image Section */}
									<div className={`lg:col-span-7 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
										{project.link ? (
											<a href={project.link} target="_blank" rel="noopener noreferrer">
												<div
													className={`group relative overflow-hidden bg-card border-4 border-primary hover:border-secondary transition-all duration-500 hover:shadow-lift-lg transform cursor-pointer ${isEven ? 'hover:-rotate-1' : 'hover:rotate-1'
														}`}>
													{/* Browser Chrome */}
													<div className="bg-muted p-3 flex items-center gap-2 border-b-2 border-primary">
														<div className="flex gap-2">
															<div className="w-3 h-3 bg-destructive rounded-full"></div>
															<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
															<div className="w-3 h-3 bg-green-500 rounded-full"></div>
														</div>
														<div className="flex-1 mx-4 h-6 bg-background flex items-center px-3">
															<span className="text-xs text-muted-foreground font-mono">{project.url}</span>
														</div>
													</div>
													{/* Image Container with proper aspect ratio */}
													<div className="aspect-[19/10] relative overflow-hidden bg-muted">
														<img
															src={project.img}
															alt={`${project.title} - ${project.category}`}
															className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
														/>
													</div>
												</div>
											</a>
										) : (
											<div
												className={`group relative overflow-hidden bg-card border-4 border-primary hover:border-secondary transition-all duration-500 hover:shadow-lift-lg transform ${isEven ? 'hover:-rotate-1' : 'hover:rotate-1'
													}`}>
												{/* Browser Chrome */}
												<div className="bg-muted p-3 flex items-center gap-2 border-b-2 border-primary">
													<div className="flex gap-2">
														<div className="w-3 h-3 bg-destructive rounded-full"></div>
														<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
														<div className="w-3 h-3 bg-green-500 rounded-full"></div>
													</div>
													<div className="flex-1 mx-4 h-6 bg-background flex items-center px-3">
														<span className="text-xs text-muted-foreground font-mono">{project.url}</span>
													</div>
												</div>
												{/* Image Container with proper aspect ratio */}
												<div className="aspect-[19/10] relative overflow-hidden bg-muted">
													<img
														src={project.img}
														alt={`${project.title} - ${project.category}`}
														className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
													/>
												</div>
											</div>
										)}
									</div>

									{/* Content Section */}
									<div
										className={`lg:col-span-5 ${isEven ? 'order-1 lg:order-2 lg:pl-8' : 'order-1 lg:order-1 lg:pr-8'}`}>
										<div className="flex flex-wrap gap-2 mb-4">
											<span
												className={`px-3 py-1 ${project.colors[0]} text-white text-xs font-mono uppercase tracking-wider`}>
												{project.category}
											</span>
											<span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider">
												{project.category2}
											</span>
										</div>
										<h3 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-4">
											{project.title}
										</h3>
										<p className="font-body text-body text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
										<div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-6">
											{project.tech.map((tech, techIndex) => (
												<span key={techIndex} className="flex items-center gap-1">
													<div className={`w-2 h-2 ${project.colors[techIndex]} rounded-full`}></div>
													{tech}
												</span>
											))}
										</div>
										{project.link ? (
											<a href={project.link} target="_blank" rel="noopener noreferrer">
												<Button variant="outline" className="group">
													Zobacz Stronę
													<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
												</Button>
											</a>
										) : (
											<Button variant="outline" className="group" disabled>
												Wkrótce
												<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
											</Button>
										)}
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export default Portfolio
