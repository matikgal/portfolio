# 📧 Instrukcja Konfiguracji EmailJS

## 1. Rejestracja w EmailJS

1. **Przejdź na stronę**: https://www.emailjs.com/
2. **Kliknij "Sign Up"** i zarejestruj się (możesz użyć Google/GitHub)
3. **Potwierdź email** i zaloguj się

## 2. Konfiguracja Email Service

### Dodanie Usługi Email

1. W dashboardzie kliknij **"Email Services"**
2. Kliknij **"Add New Service"**
3. Wybierz swojego dostawcę email:
   - **Gmail** (najprostsze)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Lub inne**

### Konfiguracja Gmail (Zalecane)

1. Wybierz **"Gmail"**
2. Kliknij **"Connect Account"**
3. Zaloguj się do swojego konta Gmail
4. Nadaj nazwę usłudze (np. "uWebs Contact")
5. **Zapisz Service ID** - będziesz go potrzebować!

## 3. Utworzenie Email Template

### Nowy Template

1. Przejdź do **"Email Templates"**
2. Kliknij **"Create New Template"**
3. Wybierz **"Blank Template"**

### Template dla Klienta (Auto-odpowiedź)

```html
Temat: Dziękujemy za kontakt - PixelCraft Cześć {{firstName}}! Dziękujemy za wysłanie zapytania przez nasz formularz
kontaktowy. Oto podsumowanie Twojego zapytania: • Imię i nazwisko: {{firstName}} {{lastName}} • Email: {{email}} •
Telefon: {{phone}} • Rodzaj projektu: {{projectType}} • Budżet: {{budget}} Twoja wiadomość: {{message}} Odpowiemy na
Twoje zapytanie w ciągu 24 godzin roboczych. Pozdrawiamy, Zespół PixelCraft hello@pixelcraft.pl +48 123 456 789 ---
uWebs - Premium Web Design Studio
```

### Template dla Ciebie (Powiadomienie)

Utwórz drugi template:

```html
Temat: Nowe zapytanie z formularza - {{firstName}} {{lastName}} Nowe zapytanie z formularza kontaktowego: DANE KLIENTA:
• Imię: {{firstName}} • Nazwisko: {{lastName}} • Email: {{email}} • Telefon: {{phone}} PROJEKT: • Rodzaj:
{{projectType}} • Budżet: {{budget}} WIADOMOŚĆ: {{message}} --- Wysłane z formularza uWebs
```

## 4. Pobranie Kluczy API

### Service ID

1. W **"Email Services"** znajdź swoją usługę
2. **Skopiuj Service ID** (np. "service_abc123")

### Template ID

1. W **"Email Templates"** znajdź swój template
2. **Skopiuj Template ID** (np. "template_xyz789")

### Public Key

1. Przejdź do **"Account"** → **"General"**
2. Znajdź **"Public Key"**
3. **Skopiuj klucz** (np. "user_abc123xyz")

## 5. Konfiguracja w Kodzie

Otwórz `src/pages/Contact.tsx` i zastąp placeholdery:

```typescript
const result = await emailjs.sendForm(
	'service_abc123', // Twój Service ID
	'template_xyz789', // Twój Template ID
	form.current!,
	'user_abc123xyz' // Twój Public Key
)
```

## 6. Zmienne Środowiskowe (Opcjonalne)

Dla bezpieczeństwa utwórz `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

I użyj w kodzie:

```typescript
const result = await emailjs.sendForm(
	import.meta.env.VITE_EMAILJS_SERVICE_ID,
	import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
	form.current!,
	import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

## 7. Testowanie

1. **Uruchom aplikację**: `npm run dev`
2. **Przejdź do formularza kontaktowego**
3. **Wypełnij i wyślij formularz**
4. **Sprawdź email** - powinieneś otrzymać wiadomość

## 8. Limity Darmowego Planu

- **200 emaili/miesiąc** (wystarczy na start)
- **Branding EmailJS** w stopce
- **Podstawowe funkcje**

## 9. Rozwiązywanie Problemów

### Email nie dochodzi

- Sprawdź **spam/junk folder**
- Zweryfikuj **Service ID, Template ID, Public Key**
- Upewnij się, że **nazwy pól** w template odpowiadają `name` attributes

### Błąd CORS

- EmailJS automatycznie obsługuje CORS
- Upewnij się, że używasz najnowszej wersji `@emailjs/browser`

### Błąd 403

- Sprawdź czy **Public Key** jest poprawny
- Zweryfikuj czy **domena** jest dodana w ustawieniach EmailJS

## 10. Dodatkowe Funkcje

### Auto-odpowiedź dla klienta

Utwórz drugi template i wyślij go w tym samym czasie:

```typescript
// Wyślij powiadomienie do siebie
await emailjs.sendForm('service_id', 'admin_template', form.current!, 'public_key')

// Wyślij auto-odpowiedź do klienta
await emailjs.sendForm('service_id', 'client_template', form.current!, 'public_key')
```

---

## ✅ Gotowe!

Po wykonaniu tych kroków Twój formularz kontaktowy będzie w pełni funkcjonalny i będziesz otrzymywać emaile od potencjalnych klientów!
