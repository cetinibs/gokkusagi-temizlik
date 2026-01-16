// Google Ads Conversion Tracking Utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

/**
 * Reports a click-to-call conversion to Google Ads
 * @param phoneNumber - The phone number being called (for tracking purposes)
 */
export function trackPhoneCall(phoneNumber: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17651373667/ctz6COfNqd4bEOOs6uBB',
      'value': 1.0,
      'currency': 'TRY'
    });
  }
}

/**
 * Handles phone link click with conversion tracking
 * @param phoneNumber - The phone number to call (with country code, e.g., +905467630261)
 */
export function handlePhoneClick(phoneNumber: string): void {
  trackPhoneCall(phoneNumber);
  // Small delay to ensure tracking fires before navigation
  setTimeout(() => {
    window.location.href = `tel:${phoneNumber}`;
  }, 100);
}

/**
 * Creates an onClick handler for phone links that tracks conversions
 * @param phoneNumber - The phone number to call
 */
export function createPhoneClickHandler(phoneNumber: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    handlePhoneClick(phoneNumber);
  };
}
