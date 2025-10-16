import React, { createContext, useContext, useState, useEffect } from 'react'

interface CookieConsentContextType {
	hasConsent: boolean | null // null = nie wybrano, true = akceptacja, false = odrzucenie
	acceptCookies: () => void
	rejectCookies: () => void
	resetConsent: () => void
	canUseAnalytics: boolean
	canUseMarketing: boolean
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [hasConsent, setHasConsent] = useState<boolean | null>(null)

	useEffect(() => {
		// Sprawdź zapisaną zgodę przy ładowaniu
		const savedConsent = localStorage.getItem('cookie-consent')
		if (savedConsent === 'accepted') {
			setHasConsent(true)
		} else if (savedConsent === 'rejected') {
			setHasConsent(false)
		}
		// Jeśli brak zapisanej zgody, pozostaw null (pokaże się banner)
	}, [])

	const acceptCookies = () => {
		localStorage.setItem('cookie-consent', 'accepted')
		setHasConsent(true)

		// Tutaj można dodać ładowanie skryptów analitycznych
		loadAnalyticsScripts()
	}

	const rejectCookies = () => {
		localStorage.setItem('cookie-consent', 'rejected')
		setHasConsent(false)

		// Usuń istniejące cookies analityczne/marketingowe
		clearTrackingCookies()
	}

	const resetConsent = () => {
		localStorage.removeItem('cookie-consent')
		setHasConsent(null)
		clearTrackingCookies()
	}

	// Funkcja do ładowania skryptów analitycznych po zgodzie
	const loadAnalyticsScripts = () => {
		// Google Analytics
		if (typeof window !== 'undefined' && !window.gtag) {
			const script = document.createElement('script')
			script.async = true
			script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
			document.head.appendChild(script)

			script.onload = () => {
				window.dataLayer = window.dataLayer || []
				function gtag(...args: any[]) {
					window.dataLayer.push(args)
				}
				window.gtag = gtag
				gtag('js', new Date())
				gtag('config', 'GA_MEASUREMENT_ID', {
					anonymize_ip: true,
					cookie_flags: 'SameSite=None;Secure',
				})
			}
		}
	}

	// Funkcja do usuwania cookies śledzących
	const clearTrackingCookies = () => {
		// Lista cookies do usunięcia
		const cookiesToClear = [
			'_ga',
			'_ga_*',
			'_gid',
			'_gat',
			'_gat_*',
			'_fbp',
			'_fbc',
			'__utma',
			'__utmb',
			'__utmc',
			'__utmt',
			'__utmz',
		]

		cookiesToClear.forEach(cookieName => {
			// Usuń z różnych domen i ścieżek
			const domains = ['', '.uwebs.pl', '.www.uwebs.pl']
			const paths = ['/', '/uslugi', '/portfolio', '/kontakt']

			domains.forEach(domain => {
				paths.forEach(path => {
					document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}`
				})
			})
		})
	}

	const canUseAnalytics = hasConsent === true
	const canUseMarketing = hasConsent === true

	return (
		<CookieConsentContext.Provider
			value={{
				hasConsent,
				acceptCookies,
				rejectCookies,
				resetConsent,
				canUseAnalytics,
				canUseMarketing,
			}}>
			{children}
		</CookieConsentContext.Provider>
	)
}

export const useCookieConsent = () => {
	const context = useContext(CookieConsentContext)
	if (context === undefined) {
		throw new Error('useCookieConsent must be used within a CookieConsentProvider')
	}
	return context
}

// Rozszerzenie window dla TypeScript
declare global {
	interface Window {
		gtag: (...args: any[]) => void
		dataLayer: any[]
	}
}
