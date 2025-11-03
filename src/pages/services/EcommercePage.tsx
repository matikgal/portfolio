import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, ShoppingCart, CreditCard, Truck, BarChart3, Shield } from 'lucide-react'
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

const EcommercePage = () => {
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
			icon: ShoppingCart,
			title: 'Zaawansowany koszyk',
			desc: 'Intuicyjny proces zakupowy z możliwością zapisywania ulubionych produktów',
		},
		{
			icon: CreditCard,
			title: 'Bezpieczne płatności',
			desc: 'Integracja z najpopularniejszymi bramkami płatniczymi i BLIK',
		},
		{
			icon: Truck,
			title: 'Zarządzanie dostawami',
			desc: 'Automatyczne kalkulacje kosztów dostawy i integracja z kurierami',
		},
		{
			icon: BarChart3,
			title: 'Analytics & Raporty',
			desc: 'Szczegółowe raporty sprzedaży i analiza zachowań klientów',
		},
	]

	const benefits = [
		'Sprzedaż 24/7 bez ograniczeń',
		'Automatyzacja procesów sprzedażowych',
		'Dotarcie do szerszej grupy klientów',
		'Niższe koszty operacyjne',
		'Łatwe zarządzanie produktami',
		'Integracja z systemami magazynowymi',
	]

	const process = [
		{
			step: '01',
			title: 'Analiza biznesu',
			desc: 'Poznajemy Twój asortyment, procesy sprzedażowe i grupę docelową',
		},
		{
			step: '02',
			title: 'Architektura sklepu',
			desc: 'Projektujemy strukturę kategorii i ścieżkę zakupową',
		},
		{
			step: '03',
			title: 'Design & UX',
			desc: 'Tworzymy atrakcyjny design zoptymalizowany pod konwersje',
		},
		{
			step: '04',
			title: 'Development',
			desc: 'Budujemy sklep z wykorzystaniem najnowszych technologii',
		},
		{
			step: '05',
			title: 'Integracje & Launch',
			desc: 'Łączymy z systemami płatności, kurierami i wdrażamy sklep',
		},
	]

	return (
		<>
			<SEOHead
				title="uWebs - Sklepy Internetowe"
				description="Profesjonalne sklepy internetowe e-commerce. Integracja płatności, zarządzanie produktami, responsywny design. Zwiększ sprzedaż online. Ceny od 12000 PLN."
				keywords="sklep internetowy, e-commerce, sprzedaż online, sklep online, platforma sprzedażowa, WooCommerce, Shopify, sklep www"
				canonical="https://uwebs.pl/uslugi/sklepy-internetowe"
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
								<BreadcrumbPage>E-commerce</BreadcrumbPage>
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
								<Zap className="w-12 h-12 text-secondary" />
								<p className="font-mono font-bold text-sm text-secondary uppercase tracking-wider">E-commerce</p>
							</div>
							<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-4">
								Sklepy które <span className="text-secondary">sprzedają</span> przez całą dobę
							</h1>
							<p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
								Tworzymy sklepy internetowe, które nie tylko wyglądają profesjonalnie, ale przede wszystkim generują
								sprzedaż i zapewniają doskonałe doświadczenie zakupowe.
							</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button
										variant="secondary"
										size="lg"
										className="group font-body font-medium tracking-wider uppercase">
										Zamów Sklep Online
										<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
								<Link to="/portfolio">
									<Button
										variant="outline"
										size="lg"
										className="font-body font-medium tracking-wider uppercase border-2">
										Zobacz Sklepy
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
							Dlaczego nasze sklepy sprzedają więcej?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Każdy element sklepu jest zaprojektowany z myślą o maksymalizacji sprzedaży
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
								Dlaczego warto mieć sklep internetowy?
							</h2>
							<p className="text-body text-primary-foreground/80 mb-8">
								E-commerce to przyszłość handlu. Sklep internetowy pozwala dotrzeć do klientów z całego kraju i
								sprzedawać bez ograniczeń czasowych.
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
								<div className="font-mono font-bold text-6xl text-secondary mb-2">300%</div>
								<p className="text-body text-primary-foreground/80 mb-6">
									Średni wzrost sprzedaży po uruchomieniu sklepu online
								</p>
								<div className="grid grid-cols-2 gap-4 text-center">
									<div>
										<div className="font-mono font-bold text-3xl text-secondary">50+</div>
										<p className="text-sm text-primary-foreground/70">Sklepów Online</p>
									</div>
									<div>
										<div className="font-mono font-bold text-3xl text-secondary">24/7</div>
										<p className="text-sm text-primary-foreground/70">Sprzedaż</p>
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
							Jak tworzymy sklepy internetowe?
						</h2>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Sprawdzony proces, który gwarantuje sukces Twojego sklepu online
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
							Oferta Sklepów Internetowych
						</h2>
						<p className="font-body text-body-lg text-muted-foreground">
							Wybierz pakiet dopasowany do skali Twojego biznesu
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
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Basic Shop</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								12,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-6 flex-grow">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Do 100 produktów</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Podstawowe płatności</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Panel administracyjny</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Responsywny design</span>
								</li>
							</ul>
							<div className="mt-auto">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button variant="outline" className="w-full">
										Wybierz Basic Shop
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
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Pro Shop</h3>
							<div className="font-mono font-bold text-4xl mb-6">
								18,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-6 flex-grow">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Do 1000 produktów</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Zaawansowane płatności</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Integracja z kurierami</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">System rabatów</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Analytics & raporty</span>
								</li>
							</ul>
							<div className="mt-auto">
								<Link to="/kontakt#formularz-kontaktowy">
									<Button variant="secondary" className="w-full">
										Wybierz Pro Shop
									</Button>
								</Link>
							</div>
						</motion.div>

						
						<motion.div
							variants={fadeInUp}
							className="bg-background p-8 border-4 border-primary hover:shadow-lift transition-all duration-300 flex flex-col">
							<h3 className="font-heading font-bold text-h3-mobile mb-4">Enterprise Shop</h3>
							<div className="font-mono font-bold text-4xl text-primary mb-6">
								25,000 <span className="text-lg font-normal">PLN</span>
							</div>
							<ul className="space-y-3 mb-6 flex-grow">
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Nieograniczona liczba produktów</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">B2B funkcjonalności</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Integracja z ERP/CRM</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Wielojęzyczność</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-secondary" />
									<span className="text-body-sm">Dedykowane wsparcie</span>
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
							Gotowy na sklep który sprzedaje 24/7?
						</h2>
						<p className="font-body text-body-lg text-primary-foreground/70 mb-10">
							Umów bezpłatną konsultację i poznaj nasze podejście do tworzenia sklepów internetowych
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

export default EcommercePage
