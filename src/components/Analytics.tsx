import { useEffect } from 'react'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

const Analytics = () => {
	const { canUseAnalytics } = useCookieConsent()

	useEffect(() => {
		// Ładuj skrypty analityczne tylko po zgodzie
		if (canUseAnalytics) {
			// Tutaj można dodać Google Analytics, Facebook Pixel itp.
			console.log('✅ Analytics enabled - user consented to cookies')

			// Przykład: Google Analytics (zastąp GA_MEASUREMENT_ID swoim ID)
			// loadGoogleAnalytics('GA_MEASUREMENT_ID')
		} else {
			console.log('❌ Analytics disabled - user rejected cookies or no consent given')
		}
	}, [canUseAnalytics])

	// Funkcja do ładowania Google Analytics
	const loadGoogleAnalytics = (measurementId: string) => {
		if (typeof window !== 'undefined' && !window.gtag) {
			// Ładuj gtag script
			const script = document.createElement('script')
			script.async = true
			script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
			document.head.appendChild(script)

			script.onload = () => {
				window.dataLayer = window.dataLayer || []
				function gtag(...args: any[]) {
					window.dataLayer.push(args)
				}
				window.gtag = gtag

				gtag('js', new Date())
				gtag('config', measurementId, {
					anonymize_ip: true,
					cookie_flags: 'SameSite=None;Secure',
					// Dodatkowe ustawienia prywatności
					allow_google_signals: false,
					allow_ad_personalization_signals: false,
				})

				console.log(`Google Analytics loaded with ID: ${measurementId}`)
			}
		}
	}

	// Ten komponent nie renderuje nic wizualnego
	return null
}

export default Analytics
