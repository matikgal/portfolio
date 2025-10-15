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
	keywords = 'tworzenie stron internetowych, landing page, strona firmowa, sklep internetowy, web design, SEO, responsywne strony, UX/UI design',
	canonical,
	ogImage = 'https://uwebs.pl/og-image.jpg',
	noindex = false,
}: SEOHeadProps) => {
	const fullTitle = title.includes('uWebs') ? title : `${title} | uWebs`
	const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://uwebs.pl')

	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			{noindex && <meta name="robots" content="noindex, nofollow" />}
			{canonical && <link rel="canonical" href={canonical} />}

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
		</Helmet>
	)
}

export default SEOHead
