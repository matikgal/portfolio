import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const CookiePolicy = () => {
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
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Polityka Cookies</p>
						<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-6">
							Polityka <span className="text-secondary">Cookies</span>
						</h1>
						<p className="font-body text-body text-muted-foreground">
							Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
						</p>
					</motion.div>

					<motion.div {...fadeInUp} className="prose prose-lg max-w-none">
						<div className="space-y-8 text-foreground">
							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">1. Czym są pliki cookies?</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika podczas przeglądania stron
									internetowych. Zawierają informacje o aktywności użytkownika na stronie i pomagają w jej prawidłowym
									funkcjonowaniu.
								</p>
								<p className="font-body text-body text-muted-foreground">
									Cookies nie zawierają wirusów ani innych szkodliwych programów i nie mogą uszkodzić urządzenia
									użytkownika.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">2. Jakie cookies używamy?</h2>

								<div className="space-y-6">
									<div className="bg-card p-6 border-l-4 border-secondary">
										<h3 className="font-heading font-bold text-xl text-primary mb-3">Cookies niezbędne</h3>
										<p className="font-body text-body text-muted-foreground mb-3">
											Te pliki cookies są niezbędne do prawidłowego funkcjonowania strony internetowej i nie można ich
											wyłączyć.
										</p>
										<ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
											<li>Cookies sesji - umożliwiają poruszanie się po stronie</li>
											<li>Cookies bezpieczeństwa - chronią przed atakami</li>
											<li>Cookies preferencji - zapamiętują ustawienia użytkownika</li>
										</ul>
									</div>

									<div className="bg-card p-6 border-l-4 border-accent">
										<h3 className="font-heading font-bold text-xl text-primary mb-3">Cookies analityczne</h3>
										<p className="font-body text-body text-muted-foreground mb-3">
											Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony, dzięki czemu możemy ją
											ulepszać.
										</p>
										<ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
											<li>Google Analytics - analiza ruchu na stronie</li>
											<li>Cookies wydajności - mierzą szybkość ładowania</li>
											<li>Cookies statystyczne - zbierają anonimowe dane</li>
										</ul>
									</div>

									<div className="bg-card p-6 border-l-4 border-primary">
										<h3 className="font-heading font-bold text-xl text-primary mb-3">Cookies marketingowe</h3>
										<p className="font-body text-body text-muted-foreground mb-3">
											Służą do wyświetlania spersonalizowanych reklam i śledzenia skuteczności kampanii reklamowych.
										</p>
										<ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
											<li>Facebook Pixel - śledzenie konwersji</li>
											<li>Google Ads - remarketing</li>
											<li>Cookies personalizacji - dostosowują treści</li>
										</ul>
									</div>
								</div>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">3. Cele używania cookies</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Używamy plików cookies w następujących celach:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Zapewnienie prawidłowego funkcjonowania strony internetowej</li>
									<li>Zapamiętywanie preferencji i ustawień użytkownika</li>
									<li>Analiza ruchu i zachowań użytkowników na stronie</li>
									<li>Optymalizacja wydajności i szybkości ładowania</li>
									<li>Personalizacja treści i reklam</li>
									<li>Zapewnienie bezpieczeństwa i ochrony przed atakami</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">4. Czas przechowywania cookies</h2>
								<div className="space-y-4">
									<div>
										<h3 className="font-heading font-bold text-xl text-primary mb-2">Cookies sesyjne</h3>
										<p className="font-body text-body text-muted-foreground">
											Są usuwane automatycznie po zamknięciu przeglądarki internetowej.
										</p>
									</div>
									<div>
										<h3 className="font-heading font-bold text-xl text-primary mb-2">Cookies trwałe</h3>
										<p className="font-body text-body text-muted-foreground">
											Pozostają na urządzeniu przez określony czas (od kilku dni do kilku lat) lub do momentu ich
											ręcznego usunięcia.
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">5. Zarządzanie cookies</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Użytkownik ma pełną kontrolę nad plikami cookies i może:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Wyrazić zgodę na używanie wszystkich cookies</li>
									<li>Wybrać tylko określone kategorie cookies</li>
									<li>Odrzucić wszystkie cookies (może wpłynąć na funkcjonalność strony)</li>
									<li>Zmienić ustawienia w dowolnym momencie</li>
									<li>Usunąć zapisane cookies z przeglądarki</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">
									6. Jak wyłączyć cookies w przeglądarce?
								</h2>
								<div className="space-y-4">
									<div className="bg-muted p-4 rounded">
										<h3 className="font-heading font-bold text-lg text-primary mb-2">Google Chrome</h3>
										<p className="font-body text-body-sm text-muted-foreground">
											Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn
										</p>
									</div>
									<div className="bg-muted p-4 rounded">
										<h3 className="font-heading font-bold text-lg text-primary mb-2">Mozilla Firefox</h3>
										<p className="font-body text-body-sm text-muted-foreground">
											Opcje → Prywatność i bezpieczeństwo → Pliki cookie i dane stron
										</p>
									</div>
									<div className="bg-muted p-4 rounded">
										<h3 className="font-heading font-bold text-lg text-primary mb-2">Safari</h3>
										<p className="font-body text-body-sm text-muted-foreground">
											Preferencje → Prywatność → Pliki cookie i dane witryn internetowych
										</p>
									</div>
									<div className="bg-muted p-4 rounded">
										<h3 className="font-heading font-bold text-lg text-primary mb-2">Microsoft Edge</h3>
										<p className="font-body text-body-sm text-muted-foreground">
											Ustawienia → Pliki cookie i uprawnienia witryny → Pliki cookie i dane witryn
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">7. Cookies stron trzecich</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Nasza strona może zawierać treści pochodzące od zewnętrznych dostawców, którzy również mogą używać
									własnych plików cookies:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>
										<strong>Google Analytics</strong> - analiza ruchu na stronie
									</li>
									<li>
										<strong>Google Fonts</strong> - czcionki internetowe
									</li>
									<li>
										<strong>YouTube</strong> - odtwarzacze wideo
									</li>
									<li>
										<strong>Social Media</strong> - przyciski udostępniania
									</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">8. Wpływ na funkcjonalność</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Wyłączenie niektórych kategorii cookies może wpłynąć na funkcjonalność strony:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Brak cookies niezbędnych - strona może nie działać prawidłowo</li>
									<li>Brak cookies analitycznych - nie będziemy mogli ulepszać strony</li>
									<li>Brak cookies marketingowych - reklamy mogą być mniej trafne</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">9. Zmiany w polityce cookies</h2>
								<p className="font-body text-body text-muted-foreground">
									Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies. O wszelkich istotnych
									zmianach poinformujemy użytkowników poprzez odpowiedni komunikat na stronie internetowej.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">10. Kontakt</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									W przypadku pytań dotyczących naszej Polityki Cookies, prosimy o kontakt:
								</p>
								<div className="bg-card p-6 border-4 border-primary">
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

export default CookiePolicy
