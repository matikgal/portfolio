import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SEOHead from '@/components/SEOHead'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
	const form = useRef<HTMLFormElement>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		projectType: 'Landing Page',
		budget: 'do 500 PLN',
		message: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const sendEmail = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		setStatus('idle')

		try {
			// Konfiguracja EmailJS - zastąp swoimi danymi
			const result = await emailjs.sendForm(
				'service_7w9cllo', // Zastąp swoim Service ID
				'template_s6y8jyn', // Zastąp swoim Template ID
				form.current!,
				'DnGzf0k481NKigQcd' // Zastąp swoim Public Key
			)

			console.log('Email sent successfully:', result.text)
			setStatus('success')
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				projectType: 'Landing Page',
				budget: 'do 500 PLN',
				message: '',
			})
		} catch (error) {
			console.error('Email send failed:', error)
			setStatus('error')
		} finally {
			setIsLoading(false)
		}
	}

	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.6 },
	}

	return (
		<>
			<SEOHead
				title="uWebs - Kontakt"
				description="Skontaktuj się z uWebs! Bezpłatna konsultacja, wycena w 24h. Tworzenie stron internetowych Bielsko-Biała. Email: hello@uwebs.pl. Odpowiadamy szybko!"
				keywords="uWebs kontakt, konsultacja, wycena strony internetowej, Bielsko-Biała, hello@uwebs.pl, tworzenie stron"
				canonical="https://uwebs.pl/kontakt"
			/>
			<Navigation />

			<main className="pt-32 pb-20 min-h-screen bg-background">
				<div className="container mx-auto px-6">
					<motion.div {...fadeInUp} className="mb-20 text-center">
						<p className="font-mono text-sm text-secondary uppercase tracking-wider mb-4">Kontakt</p>
						<h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-hero text-primary mb-6 px-4">
							<span className="block sm:inline">Porozmawiajmy O</span>{' '}
							<span className="text-secondary block sm:inline">Twoim Projekcie</span>
						</h1>
						<p className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto">
							Gotowy do stworzenia czegoś wyjątkowego? Wypełnij formularz lub skontaktuj się bezpośrednio.
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
						<motion.div {...fadeInUp} id="formularz-kontaktowy">
							<form ref={form} onSubmit={sendEmail} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block font-body font-medium text-sm mb-2 text-foreground">Imię *</label>
										<Input
											type="text"
											name="firstName"
											value={formData.firstName}
											onChange={handleInputChange}
											required
											className="border-2 border-primary focus:border-secondary"
										/>
									</div>
									<div>
										<label className="block font-body font-medium text-sm mb-2 text-foreground">Nazwisko *</label>
										<Input
											type="text"
											name="lastName"
											value={formData.lastName}
											onChange={handleInputChange}
											required
											className="border-2 border-primary focus:border-secondary"
										/>
									</div>
								</div>

								<div>
									<label className="block font-body font-medium text-sm mb-2 text-foreground">Email *</label>
									<Input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="border-2 border-primary focus:border-secondary"
									/>
								</div>

								<div>
									<label className="block font-body font-medium text-sm mb-2 text-foreground">Telefon</label>
									<Input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										className="border-2 border-primary focus:border-secondary"
									/>
								</div>

								<div>
									<label className="block font-body font-medium text-sm mb-2 text-foreground">Rodzaj projektu *</label>
									<select
										name="projectType"
										value={formData.projectType}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border-2 border-primary focus:border-secondary bg-background text-foreground font-body">
										<option>Landing Page</option>
										<option>Strona Firmowa</option>
										<option>Redesign</option>
										<option>UX/UI Design</option>
									</select>
								</div>

								<div>
									<label className="block font-body font-medium text-sm mb-2 text-foreground">Budżet</label>
									<select
										name="budget"
										value={formData.budget}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border-2 border-primary focus:border-secondary bg-background text-foreground font-body">
										<option>do 500 PLN</option>
										<option>500 - 1000 PLN</option>
										<option>1000 - 2000 PLN</option>
										<option>2000 - 3000 PLN</option>
										<option>powyżej 3000 PLN</option>
									</select>
								</div>

								<div>
									<label className="block font-body font-medium text-sm mb-2 text-foreground">Wiadomość *</label>
									<Textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="border-2 border-primary focus:border-secondary resize-none"
										placeholder="Opowiedz nam o swoim projekcie..."
									/>
								</div>

								<Button
									type="submit"
									variant="secondary"
									size="lg"
									disabled={isLoading}
									className="w-full font-body font-medium tracking-wider uppercase">
									{isLoading ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
								</Button>

								{/* Status Messages */}
								{status === 'success' && (
									<div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded border border-green-200">
										<CheckCircle className="w-5 h-5" />
										<p className="text-sm font-medium">Wiadomość została wysłana! Odpowiemy w ciągu 24 godzin.</p>
									</div>
								)}

								{status === 'error' && (
									<div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded border border-red-200">
										<AlertCircle className="w-5 h-5" />
										<p className="text-sm font-medium">
											Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub napisz bezpośrednio na kontakt@uwebs.pl
										</p>
									</div>
								)}

								{status === 'idle' && (
									<p className="text-sm text-muted-foreground text-center">Odpowiadamy w ciągu 24 godzin</p>
								)}
							</form>
						</motion.div>

						<motion.div {...fadeInUp} className="space-y-10">
							<div>
								<h2 className="font-heading font-bold text-h3 text-primary mb-8">Informacje Kontaktowe</h2>

								<div className="space-y-6">
									<div className="flex items-start gap-4">
										<div className="p-3 bg-secondary text-secondary-foreground">
											<Mail className="w-6 h-6" />
										</div>
										<div>
											<p className="font-body font-medium text-foreground mb-1">Email</p>
											<a
												href="mailto:hello@uwebs.pl"
												className="font-body text-body-sm text-muted-foreground hover:text-secondary transition-colors">
												kontakt@uwebs.pl
											</a>
										</div>
									</div>

									{/* <div className="flex items-start gap-4">
										<div className="p-3 bg-accent text-accent-foreground">
											<Phone className="w-6 h-6" />
										</div>
										<div>
											<p className="font-body font-medium text-foreground mb-1">Telefon</p>
											<a
												href="tel:+48123456789"
												className="font-body text-body-sm text-muted-foreground hover:text-secondary transition-colors">
												+48 123 456 789
											</a>
										</div>
									</div> */}

									{/* <div className="flex items-start gap-4">
										<div className="p-3 bg-primary text-primary-foreground">
											<MapPin className="w-6 h-6" />
										</div>
										<div>
											<p className="font-body font-medium text-foreground mb-1">Adres</p>
											<p className="font-body text-body-sm text-muted-foreground">
												ul. Przykładowa 123
												<br />
												00-001 Warszawa, Polska
											</p>
										</div>
									</div> */}
								</div>
							</div>

							<div className="bg-primary text-primary-foreground p-10 border-4 border-primary">
								<h3 className="font-heading font-bold text-h3-mobile mb-4">Godziny Pracy</h3>
								<div className="space-y-2 font-body text-body-sm">
									<p className="flex justify-between">
										<span>Poniedziałek - Piątek</span>
										<span className="text-secondary">9:00 - 18:00</span>
									</p>
									<p className="flex justify-between">
										<span>Sobota</span>
										<span className="text-secondary">Zamknięte</span>
									</p>
									<p className="flex justify-between">
										<span>Niedziela</span>
										<span className="text-secondary">Zamknięte</span>
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	)
}

export default Contact
