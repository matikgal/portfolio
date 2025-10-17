import { motion } from 'framer-motion'
import {
	ArrowRight,
	Code,
	Sparkles,
	Zap,
	Rocket,
	Search,
	PenTool,
	Clock,
	DollarSign,
	Target,
	Smartphone,
	Palette,
	Globe,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'
import FAQSchema from '@/components/FAQSchema'

const Home = () => {
	const { t } = useLanguage()

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

	return (
		<>
			<SEOHead
				title="uWebs - Tworzenie Stron Internetowych"
				description="Profesjonalne tworzenie stron internetowych. Landing pages, strony firmowe od 3500 PLN. Nowoczesny design, SEO, responsywność. Bezpłatna konsultacja!"
				keywords="tworzenie stron internetowych, landing page, strona firmowa, web design, SEO, responsywne strony, uWebs"
				canonical="https://uwebs.pl"
			/>
			<FAQSchema />
			<Navigation />

			{/* Hero Section */}
			<section className="min-h-[80vh] lg:min-h-screen flex items-center relative overflow-hidden bg-background pt-20 pb-8 lg:pb-0">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-5 gap-12 items-center">
						<div className="lg:col-span-3">
							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
								<p className="font-mono font-bold text-sm text-secondary uppercase tracking-wider mb-6">
									{t('hero.subtitle')}
								</p>
								<h1 className="font-heading font-bold text-hero-mobile md:text-hero text-primary mb-6">
									{t('hero.title')} <span className="text-secondary">{t('hero.title_highlight')}</span>
								</h1>
								<p className="font-body text-body-lg text-muted-foreground max-w-[540px] mb-10">
									{t('hero.description')}
								</p>
								<div className="flex flex-wrap gap-4">
									<Link to="/portfolio">
										<Button
											variant="secondary"
											size="lg"
											className="group font-body font-medium tracking-wider uppercase">
											{t('hero.cta_portfolio')}
											<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
										</Button>
									</Link>
									<Link to="/kontakt#formularz-kontaktowy">
										<Button
											variant="outline"
											size="lg"
											className="font-body font-medium tracking-wider uppercase border-2">
											{t('nav.book_consultation')}
										</Button>
									</Link>
								</div>
							</motion.div>
						</div>

						<motion.div
							className="hidden lg:block lg:col-span-2"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}>
							<div className="relative">
								<div className="aspect-[4/3] bg-gradient-to-br from-primary via-primary to-secondary/20 border-4 border-primary transform rotate-2 hover:rotate-0 transition-transform duration-300">
									<div className="absolute inset-4 bg-muted flex items-center justify-center">
										<Code className="w-24 h-24 text-secondary" />
									</div>
								</div>
								<motion.div
									className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary"
									animate={{ y: [0, -10, 0] }}
									transition={{ duration: 3, repeat: Infinity }}
								/>
								<motion.div
									className="absolute -top-6 -right-6 w-24 h-24 bg-accent"
									animate={{ y: [0, 10, 0] }}
									transition={{ duration: 4, repeat: Infinity }}
								/>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Scroll Indicator - Hidden on mobile, visible on desktop */}
				<motion.div
					className="hidden lg:flex absolute bottom-12 left-0 right-0 flex-col items-center"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}>
					<p className="font-mono text-sm text-muted-foreground mb-2 text-center">{t('hero.scroll_more')}</p>
					<div className="w-6 h-10 border-2 border-muted-foreground flex items-start justify-center p-2">
						<motion.div
							className="w-1 h-2 bg-muted-foreground"
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
					</div>
				</motion.div>
			</section>

			{/* Features Bar */}
			<section className="py-20" style={{ backgroundColor: '#09132A' }}>
				<div className="container mx-auto px-6">
					<motion.p {...fadeInUp} className="font-mono text-sm text-center text-white uppercase tracking-wider mb-12">
						Dlaczego my?
					</motion.p>
					<motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center" {...fadeInUp}>
						{[
							{ icon: Clock, title: 'Szybko', desc: 'Realizacja w 2-4 tygodnie' },
							{ icon: DollarSign, title: 'Przystępnie', desc: 'Konkurencyjne ceny' },
							{ icon: Target, title: 'Skutecznie', desc: 'Strony które sprzedają' },
							{ icon: Rocket, title: 'Nowoczesnie', desc: 'Najnowsze technologie' },
						].map((feature, i) => {
							const IconComponent = feature.icon as React.ComponentType<{ className?: string }>
							return (
								<div key={i} className="text-center">
									<IconComponent className="w-12 h-12 mx-auto mb-3 text-secondary" />
									<h3 className="font-heading font-bold text-lg text-white mb-2">{feature.title}</h3>
									<p className="text-sm text-gray-300">{feature.desc}</p>
								</div>
							)
						})}
					</motion.div>
				</div>
			</section>

			{/* Portfolio Showcase - Diagonal Layout */}
			<section className="py-32 bg-background relative overflow-hidden">
				{/* Subtle Background Elements */}
				<div className="absolute inset-0 opacity-3">
					<div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-transparent transform -rotate-12"></div>
					<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent/5 to-transparent transform rotate-12"></div>
				</div>

				<div className="container mx-auto px-6 relative z-10">
					{/* Section Header */}
					<motion.div {...fadeInUp} className="text-center mb-20">
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Portfolio</p>
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-6">
							Projekty Które <span className="text-secondary">Wyróżniają</span>
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Każdy projekt to unikalna historia sukcesu. Zobacz jak pomagamy markom osiągnąć swoje cele w cyfrowym
							świecie.
						</p>
					</motion.div>

					{/* Diagonal Portfolio Layout */}
					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="space-y-16">
						{/* Project 1 - Left Aligned */}
						<motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
							<div className="lg:col-span-7 order-2 lg:order-1">
								<Link to="/portfolio">
									<div className="group relative overflow-hidden bg-card border-4 border-primary hover:border-secondary transition-all duration-500 hover:shadow-lift-lg transform hover:-rotate-1 cursor-pointer">
										{/* Browser Chrome */}
										<div className="bg-muted p-3 flex items-center gap-2 border-b-2 border-primary">
											<div className="flex gap-2">
												<div className="w-3 h-3 bg-destructive rounded-full"></div>
												<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
												<div className="w-3 h-3 bg-green-500 rounded-full"></div>
											</div>
											<div className="flex-1 mx-4 h-6 bg-background flex items-center px-3">
												<span className="text-xs text-muted-foreground font-mono">sielska-ostoja.pl</span>
											</div>
										</div>
										{/* Image Container with proper aspect ratio */}
										<div className="aspect-[19/10] relative overflow-hidden bg-muted">
											<img
												src="/farma-desktop.webp"
												alt="Sielska Ostoja - Ranczo i Agroturystyka"
												className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
											/>
										</div>
									</div>
								</Link>
							</div>
							<div className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="px-3 py-1 bg-green-500 text-white text-xs font-mono uppercase tracking-wider">
										Wizytówka
									</span>
									<span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider">
										Agroturystyka
									</span>
								</div>
								<h3 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-4">Sielska Ostoja</h3>
								<p className="font-body text-body text-muted-foreground mb-6 leading-relaxed">
									Strona wizytówka dla rancza i agroturystyki. Prezentuje ofertę noclegową, atrakcje dla dzieci i
									dorosłych oraz piękne tereny rekreacyjne w sercu natury.
								</p>
								<div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-6">
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-green-500 rounded-full"></div>
										Vue.js
									</span>
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-accent rounded-full"></div>
										Turystyka
									</span>
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-primary rounded-full"></div>
										Responsive
									</span>
								</div>
								<a href="https://sielskaostoja.netlify.app/" target="_blank" rel="noopener noreferrer">
									<Button variant="outline" className="group">
										Zobacz Stronę
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</a>
							</div>
						</motion.div>

						{/* Project 2 - Right Aligned */}
						<motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
							<div className="lg:col-span-5 lg:pr-8">
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="px-3 py-1 bg-pink-500 text-white text-xs font-mono uppercase tracking-wider">
										Usługi
									</span>
									<span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider">
										Beauty
									</span>
								</div>
								<h3 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-4">Eleganza Salon</h3>
								<p className="font-body text-body text-muted-foreground mb-6 leading-relaxed">
									Elegancka strona dla salonu fryzjerskiego z systemem rezerwacji online, galerią stylizacji i
									prezentacją usług. Nowoczesny design podkreślający profesjonalizm salonu.
								</p>
								<div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-6">
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
										React
									</span>
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-accent rounded-full"></div>
										Rezerwacje
									</span>
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-primary rounded-full"></div>
										Galeria
									</span>
								</div>
								<a href="https://eleganzahaircut.netlify.app/" target="_blank" rel="noopener noreferrer">
									<Button variant="outline" className="group">
										Zobacz Stronę
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</a>
							</div>
							<div className="lg:col-span-7">
								<Link to="/portfolio">
									<div className="group relative overflow-hidden bg-card border-4 border-primary hover:border-accent transition-all duration-500 hover:shadow-lift-lg transform hover:rotate-1 cursor-pointer">
										{/* Browser Chrome */}
										<div className="bg-muted p-3 flex items-center gap-2 border-b-2 border-primary">
											<div className="flex gap-2">
												<div className="w-3 h-3 bg-destructive rounded-full"></div>
												<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
												<div className="w-3 h-3 bg-green-500 rounded-full"></div>
											</div>
											<div className="flex-1 mx-4 h-6 bg-background flex items-center px-3">
												<span className="text-xs text-muted-foreground font-mono">eleganza-salon.pl</span>
											</div>
										</div>
										{/* Image Container */}
										<div className="aspect-[19/10] relative overflow-hidden bg-muted">
											<img
												src="/fryzjer-desktop.webp"
												alt="Eleganza Salon - Salon Fryzjerski"
												className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
											/>
										</div>
									</div>
								</Link>
							</div>
						</motion.div>

						{/* Project 3 - Left Aligned */}
						<motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
							<div className="lg:col-span-7 order-2 lg:order-1">
								<Link to="/portfolio">
									<div className="group relative overflow-hidden bg-card border-4 border-primary hover:border-secondary transition-all duration-500 hover:shadow-lift-lg transform hover:-rotate-1 cursor-pointer">
										{/* Browser Chrome */}
										<div className="bg-muted p-3 flex items-center gap-2 border-b-2 border-primary">
											<div className="flex gap-2">
												<div className="w-3 h-3 bg-destructive rounded-full"></div>
												<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
												<div className="w-3 h-3 bg-green-500 rounded-full"></div>
											</div>
											<div className="flex-1 mx-4 h-6 bg-background flex items-center px-3">
												<span className="text-xs text-muted-foreground font-mono">slodkie-marzenia.pl</span>
											</div>
										</div>
										{/* Image Container */}
										<div className="aspect-[19/10] relative overflow-hidden bg-muted">
											<img
												src="/tort-desktop.webp"
												alt="Słodkie Marzenia - Cukiernia"
												className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
											/>
										</div>
									</div>
								</Link>
							</div>
							<div className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
								<div className="flex flex-wrap gap-2 mb-4">
									<span className="px-3 py-1 bg-pink-500 text-white text-xs font-mono uppercase tracking-wider">
										E-commerce
									</span>
									<span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider">
										Cukiernia
									</span>
								</div>
								<h3 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-4">Słodkie Marzenia</h3>
								<p className="font-body text-body text-muted-foreground mb-6 leading-relaxed">
									Elegancka strona dla cukierni specjalizującej się w tortach na zamówienie. System galerii, kalkulatora
									cen i formularza zamówień z możliwością personalizacji.
								</p>
								<div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-6">
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
										Vue.js
									</span>
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-accent rounded-full"></div>
										Zamówienia
									</span>
									<span className="flex items-center gap-1">
										<div className="w-2 h-2 bg-primary rounded-full"></div>
										Galeria
									</span>
								</div>
								<a href="https://slodkacukiernia.netlify.app" target="_blank" rel="noopener noreferrer">
									<Button variant="outline" className="group">
										Zobacz Stronę
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</a>
							</div>
						</motion.div>

						{/* Smaller Projects Grid */}
						<motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
							{[
								{
									img: '/chaty-desktop.webp',
									title: 'Prestige Nieruchomości',
									category: 'Nieruchomości',
									desc: 'Agencja nieruchomości z wyszukiwarką ofert',
									color: 'bg-amber-500',
									url: 'prestige-nieruchomosci.pl',
								},
								{
									img: '/mechanik-desktop.webp',
									title: 'Prime Motors',
									category: 'Warsztat',
									desc: 'Warsztat samochodowy z systemem umówień',
									color: 'bg-blue-500',
									url: 'prime-motors.pl',
								},
								{
									img: '/motory-desktop.png',
									title: 'Thunder Garage',
									category: 'Motocykle',
									desc: 'Sklep motocyklowy z prezentacją oferty',
									color: 'bg-gray-800',
									url: 'thunder-garage.pl',
								},
							].map((project, i) => (
								<Link key={i} to="/portfolio">
									<motion.div
										variants={fadeInUp}
										className="group relative overflow-hidden bg-card border-4 border-primary hover:border-accent transition-all duration-300 hover:shadow-lift cursor-pointer">
										{/* Browser Chrome */}
										<div className="bg-muted p-2 flex items-center gap-2 border-b-2 border-primary">
											<div className="flex gap-1">
												<div className="w-2 h-2 bg-destructive rounded-full"></div>
												<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
											</div>
											<div className="flex-1 mx-2 h-4 bg-background flex items-center px-2">
												<span className="text-xs text-muted-foreground font-mono">{project.url}</span>
											</div>
										</div>
										{/* Image Container */}
										<div className="aspect-[19/10] relative overflow-hidden bg-muted">
											<img
												src={project.img}
												alt={`${project.title} Screenshot`}
												className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
											/>
										</div>
										{/* Content Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
											<div className="p-6 text-primary-foreground w-full">
												<span
													className={`inline-block px-2 py-1 ${project.color} text-white text-xs font-mono uppercase tracking-wider mb-3`}>
													{project.category}
												</span>
												<h3 className="font-heading font-bold text-lg mb-2">{project.title}</h3>
												<p className="text-sm text-primary-foreground/90 mb-4">{project.desc}</p>
												<span className="text-sm text-secondary font-medium">Zobacz projekt →</span>
											</div>
										</div>
									</motion.div>
								</Link>
							))}
						</motion.div>

						{/* View All Projects CTA */}
						<motion.div variants={fadeInUp} className="text-center pt-16">
							<Link to="/portfolio">
								<Button variant="secondary" size="lg" className="group font-body font-medium tracking-wider uppercase">
									Zobacz Wszystkie Projekty
									<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Services - Bento Box */}
			<section className="py-32 bg-card relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 opacity-3">
					<div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-transparent transform -rotate-12"></div>
					<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent/5 to-transparent transform rotate-12"></div>
				</div>

				<div className="container mx-auto px-6 relative z-10">
					<motion.div {...fadeInUp} className="mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">Czym Się Zajmujemy</h2>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Large Service Card */}
						<motion.div
							variants={fadeInUp}
							className="lg:col-span-2 lg:row-span-2 group bg-primary text-primary-foreground p-12 border-4 border-primary hover:shadow-lift-lg transition-all duration-300 cursor-pointer">
							<Sparkles className="w-16 h-16 text-secondary mb-6" />
							<h3 className="font-heading font-bold text-h2-mobile md:text-h2 mb-4">Landing Pages</h3>
							<p className="text-body text-primary-foreground/80 mb-6 max-w-md">
								Strony które przyciągają i przekonują. Projektujemy landing pages, które nie tylko wyglądają świetnie,
								ale przede wszystkim sprzedają.
							</p>
							<Link to="/uslugi/landing-pages" className="text-secondary font-body font-medium hover:underline">
								Dowiedz się więcej →
							</Link>
						</motion.div>

						{/* Smaller Service Cards */}
						{[
							{
								icon: Code,
								title: 'Strony Firmowe',
								desc: 'Multi-page websites dla Twojego biznesu',
								link: '/uslugi/strony-firmowe',
							},
							// {
							// 	icon: Zap,
							// 	title: 'E-commerce',
							// 	desc: 'Sklepy które sprzedają 24/7',
							// 	link: '/uslugi/sklepy-internetowe',
							// },
							{ icon: Rocket, title: 'Redesign', desc: 'Odświeżenie które robi różnicę', link: '/uslugi/redesign' },
						].map((service, i) => {
							const IconComponent = service.icon as React.ComponentType<{ className?: string }>
							return (
								<motion.div
									key={i}
									variants={fadeInUp}
									className="group bg-background p-8 border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300">
									<IconComponent className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
									<h3 className="font-heading font-bold text-h3-mobile mb-3">{service.title}</h3>
									<p className="text-body-sm text-muted-foreground mb-4">{service.desc}</p>
									<Link to={service.link} className="text-secondary font-body font-medium text-sm hover:underline">
										Dowiedz się więcej →
									</Link>
								</motion.div>
							)
						})}

						{/* UX/UI Design - Full Width */}
						<motion.div
							variants={fadeInUp}
							className="lg:col-span-3 group bg-background p-8 border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300">
							<PenTool className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
							<h3 className="font-heading font-bold text-h3-mobile mb-3">UX/UI Design</h3>
							<p className="text-body-sm text-muted-foreground mb-4">Interfejsy które użytkownicy kochają</p>
							<Link to="/uslugi/ux-ui-design" className="text-secondary font-body font-medium text-sm hover:underline">
								Dowiedz się więcej →
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Process Timeline */}
			<section className="py-32 bg-primary text-primary-foreground">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-20">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 mb-4">Jak Pracujemy</h2>
						<p className="font-body text-body-lg text-primary-foreground/70">Prosty proces, spektakularne rezultaty</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								number: '01',
								icon: Search,
								title: 'Discovery',
								desc: 'Poznajemy Twój biznes, cele i grupę docelową',
								duration: '1 tydzień',
							},
							{
								number: '02',
								icon: PenTool,
								title: 'Design',
								desc: 'Tworzymy wireframes, mockupy i prototypy',
								duration: '2-3 tygodnie',
							},
							{
								number: '03',
								icon: Code,
								title: 'Development',
								desc: 'Kodujemy responsywną, zoptymalizowaną stronę',
								duration: '2-4 tygodnie',
							},
							{
								number: '04',
								icon: Rocket,
								title: 'Launch',
								desc: 'Testujemy, wdrażamy i przekazujemy gotowy produkt',
								duration: '1 tydzień',
							},
						].map((step, i) => (
							<motion.div key={i} variants={fadeInUp} className="text-center">
								<div className="relative mb-8">
									<span className="font-mono font-bold text-[120px] text-secondary/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
										{step.number}
									</span>
									<step.icon className="w-16 h-16 text-secondary mx-auto relative z-10" />
								</div>
								<h3 className="font-heading font-bold text-2xl mb-4">{step.title}</h3>
								<p className="text-body-sm text-primary-foreground/70 mb-4">{step.desc}</p>
								<p className="font-mono text-sm text-secondary">{step.duration}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Values */}
			<section className="py-20 bg-secondary text-secondary-foreground">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 mb-4">Co Gwarantujemy</h2>
						<p className="font-body text-body-lg opacity-70">Każda strona którą tworzymy spełnia najwyższe standardy</p>
					</motion.div>
					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
						{[
							{ icon: Palette, title: 'Design', desc: 'Nowoczesny i funkcjonalny' },
							{ icon: Zap, title: 'Wydajność', desc: 'Szybkie ładowanie stron' },
							{ icon: Smartphone, title: 'Responsywność', desc: 'Działa na każdym urządzeniu' },
							{ icon: Globe, title: 'SEO', desc: 'Optymalizacja pod wyszukiwarki' },
						].map((value, i) => {
							const IconComponent = value.icon as React.ComponentType<{ className?: string }>
							return (
								<motion.div key={i} variants={fadeInUp}>
									<IconComponent className="w-16 h-16 mx-auto mb-4 text-secondary-foreground" />
									<h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
									<p className="font-body text-sm opacity-80">{value.desc}</p>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 bg-primary text-primary-foreground">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
						<h2 className="font-heading font-bold text-h1-mobile md:text-[72px] leading-tight mb-6">
							Gotowy Na Swoją Wymarzoną Stronę?
						</h2>
						<p className="font-body text-body-lg text-primary-foreground/70 mb-10">
							Umów bezpłatną konsultację i poznaj nasze podejście
						</p>
						<Link to="/kontakt#formularz-kontaktowy">
							<Button variant="secondary" size="lg" className="group font-body font-medium tracking-wider uppercase">
								Umów Konsultację
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</Button>
						</Link>
						<p className="text-sm text-primary-foreground/50 mt-6">Odpowiedź w 24h</p>
						<p className="text-body-sm text-primary-foreground/70 mt-4">
							lub napisz:{' '}
							<a href="mailto:kontakt@uwebs.pl" className="text-secondary hover:underline">
								kontakt@uwebs.pl
							</a>
						</p>
					</motion.div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Home
