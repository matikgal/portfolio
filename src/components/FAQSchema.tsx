const FAQSchema = () => {
	const faqData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Ile kosztuje stworzenie strony internetowej w Bielsku-Białej?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Ceny zaczynają się od 3500 PLN za landing page, 8000 PLN za stronę firmową i 12000 PLN za sklep internetowy. Oferujemy konkurencyjne ceny dla firm z regionu Beskidów.',
				},
			},
			{
				'@type': 'Question',
				name: 'Jak długo trwa tworzenie strony internetowej?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Landing page: 1-2 tygodnie, strona firmowa: 2-4 tygodnie, sklep internetowy: 3-6 tygodni. Czas zależy od złożoności projektu i ilości treści.',
				},
			},
			{
				'@type': 'Question',
				name: 'Czy obsługujecie firmy z całej Polski?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Tak! Choć mamy siedzibę w regionie Beskidów (Bielsko-Biała, Żywiec), obsługujemy klientów z całej Polski. Współpracujemy zdalnie.',
				},
			},
			{
				'@type': 'Question',
				name: 'Co wyróżnia uWebs od innych firm tworzących strony?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Jesteśmy młodym, dynamicznym zespołem który stawia na jakość, a nie ilość. Oferujemy konkurencyjne ceny, nowoczesny design i pełne wsparcie. Każda strona jest tworzona z myślą o konwersji.',
				},
			},
			{
				'@type': 'Question',
				name: 'Czy strony są responsywne i zoptymalizowane pod SEO?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Absolutnie! Wszystkie nasze strony są w pełni responsywne (dostosowane do telefonów i tabletów) oraz zoptymalizowane pod SEO. To standard w każdym projekcie.',
				},
			},
		],
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(faqData),
			}}
		/>
	)
}

export default FAQSchema
