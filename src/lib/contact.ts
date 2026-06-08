// Centralised contact details for Arsenal Fund Uganda.
// Phone number stored without leading 0 for international (wa.me) format.

export const LOCAL_PHONE = "0703639277";
export const INTL_PHONE = "+256703639277";
export const WHATSAPP_NUMBER = "256703639277"; // wa.me format (no +)
export const EMAIL = "hello@arsenalfunduganda.org";
export const ADDRESS = "Kampala, Uganda";

export const donateMessage =
  "Hello Arsenal Fund Uganda 👋 I'd love to make a donation and support the cause. Please share the next steps.";

export const donateWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(donateMessage)}`;
export const telHref = `tel:${INTL_PHONE}`;
