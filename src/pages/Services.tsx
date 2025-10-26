import { motion } from 'framer-motion'
import { Code, Sparkles, Rocket, PenTool, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'

const Services = () => {
	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.6 },
	}

	const services: Array<{
		icon: LucideIcon
		title: string
		description: string
		features: string[]
		link: string
	}> = [
			{
				icon: Sparkles,
				title: 'Landing Pages',
				description:
					'Strony które przyciągają i przekonują. Projektujemy landing pages, które nie tylko wyglądają świetnie, ale przede wszystkim sprzedają.',
				features: [
					'Wysokie współczynniki konwersji',
					'Testowanie A/B',
					'Projektowanie mobile-first',
					'Optymalizacja SEO',
				],
				link: '/uslugi/landing-pages',
			},
			{
				icon: Code,
				title: 'Strony Firmowe',
				description:
					'Wielostronicowe witryny dla Twojego biznesu. Kompleksowe strony internetowe, które budują Twoją markę w sieci.',
				features: [
					'Responsywny design',
					'Integracja z CMS',
					'Niestandardowe funkcjonalności',
					'Optymalizacja wydajności',
				],
				link: '/uslugi/strony-firmowe',
			},
			{
				icon: Rocket,
				title: 'Redesign',
				description: 'Odświeżenie które robi różnicę. Przekształcamy przestarzałe strony w nowoczesne platformy.',
				features: ['Audyt UX', 'Nowoczesna estetyka', 'Zwiększenie wydajności', 'Optymalizacja konwersji'],
				link: '/uslugi/redesign',
			},
			{
				icon: PenTool,
				title: 'UX/UI Design',
				description: 'Interfejsy które użytkownicy kochają. Projektujemy intuicyjne doświadczenia cyfrowe.',
				features: ['Badania użytkowników', 'Wireframing i prototypowanie', 'Testy użyteczności', 'Systemy projektowe'],
				link: '/uslugi/ux-ui-design',
			},
		]

	return (
		<>
			<SEOHead
				title="uWebs - Usługi"
				description="Profesjonalne usługi web design: landing pages od 3500 PLN, strony firmowe od 8000 PLN. UX/UI design, redesign stron. Sprawdź naszą ofertę!"
				keywords="tworzenie stron internetowych, projektowanie stron internetowych,tworzenie stron internetowych Śląsk, landing page, strona firmowa, web design, SEO, nowoczesne strony internetowe, responsywne strony, uWebs, strona wizytówka, kto robi strony internetowe, firma robiąca strony internetowe, kto zrobi stronę internetową w okolicy, robienie stron internetowych, strona internetowa dla mojej firmy, potrzebuję strony internetowej dla firmy, prosta strona internetowa, modernizacja strony www, moja strona jest stara"
				canonical="https://uwebs.pl/uslugi"
			/>
			<Navigation />

			<main className="pt-32 pb-20 min-h-screen bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="mb-20">
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Usługi</p>
						<h1 className="font-heading font-bold text-hero-mobile md:text-hero text-primary mb-6">
							Czym Się <span className="text-secondary">Zajmujemy</span>
						</h1>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl">
							Od landing pages po kompleksowe platformy e-commerce - oferujemy pełen zakres usług web design.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{services.map((service, index) => {
							const IconComponent = service.icon as React.ComponentType<{ className?: string }>
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group bg-card p-10 border-4 border-primary hover:border-accent hover:shadow-lift-lg transition-all duration-300">
									<IconComponent className="w-16 h-16 text-secondary mb-6 group-hover:scale-110 transition-transform" />
									<h3 className="font-heading font-bold text-h3 text-primary mb-4">{service.title}</h3>
									<p className="font-body text-body text-muted-foreground mb-6">{service.description}</p>
									<ul className="space-y-3 mb-6">
										{service.features.map((feature, i) => (
											<li key={i} className="flex items-center gap-3 font-body text-body-sm text-foreground">
												<div className="w-1.5 h-1.5 bg-accent" />
												{feature}
											</li>
										))}
									</ul>
									<Link
										to={service.link}
										className="inline-flex items-center gap-2 text-secondary font-body font-medium hover:underline group-hover:gap-3 transition-all">
										Dowiedz się więcej
										<ArrowRight className="w-4 h-4" />
									</Link>
								</motion.div>
							)
						})}
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export default Services
