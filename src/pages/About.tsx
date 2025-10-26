import { motion } from 'framer-motion'
import { Code, Palette, Rocket, Heart, Target, Clock, Lightbulb, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'

const About = () => {
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

	const values = [
		{
			icon: Heart,
			title: 'Pasja',
			description:
				'Każdy projekt robimy z sercem. To nie tylko praca - to nasza pasja do tworzenia czegoś wyjątkowego.',
		},
		{
			icon: Target,
			title: 'Precyzja',
			description: 'Każdy piksel ma znaczenie. Dbamy o najmniejsze detale, bo to one tworzą wielkie wrażenia.',
		},
		{
			icon: Lightbulb,
			title: 'Kreatywność',
			description: 'Myślimy poza schematami. Każde rozwiązanie jest unikalne, dopasowane do Twojego biznesu.',
		},
	]

	const techStack = [
		{ name: 'React', color: 'bg-blue-500' },
		{ name: 'Vue.js', color: 'bg-green-500' },
		{ name: 'Next.js', color: 'bg-gray-800' },
		{ name: 'TypeScript', color: 'bg-blue-600' },
		{ name: 'Tailwind', color: 'bg-cyan-500' },
		{ name: 'Figma', color: 'bg-purple-500' },
	]

	return (
		<>
			<SEOHead
				title="uWebs - O nas"
				description="Poznaj zespół uWebs z Bielska-Białej. Młodzi, kreatywni specjaliści od tworzenia stron internetowych. Świeże spojrzenie na web design bez ograniczeń starych nawyków."
				keywords="tworzenie stron internetowych, projektowanie stron internetowych,tworzenie stron internetowych Śląsk, landing page, strona firmowa, web design, SEO, nowoczesne strony internetowe, responsywne strony, uWebs, strona wizytówka, kto robi strony internetowe, firma robiąca strony internetowe, kto zrobi stronę internetową w okolicy, robienie stron internetowych, strona internetowa dla mojej firmy, potrzebuję strony internetowej dla firmy, prosta strona internetowa, modernizacja strony www, moja strona jest stara"
				canonical="https://uwebs.pl/o-nas"
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
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">O nas</p>
						<h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-hero text-primary mb-6 px-4">
							<span className="block sm:inline">Tworzymy</span>{' '}
							<span className="text-secondary block sm:inline">Cyfrowe Doświadczenia</span>
						</h1>
						<p className="font-body text-body-lg text-muted-foreground max-w-3xl mx-auto">
							Jesteśmy małym, ale ambitnym zespołem z Bielska-Białej, który wierzy, że każda strona internetowa powinna
							opowiadać historię i osiągać cele biznesowe. Nie robimy stron "na sztuki" - każdy projekt to strategiczne
							narzędzie sukcesu.
						</p>
					</motion.div>

					{/* Story Section */}
					<div className="grid lg:grid-cols-2 gap-16 mb-32">
						{/* Creative Visual Element instead of image */}
						<motion.div {...fadeInUp}>
							<div className="relative">
								<div className="aspect-[4/3] bg-card border-4 border-primary p-8 flex flex-col justify-center items-center text-center">
									<Code className="w-16 h-16 text-secondary mb-4" />
									<h3 className="font-heading font-bold text-h3-mobile text-primary mb-4">Od Pomysłu do Realizacji</h3>
									<p className="font-body text-body-sm text-muted-foreground mb-6">
										Każdy projekt zaczyna się od dobrej rozmowy o Twoich celach i wizji
									</p>
									<div className="flex gap-4">
										<div className="w-12 h-12 bg-secondary flex items-center justify-center">
											<Palette className="w-6 h-6 text-secondary-foreground" />
										</div>
										<div className="w-12 h-12 bg-accent flex items-center justify-center">
											<Code className="w-6 h-6 text-accent-foreground" />
										</div>
										<div className="w-12 h-12 bg-primary flex items-center justify-center">
											<Rocket className="w-6 h-6 text-primary-foreground" />
										</div>
									</div>
								</div>
								{/* Floating elements */}
								<motion.div
									className="absolute -top-4 -right-4 w-8 h-8 bg-secondary"
									animate={{ y: [0, -10, 0] }}
									transition={{ duration: 3, repeat: Infinity }}
								/>
								<motion.div
									className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent"
									animate={{ y: [0, 10, 0] }}
									transition={{ duration: 4, repeat: Infinity }}
								/>
							</div>
						</motion.div>

						<motion.div {...fadeInUp} className="flex flex-col justify-center">
							<h2 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-6">Nasza Historia</h2>
							<p className="font-body text-body text-muted-foreground mb-6">
								Zaczęliśmy od prostej obserwacji: w internecie jest za dużo nudnych, szablonowych stron. Każda firma
								zasługuje na coś więcej niż kolejny szablon z darmowego generatora.
							</p>
							<p className="font-body text-body text-muted-foreground mb-6">
								Jako młody zespół z Bielska-Białej, <strong>nie mamy bagażu starych nawyków</strong>. To pozwala nam
								myśleć świeżo i tworzyć strony, które naprawdę wyróżniają się z tłumu.
							</p>
							<div className="flex items-center gap-4 p-4 bg-card border-l-4 border-secondary">
								<Target className="w-8 h-8 text-secondary flex-shrink-0" />
								<p className="font-body text-body-sm text-muted-foreground italic">
									"Każda strona powinna opowiadać historię. Nasza misja to sprawić, żeby Twoja historia była
									niezapomniana." - Zespół uWebs
								</p>
							</div>
						</motion.div>
					</div>

					{/* Tech Stack */}
					<motion.div {...fadeInUp} className="mb-32">
						<h2 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-6 text-center">
							Nasze Narzędzia
						</h2>
						<p className="font-body text-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
							Używamy najnowszych technologii, ale nie dla pokazu - każde narzędzie ma swoje miejsce i cel.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							{techStack.map((tech, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className={`px-6 py-3 ${tech.color} text-white font-mono text-sm uppercase tracking-wider hover:scale-110 transition-transform cursor-pointer`}>
									{tech.name}
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Values */}
					<motion.div {...fadeInUp} className="mb-16">
						<h2 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-6 text-center">
							Co Nas Napędza
						</h2>
						<p className="font-body text-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
							To nie tylko wartości na papierze - to sposób, w jaki pracujemy każdego dnia.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 mb-32">
						{values.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="text-center p-10 bg-card border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300 group">
								<value.icon className="w-16 h-16 text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform" />
								<h3 className="font-heading font-bold text-h3-mobile text-primary mb-4">{value.title}</h3>
								<p className="font-body text-body-sm text-muted-foreground">{value.description}</p>
							</motion.div>
						))}
					</div>

					{/* Fun Facts */}
					<motion.div {...fadeInUp} className="bg-primary text-primary-foreground p-8 md:p-16 mb-16">
						<h2 className="font-heading font-bold text-h2-mobile md:text-h2 mb-8 text-center">Jak Pracujemy</h2>
						<div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
							<div className="flex items-start gap-4">
								<Star className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
								<div>
									<h4 className="font-heading font-bold text-lg mb-2">Świeże Spojrzenie</h4>
									<p className="text-primary-foreground/80 text-sm md:text-base">
										Młody zespół bez ograniczeń starych nawyków. Nowoczesne rozwiązania.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<Lightbulb className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
								<div>
									<h4 className="font-heading font-bold text-lg mb-2">Kreatywne Podejście</h4>
									<p className="text-primary-foreground/80 text-sm md:text-base">
										Niestandardowe rozwiązania i świeże pomysły dla każdego projektu.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
								<div>
									<h4 className="font-heading font-bold text-lg mb-2">Terminowość</h4>
									<p className="text-primary-foreground/80 text-sm md:text-base">
										Dotrzymujemy terminów. Twój czas jest cenny.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
								<div>
									<h4 className="font-heading font-bold text-lg mb-2">Długoterminowe Relacje</h4>
									<p className="text-primary-foreground/80 text-sm md:text-base">
										Budujemy partnerstwa oparte na zaufaniu i szacunku.
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* CTA */}
					<motion.div {...fadeInUp} className="bg-card border-4 border-primary p-16 text-center">
						<p className="font-mono text-sm uppercase tracking-wider mb-4 text-secondary">Gotowy na współpracę?</p>
						<h2 className="font-heading font-bold text-h2-mobile md:text-h2 mb-6 text-primary">
							Stwórzmy Coś <span className="text-secondary">Wyjątkowego</span>
						</h2>
						<p className="font-body text-body text-muted-foreground max-w-2xl mx-auto mb-8">
							Jeśli szukasz zespołu, który potraktuje Twój projekt z pełnym zaangażowaniem i profesjonalizmem,
							skontaktuj się z nami. Chętnie omówimy Twoje potrzeby.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-mono">
								kontakt@uwebs.pl
							</span>
							<span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-mono">Odpowiedź w 24h</span>
						</div>
					</motion.div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export default About
