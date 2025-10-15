import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const location = useLocation()
	const { t } = useLanguage()

	// Handle logo click - scroll to top if on homepage, otherwise navigate
	const handleLogoClick = (e: React.MouseEvent) => {
		if (location.pathname === '/') {
			e.preventDefault()
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
		// If not on homepage, let the Link component handle navigation normally
	}

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			setIsScrolled(currentScrollY > 50)

			if (currentScrollY < lastScrollY || currentScrollY < 200) {
				setIsVisible(true)
			} else if (currentScrollY > lastScrollY && currentScrollY > 200) {
				setIsVisible(false)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [mobileMenuOpen])

	const navLinks = [
		{ name: t('nav.home'), path: '/' },
		{ name: t('nav.portfolio'), path: '/portfolio' },
		{ name: t('nav.services'), path: '/uslugi' },
		{ name: t('nav.pricing'), path: '/cennik' },
		{ name: t('nav.about'), path: '/o-nas' },
		{ name: t('nav.contact'), path: '/kontakt' },
	]

	return (
		<>
			<motion.nav
				initial={{ y: 0 }}
				animate={{ y: isVisible ? 0 : -100 }}
				transition={{ duration: 0.3 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					mobileMenuOpen ? 'bg-primary' : isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
				}`}>
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link to="/" className="flex items-center space-x-3" onClick={handleLogoClick}>
							<span
								className={`font-heading font-bold text-2xl transition-colors ${
									mobileMenuOpen ? 'text-primary-foreground' : 'text-primary'
								}`}>
								u<span className="text-secondary">Webs</span>
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-10">
							{navLinks.map(link => (
								<Link
									key={link.path}
									to={link.path}
									className={`font-body font-medium text-[15px] relative group transition-colors ${
										location.pathname === link.path ? 'text-secondary' : 'text-foreground hover:text-secondary'
									}`}>
									{link.name}
									<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
								</Link>
							))}
						</div>

						{/* Language Switcher & CTA Button */}
						<div className="hidden lg:flex items-center gap-4">
							{/* <LanguageSwitcher /> */}
							<Link to="/kontakt#formularz-kontaktowy">
								<Button variant="secondary" className="group font-body font-medium text-sm tracking-wider uppercase">
									{t('nav.consultation')}
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className={`lg:hidden p-2 transition-colors z-50 relative ${
								mobileMenuOpen ? 'text-primary-foreground hover:text-secondary' : 'text-foreground hover:text-secondary'
							}`}>
							{mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', duration: 0.3 }}
						className="fixed inset-0 z-40 lg:hidden">
						<div className="absolute inset-0 bg-primary">
							<div className="flex flex-col h-full">
								<div className="flex items-center justify-between p-6 mt-20"></div>

								<nav className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
									{navLinks.map((link, index) => (
										<motion.div
											key={link.path}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}>
											<Link
												to={link.path}
												onClick={() => setMobileMenuOpen(false)}
												className="font-heading text-3xl text-primary-foreground hover:text-secondary transition-colors">
												{link.name}
											</Link>
										</motion.div>
									))}

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: navLinks.length * 0.1 }}
										className="pt-8 flex flex-col items-center gap-4">
										{/* <LanguageSwitcher /> */}
										<Link to="/kontakt#formularz-kontaktowy" onClick={() => setMobileMenuOpen(false)}>
											<Button variant="secondary" size="lg" className="font-body font-medium tracking-wider uppercase">
												{t('nav.consultation')}
												<ArrowRight className="ml-2 h-5 w-5" />
											</Button>
										</Link>
									</motion.div>
								</nav>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Navigation
