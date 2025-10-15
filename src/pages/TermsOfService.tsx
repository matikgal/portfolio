import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const TermsOfService = () => {
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
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Regulamin Usług</p>
						<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-6">
							Regulamin <span className="text-secondary">Usług</span>
						</h1>
						<p className="font-body text-body text-muted-foreground">
							Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
						</p>
					</motion.div>

					<motion.div {...fadeInUp} className="prose prose-lg max-w-none">
						<div className="space-y-8 text-foreground">
							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">1. Postanowienia ogólne</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Niniejszy Regulamin określa zasady korzystania z usług świadczonych przez uWebs z siedzibą w
									Warszawie, ul. Przykładowa 123, 00-001 Warszawa.
								</p>
								<p className="font-body text-body text-muted-foreground">
									Korzystanie z naszych usług oznacza akceptację postanowień niniejszego Regulaminu.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">2. Definicje</h2>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>
										<strong>Usługodawca</strong> - uWebs, świadczący usługi projektowania stron internetowych
									</li>
									<li>
										<strong>Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług
									</li>
									<li>
										<strong>Usługi</strong> - projektowanie stron internetowych, landing pages, sklepy internetowe,
										redesign
									</li>
									<li>
										<strong>Projekt</strong> - efekt pracy Usługodawcy zgodnie z zawartą umową
									</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">3. Zakres usług</h2>
								<p className="font-body text-body text-muted-foreground mb-4">uWebs świadczy następujące usługi:</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Projektowanie i tworzenie landing pages</li>
									<li>Projektowanie stron internetowych wielostronicowych</li>
									<li>Tworzenie sklepów internetowych (e-commerce)</li>
									<li>Redesign istniejących stron internetowych</li>
									<li>Projektowanie interfejsów użytkownika (UX/UI)</li>
									<li>Konsultacje w zakresie projektowania stron internetowych</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">4. Proces realizacji zamówienia</h2>
								<div className="space-y-4">
									<div>
										<h3 className="font-heading font-bold text-xl text-primary mb-2">4.1 Złożenie zapytania</h3>
										<p className="font-body text-body text-muted-foreground">
											Klient składa zapytanie poprzez formularz kontaktowy, email lub telefon, podając szczegóły
											projektu i swoje dane kontaktowe.
										</p>
									</div>
									<div>
										<h3 className="font-heading font-bold text-xl text-primary mb-2">4.2 Wycena i oferta</h3>
										<p className="font-body text-body text-muted-foreground">
											Na podstawie otrzymanych informacji przygotowujemy indywidualną ofertę zawierającą zakres prac,
											harmonogram i cenę.
										</p>
									</div>
									<div>
										<h3 className="font-heading font-bold text-xl text-primary mb-2">4.3 Zawarcie umowy</h3>
										<p className="font-body text-body text-muted-foreground">
											Po akceptacji oferty przez Klienta zawierana jest umowa określająca szczegółowe warunki
											współpracy.
										</p>
									</div>
								</div>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">5. Obowiązki stron</h2>
								<div className="space-y-4">
									<div>
										<h3 className="font-heading font-bold text-xl text-primary mb-2">5.1 Obowiązki Usługodawcy</h3>
										<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
											<li>Wykonanie usługi zgodnie z zawartą umową</li>
											<li>Dotrzymanie uzgodnionych terminów</li>
											<li>Zapewnienie profesjonalnej jakości usług</li>
											<li>Zachowanie poufności otrzymanych informacji</li>
										</ul>
									</div>
									<div>
										<h3 className="font-heading font-bold text-xl text-primary mb-2">5.2 Obowiązki Klienta</h3>
										<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
											<li>Dostarczenie niezbędnych materiałów i informacji</li>
											<li>Terminowe uiszczanie płatności</li>
											<li>Współpraca w procesie realizacji projektu</li>
											<li>Terminowe przekazywanie uwag i poprawek</li>
										</ul>
									</div>
								</div>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">6. Płatności</h2>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>Płatności realizowane są zgodnie z harmonogramem określonym w umowie</li>
									<li>Standardowo wymagana jest zaliczka w wysokości 50% wartości projektu</li>
									<li>Pozostała kwota płatna jest po zakończeniu prac</li>
									<li>Faktury wystawiane są z 7-dniowym terminem płatności</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">7. Prawa autorskie</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Prawa autorskie do wykonanych projektów przechodzą na Klienta po pełnym uregulowaniu należności. Do
									momentu zapłaty, wszystkie prawa pozostają przy Usługodawcy.
								</p>
								<p className="font-body text-body text-muted-foreground">
									Usługodawca zastrzega sobie prawo do wykorzystania wykonanych prac w celach promocyjnych (portfolio) z
									zachowaniem poufności danych Klienta.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">8. Reklamacje</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Reklamacje można składać w terminie 14 dni od odbioru projektu na adres: reklamacje@uwebs.pl
								</p>
								<p className="font-body text-body text-muted-foreground">
									Reklamacja powinna zawierać szczegółowy opis problemu oraz oczekiwany sposób jego rozwiązania.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">9. Odpowiedzialność</h2>
								<p className="font-body text-body text-muted-foreground">
									Odpowiedzialność Usługodawcy ograniczona jest do wysokości wynagrodzenia otrzymanego za realizację
									konkretnego projektu. Usługodawca nie ponosi odpowiedzialności za szkody pośrednie.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">10. Postanowienia końcowe</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu Cywilnego oraz
									inne właściwe przepisy prawa polskiego.
								</p>
								<p className="font-body text-body text-muted-foreground">
									Wszelkie spory rozstrzygane będą przez sąd właściwy dla siedziby Usługodawcy.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">11. Kontakt</h2>
								<div className="bg-card p-6 border-4 border-primary mt-4">
									<p className="font-body text-body text-foreground">
										<strong>uWebs</strong>
										<br />
										<strong>Email:</strong> hello@uwebs.pl
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

export default TermsOfService
