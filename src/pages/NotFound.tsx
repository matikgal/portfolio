import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const NotFound = () => {
	const location = useLocation()

	useEffect(() => {
		console.error('404 Error: User attempted to access non-existent route:', location.pathname)
	}, [location.pathname])

	const fadeInUp = {
		initial: { opacity: 0, y: 40 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	}

	return (
		<>
			<Navigation />

			<section className="min-h-screen flex items-center relative overflow-hidden bg-background pt-20">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							className="mb-12">
							{/* Large 404 with geometric shapes */}
							<div className="relative mb-8">
								<span className="font-mono font-bold text-[200px] md:text-[300px] text-secondary/20 leading-none">
									404
								</span>
								<motion.div
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
									animate={{ rotate: 360 }}
									transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
									<AlertTriangle className="w-24 h-24 md:w-32 md:h-32 text-secondary" />
								</motion.div>
							</div>
						</motion.div>

						<motion.div {...fadeInUp}>
							<p className="font-mono font-bold text-sm text-secondary uppercase tracking-wider mb-6">
								Strona Nie Została Znaleziona
							</p>
							<h1 className="font-heading font-bold text-h1-mobile md:text-h1 text-primary mb-6">
								Ups! Coś Poszło <span className="text-secondary">Nie Tak.</span>
							</h1>
							<p className="font-body text-body-lg text-muted-foreground max-w-[540px] mx-auto mb-10">
								Strona, której szukasz, nie istnieje lub została przeniesiona. Sprawdź adres URL lub wróć na stronę
								główną.
							</p>

							{/* Current path display */}
							<div className="bg-card border-4 border-primary p-6 mb-10 max-w-md mx-auto">
								<p className="font-mono text-sm text-muted-foreground mb-2">Próbowałeś wejść na:</p>
								<p className="font-mono text-body font-bold text-primary break-all">{location.pathname}</p>
							</div>

							<div className="flex flex-wrap gap-4 justify-center">
								<Link to="/">
									<Button
										variant="secondary"
										size="lg"
										className="group font-body font-medium tracking-wider uppercase">
										<Home className="mr-2 h-5 w-5" />
										Strona Główna
									</Button>
								</Link>
								<Button
									variant="outline"
									size="lg"
									className="group font-body font-medium tracking-wider uppercase border-2"
									onClick={() => window.history.back()}>
									<ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
									Wróć
								</Button>
							</div>
						</motion.div>

						{/* Floating geometric elements */}
						<motion.div
							className="absolute top-20 left-10 w-16 h-16 bg-accent"
							animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
							transition={{ duration: 6, repeat: Infinity }}
						/>
						<motion.div
							className="absolute bottom-20 right-10 w-12 h-12 bg-secondary"
							animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
							transition={{ duration: 8, repeat: Infinity }}
						/>
						<motion.div
							className="absolute top-1/2 left-20 w-8 h-8 bg-primary"
							animate={{ x: [0, 30, 0] }}
							transition={{ duration: 4, repeat: Infinity }}
						/>
					</div>
				</div>
			</section>

			{/* Quick Navigation Section */}
			<section className="py-20 bg-card">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12">
						<h2 className="font-heading font-bold text-h2-mobile md:text-h2 text-primary mb-4">
							Może Szukasz Czegoś Innego?
						</h2>
						<p className="font-body text-body text-muted-foreground">Sprawdź nasze najpopularniejsze strony</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
						{[
							{ to: '/portfolio', icon: Search, title: 'Portfolio', desc: 'Zobacz nasze projekty' },
							{ to: '/uslugi', icon: AlertTriangle, title: 'Usługi', desc: 'Czym się zajmujemy' },
							{ to: '/oferta', icon: Home, title: 'Oferta', desc: 'Sprawdź naszą ofertę' },
							{ to: '/kontakt', icon: ArrowLeft, title: 'Kontakt', desc: 'Skontaktuj się z nami' },
						].map((item, i) => (
							<Link key={i} to={item.to}>
								<motion.div
									className="group bg-background p-6 border-4 border-primary hover:border-accent hover:shadow-lift transition-all duration-300 cursor-pointer text-center"
									whileHover={{ y: -5 }}>
									<item.icon className="w-12 h-12 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" />
									<h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
									<p className="text-body-sm text-muted-foreground">{item.desc}</p>
								</motion.div>
							</Link>
						))}
					</motion.div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default NotFound
