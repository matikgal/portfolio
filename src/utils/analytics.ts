import { logAnalyticsEvent } from "@/lib/firebase";

// Przykładowe funkcje do logowania różnych zdarzeń

export const logPageView = (pageName: string) => {
  logAnalyticsEvent("page_view", {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
};

export const logNotificationReceived = () => {
  logAnalyticsEvent("notification_received");
};

export const logButtonClick = (buttonName: string) => {
  logAnalyticsEvent("button_click", {
    button_name: buttonName,
  });
};

export const logFormSubmit = (formName: string) => {
  logAnalyticsEvent("form_submit", {
    form_name: formName,
  });
};

export const logContactFormSubmit = (method: string) => {
  logAnalyticsEvent("contact", {
    method: method,
  });
};

export const logServiceView = (serviceName: string) => {
  logAnalyticsEvent("view_item", {
    item_name: serviceName,
    item_category: "service",
  });
};
