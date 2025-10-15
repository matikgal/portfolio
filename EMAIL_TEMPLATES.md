# 📧 Gotowe Szablony Email dla EmailJS

## Template 1: Auto-odpowiedź dla Klienta

**Nazwa Template**: `client_autoresponse`
**Temat**: `Dziękujemy za kontakt - uWebs`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<style>
			body {
				font-family: 'Inter', Arial, sans-serif;
				line-height: 1.6;
				color: #1a1a1a;
			}
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
			}
			.header {
				background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
				color: white;
				padding: 30px;
				text-align: center;
			}
			.logo {
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 10px;
			}
			.content {
				background: #f8fafc;
				padding: 30px;
			}
			.info-box {
				background: white;
				border-left: 4px solid #ff3366;
				padding: 20px;
				margin: 20px 0;
			}
			.footer {
				background: #1e293b;
				color: white;
				padding: 20px;
				text-align: center;
				font-size: 14px;
			}
			.button {
				background: #ff3366;
				color: white;
				padding: 12px 24px;
				text-decoration: none;
				border-radius: 0;
				display: inline-block;
				margin: 20px 0;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<div class="logo">PIXEL<span style="color: #ff3366;">CRAFT</span></div>
				<p>Premium Web Design Studio</p>
			</div>

			<div class="content">
				<h2>Cześć {{firstName}}!</h2>

				<p>
					Dziękujemy za wysłanie zapytania przez nasz formularz kontaktowy. Cieszymy się, że jesteś zainteresowany/a
					naszymi usługami!
				</p>

				<div class="info-box">
					<h3>📋 Podsumowanie Twojego zapytania:</h3>
					<ul>
						<li><strong>Imię i nazwisko:</strong> {{firstName}} {{lastName}}</li>
						<li><strong>Email:</strong> {{email}}</li>
						<li><strong>Telefon:</strong> {{phone}}</li>
						<li><strong>Rodzaj projektu:</strong> {{projectType}}</li>
						<li><strong>Budżet:</strong> {{budget}}</li>
					</ul>

					<h4>💬 Twoja wiadomość:</h4>
					<p style="background: #f1f5f9; padding: 15px; border-radius: 4px; font-style: italic;">"{{message}}"</p>
				</div>

				<h3>🚀 Co dzieje się dalej?</h3>
				<ol>
					<li><strong>Analiza zapytania</strong> - Dokładnie przeanalizujemy Twoje potrzeby</li>
					<li><strong>Przygotowanie oferty</strong> - Stworzymy spersonalizowaną propozycję</li>
					<li><strong>Kontakt zwrotny</strong> - Skontaktujemy się z Tobą w ciągu 24h</li>
				</ol>

				<p>W międzyczasie możesz:</p>
				<ul>
					<li>📱 Sprawdzić nasze <a href="https://yoursite.com/portfolio" style="color: #ff3366;">portfolio</a></li>
					<li>📞 Zadzwonić bezpośrednio: <strong>+48 123 456 789</strong></li>
					<li>💬 Napisać na: <strong>hello@uwebs.pl</strong></li>
				</ul>

				<a href="https://yoursite.com/portfolio" class="button">Zobacz Nasze Portfolio</a>
			</div>

			<div class="footer">
				<p><strong>uWebs - Premium Web Design Studio</strong></p>
				<p>📧 hello@uwebs.pl | 📞 +48 123 456 789</p>
				<p>ul. Przykładowa 123, 00-001 Warszawa</p>
				<p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
					Otrzymujesz ten email, ponieważ wysłałeś/aś zapytanie przez nasz formularz kontaktowy.
				</p>
			</div>
		</div>
	</body>
</html>
```

---

## Template 2: Powiadomienie dla Administratora

**Nazwa Template**: `admin_notification`
**Temat**: `🚨 Nowe zapytanie: {{firstName}} {{lastName}} - {{projectType}}`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<style>
			body {
				font-family: 'Inter', Arial, sans-serif;
				line-height: 1.6;
				color: #1a1a1a;
			}
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
			}
			.header {
				background: #ff3366;
				color: white;
				padding: 20px;
				text-align: center;
			}
			.urgent {
				background: #fef2f2;
				border: 2px solid #fecaca;
				padding: 20px;
				margin: 20px 0;
				border-radius: 8px;
			}
			.client-info {
				background: #f0f9ff;
				border-left: 4px solid #0ea5e9;
				padding: 20px;
				margin: 20px 0;
			}
			.project-info {
				background: #f0fdf4;
				border-left: 4px solid #22c55e;
				padding: 20px;
				margin: 20px 0;
			}
			.message-box {
				background: #fffbeb;
				border-left: 4px solid #f59e0b;
				padding: 20px;
				margin: 20px 0;
			}
			.actions {
				background: #f8fafc;
				padding: 20px;
				text-align: center;
			}
			.button {
				background: #ff3366;
				color: white;
				padding: 12px 24px;
				text-decoration: none;
				border-radius: 4px;
				display: inline-block;
				margin: 10px;
			}
			.button-secondary {
				background: #64748b;
				color: white;
				padding: 12px 24px;
				text-decoration: none;
				border-radius: 4px;
				display: inline-block;
				margin: 10px;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h1>🚨 NOWE ZAPYTANIE</h1>
				<p>Formularz kontaktowy - uWebs</p>
			</div>

			<div class="urgent">
				<h2>⚡ Wymagana akcja!</h2>
				<p>Otrzymałeś nowe zapytanie z formularza kontaktowego. Klient oczekuje odpowiedzi w ciągu 24 godzin.</p>
			</div>

			<div class="client-info">
				<h3>👤 Informacje o kliencie</h3>
				<table style="width: 100%; border-collapse: collapse;">
					<tr>
						<td style="padding: 8px; font-weight: bold; width: 30%;">Imię:</td>
						<td style="padding: 8px;">{{firstName}}</td>
					</tr>
					<tr>
						<td style="padding: 8px; font-weight: bold;">Nazwisko:</td>
						<td style="padding: 8px;">{{lastName}}</td>
					</tr>
					<tr>
						<td style="padding: 8px; font-weight: bold;">Email:</td>
						<td style="padding: 8px;"><a href="mailto:{{email}}" style="color: #ff3366;">{{email}}</a></td>
					</tr>
					<tr>
						<td style="padding: 8px; font-weight: bold;">Telefon:</td>
						<td style="padding: 8px;"><a href="tel:{{phone}}" style="color: #ff3366;">{{phone}}</a></td>
					</tr>
				</table>
			</div>

			<div class="project-info">
				<h3>🚀 Szczegóły projektu</h3>
				<table style="width: 100%; border-collapse: collapse;">
					<tr>
						<td style="padding: 8px; font-weight: bold; width: 30%;">Rodzaj projektu:</td>
						<td style="padding: 8px;"><strong style="color: #22c55e;">{{projectType}}</strong></td>
					</tr>
					<tr>
						<td style="padding: 8px; font-weight: bold;">Budżet:</td>
						<td style="padding: 8px;"><strong style="color: #f59e0b;">{{budget}}</strong></td>
					</tr>
				</table>
			</div>

			<div class="message-box">
				<h3>💬 Wiadomość od klienta</h3>
				<div
					style="background: white; padding: 15px; border-radius: 4px; font-style: italic; border: 1px solid #e5e7eb;">
					"{{message}}"
				</div>
			</div>

			<div class="actions">
				<h3>🎯 Szybkie akcje</h3>
				<a
					href="mailto:{{email}}?subject=Re: Zapytanie o {{projectType}}&body=Cześć {{firstName}},%0D%0A%0D%0ADziękujemy za zapytanie..."
					class="button">
					📧 Odpowiedz na Email
				</a>
				<a href="tel:{{phone}}" class="button-secondary"> 📞 Zadzwoń </a>
			</div>

			<div style="background: #f1f5f9; padding: 20px; margin-top: 20px; text-align: center; font-size: 14px;">
				<p><strong>⏰ Czas otrzymania:</strong> {{current_date}}</p>
				<p><strong>📍 Źródło:</strong> Formularz kontaktowy uWebs</p>
				<p style="margin-top: 15px; color: #64748b;">
					Pamiętaj: Szybka odpowiedź zwiększa szanse na pozyskanie klienta!
				</p>
			</div>
		</div>
	</body>
</html>
```

---

## Template 3: Przypomnienie o Odpowiedzi (Opcjonalny)

**Nazwa Template**: `follow_up_reminder`
**Temat**: `⏰ Przypomnienie: Odpowiedź dla {{firstName}} {{lastName}}`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<style>
			body {
				font-family: Arial, sans-serif;
				line-height: 1.6;
				color: #1a1a1a;
			}
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
			}
			.header {
				background: #f59e0b;
				color: white;
				padding: 20px;
				text-align: center;
			}
			.reminder {
				background: #fef3c7;
				border: 2px solid #f59e0b;
				padding: 20px;
				margin: 20px 0;
				border-radius: 8px;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h1>⏰ PRZYPOMNIENIE</h1>
			</div>

			<div class="reminder">
				<h2>Czas na odpowiedź!</h2>
				<p>Minęły już 24 godziny od otrzymania zapytania od <strong>{{firstName}} {{lastName}}</strong>.</p>
				<p><strong>Email klienta:</strong> <a href="mailto:{{email}}">{{email}}</a></p>
				<p><strong>Telefon:</strong> <a href="tel:{{phone}}">{{phone}}</a></p>
				<p><strong>Projekt:</strong> {{projectType}} ({{budget}})</p>
			</div>
		</div>
	</body>
</html>
```

---

## 🔧 Instrukcje Implementacji

### 1. Kopiowanie Template do EmailJS

1. Zaloguj się do EmailJS
2. Przejdź do "Email Templates"
3. Kliknij "Create New Template"
4. Wklej kod HTML
5. Zapisz Template ID

### 2. Testowanie Template

- Użyj funkcji "Test" w EmailJS
- Sprawdź czy wszystkie zmienne `{{variable}}` są poprawnie zastępowane
- Przetestuj na różnych klientach email (Gmail, Outlook, Apple Mail)

### 3. Zmienne Dostępne

Wszystkie zmienne odpowiadają `name` attributes w formularzu:

- `{{firstName}}` - Imię
- `{{lastName}}` - Nazwisko
- `{{email}}` - Email
- `{{phone}}` - Telefon
- `{{projectType}}` - Rodzaj projektu
- `{{budget}}` - Budżet
- `{{message}}` - Wiadomość

### 4. Personalizacja

- Zmień kolory na swoje brandowe
- Dodaj swoje logo
- Zaktualizuj dane kontaktowe
- Dostosuj ton komunikacji do swojej marki

---

## ✅ Gotowe!

Te szablony zapewnią profesjonalną komunikację z klientami i sprawną obsługę zapytań!
