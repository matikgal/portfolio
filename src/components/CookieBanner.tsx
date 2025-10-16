import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

const CookieBanner = () => {
	const { t } = useLanguage()
	const { hasConsent, acceptCookies, rejectCookies } = useCookieConsent()
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Pokaż banner tylko jeśli użytkownik nie dokonał wyboru
		if (hasConsent === null) {
			const timer = setTimeout(() => {
				setIsVisible(true)
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [hasConsent])

	const handleAccept = () => {
		acceptCookies()
		setIsVisible(false)
	}

	const handleReject = () => {
		rejectCookies()
		setIsVisible(false)
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg border-t-4 border-secondary">
					<div className="container mx-auto px-6 py-4">
						<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
							<div className="flex items-start gap-3 flex-1">
								<Cookie className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
								<div>
									<h3 className="font-heading font-bold text-lg mb-2">{t('cookies.title')}</h3>
									<p className="text-sm text-primary-foreground/80 leading-relaxed">
										{t('cookies.description')}{' '}
										<Link to="/polityka-cookies" className="text-secondary hover:underline font-medium">
											{t('cookies.learn_more')}
										</Link>
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3 flex-shrink-0">
								<Button
									variant="outline"
									size="sm"
									onClick={handleReject}
									className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
									{t('cookies.reject')}
								</Button>
								<Button variant="secondary" size="sm" onClick={handleAccept} className="font-medium">
									{t('cookies.accept')}
								</Button>
								<button
									onClick={handleReject}
									className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
									aria-label={t('cookies.close')}>
									<X className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default CookieBanner
