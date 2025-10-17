import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'pl' | 'en'

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations object
const translations = {
	pl: {
		// Navigation
		'nav.home': 'Home',
		'nav.portfolio': 'Portfolio',
		'nav.services': 'Usługi',
		'nav.pricing': 'Oferta',
		'nav.about': 'O nas',
		'nav.contact': 'Kontakt',
		'nav.consultation': 'Darmowa Konsultacja',
		'nav.book_consultation': 'Umów Konsultację',

		// Hero Section
		'hero.subtitle': 'Profesjonalne tworzenie stron internetowych',
		'hero.title': 'Tworzymy strony internetowe które',
		'hero.title_highlight': 'sprzedają.',
		'hero.description':
			'Tworzymy strony internetowe które rzeczywiście sprzedają. Nowoczesny design, SEO, responsywność. Konkurencyjne ceny - idealne dla startupów i małych firm.',
		'hero.cta_portfolio': 'Zobacz nasze realizacje',
		'hero.scroll_more': 'Zobacz więcej',

		// Trust Bar
		'trust.title': 'Zaufali nam',

		// Featured Work
		'featured.title': 'Wybrane Projekty',
		'featured.subtitle': 'Portfolio które mówi więcej niż tysiąc słów',
		'featured.view_all': 'Zobacz Wszystkie Projekty',

		// Services
		'services.title': 'Czym Się Zajmujemy',
		'services.landing_pages': 'Landing Pages',
		'services.landing_pages_desc': 'Strony które przyciągają i przekonują',
		'services.landing_pages_full':
			'Projektujemy landing pages, które nie tylko wyglądają świetnie, ale przede wszystkim sprzedają. Każda strona jest zoptymalizowana pod kątem konwersji.',
		'services.websites': 'Strony Firmowe',
		'services.websites_desc': 'Multi-page websites dla Twojego biznesu',
		'services.websites_full':
			'Kompleksowe strony internetowe, które budują wiarygodność Twojej marki. Od prezentacji firmy po zaawansowane funkcjonalności.',
		'services.ecommerce': 'E-commerce',
		'services.ecommerce_desc': 'Sklepy które sprzedają 24/7',
		'services.ecommerce_full':
			'Sklepy internetowe zoptymalizowane pod sprzedaż. Intuicyjny proces zakupowy i bezpieczne płatności.',
		'services.redesign': 'Redesign',
		'services.redesign_desc': 'Odświeżenie które robi różnicę',
		'services.redesign_full': 'Modernizujemy Twoją obecną stronę, poprawiając UX, wydajność i konwersje.',
		'services.ux_ui': 'UX/UI Design',
		'services.ux_ui_desc': 'Interfejsy które użytkownicy kochają',
		'services.ux_ui_full': 'Projektujemy interfejsy oparte na badaniach użytkowników i najlepszych praktykach UX.',
		'services.learn_more': 'Dowiedz się więcej',
		'services.back': 'Wróć',
		'services.what_you_get': 'Co otrzymasz:',
		'services.features': 'Funkcje:',
		'services.from': 'od',

		// Process
		'process.title': 'Jak Pracujemy',
		'process.subtitle': 'Prosty proces, spektakularne rezultaty',
		'process.discovery': 'Discovery',
		'process.discovery_desc': 'Poznajemy Twój biznes, cele i grupę docelową',
		'process.design': 'Design',
		'process.design_desc': 'Tworzymy wireframes, mockupy i prototypy',
		'process.development': 'Development',
		'process.development_desc': 'Kodujemy responsywną, zoptymalizowaną stronę',
		'process.launch': 'Launch',
		'process.launch_desc': 'Testujemy, wdrażamy i przekazujemy gotowy produkt',

		// CTA
		'cta.title': 'Gotowy Na Swoją Wymarzoną Stronę?',
		'cta.subtitle': 'Umów bezpłatną konsultację i poznaj nasze podejście',
		'cta.response_time': 'Odpowiedź w 24h',
		'cta.email_text': 'lub napisz:',

		// Footer
		'footer.newsletter_title': 'Bądź na bieżąco',
		'footer.newsletter_subtitle': 'Otrzymuj tips, inspiracje i case studies',
		'footer.newsletter_placeholder': 'Twój email',
		'footer.newsletter_button': 'Zapisz się',
		'footer.newsletter_disclaimer': 'Nie spamujemy. Możesz się wypisać w każdej chwili.',
		'footer.services_title': 'Usługi',
		'footer.resources_title': 'Zasoby',
		'footer.contact_title': 'Kontakt',
		'footer.privacy_policy': 'Polityka Prywatności',
		'footer.terms': 'Regulamin',
		'footer.cookies': 'Cookies',
		'footer.rights': 'All rights reserved.',

		// Contact Page
		'contact.subtitle': 'Kontakt',
		'contact.title': 'Porozmawiajmy O',
		'contact.title_highlight': 'Twoim Projekcie',
		'contact.description':
			'Gotowy do stworzenia czegoś wyjątkowego? Wypełnij formularz lub skontaktuj się bezpośrednio.',
		'contact.first_name': 'Imię',
		'contact.last_name': 'Nazwisko',
		'contact.email': 'Email',
		'contact.phone': 'Telefon',
		'contact.project_type': 'Rodzaj projektu',
		'contact.budget': 'Budżet',
		'contact.message': 'Wiadomość',
		'contact.message_placeholder': 'Opowiedz nam o swoim projekcie...',
		'contact.send_button': 'Wyślij Wiadomość',
		'contact.sending': 'Wysyłanie...',
		'contact.success': 'Wiadomość została wysłana! Odpowiemy w ciągu 24 godzin.',
		'contact.error': 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub napisz bezpośrednio na hello@uwebs.pl',
		'contact.response_time': 'Odpowiadamy w ciągu 24 godzin',
		'contact.info_title': 'Informacje Kontaktowe',
		'contact.hours_title': 'Godziny Pracy',
		'contact.hours_weekdays': 'Poniedziałek - Piątek',
		'contact.hours_saturday': 'Sobota',
		'contact.hours_sunday': 'Niedziela',
		'contact.hours_closed': 'Zamknięte',

		// 404 Page
		'404.subtitle': 'Strona Nie Została Znaleziona',
		'404.title': 'Ups! Coś Poszło',
		'404.title_highlight': 'Nie Tak.',
		'404.description':
			'Strona, której szukasz, nie istnieje lub została przeniesiona. Sprawdź adres URL lub wróć na stronę główną.',
		'404.tried_path': 'Próbowałeś wejść na:',
		'404.home_button': 'Strona Główna',
		'404.back_button': 'Wróć',
		'404.suggestions_title': 'Może Szukasz Czegoś Innego?',
		'404.suggestions_subtitle': 'Sprawdź nasze najpopularniejsze strony',

		// Cookie Banner
		'cookies.title': 'Używamy cookies',
		'cookies.description':
			'Ta strona używa plików cookies aby zapewnić najlepsze doświadczenia. Kontynuując przeglądanie wyrażasz zgodę na ich użycie.',
		'cookies.learn_more': 'Dowiedz się więcej',
		'cookies.accept': 'Akceptuję',
		'cookies.reject': 'Odrzuć',
		'cookies.close': 'Zamknij',
	},
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.portfolio': 'Portfolio',
		'nav.services': 'Services',
		'nav.pricing': 'Pricing',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'nav.consultation': 'Free Consultation',
		'nav.book_consultation': 'Book Consultation',

		// Hero Section
		'hero.subtitle': 'We create websites that sell',
		'hero.title': 'Websites that look great and',
		'hero.title_highlight': 'convert.',
		'hero.description':
			'We design websites that attract customers and convince them to take action. Every element has a purpose - increasing your profits.',
		'hero.cta_portfolio': 'See our work',
		'hero.scroll_more': 'See more',

		// Trust Bar
		'trust.title': 'Trusted by',

		// Featured Work
		'featured.title': 'Featured Projects',
		'featured.subtitle': 'Portfolio that speaks louder than words',
		'featured.view_all': 'View All Projects',

		// Services
		'services.title': 'What We Do',
		'services.landing_pages': 'Landing Pages',
		'services.landing_pages_desc': 'Pages that convert from the first click',
		'services.landing_pages_full':
			'We design landing pages that not only look great, but most importantly sell. Every page is optimized for conversion.',
		'services.websites': 'Corporate Websites',
		'services.websites_desc': 'Multi-page websites for your business',
		'services.websites_full':
			'Comprehensive websites that build your brand credibility. From company presentation to advanced functionalities.',
		'services.ecommerce': 'E-commerce',
		'services.ecommerce_desc': 'Stores that sell 24/7',
		'services.ecommerce_full': 'Online stores optimized for sales. Intuitive checkout process and secure payments.',
		'services.redesign': 'Redesign',
		'services.redesign_desc': 'Refresh that makes a difference',
		'services.redesign_full': 'We modernize your existing website, improving UX, performance and conversions.',
		'services.ux_ui': 'UX/UI Design',
		'services.ux_ui_desc': 'Interfaces that users love',
		'services.ux_ui_full': 'We design interfaces based on user research and UX best practices.',
		'services.learn_more': 'Learn more',
		'services.back': 'Back',
		'services.what_you_get': 'What you get:',
		'services.features': 'Features:',
		'services.from': 'from',

		// Process
		'process.title': 'How We Work',
		'process.subtitle': 'Simple process, spectacular results',
		'process.discovery': 'Discovery',
		'process.discovery_desc': 'We learn about your business, goals and target audience',
		'process.design': 'Design',
		'process.design_desc': 'We create wireframes, mockups and prototypes',
		'process.development': 'Development',
		'process.development_desc': 'We code responsive, optimized website',
		'process.launch': 'Launch',
		'process.launch_desc': 'We test, deploy and deliver the finished product',

		// CTA
		'cta.title': 'Ready For Your Dream Website?',
		'cta.subtitle': 'Book a free consultation and learn our approach',
		'cta.response_time': 'Response within 24h',
		'cta.email_text': 'or write:',

		// Footer
		'footer.newsletter_title': 'Stay Updated',
		'footer.newsletter_subtitle': 'Get tips, inspiration and case studies',
		'footer.newsletter_placeholder': 'Your email',
		'footer.newsletter_button': 'Subscribe',
		'footer.newsletter_disclaimer': "We don't spam. You can unsubscribe at any time.",
		'footer.services_title': 'Services',
		'footer.resources_title': 'Resources',
		'footer.contact_title': 'Contact',
		'footer.privacy_policy': 'Privacy Policy',
		'footer.terms': 'Terms of Service',
		'footer.cookies': 'Cookies',
		'footer.rights': 'All rights reserved.',

		// Contact Page
		'contact.subtitle': 'Contact',
		'contact.title': "Let's Talk About",
		'contact.title_highlight': 'Your Project',
		'contact.description': 'Ready to create something exceptional? Fill out the form or contact us directly.',
		'contact.first_name': 'First Name',
		'contact.last_name': 'Last Name',
		'contact.email': 'Email',
		'contact.phone': 'Phone',
		'contact.project_type': 'Project Type',
		'contact.budget': 'Budget',
		'contact.message': 'Message',
		'contact.message_placeholder': 'Tell us about your project...',
		'contact.send_button': 'Send Message',
		'contact.sending': 'Sending...',
		'contact.success': "Message sent! We'll respond within 24 hours.",
		'contact.error': 'An error occurred while sending. Please try again or write directly to hello@uwebs.pl',
		'contact.response_time': 'We respond within 24 hours',
		'contact.info_title': 'Contact Information',
		'contact.hours_title': 'Business Hours',
		'contact.hours_weekdays': 'Monday - Friday',
		'contact.hours_saturday': 'Saturday',
		'contact.hours_sunday': 'Sunday',
		'contact.hours_closed': 'Closed',

		// 404 Page
		'404.subtitle': 'Page Not Found',
		'404.title': 'Oops! Something Went',
		'404.title_highlight': 'Wrong.',
		'404.description':
			"The page you're looking for doesn't exist or has been moved. Check the URL or return to the homepage.",
		'404.tried_path': 'You tried to access:',
		'404.home_button': 'Homepage',
		'404.back_button': 'Go Back',
		'404.suggestions_title': "Maybe You're Looking For Something Else?",
		'404.suggestions_subtitle': 'Check our most popular pages',

		// Cookie Banner
		'cookies.title': 'We use cookies',
		'cookies.description':
			'This website uses cookies to ensure the best experience. By continuing to browse you consent to their use.',
		'cookies.learn_more': 'Learn more',
		'cookies.accept': 'Accept',
		'cookies.reject': 'Reject',
		'cookies.close': 'Close',
	},
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [language, setLanguage] = useState<Language>(() => {
		// Get language from localStorage or default to 'pl'
		const saved = localStorage.getItem('uwebs-language')
		return (saved as Language) || 'pl'
	})

	useEffect(() => {
		// Save language to localStorage whenever it changes
		localStorage.setItem('uwebs-language', language)
	}, [language])

	const t = (key: string): string => {
		return translations[language][key as keyof (typeof translations)[typeof language]] || key
	}

	return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
