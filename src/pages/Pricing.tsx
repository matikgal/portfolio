import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const Pricing = () => {
	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.6 },
	}

	const packages = [
		{
			name: 'Landing Page',
			price: 'do 500 PLN',
			description: 'Pojedyncza strona sprzedażowa',
			features: [
				'1 strona konwertująca',
				'Responsywny design',
				'Formularz kontaktowy',
				'Podstawowe SEO',
				'Google Analytics',
				'Czas realizacji: 1-2 tygodnie',
			],
			accent: false,
		},
		{
			name: 'Strona Firmowa',
			price: 'od 1000 PLN',
			description: 'Kompleksowa prezentacja firmy',
			features: [
				'5-10 podstron',
				'Panel administracyjny (CMS)',
				'Blog/Aktualności',
				'Zaawansowane SEO',
				'Integracje (mapy, social media)',
				'Czas realizacji: 3-4 tygodnie',
			],
			accent: true,
		},
		{
			name: 'Sklep Internetowy',
			price: 'od 2000 PLN',
			description: 'E-commerce gotowy do sprzedaży',
			features: [
				'Katalog produktów',
				'Koszyk i płatności online',
				'Panel zarządzania zamówieniami',
				'Integracja z kurierami',
				'System rabatów i promocji',
				'Czas realizacji: 4-6 tygodni',
			],
			accent: false,
		},
	]

	return (
		<>
			<Navigation />

			<main className="pt-32 pb-20 min-h-screen bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="mb-20 text-center">
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Orientacyjne Ceny</p>
						<h1 className="font-heading font-bold text-hero-mobile md:text-hero text-primary mb-6">
							Ile Kosztuje <span className="text-secondary">Twoja Strona?</span>
						</h1>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Sprawdź orientacyjne koszty w zależności od typu projektu. Każda wycena jest indywidualna i zależy od
							konkretnych wymagań.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
						{packages.map((pkg, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className={`p-10 border-4 flex flex-col ${
									pkg.accent
										? 'bg-primary text-primary-foreground border-secondary shadow-lift-lg scale-105'
										: 'bg-card border-primary'
								} transition-all duration-300 hover:shadow-lift`}>
								{pkg.accent && (
									<div className="inline-flex px-4 py-1 mb-6 bg-secondary text-secondary-foreground font-mono text-xs uppercase tracking-wider w-fit">
										Popular
									</div>
								)}

								<h3
									className={`font-heading font-bold text-h3 mb-2 ${
										pkg.accent ? 'text-primary-foreground' : 'text-primary'
									}`}>
									{pkg.name}
								</h3>
								<p
									className={`font-body text-body-sm mb-6 ${
										pkg.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'
									}`}>
									{pkg.description}
								</p>

								<div className="mb-8">
									<div
										className={`font-mono font-bold text-4xl mb-2 ${pkg.accent ? 'text-secondary' : 'text-secondary'}`}>
										{pkg.price}
									</div>
								</div>

								<ul className="space-y-4 mb-8 flex-grow">
									{pkg.features.map((feature, i) => (
										<li key={i} className="flex items-start gap-3">
											<Check
												className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.accent ? 'text-secondary' : 'text-accent'}`}
											/>
											<span
												className={`font-body text-body-sm ${
													pkg.accent ? 'text-primary-foreground/90' : 'text-foreground'
												}`}>
												{feature}
											</span>
										</li>
									))}
								</ul>

								<div className="mt-auto">
									<Link to="/kontakt">
										<Button
											variant={pkg.accent ? 'secondary' : 'outline'}
											className="w-full font-body font-medium tracking-wider uppercase border-2"
											size="lg">
											Zapytaj o Wycenę
										</Button>
									</Link>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div {...fadeInUp} className="bg-card p-12 border-4 border-primary text-center max-w-4xl mx-auto">
						<h2 className="font-heading font-bold text-h3-mobile md:text-h3 text-primary mb-4">
							Potrzebujesz indywidualnej wyceny?
						</h2>
						<p className="font-body text-body text-muted-foreground mb-8">
							Każdy projekt jest inny. Opowiedz nam o swoich potrzebach, a przygotujemy dokładną wycenę dostosowaną do
							Twojego budżetu i wymagań.
						</p>
						<Link to="/kontakt">
							<Button variant="secondary" size="lg" className="font-body font-medium tracking-wider uppercase">
								Bezpłatna Wycena
							</Button>
						</Link>
					</motion.div>

					{/* Factors affecting price */}
					<motion.div {...fadeInUp} className="mt-20">
						<h2 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary text-center mb-12">
							Co wpływa na cenę?
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									title: 'Złożoność projektu',
									desc: 'Liczba stron, funkcjonalności, integracje',
								},
								{
									title: 'Design',
									desc: 'Gotowy szablon vs. indywidualny projekt',
								},
								{
									title: 'Treści',
									desc: 'Czy dostarczasz treści, czy je tworzymy',
								},
								{
									title: 'Terminy',
									desc: 'Standardowy vs. ekspresowy czas realizacji',
								},
							].map((factor, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: i * 0.1 }}
									className="text-center">
									<div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="font-mono font-bold text-2xl text-secondary">{i + 1}</span>
									</div>
									<h3 className="font-heading font-bold text-lg text-primary mb-2">{factor.title}</h3>
									<p className="text-body-sm text-muted-foreground">{factor.desc}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export default Pricing
