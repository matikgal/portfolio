import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
	return (
		<footer className="bg-primary text-primary-foreground">
			<div className="container mx-auto px-6 pt-20 pb-10">
				{/* Newsletter Section */}
				{/* <div className="max-w-2xl mx-auto text-center mb-20">
					<h3 className="font-heading text-h3 md:text-h2 mb-4">Bądź na bieżąco</h3>
					<p className="text-body text-primary-foreground/70 mb-8">Otrzymuj tips, inspiracje i case studies</p>
					<div className="flex gap-4 max-w-md mx-auto">
						<Input
							type="email"
							placeholder="Twój email"
							className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
						/>
						<Button
							variant="secondary"
							className="h-12 font-body font-medium tracking-wider uppercase whitespace-nowrap">
							Zapisz się
						</Button>
					</div>
					<p className="text-sm text-primary-foreground/50 mt-4">Nie spamujemy. Możesz się wypisać w każdej chwili.</p>
				</div> */}

				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* About Column */}
					<div>
						<Link to="/" className="inline-flex items-center space-x-3 mb-4">
							<span className="font-heading font-bold text-2xl">
								u<span className="text-secondary">Webs</span>
							</span>
						</Link>
						<p className="text-body-sm text-primary-foreground/70 mb-4 max-w-[280px]">
							Premium Web Design Studio specjalizujące się w tworzeniu landing pages i stron wielostronicowych.
						</p>
					</div>

					{/* Services Column */}
					<div>
						<h4 className="font-heading font-bold text-lg mb-4 uppercase tracking-wide">Usługi</h4>
						<ul className="space-y-3">
							{[
								{ name: 'Landing Pages', link: '/uslugi/landing-pages' },
								{ name: 'Strony Firmowe', link: '/uslugi/strony-firmowe' },
								{ name: 'E-commerce', link: '/uslugi/sklepy-internetowe' },
								{ name: 'Redesign', link: '/uslugi/redesign' },
								{ name: 'UX/UI Design', link: '/uslugi/ux-ui-design' },
								{ name: 'Konsulting', link: '/kontakt' },
							].map(service => (
								<li key={service.name}>
									<Link
										to={service.link}
										className="text-body-sm text-primary-foreground/70 hover:text-secondary transition-colors">
										{service.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources Column */}
					<div>
						<h4 className="font-heading font-bold text-lg mb-4 uppercase tracking-wide">Zasoby</h4>
						<ul className="space-y-3">
							<li>
								<Link
									to="/portfolio"
									className="text-body-sm text-primary-foreground/70 hover:text-secondary transition-colors">
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									to="/cennik"
									className="text-body-sm text-primary-foreground/70 hover:text-secondary transition-colors">
									Cennik
								</Link>
							</li>
							<li>
								<Link
									to="/o-nas"
									className="text-body-sm text-primary-foreground/70 hover:text-secondary transition-colors">
									O nas
								</Link>
							</li>
							<li>
								<Link
									to="/kontakt"
									className="text-body-sm text-primary-foreground/70 hover:text-secondary transition-colors">
									Kontakt
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Column */}
					<div>
						<h4 className="font-heading font-bold text-lg mb-4 uppercase tracking-wide">Kontakt</h4>
						<ul className="space-y-3 mb-6">
							<li>
								<a
									href="mailto:kontakt@uwebs.pl"
									className="text-body-sm text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2">
									<Mail size={18} />
									kontakt@uwebs.pl
								</a>
							</li>
							{/* <li>
								<a
									href="tel:+48123456789"
									className="text-body-sm text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2">
									<Phone size={18} />
									+48 123 456 789
								</a>
							</li>
							<li className="text-body-sm text-primary-foreground/70">
								ul. Przykładowa 123
								<br />
								00-001 Warszawa, Polska
							</li> */}
						</ul>

						<div className="flex gap-4">
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary-foreground/70 hover:text-secondary transition-colors">
								<Linkedin size={28} />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary-foreground/70 hover:text-secondary transition-colors">
								<Instagram size={28} />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-primary-foreground/10 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm text-primary-foreground/50">
						<p>© {new Date().getFullYear()} uWebs. All rights reserved.</p>
						<div className="flex gap-6">
							<Link to="/polityka-prywatnosci" className="hover:text-secondary transition-colors">
								Polityka Prywatności
							</Link>
							<Link to="/regulamin" className="hover:text-secondary transition-colors">
								Regulamin
							</Link>
							<Link to="/polityka-cookies" className="hover:text-secondary transition-colors">
								Cookies
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
