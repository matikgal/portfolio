import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, Analytics } from "firebase/analytics";

// Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8lBEEg418AOdUv7oJpoCSkDOmfVKLiEU",
  authDomain: "uwebs-115a3.firebaseapp.com",
  projectId: "uwebs-115a3",
  storageBucket: "uwebs-115a3.firebasestorage.app",
  messagingSenderId: "583144515358",
  appId: "1:583144515358:web:db5a70ce40067d81390b0f",
  measurementId: "G-HJHCYQY78R"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);

// Inicjalizacja Analytics (tylko w przeglądarce)
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Funkcja pomocnicza do logowania zdarzeń
export const logAnalyticsEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

export { analytics };
export default app;
