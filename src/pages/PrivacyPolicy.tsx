import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const PrivacyPolicy = () => {
	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.6 },
	}

	return (
		<>
			<Navigation />

			<main className="pt-32 pb-20 min-h-screen bg-background">
				<div className="container mx-auto px-6 max-w-4xl">
					<motion.div {...fadeInUp} className="mb-12 text-center">
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Polityka Prywatności</p>
						<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-6">
							Polityka <span className="text-secondary">Prywatności</span>
						</h1>
						<p className="font-body text-body text-muted-foreground">
							Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
						</p>
					</motion.div>

					<motion.div {...fadeInUp} className="prose prose-lg max-w-none">
						<div className="space-y-8 text-foreground">
							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">1. Informacje ogólne</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych
									przez Użytkowników w związku z korzystaniem z usług świadczonych drogą elektroniczną za pośrednictwem
									serwisu internetowego uWebs.
								</p>
								<p className="font-body text-body text-muted-foreground">
									Administratorem danych osobowych jest uWebs z siedzibą w Warszawie, ul. Przykładowa 123, 00-001
									Warszawa.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">2. Rodzaje zbieranych danych</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									W ramach świadczonych usług możemy zbierać następujące kategorie danych osobowych:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Dane identyfikacyjne (imię, nazwisko)</li>
									<li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
									<li>Dane dotyczące projektu (rodzaj usługi, budżet, opis projektu)</li>
									<li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">3. Cele przetwarzania danych</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Dane osobowe przetwarzamy w następujących celach:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Świadczenie usług projektowania stron internetowych</li>
									<li>Komunikacja z klientami i potencjalnymi klientami</li>
									<li>Przygotowywanie ofert handlowych</li>
									<li>Realizacja zawartych umów</li>
									<li>Marketing bezpośredni (za zgodą)</li>
									<li>Wypełnienie obowiązków prawnych</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">4. Podstawy prawne</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Przetwarzanie danych osobowych odbywa się na podstawie:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)</li>
									<li>Wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
									<li>Prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)</li>
									<li>Wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">5. Okres przechowywania danych</h2>
								<p className="font-body text-body text-muted-foreground">
									Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane, nie
									dłużej jednak niż przez okres wymagany przepisami prawa lub do momentu wycofania zgody przez osobę,
									której dane dotyczą.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">
									6. Prawa osób, których dane dotyczą
								</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Każda osoba, której dane przetwarzamy, ma prawo do:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Dostępu do swoich danych osobowych</li>
									<li>Sprostowania nieprawidłowych danych</li>
									<li>Usunięcia danych (prawo do bycia zapomnianym)</li>
									<li>Ograniczenia przetwarzania danych</li>
									<li>Przenoszenia danych</li>
									<li>Sprzeciwu wobec przetwarzania</li>
									<li>Wycofania zgody w dowolnym momencie</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">7. Cookies</h2>
								<p className="font-body text-body text-muted-foreground">
									Nasza strona internetowa używa plików cookies w celu zapewnienia prawidłowego funkcjonowania serwisu
									oraz analizy ruchu. Szczegółowe informacje znajdują się w naszej Polityce Cookies.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">8. Kontakt</h2>
								<p className="font-body text-body text-muted-foreground">
									W sprawach dotyczących ochrony danych osobowych można się z nami skontaktować:
								</p>
								<div className="bg-card p-6 border-4 border-primary mt-4">
									<p className="font-body text-body text-foreground">
										<strong>Email:</strong> privacy@uwebs.pl
										<br />
										<strong>Telefon:</strong> +48 123 456 789
										<br />
										<strong>Adres:</strong> ul. Przykładowa 123, 00-001 Warszawa
									</p>
								</div>
							</section>
						</div>
					</motion.div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export default PrivacyPolicy
