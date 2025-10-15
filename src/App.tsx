import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import { LandingPages, CorporateWebsites, EcommercePage, RedesignPage, UXUIDesign } from './pages/services/index'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

const App = () => (
	<QueryClientProvider client={queryClient}>
		<HelmetProvider>
			<LanguageProvider>
				<TooltipProvider>
					<Toaster />
					<Sonner />
					<BrowserRouter>
						<ScrollToTop />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/portfolio" element={<Portfolio />} />
							<Route path="/uslugi" element={<Services />} />
							<Route path="/uslugi/landing-pages" element={<LandingPages />} />
							<Route path="/uslugi/strony-firmowe" element={<CorporateWebsites />} />
							<Route path="/uslugi/sklepy-internetowe" element={<EcommercePage />} />
							<Route path="/uslugi/redesign" element={<RedesignPage />} />
							<Route path="/uslugi/ux-ui-design" element={<UXUIDesign />} />
							<Route path="/o-nas" element={<About />} />
							<Route path="/cennik" element={<Pricing />} />
							<Route path="/kontakt" element={<Contact />} />
							<Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
							<Route path="/regulamin" element={<TermsOfService />} />
							<Route path="/polityka-cookies" element={<CookiePolicy />} />
							{/* Legacy routes - redirect to new structure */}
							<Route path="/landing-pages" element={<LandingPages />} />
							<Route path="/strony-firmowe" element={<CorporateWebsites />} />
							<Route path="/sklepy-internetowe" element={<EcommercePage />} />
							<Route path="/redesign" element={<RedesignPage />} />
							<Route path="/ux-ui-design" element={<UXUIDesign />} />
							{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</TooltipProvider>
			</LanguageProvider>
		</HelmetProvider>
	</QueryClientProvider>
)

export default App
