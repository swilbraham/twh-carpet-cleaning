export type ConsentStatus = "accepted" | "rejected" | null;

export const CONSENT_KEY = "twh-cookie-consent";
export const CONSENT_EVENT = "twh-cookie-consent-change";

export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function setConsent(status: "accepted" | "rejected") {
  localStorage.setItem(CONSENT_KEY, status);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: status }));
}

export function clearConsent() {
  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}
