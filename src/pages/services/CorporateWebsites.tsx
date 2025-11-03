import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Code, Globe, Shield, Smartphone, Sparkles, Users, Zap } from 'lucide-react'
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

const CorporateWebsites = () => {
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
			icon: Globe,
			title: 'CMS do zarządzania',
			desc: 'Intuicyjny panel administracyjny do łatwego zarządzania treścią strony',
		},
		{
			icon: Smartphone,
			title: 'Responsywny design',
			desc: 'Strona idealnie dopasowuje się do wszystkich urządzeń i rozdzielczości',
		},
		{
			icon: Shield,
			title: 'Bezpieczeństwo',
			desc: 'Najwyższe standardy bezpieczeństwa',
		},
		{
			icon: Zap,
			title: 'Szybkość ładowania',
			desc: 'Zoptymalizowana wydajność dla najlepszego doświadczenia użytkownika',
		},
	]

	const benefits = [
		'Profesjonalny wizerunek firmy',
		'Zwiększenie wiarygodności marki',
		'Lepsze pozycjonowanie w Google',
		'Łatwe zarządzanie treścią',
	]

	const process = [
		{
			step: '01',
			title: 'Analiza potrzeb',
			desc: 'Poznajemy Twoją firmę, cele biznesowe i wymagania funkcjonalne',
		},
		{
			step: '02',
			title: 'Architektura informacji',
			desc: 'Projektujemy strukturę strony i mapę nawigacji',
		},
		{
			step: '03',
			title: 'Design systemu',
			desc: 'Tworzymy spójny system wizualny i komponenty UI',
		},
		{
			step: '04',
			title: 'Development',
			desc: 'Kodujemy stronę z wykorzystaniem najnowszych technologii',
		},
		{
			step: '05',
			title: 'CMS & Training',
			desc: 'Implementujemy CMS i szkolimy zespół z obsługi',
		},
	]

	return (
		<>
			<SEOHead
				title="uWebs - Strony Firmowe"
				description="Profesjonalne strony firmowe z CMS. Responsywny design, intuicyjny panel administracyjny, SEO. Idealne dla firm każdej wielkości. Ceny od 8000 PLN."
				keywords="strony firmowe, strona korporacyjna, strona dla firmy, CMS, zarządzanie treścią, strona biznesowa, profesjonalna strona, web design dla firm"
				canonical="https://uwebs.pl/uslugi/strony-firmowe"
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
								<BreadcrumbPage>Strony Firmowe</BreadcrumbPage>
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
								<Code className="w-12 h-12 text-secondary" />
								<p className="font-mono font-bold text-sm text-secondary uppercase tracking-wider">Strony Firmowe</p>
							</div>
							<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
								Strony które budują <span className="text-secondary">zaufanie</span> do Twojej marki
							</h1>
							<p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
								Tworzymy kompleksowe strony internetowe, które prezentują Twoją firmę w najlepszym świetle i budują
								wiarygodność wśród potencjalnych klientów.
							</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button
										variant="secondary"
										size="lg"
										className="group font-body font-medium tracking-wider uppercase">
										Zamów Stronę Firmową
										<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
								<Link to="/portfolio">
									<Button
										variant="outline"
										size="lg"
										className="font-body font-medium tracking-wider uppercase border-2">
										Zobacz Realizacje
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
							Co wyróżnia nasze strony firmowe?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Każda strona jest budowana z myślą o długoterminowym sukcesie Twojej firmy
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
								Dlaczego warto mieć profesjonalną stronę firmową?
							</h2>
							<p className="text-body text-primary-foreground/80 mb-8">
								W dzisiejszych czasach strona internetowa to wizytówka Twojej firmy. To pierwsze miejsce, gdzie
								potencjalni klienci poznają Twoją markę.
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
									<h3 className="font-heading font-bold text-h3 mb-4">Dlaczego strona firmowa?</h3>
									<p className="text-body text-primary-foreground/80">
										Profesjonalna strona internetowa to wizytówka Twojej firmy w sieci. Buduje zaufanie i pokazuje, że
										jesteś wiarygodnym partnerem biznesowym.
									</p>
								</div>
								<div className="grid grid-cols-2 gap-6 text-center pt-6 border-t-2 border-secondary/30">
									<div>
										<div className="font-mono font-bold text-3xl text-secondary mb-2">Multi-page</div>
										<p className="text-sm text-primary-foreground/70">Wiele podstron</p>
									</div>
									<div>
										<div className="font-mono font-bold text-3xl text-secondary mb-2">CMS</div>
										<p className="text-sm text-primary-foreground/70">Łatwa edycja</p>
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
							Jak tworzymy strony firmowe?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Sprawdzony proces, który gwarantuje sukces Twojej strony internetowej
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
						<h2 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
							Oferta Stron Firmowych
						</h2>
						<p className="font-body text-body-lg text-muted-foreground">
							Wybierz pakiet dopasowany do potrzeb Twojej firmy
						</p>
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
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Starter</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								8,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-6 flex-grow">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Do 5 podstron</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Responsywny design</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Podstawowy CMS</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Formularz kontaktowy</span>
								</li>
							</ul>
							<div className="mt-auto">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button variant="outline" className="w-full">
										Wybierz Starter
									</Button>
								</Link>
							</div>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-primary text-primary-foreground p-8 border-4 border-secondary hover:shadow-lift-lg transition-all duration-300 relative flex flex-col">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-bold w-fit">
								NAJPOPULARNIEJSZY
							</div>
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Business</h3>
							<div className="font-mono font-bold text-4xl mb-6">
								12,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-6 flex-grow">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Do 15 podstron</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowany CMS</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Blog/Aktualności</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Integracje (CRM, Analytics)</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">12 miesięcy wsparcia</span>
								</li>
							</ul>
							<div className="mt-auto">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button variant="secondary" className="w-full">
										Wybierz Business
									</Button>
								</Link>
							</div>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-background p-8 border-4 border-primary hover:shadow-lift transition-all duration-300 flex flex-col">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Enterprise</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								18,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-6 flex-grow">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Nieograniczona liczba stron</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowane funkcjonalności</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wielojęzyczność</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Dedykowane integracje</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">12 miesięcy wsparcia</span>
								</li>
							</ul>
							<div className="mt-auto">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button variant="outline" className="w-full">
										Wybierz Enterprise
									</Button>
								</Link>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section> */}

			{/* CTA Section */}
			<section className="py-32 bg-primary text-primary-foreground">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
						<h2 className="font-heading font-bold text-h1-mobile md:text-[72px] leading-tight mb-6">
							Gotowy na profesjonalną stronę firmową?
						</h2>
						<p className="font-body text-body-lg text-primary-foreground/70 mb-10">
							Umów bezpłatną konsultację i poznaj nasze podejście do tworzenia stron internetowych
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

export default CorporateWebsites
