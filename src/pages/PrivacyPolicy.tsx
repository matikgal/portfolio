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
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">Administrator danych</h2>
								<p className="font-body text-body text-muted-foreground">
									Administratorem danych osobowych jest Administrator strony. Kontakt w sprawach dotyczących ochrony
									danych osobowych możliwy jest za pośrednictwem adresu e-mail dostępnego w zakładce „Kontakt" na
									stronie.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">Zakres przetwarzanych danych</h2>
								<p className="font-body text-body text-muted-foreground">
									Za pośrednictwem formularza kontaktowego mogą być przetwarzane następujące dane: imię lub pseudonim,
									adres e-mail, treść wiadomości. Podanie danych jest dobrowolne, ale niezbędne do uzyskania odpowiedzi.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">
									Cel i podstawa przetwarzania danych
								</h2>
								<p className="font-body text-body text-muted-foreground">
									Dane osobowe są przetwarzane w celu: udzielenia odpowiedzi na przesłane zapytanie za pośrednictwem
									formularza kontaktowego (art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora).
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">Okres przechowywania danych</h2>
								<p className="font-body text-body text-muted-foreground">
									Dane osobowe przechowywane są przez okres niezbędny do prowadzenia korespondencji i udzielenia
									odpowiedzi, nie dłużej niż 6 miesięcy od ostatniego kontaktu.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">Odbiorcy danych</h2>
								<p className="font-body text-body text-muted-foreground">
									Dane mogą być przekazywane podmiotom świadczącym usługi hostingowe i pocztowe wyłącznie w zakresie
									niezbędnym do obsługi formularza kontaktowego. Dane nie są przekazywane do państw trzecich ani
									organizacji międzynarodowych.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">Prawa osób, których dane dotyczą</h2>
								<p className="font-body text-body text-muted-foreground mb-4">
									Osoby, których dane dotyczą, mają prawo do:
								</p>
								<ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
									<li>dostępu do swoich danych</li>
									<li>sprostowania</li>
									<li>usunięcia lub ograniczenia przetwarzania</li>
									<li>wniesienia sprzeciwu wobec przetwarzania</li>
									<li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
								</ul>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">Pliki cookies</h2>
								<p className="font-body text-body text-muted-foreground">
									Strona może wykorzystywać pliki cookies niezbędne do jej prawidłowego działania. Jeśli stosowane są
									inne pliki cookies (np. analityczne lub marketingowe), użytkownik zostanie o tym poinformowany i
									będzie mógł wyrazić zgodę zgodnie z obowiązującymi przepisami.
								</p>
							</section>

							<section>
								<h2 className="font-heading font-bold text-h3 text-primary mb-4">Zmiany polityki prywatności</h2>
								<p className="font-body text-body text-muted-foreground">
									Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności w
									przypadku zmiany przepisów prawa lub funkcjonalności strony. Aktualna wersja dokumentu jest
									publikowana na tej podstronie.
								</p>
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
