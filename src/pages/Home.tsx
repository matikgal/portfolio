import { motion } from 'framer-motion'
import { ArrowRight, Code, Sparkles, Zap, Rocket, Search, PenTool } from 'lucide-react'
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
				title="uWebs - Tworzenie Stron Internetowych Bielsko-Biała | Landing Pages Beskidy"
				description="Profesjonalne tworzenie stron internetowych Bielsko-Biała, Żywiec, Beskidy. Landing pages, strony firmowe, sklepy online. Konkurencyjne ceny od 3500 PLN. Bezpłatna konsultacja!"
				keywords="tworzenie stron internetowych Bielsko-Biała, landing page Żywiec, strona firmowa Beskidy, sklep internetowy Śląsk, web design Bielsko, SEO Żywiec, Polska"
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

			{/* Trust Bar - Clients */}
			<section className="py-20 bg-card">
				<div className="container mx-auto px-6">
					<motion.p
						{...fadeInUp}
						className="font-mono text-sm text-center text-muted-foreground uppercase tracking-wider mb-12">
						Zaufali nam
					</motion.p>
					<motion.div
						className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
						{...fadeInUp}>
						{[1, 2, 3, 4].map(i => (
							<div key={i} className="text-4xl font-heading font-bold text-primary">
								LOGO {i}
							</div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Featured Work */}
			<section className="py-32 bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">Wybrane Projekty</h2>
						<p className="font-body text-body-lg text-muted-foreground">Portfolio które mówi więcej niż tysiąc słów</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Large Featured Card */}
						<motion.div
							variants={fadeInUp}
							className="lg:col-span-2 lg:row-span-1 group relative overflow-hidden bg-card border-4 border-primary hover:border-secondary transition-colors">
							<div className=" relative overflow-hidden">
								<img
									src="/tort-desktop.webp"
									alt="Portfolio Website Screenshot"
									className="w-full h-full object-cover object-top"
								/>
								<div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="text-center text-primary-foreground">
										<p className="font-mono text-sm uppercase tracking-wider mb-2">Portfolio Website</p>
										<h3 className="font-heading font-bold text-h3 mb-4">Nasze Portfolio</h3>
										<Button variant="secondary" size="sm">
											Zobacz Case Study
											<ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Smaller Cards */}
						{[
							{ img: '/farma-desktop.webp', title: 'Farma', category: 'E-commerce' },
							{ img: '/fryzjer-desktop.webp', title: 'Salon Fryzjerski', category: 'Usługi' },
							{ img: '/mechanik-desktop.webp', title: 'Warsztat', category: 'Usługi' },
							{ img: '/chaty-desktop.webp', title: 'Chaty AI', category: 'SaaS' }
						].map((project, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								className="group relative overflow-hidden bg-card border-4 border-primary hover:border-accent transition-colors">
								<div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
									<img
										src={project.img}
										alt={`${project.title} Screenshot`}
										className="w-full h-full object-fill"
									/>
									<div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<div className="text-center text-primary-foreground">
											<p className="font-mono text-xs uppercase tracking-wider mb-2">{project.category}</p>
											<h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
											<span className="text-sm text-secondary">Zobacz więcej →</span>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					<motion.div {...fadeInUp} className="text-center mt-12">
						<Link to="/portfolio">
							<Button
								variant="outline"
								size="lg"
								className="group font-body font-medium tracking-wider uppercase border-2">
								Zobacz Wszystkie Projekty
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Services - Bento Box */}
			<section className="py-32 bg-card">
				<div className="container mx-auto px-6">
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
								Strony konwertujące od pierwszego kliknięcia. Projektujemy landing pages, które nie tylko wyglądają
								świetnie, ale przede wszystkim sprzedają.
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
							{
								icon: Zap,
								title: 'E-commerce',
								desc: 'Sklepy które sprzedają 24/7',
								link: '/uslugi/sklepy-internetowe',
							},
							{ icon: Rocket, title: 'Redesign', desc: 'Odświeżenie które robi różnicę', link: '/uslugi/redesign' },
							{
								icon: PenTool,
								title: 'UX/UI Design',
								desc: 'Interfejsy które użytkownicy kochają',
								link: '/uslugi/ux-ui-design',
							},
						].map((service, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								className="group bg-background p-8 border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300">
								<service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="font-heading font-bold text-h3-mobile mb-3">{service.title}</h3>
								<p className="text-body-sm text-muted-foreground mb-4">{service.desc}</p>
								<Link to={service.link} className="text-secondary font-body font-medium text-sm hover:underline">
									Dowiedz się więcej →
								</Link>
							</motion.div>
						))}
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

			{/* Stats */}
			<section className="py-20 bg-secondary text-secondary-foreground">
				<div className="container mx-auto px-6">
					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
						{[
							{ number: '150+', label: 'Projects' },
							{ number: '98%', label: 'Happy Clients' },
							{ number: '50+', label: 'Clients' },
							{ number: '5', label: 'Years' },
						].map((stat, i) => (
							<motion.div key={i} variants={fadeInUp}>
								<div className="font-mono font-bold text-[80px] md:text-[120px] leading-none mb-4">{stat.number}</div>
								<p className="font-body text-lg">{stat.label}</p>
							</motion.div>
						))}
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
							<a href="mailto:hello@uwebs.pl" className="text-secondary hover:underline">
								hello@uwebs.pl
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
