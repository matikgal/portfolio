# 🌍 System Wielojęzyczności - Instrukcja

## ✅ Co zostało zaimplementowane:

### **1. Kontekst Językowy**

- **LanguageContext** - zarządza aktualnym językiem
- **Automatyczne zapisywanie** w localStorage
- **Hook useLanguage** - łatwy dostęp do tłumaczeń

### **2. Przełącznik Języka**

- **LanguageSwitcher** - przycisk z ikoną globusa
- **Widoczny w nawigacji** (desktop i mobile)
- **Instant switching** - natychmiastowa zmiana języka

### **3. Tłumaczenia**

- **Polski (pl)** - język domyślny
- **Angielski (en)** - pełne tłumaczenie
- **Kluczowe sekcje** - nawigacja, hero, podstawowe elementy

---

## 🚀 Jak używać systemu:

### **W komponencie React:**

```tsx
import { useLanguage } from '@/contexts/LanguageContext'

const MyComponent = () => {
	const { t, language, setLanguage } = useLanguage()

	return (
		<div>
			<h1>{t('hero.title')}</h1>
			<p>{t('hero.description')}</p>
		</div>
	)
}
```

### **Dodawanie nowych tłumaczeń:**

1. Otwórz `src/contexts/LanguageContext.tsx`
2. Dodaj klucz w sekcji `translations`:

```tsx
const translations = {
	pl: {
		'new.key': 'Tekst po polsku',
		'another.key': 'Inny tekst',
	},
	en: {
		'new.key': 'Text in English',
		'another.key': 'Another text',
	},
}
```

3. Użyj w komponencie: `{t('new.key')}`

---

## 📍 Gdzie znajduje się przełącznik:

### **Desktop:**

- **Nawigacja górna** - obok przycisku "Darmowa Konsultacja"
- **Ikona globusa + PL/EN**

### **Mobile:**

- **Menu hamburger** - nad przyciskiem konsultacji
- **Centrowany** w menu mobilnym

---

## 🔧 Aktualne tłumaczenia:

### **Nawigacja:**

- ✅ Menu items (Home, Portfolio, Services, etc.)
- ✅ CTA button (Free Consultation)

### **Hero Section:**

- ✅ Subtitle (Premium Web Design Studio)
- ✅ Main title (Websites That Convert)
- ✅ Description
- ✅ Buttons (View Portfolio, Book Consultation)
- ✅ Scroll indicator

### **Pozostałe sekcje:**

- 🔄 **Do zrobienia** - Services, Process, Footer, Contact

---

## 📝 Jak dodać tłumaczenia do nowych stron:

### **1. Import hook'a:**

```tsx
import { useLanguage } from '@/contexts/LanguageContext'
```

### **2. Użyj w komponencie:**

```tsx
const MyPage = () => {
	const { t } = useLanguage()

	return (
		<div>
			<h1>{t('page.title')}</h1>
		</div>
	)
}
```

### **3. Dodaj tłumaczenia:**

```tsx
// W LanguageContext.tsx
const translations = {
	pl: {
		'page.title': 'Tytuł strony',
		'page.description': 'Opis strony',
	},
	en: {
		'page.title': 'Page Title',
		'page.description': 'Page description',
	},
}
```

---

## 🎯 Przykłady użycia:

### **Prosty tekst:**

```tsx
<h1>{t('services.title')}</h1>
// PL: "Czym Się Zajmujemy"
// EN: "What We Do"
```

### **Tekst z HTML:**

```tsx
<h1>
	{t('hero.title')} <span className="text-secondary">{t('hero.title_highlight')}</span>
</h1>
// PL: "Strony Które Nie Tylko Wyglądają. Konwertują."
// EN: "Websites That Don't Just Look Good. They Convert."
```

### **Warunki językowe:**

```tsx
const { language } = useLanguage()

return <div>{language === 'pl' ? <p>Specjalny tekst tylko po polsku</p> : <p>Special text only in English</p>}</div>
```

---

## 🔄 Rozszerzanie systemu:

### **Dodanie nowego języka (np. niemiecki):**

1. **Rozszerz typ Language:**

```tsx
type Language = 'pl' | 'en' | 'de'
```

2. **Dodaj tłumaczenia:**

```tsx
const translations = {
	pl: {
		/* ... */
	},
	en: {
		/* ... */
	},
	de: {
		'nav.home': 'Startseite',
		'nav.portfolio': 'Portfolio',
		// ... więcej tłumaczeń
	},
}
```

3. **Zaktualizuj przełącznik:**

```tsx
// W LanguageSwitcher.tsx
const languages = ['pl', 'en', 'de']
const currentIndex = languages.indexOf(language)
const nextLanguage = languages[(currentIndex + 1) % languages.length]
```

---

## 💾 Persistence:

- **localStorage** - język zapisuje się automatycznie
- **Klucz:** `uwebs-language`
- **Domyślny:** `pl` (polski)
- **Przywracanie** - przy odświeżeniu strony język zostaje zachowany

---

## 🎨 Styling przełącznika:

```tsx
// Aktualny design
<Button variant="ghost" size="sm">
	<Globe className="w-4 h-4" />
	<span className="font-mono text-sm font-bold uppercase">{language === 'pl' ? 'EN' : 'PL'}</span>
</Button>
```

**Pokazuje:**

- **PL** → kliknij żeby przełączyć na EN
- **EN** → kliknij żeby przełączyć na PL

---

## ✅ Gotowe do użycia!

System jest w pełni funkcjonalny. Wystarczy:

1. **Kliknąć przełącznik** w nawigacji
2. **Strona zmienia język** natychmiast
3. **Język zostaje zapamiętany** w localStorage

Aby dodać więcej tłumaczeń, po prostu rozszerz obiekt `translations` i używaj `t('klucz')` w komponentach! 🚀
