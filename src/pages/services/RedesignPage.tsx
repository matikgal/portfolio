import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Rocket, RefreshCw, TrendingUp, Zap, Eye, Users } from 'lucide-react'
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

const RedesignPage = () => {
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
			icon: Eye,
			title: 'Analiza UX/UI',
			desc: 'Szczegółowa analiza obecnej strony i identyfikacja problemów użyteczności',
		},
		{
			icon: TrendingUp,
			title: 'Optymalizacja konwersji',
			desc: 'Poprawa elementów wpływających na współczynnik konwersji',
		},
		{
			icon: Zap,
			title: 'Poprawa wydajności',
			desc: 'Optymalizacja szybkości ładowania i wydajności strony',
		},
		{
			icon: Users,
			title: 'Lepsze UX',
			desc: 'Modernizacja interfejsu dla lepszego doświadczenia użytkownika',
		},
	]

	const benefits = [
		'Zwiększenie konwersji o 150-300%',
		'Poprawa pozycjonowania w Google',
		'Modernizacja wyglądu strony',
		'Lepsze doświadczenie użytkownika',
		'Optymalizacja na urządzenia mobilne',
		'Zachowanie istniejących treści',
	]

	const process = [
		{
			step: '01',
			title: 'Audyt obecnej strony',
			desc: 'Szczegółowa analiza UX, wydajności, SEO i funkcjonalności',
		},
		{
			step: '02',
			title: 'Identyfikacja problemów',
			desc: 'Określenie obszarów wymagających poprawy i priorytetyzacja',
		},
		{
			step: '03',
			title: 'Nowy design',
			desc: 'Projektowanie nowoczesnego interfejsu zachowującego tożsamość marki',
		},
		{
			step: '04',
			title: 'Implementacja',
			desc: 'Wdrożenie nowego designu z zachowaniem wszystkich funkcjonalności',
		},
		{
			step: '05',
			title: 'Optymalizacja',
			desc: 'Testowanie i optymalizacja wydajności oraz konwersji',
		},
	]

	const signs = [
		'Strona wygląda przestarzale',
		'Niska konwersja odwiedzających',
		'Słabe pozycje w Google',
		'Problemy na urządzeniach mobilnych',
		'Długi czas ładowania',
		'Wysoki bounce rate',
	]

	return (
		<>
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
								<BreadcrumbPage>Redesign</BreadcrumbPage>
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
								<Rocket className="w-12 h-12 text-secondary" />
								<p className="font-mono font-bold text-sm text-secondary uppercase tracking-wider">Redesign</p>
							</div>
							<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
								Odświeżenie które <span className="text-secondary">robi różnicę</span>
							</h1>
							<p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
								Modernizujemy Twoją obecną stronę, poprawiając UX, wydajność i konwersje. Zachowujemy to co działa, a
								ulepszamy to co można zrobić lepiej.
							</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button
										variant="secondary"
										size="lg"
										className="group font-body font-medium tracking-wider uppercase">
										Zamów Redesign
										<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
								<Link to="/portfolio">
									<Button
										variant="outline"
										size="lg"
										className="font-body font-medium tracking-wider uppercase border-2">
										Zobacz Przed/Po
									</Button>
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Signs Section */}
			<section className="py-32 bg-card">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
							Czy Twoja strona potrzebuje redesignu?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Sprawdź czy któryś z tych problemów dotyczy Twojej strony
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{signs.map((sign, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								className="bg-background p-6 border-4 border-primary hover:border-secondary hover:shadow-lift transition-all duration-300 text-center">
								<RefreshCw className="w-8 h-8 text-secondary mx-auto mb-3" />
								<p className="text-body-sm text-muted-foreground">{sign}</p>
							</motion.div>
						))}
					</motion.div>

					<motion.div {...fadeInUp} className="text-center mt-12">
						<p className="font-body text-body text-muted-foreground mb-6">
							Jeśli którykolwiek z tych problemów brzmi znajomo, to znak że Twoja strona potrzebuje redesignu
						</p>
						<Link to="/kontakt#formularz-kontaktowy">
							<Button variant="secondary" size="lg">
								Zamów Darmowy Audyt
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-32 bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
							Co obejmuje nasz redesign?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Kompleksowe podejście do modernizacji Twojej strony internetowej
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
								className="bg-card p-8 border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300">
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
							<h2 className="font-heading font-bold text-h1-mobile md:text-h1 mb-6">Jakie korzyści daje redesign?</h2>
							<p className="text-body text-primary-foreground/80 mb-8">
								Dobrze wykonany redesign to inwestycja, która zwraca się wielokrotnie poprzez lepsze wyniki biznesowe.
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
							<div className="text-center">
								<div className="font-mono font-bold text-6xl text-secondary mb-2">250%</div>
								<p className="text-body text-primary-foreground/80 mb-6">Średni wzrost konwersji po redesignie</p>
								<div className="grid grid-cols-2 gap-4 text-center">
									<div>
										<div className="font-mono font-bold text-3xl text-secondary">80+</div>
										<p className="text-sm text-primary-foreground/70">Redesignów</p>
									</div>
									<div>
										<div className="font-mono font-bold text-3xl text-secondary">95%</div>
										<p className="text-sm text-primary-foreground/70">Zadowolonych klientów</p>
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
							Jak przebiega proces redesignu?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Sprawdzony 5-etapowy proces, który gwarantuje sukces modernizacji
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
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">Cennik Redesignu</h2>
						<p className="font-body text-body-lg text-muted-foreground">Ceny dostosowane do zakresu modernizacji</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
						
						<motion.div
							variants={fadeInUp}
							className="bg-background p-8 border-4 border-primary hover:shadow-lift transition-all duration-300 flex flex-col">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Refresh</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								6,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-6 flex-grow">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Modernizacja wyglądu</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Optymalizacja mobilna</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Poprawa wydajności</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Podstawowe SEO</span>
								</li>
							</ul>
							<div className="mt-auto">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button variant="outline" className="w-full">
										Wybierz Refresh
									</Button>
								</Link>
							</div>
						</motion.div>

					
						<motion.div
							variants={fadeInUp}
							className="bg-primary text-primary-foreground p-8 border-4 border-secondary hover:shadow-lift-lg transition-all duration-300 relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-bold w-fit">
								NAJPOPULARNIEJSZY
							</div>
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Complete</h3>
							<div className="font-mono font-bold text-4xl mb-6">
								10,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wszystko z Refresh</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Przeprojektowanie UX</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Optymalizacja konwersji</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowane SEO</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">6 miesięcy wsparcia</span>
								</li>
							</ul>
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="secondary" className="w-full">
									Wybierz Complete
								</Button>
							</Link>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-background p-8 border-4 border-primary hover:shadow-lift transition-all duration-300">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Premium</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								15,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wszystko z Complete</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">A/B testing</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowane animacje</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Nowe funkcjonalności</span>
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
							Gotowy na redesign który zmieni wszystko?
						</h2>
						<p className="font-body text-body-lg text-primary-foreground/70 mb-10">
							Umów bezpłatną konsultację i otrzymaj darmowy audyt swojej strony
						</p>
						<Link to="/kontakt#formularz-kontaktowy">
							<Button variant="secondary" size="lg" className="group font-body font-medium tracking-wider uppercase">
								Umów Darmowy Audyt
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

export default RedesignPage
