import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, PenTool, Users, Eye, Lightbulb, Target, Palette } from 'lucide-react'
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

const UXUIDesign = () => {
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
			icon: Users,
			title: 'User Research',
			desc: 'Badamy potrzeby i zachowania użytkowników, aby stworzyć idealne doświadczenie',
		},
		{
			icon: Lightbulb,
			title: 'Prototypowanie',
			desc: 'Tworzymy interaktywne prototypy do testowania koncepcji przed implementacją',
		},
		{
			icon: Palette,
			title: 'Design System',
			desc: 'Budujemy spójny system wizualny z komponentami wielokrotnego użytku',
		},
		{
			icon: Target,
			title: 'Usability Testing',
			desc: 'Testujemy interfejsy z prawdziwymi użytkownikami i optymalizujemy UX',
		},
	]

	const benefits = [
		'Zwiększenie zadowolenia użytkowników',
		'Łatwiejsze korzystanie ze strony',
		'Redukcja kosztów wsparcia technicznego',
		'Lepsze pozycjonowanie w wyszukiwarkach',
		'Zwiększenie lojalności klientów',
		'Przewaga konkurencyjna',
	]

	const process = [
		{
			step: '01',
			title: 'Research & Discovery',
			desc: 'Badamy użytkowników, analizujemy konkurencję i definiujemy cele biznesowe',
		},
		{
			step: '02',
			title: 'Information Architecture',
			desc: 'Projektujemy strukturę informacji i mapę nawigacji',
		},
		{
			step: '03',
			title: 'Wireframing',
			desc: 'Tworzymy szkielety stron skupiając się na funkcjonalności',
		},
		{
			step: '04',
			title: 'Visual Design',
			desc: 'Projektujemy atrakcyjny interfejs zgodny z tożsamością marki',
		},
		{
			step: '05',
			title: 'Prototyping & Testing',
			desc: 'Budujemy prototypy i je testujemy',
		},
	]

	const services = [
		{
			title: 'UX Research',
			desc: 'Badania użytkowników, analiza konkurencji, persona mapping',
			price: 'od 2,500 PLN',
		},
		{
			title: 'UI Design',
			desc: 'Projektowanie interfejsów, design system, komponenty',
			price: 'od 3,500 PLN',
		},
		{
			title: 'Prototypowanie',
			desc: 'Interaktywne prototypy, wireframing, user flow',
			price: 'od 2,000 PLN',
		},
		{
			title: 'Usability Testing',
			desc: 'Testy użyteczności, A/B testing, optymalizacja',
			price: 'od 1,800 PLN',
		},
	]

	return (
		<>
			<SEOHead
				title="uWebs - UX/UI Design"
				description="Profesjonalny UX/UI design dla stron i aplikacji. Badania użytkowników, prototypy, testy użyteczności. Zwiększ konwersję dzięki lepszemu designowi. Ceny od 4000 PLN."
				keywords="UX design, UI design, projektowanie interfejsów, user experience, user interface, prototypy, wireframes, design thinking, użyteczność"
				canonical="https://uwebs.pl/uslugi/ux-ui-design"
			/>
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
								<BreadcrumbPage>UX/UI Design</BreadcrumbPage>
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
								<PenTool className="w-12 h-12 text-secondary" />
								<p className="font-mono font-bold text-sm text-secondary uppercase tracking-wider">UX/UI Design</p>
							</div>
							<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
								Interfejsy które użytkownicy <span className="text-secondary">kochają</span>
							</h1>
							<p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
								Projektujemy interfejsy oparte na badaniach użytkowników i najlepszych praktykach UX. Każdy element jest
								przemyślany tak, aby zapewnić intuicyjne i przyjemne doświadczenie.
							</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button
										variant="secondary"
										size="lg"
										className="group font-body font-medium tracking-wider uppercase">
										Zamów UX/UI Design
										<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
								<Link to="/portfolio">
									<Button
										variant="outline"
										size="lg"
										className="font-body font-medium tracking-wider uppercase border-2">
										Zobacz Projekty
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
							Nasze podejście do UX/UI Design
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Łączymy kreatywność z nauką o użytkownikach, aby tworzyć interfejsy które działają
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

			<section className="py-32 bg-primary text-primary-foreground">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
						<motion.div {...fadeInUp}>
							<h2 className="font-heading font-bold text-h1-mobile md:text-h1 mb-6">
								Dlaczego dobry UX/UI ma znaczenie?
							</h2>
							<p className="text-body text-primary-foreground/80 mb-8">
								Dobrze zaprojektowany interfejs to nie tylko estetyka - to narzędzie biznesowe, które wpływa na sukces
								Twojego produktu.
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
									<PenTool className="w-16 h-16 text-secondary mx-auto mb-4" />
									<h3 className="font-heading font-bold text-h3 mb-4">Czym jest UX/UI Design?</h3>
									<p className="text-body text-primary-foreground/80">
										UX to doświadczenie użytkownika - jak łatwo i przyjemnie korzysta się z Twojej strony. UI to
										interfejs - jak wygląda i jak działa. Razem tworzą skuteczną stronę internetową.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-6 text-center pt-6 border-t-2 border-secondary/30">
									<div>
										<div className="font-mono font-bold text-3xl text-secondary mb-2">UX</div>
										<p className="text-sm text-primary-foreground/70">Doświadczenie</p>
									</div>
									<div>
										<div className="font-mono font-bold text-3xl text-secondary mb-2">UI</div>
										<p className="text-sm text-primary-foreground/70">Interfejs</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-32 bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
							Jak projektujemy UX/UI?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Sprawdzony proces design thinking, który gwarantuje sukces projektu
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

			{/* <section className="py-32 bg-card">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">Nasze usługi UX/UI</h2>
						<p className="font-body text-body-lg text-muted-foreground">Wybierz usługę dopasowaną do Twoich potrzeb</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{services.map((service, i) => (
							<motion.div
								key={i}
								variants={fadeInUp}
								className="bg-background p-8 border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300">
								<h3 className="font-heading font-bold text-h3-mobile mb-3">{service.title}</h3>
								<p className="text-body-sm text-muted-foreground mb-6">{service.desc}</p>
								<div className="flex justify-between items-center">
									<span className="font-mono font-bold text-2xl text-secondary">{service.price}</span>
									<Link to="/kontakt#formularz-kontaktowy">
										<Button variant="outline" size="sm">
											Zamów
										</Button>
									</Link>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section> */}

			{/* Pricing Section */}
			{/* <section className="py-32 bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="text-center mb-16">
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">Pakiety UX/UI Design</h2>
						<p className="font-body text-body-lg text-muted-foreground">Kompleksowe rozwiązania dla różnych potrzeb</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
						
						<motion.div
							variants={fadeInUp}
							className="bg-card p-8 border-4 border-primary hover:shadow-lift transition-all duration-300">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">UX Starter</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								4,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">User research</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wireframing</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Podstawowy UI design</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Style guide</span>
								</li>
							</ul>
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="outline" className="w-full">
									Wybierz Starter
								</Button>
							</Link>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-primary text-primary-foreground p-8 border-4 border-secondary hover:shadow-lift-lg transition-all duration-300 relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-bold w-fit">
								NAJPOPULARNIEJSZY
							</div>
							<h3 className="font-heading font-bold text-h3-mobile mb-4">UX Professional</h3>
							<div className="font-mono font-bold text-4xl mb-6">
								8,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wszystko z Starter</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowany UI design</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Interaktywne prototypy</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Design system</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Usability testing</span>
								</li>
							</ul>
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="secondary" className="w-full">
									Wybierz Professional
								</Button>
							</Link>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-card p-8 border-4 border-primary hover:shadow-lift transition-all duration-300">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">UX Enterprise</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								12,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wszystko z Professional</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowane badania UX</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">A/B testing strategia</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Kompleksowy design system</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Długoterminowe wsparcie</span>
								</li>
							</ul>
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="outline" className="w-full">
									Wybierz Enterprise
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
							Gotowy na UX/UI które robi różnicę?
						</h2>
						<p className="font-body text-body-lg text-primary-foreground/70 mb-10">
							Umów bezpłatną konsultację i poznaj nasze podejście do projektowania interfejsów
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

export default UXUIDesign
