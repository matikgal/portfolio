import { useEffect } from 'react'

// Twój Google Tag Manager ID
const GTM_ID = 'GTM-WQKLNLBD'

const GoogleTagManager = () => {
	useEffect(() => {
		// Google Tag Manager
		if (typeof window !== 'undefined') {
			// GTM Script w <head>
			const script1 = document.createElement('script')
			script1.innerHTML = `
				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','${GTM_ID}');
			`
			document.head.appendChild(script1)

			// GTM noscript w <body> (dla użytkowników bez JS)
			const noscript = document.createElement('noscript')
			noscript.innerHTML = `
				<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
				height="0" width="0" style="display:none;visibility:hidden"></iframe>
			`
			document.body.appendChild(noscript)
		}
	}, [])

	return null
}

export default GoogleTagManager
