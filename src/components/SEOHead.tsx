import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
	title?: string
	description?: string
	keywords?: string
	canonical?: string
	ogImage?: string
	noindex?: boolean
}

const SEOHead = ({
	title = 'uWebs - Tworzenie Stron Internetowych | Landing Pages | Strony Firmowe',
	description = 'Profesjonalne tworzenie stron internetowych, landing pages i sklepów online. Nowoczesny design, SEO, responsywność. Konkurencyjne ceny od 3500 PLN. Bezpłatna konsultacja!',
	keywords = 'tworzenie stron internetowych, projektowanie stron internetowych,tworzenie stron internetowych Śląsk, landing page, strona firmowa, web design, SEO, nowoczesne strony internetowe, responsywne strony, uWebs, strona wizytówka, kto robi strony internetowe, firma robiąca strony internetowe, kto zrobi stronę internetową w okolicy, robienie stron internetowych, strona internetowa dla mojej firmy, potrzebuję strony internetowej dla firmy, prosta strona internetowa, modernizacja strony www, moja strona jest stara',
	canonical = 'https://uwebs.pl',
	ogImage = 'https://uwebs.pl/og-image.jpg',
	noindex = false,
}: SEOHeadProps) => {
	const fullTitle = title.includes('uWebs') ? title : `${title} | uWebs`
	const currentUrl = canonical

	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			{noindex && <meta name="robots" content="noindex, nofollow" />}
			<link rel="canonical" href={canonical} />

			{/* Open Graph */}
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="uWebs" />
			<meta property="og:locale" content="pl_PL" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />

			{/* Additional SEO */}
			<meta name="author" content="uWebs" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Language" content="pl" />

			{/* Geo tags for local SEO */}
			<meta name="geo.region" content="PL-SL" />
			<meta name="geo.placename" content="Bielsko-Biała" />
			<meta name="geo.position" content="49.8225;19.0444" />
			<meta name="ICBM" content="49.8225, 19.0444" />

			{/* Business info */}
			<meta name="business:contact_data:locality" content="Bielsko-Biała" />
			<meta name="business:contact_data:region" content="Śląsk" />
			<meta name="business:contact_data:country_name" content="Polska" />
		</Helmet>
	)
}

export default SEOHead
