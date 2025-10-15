import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'

const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguage()

	const toggleLanguage = () => {
		setLanguage(language === 'pl' ? 'en' : 'pl')
	}

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={toggleLanguage}
			className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors">
			<Globe className="w-4 h-4" />
			<span className="font-mono text-sm font-bold uppercase">{language === 'pl' ? 'EN' : 'PL'}</span>
		</Button>
	)
}

export default LanguageSwitcher
