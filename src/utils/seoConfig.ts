export const seoConfig = {
	defaultTitle: 'uWebs - Tworzenie Stron Internetowych Bielsko-Biała | Landing Pages Beskidy',
	defaultDescription:
		'Profesjonalne tworzenie stron internetowych Bielsko-Biała, Żywiec, Beskidy. Landing pages, strony firmowe, sklepy online. Konkurencyjne ceny od 3500 PLN. Bezpłatna konsultacja!',
	defaultKeywords:
		'tworzenie stron internetowych Bielsko-Biała, landing page Żywiec, strona firmowa Beskidy, sklep internetowy Śląsk, web design Bielsko, SEO Żywiec',
	siteUrl: 'https://uwebs.pl',
	siteName: 'uWebs',
	twitterHandle: '@uwebs_pl',

	pages: {
		home: {
			title: 'uWebs - Tworzenie Stron Internetowych Bielsko-Biała | Landing Pages Beskidy',
			description:
				'Profesjonalne tworzenie stron internetowych Bielsko-Biała, Żywiec, Beskidy. Landing pages, strony firmowe, sklepy online. Konkurencyjne ceny od 3500 PLN. Bezpłatna konsultacja!',
			keywords:
				'tworzenie stron internetowych Bielsko-Biała, landing page Żywiec, strona firmowa Beskidy, sklep internetowy Śląsk, web design Bielsko, SEO Żywiec, Polska',
		},
		services: {
			title: 'Usługi - Tworzenie Stron Internetowych | Landing Pages | E-commerce',
			description:
				'Pełna oferta usług web design: landing pages od 3500 PLN, strony firmowe od 8000 PLN, sklepy internetowe od 12000 PLN. UX/UI design, redesign stron.',
			keywords:
				'usługi web design, tworzenie stron internetowych, landing pages, strony firmowe, sklepy internetowe, e-commerce, UX/UI design, redesign',
		},
		landingPages: {
			title: 'Landing Pages - Strony Konwertujące od 3500 PLN',
			description:
				'Profesjonalne landing pages które sprzedają. Optymalizacja konwersji, A/B testing, responsywny design. Ceny od 3500 PLN. Zwiększ sprzedaż o 200-400%!',
			keywords:
				'landing page, strona sprzedażowa, optymalizacja konwersji, A/B testing, strona jednosekcyjna, marketing online, zwiększenie sprzedaży',
		},
		corporateWebsites: {
			title: 'Strony Firmowe - Profesjonalne Witryny od 8000 PLN',
			description:
				'Nowoczesne strony firmowe które budują zaufanie. CMS, SEO, responsywność, integracje. Ceny od 8000 PLN. Przedstaw swoją firmę w najlepszym świetle.',
			keywords:
				'strona firmowa, witryna korporacyjna, strona wizytówka, CMS, WordPress, prezentacja firmy, strona wielostronicowa',
		},
		ecommerce: {
			title: 'Sklepy Internetowe - E-commerce od 12000 PLN',
			description:
				'Profesjonalne sklepy internetowe które sprzedają 24/7. Płatności online, zarządzanie produktami, SEO. Ceny od 12000 PLN. Zacznij sprzedawać online!',
			keywords:
				'sklep internetowy, e-commerce, sprzedaż online, płatności online, WooCommerce, PrestaShop, sklep online',
		},
		redesign: {
			title: 'Redesign Stron - Odświeżenie Witryny od 6000 PLN',
			description:
				'Profesjonalny redesign stron internetowych. Nowoczesny wygląd, lepsza konwersja, SEO. Ceny od 6000 PLN. Odśwież swoją stronę i zwiększ zyski!',
			keywords:
				'redesign strony, odświeżenie witryny, modernizacja strony, nowy design, poprawa konwersji, aktualizacja strony',
		},
		uxui: {
			title: 'UX/UI Design - Projektowanie Interfejsów od 4000 PLN',
			description:
				'Profesjonalne projektowanie UX/UI. Badania użytkowników, prototypy, testy użyteczności. Ceny od 4000 PLN. Stwórz interfejsy które użytkownicy kochają!',
			keywords:
				'UX design, UI design, projektowanie interfejsów, badania użytkowników, prototypy, testy użyteczności, user experience',
		},
		portfolio: {
			title: 'Portfolio - Nasze Realizacje | uWebs',
			description:
				'Zobacz nasze najlepsze realizacje stron internetowych. Landing pages, strony firmowe, sklepy online. Inspiruj się naszymi projektami!',
			keywords:
				'portfolio web design, realizacje stron internetowych, przykłady landing pages, galeria projektów, case studies',
		},
		pricing: {
			title: 'Cennik - Transparentne Ceny Stron Internetowych',
			description:
				'Przejrzyste ceny tworzenia stron internetowych. Landing pages od 3500 PLN, strony firmowe od 8000 PLN, sklepy od 12000 PLN. Sprawdź nasze pakiety!',
			keywords:
				'cennik stron internetowych, ceny landing pages, koszt strony firmowej, ile kosztuje sklep internetowy, pakiety web design',
		},
		about: {
			title: 'O Nas - Kim Jesteśmy | uWebs',
			description:
				'Poznaj zespół uWebs. Młode, dynamiczne studio web design specjalizujące się w tworzeniu stron które sprzedają. Nasze doświadczenie i podejście.',
			keywords: 'o nas uWebs, zespół web design, studio projektowe, doświadczenie, podejście do projektowania',
		},
		contact: {
			title: 'Kontakt - Bezpłatna Konsultacja | uWebs',
			description:
				'Skontaktuj się z nami! Bezpłatna konsultacja, wycena w 24h. Napisz lub zadzwoń - pomożemy Ci stworzyć stronę która sprzedaje.',
			keywords: 'kontakt uWebs, bezpłatna konsultacja, wycena strony internetowej, formularz kontaktowy, współpraca',
		},
	},
}

export type SEOPageKey = keyof typeof seoConfig.pages
