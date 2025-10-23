# Google Tag Manager Setup dla uWebs.pl

## ✅ ZROBIONE

- [x] GTM kod dodany do strony (GTM-WQKLNLBD)
- [x] Komponent GoogleTagManager w React

## 🔧 CO SKONFIGUROWAĆ W GTM

### 1. Google Analytics 4 (GA4)

W GTM dashboard:

1. **Tags** → **New** → **Google Analytics: GA4 Configuration**
2. **Measurement ID**: Stwórz nową właściwość GA4 i skopiuj ID (G-XXXXXXXXX)
3. **Trigger**: All Pages
4. **Save & Publish**

### 2. Enhanced Ecommerce (dla przyszłości)

- Śledzenie formularzy kontaktowych
- Śledzenie kliknięć w portfolio
- Śledzenie pobrań (cenniki, materiały)

### 3. Conversion Tracking

**Cele do śledzenia:**

- Wysłanie formularza kontaktowego
- Kliknięcie w telefon/email
- Kliknięcie "Zobacz portfolio"
- Czas spędzony na stronie >2 min

### 4. Custom Events

```javascript
// Przykład: śledzenie kliknięć w portfolio
dataLayer.push({
	event: 'portfolio_click',
	project_name: 'Sielska Ostoja',
	project_type: 'Landing Page',
})
```

## 📊 ZALECANE TAGI

### Podstawowe

- [x] GA4 Configuration
- [ ] GA4 Event (form submissions)
- [ ] Conversion Linker
- [ ] Google Ads Conversion Tracking (przyszłość)

### Zaawansowane

- [ ] Facebook Pixel (social media marketing)
- [ ] LinkedIn Insight Tag (B2B marketing)
- [ ] Hotjar/Microsoft Clarity (heatmapy)

## 🎯 EVENTS DO ŚLEDZENIA

### High Priority

1. **Contact Form Submit**

   - Event: form_submit
   - Parameters: form_type, page_url

2. **Phone/Email Click**

   - Event: contact_click
   - Parameters: contact_type, page_url

3. **Portfolio View**
   - Event: portfolio_view
   - Parameters: project_name, project_type

### Medium Priority

4. **Service Page View**

   - Event: service_view
   - Parameters: service_type

5. **Pricing View**

   - Event: pricing_view
   - Parameters: package_type

6. **Download** (jeśli dodasz materiały)
   - Event: file_download
   - Parameters: file_name, file_type

## 🚀 QUICK SETUP (30 min)

1. **Idź do GTM** (tagmanager.google.com)
2. **Znajdź kontener GTM-WQKLNLBD**
3. **Dodaj GA4 tag:**
   - New Tag → GA4 Configuration
   - Measurement ID: (stwórz w analytics.google.com)
   - Trigger: All Pages
4. **Submit & Publish**

## 📈 TESTOWANIE

### Sprawdź czy działa:

1. **GTM Preview Mode** - testuj na żywo
2. **Google Analytics Realtime** - sprawdź czy widzi ruch
3. **Browser DevTools** - sprawdź czy dataLayer działa

### Debug:

```javascript
// W konsoli przeglądarki
console.log(window.dataLayer)
```

## 🎯 CELE BIZNESOWE

### Metryki do śledzenia:

- **Ruch organiczny** (SEO)
- **Konwersje** (formularze)
- **Źródła ruchu** (Google, social, direct)
- **Najpopularniejsze strony**
- **Czas na stronie**
- **Bounce rate**

### Raporty do tworzenia:

- Miesięczny raport ruchu
- Analiza źródeł leadów
- Performance poszczególnych stron
- Mobile vs Desktop usage

---

**NASTĘPNY KROK:** Stwórz właściwość GA4 i podłącz do GTM!
