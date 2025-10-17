import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles, Target, TrendingUp, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'

const LandingPages = () => {
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

	const features = [
		{
			icon: Target,
			title: 'Zaprojektowane do sprzedaży',
			desc: 'Każdy element jest przemyślany tak, aby przekonać odwiedzającego do działania',
		},
		{
			icon: TrendingUp,
			title: 'Testowanie wersji',
			desc: 'Sprawdzamy różne warianty strony, aby znaleźć najskuteczniejsze rozwiązania',
		},
		{
			icon: Users,
			title: 'Łatwe w użyciu',
			desc: 'Intuicyjne interfejsy, które prowadzą użytkownika krok po kroku do celu',
		},
		{
			icon: Zap,
			title: 'Szybkie ładowanie',
			desc: 'Zoptymalizowane pod kątem wydajności - każda sekunda ma znaczenie',
		},
	]

	const benefits = [
		'Strona zaprojektowana do sprzedaży',
		'Profesjonalny wizerunek marki',
		'Mobilna responsywność',
		'SEO-friendly struktura',
		'Integracja z narzędziami analitycznymi',
	]

	const process = [
		{
			step: '01',
			title: 'Analiza celów',
			desc: 'Poznajemy Twój biznes, grupę docelową i cele sprzedażowe',
		},
		{
			step: '02',
			title: 'Strategia UX',
			desc: 'Projektujemy intuicyjną ścieżkę użytkownika i strukturę strony',
		},
		{
			step: '03',
			title: 'Design & Copy',
			desc: 'Tworzymy atrakcyjny design i angażujące treści',
		},
		{
			step: '04',
			title: 'Development',
			desc: 'Kodujemy responsywną stronę z najwyższą jakością',
		},
		{
			step: '05',
			title: 'Testing & Launch',
			desc: 'Testujemy wszystkie funkcjonalności i wdrażamy stronę',
		},
	]

	return (
		<>
			<SEOHead
				title="uWebs - Landing Pages"
				description="Profesjonalne landing pages które sprzedają. Skuteczne strony jednosekcyjne, responsywny design, testowanie wersji. Ceny od 3500 PLN."
				keywords="landing page, strona sprzedażowa, strona jednosekcyjna, marketing online, zwiększenie sprzedaży, skuteczna strona, uWebs"
				canonical="https://uwebs.pl/uslugi/landing-pages"
			/>
			<script type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Service',
					name: 'Landing Pages',
					description:
						'Profesjonalne landing pages które sprzedają. Optymalizacja konwersji, A/B testing, responsywny design.',
					provider: {
						'@type': 'Organization',
						name: 'uWebs',
						url: 'https://uwebs.pl',
					},
					offers: [
						{
							'@type': 'Offer',
							name: 'Landing Page Basic',
							price: '3500',
							priceCurrency: 'PLN',
						},
						{
							'@type': 'Offer',
							name: 'Landing Page Pro',
							price: '5500',
							priceCurrency: 'PLN',
						},
						{
							'@type': 'Offer',
							name: 'Landing Page Premium',
							price: '8500',
							priceCurrency: 'PLN',
						},
					],
					areaServed: 'PL',
				})}
			</script>
			<Navigation />

			{/* Breadcrumbs */}
			<section className="pt-24 pb-4 bg-background">
				<div className="container mx-auto px-6">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link to="/">Strona główna</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link to="/uslugi">Usługi</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Landing Pages</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>

			{/* Hero Section */}
			<section className="py-16 lg:py-20 bg-background">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
							<div className="flex items-center justify-center gap-3 mb-4">
								<Sparkles className="w-12 h-12 text-secondary" />
								<p className="font-mono font-bold text-sm text-secondary uppercase tracking-wider">Landing Pages</p>
							</div>
							<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
								Strony które <span className="text-secondary">przyciągają i przekonują</span>
							</h1>
							<p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
								Projektujemy landing pages, które nie tylko wyglądają świetnie, ale przede wszystkim sprzedają. Każdy
								element jest przemyślany z myślą o maksymalizacji Twoich zysków.
							</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button
										variant="secondary"
										size="lg"
										className="group font-body font-medium tracking-wider uppercase">
										Zamów Landing Page
										<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
								<Link to="/portfolio">
									<Button
										variant="outline"
										size="lg"
										className="font-body font-medium tracking-wider uppercase border-2">
										Zobacz Przykłady
									</Button>
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-32 bg-card">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
							Dlaczego nasze Landing Pages działają?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Każda strona jest budowana w oparciu o sprawdzone strategie sprzedażowe i najlepsze praktyki projektowania
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{features.map((feature, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								className="bg-background p-8 border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300">
								<feature.icon className="w-12 h-12 text-accent mb-4" />
								<h3 className="font-heading font-bold text-h3-mobile mb-3">{feature.title}</h3>
								<p className="text-body-sm text-muted-foreground">{feature.desc}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-32 bg-primary text-primary-foreground">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
						<motion.div {...fadeInUp}>
							<h2 className="font-heading font-bold text-h1-mobile md:text-h1 mb-6">
								Co zyskujesz z profesjonalną Landing Page?
							</h2>
							<p className="text-body text-primary-foreground/80 mb-8">
								Inwestycja w dobrze zaprojektowaną landing page zwraca się wielokrotnie poprzez zwiększoną sprzedaż i
								więcej klientów.
							</p>
							<div className="space-y-4">
								{benefits.map((benefit, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: i * 0.1 }}
										className="flex items-center gap-3">
										<CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
										<span className="text-body-sm">{benefit}</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div {...fadeInUp} className="bg-secondary/10 p-8 border-4 border-secondary">
							<div className="space-y-8">
								<div className="text-center">
									<Sparkles className="w-16 h-16 text-secondary mx-auto mb-4" />
									<h3 className="font-heading font-bold text-h3 mb-4">Dlaczego Landing Page?</h3>
									<p className="text-body text-primary-foreground/80">
										Landing page to strona stworzona z jednym celem - przekonać odwiedzającego do konkretnej akcji. Bez
										rozpraszaczy, bez zbędnych elementów.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-6 text-center pt-6 border-t-2 border-secondary/30">
									<div>
										<div className="font-mono font-bold text-3xl text-secondary mb-2">Jeden cel</div>
										<p className="text-sm text-primary-foreground/70">Jasny przekaz</p>
									</div>
									<div>
										<div className="font-mono font-bold text-3xl text-secondary mb-2">Szybko</div>
										<p className="text-sm text-primary-foreground/70">2-3 tygodnie</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-32 bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
							Jak tworzymy Landing Pages?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Sprawdzony 5-etapowy proces tworzenia skutecznych stron sprzedażowych
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="max-w-4xl mx-auto">
						{process.map((item, i) => (
							<motion.div key={i} variants={fadeInUp} className="flex gap-8 mb-12 last:mb-0">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 bg-secondary text-secondary-foreground font-mono font-bold text-xl flex items-center justify-center">
										{item.step}
									</div>
								</div>
								<div className="flex-1">
									<h3 className="font-heading font-bold text-h3-mobile text-primary mb-3">{item.title}</h3>
									<p className="text-body text-muted-foreground">{item.desc}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Pricing Section */}
			{/* <section className="py-32 bg-card">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">Oferta Landing Pages</h2>
						<p className="font-body text-body-lg text-muted-foreground">Przejrzyste ceny bez ukrytych kosztów</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
						
						<motion.div
							variants={fadeInUp}
							className="bg-background p-8 border-4 border-primary hover:shadow-lift transition-all duration-300">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Basic</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								3,500 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">1 strona landing page</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Responsywny design</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Formularz kontaktowy</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Podstawowe SEO</span>
								</li>
							</ul>
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="outline" className="w-full">
									Wybierz Basic
								</Button>
							</Link>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-primary text-primary-foreground p-8 border-4 border-secondary hover:shadow-lift-lg transition-all duration-300 relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-bold w-fit">
								NAJPOPULARNIEJSZY
							</div>
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Pro</h3>
							<div className="font-mono font-bold text-4xl mb-6">
								5,500 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wszystko z Basic</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">A/B testing setup</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Integracje (CRM, Analytics)</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Copywriting</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">6 miesięcy wsparcia</span>
								</li>
							</ul>
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="secondary" className="w-full">
									Wybierz Pro
								</Button>
							</Link>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-background p-8 border-4 border-primary hover:shadow-lift transition-all duration-300">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Premium</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								8,500 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wszystko z Pro</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wielowariantowe A/B testy</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowane animacje</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Personalizacja treści</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">12 miesięcy wsparcia</span>
								</li>
							</ul>
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="outline" className="w-full">
									Wybierz Premium
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section> */}

			{/* CTA Section */}
			<section className="py-32 bg-primary text-primary-foreground">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
						<h2 className="font-heading font-bold text-h1-mobile md:text-[72px] leading-tight mb-6">
							Gotowy na Landing Page który sprzedaje?
						</h2>
						<p className="font-body text-body-lg text-primary-foreground/70 mb-10">
							Umów bezpłatną konsultację i poznaj nasze podejście do tworzenia stron które sprzedają
						</p>
						<Link to="/kontakt#formularz-kontaktowy">
							<Button variant="secondary" size="lg" className="group font-body font-medium tracking-wider uppercase">
								Umów Konsultację
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</Button>
						</Link>
						<p className="text-sm text-primary-foreground/50 mt-6">Odpowiedź w 24h</p>
					</motion.div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default LandingPages
