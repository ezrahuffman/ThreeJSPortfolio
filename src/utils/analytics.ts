// Google Analytics utility functions
// Make sure to replace G-XXXXXXXXXX in index.html with your actual GA4 Measurement ID

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Send a pageview event to Google Analytics
 * @param url - The page URL path
 */
export const pageview = (url: string): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-LR3MZM6KPH', {
      page_path: url,
    });
  }
};

/**
 * Send a custom event to Google Analytics
 * @param action - The action name (e.g., 'click', 'view', 'submit')
 * @param params - Additional event parameters
 */
export const event = (
  action: string,
  params?: Record<string, unknown>
): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, params);
  }
};

/**
 * Track project clicks
 * @param projectTitle - The title of the project clicked
 */
export const trackProjectClick = (projectTitle: string): void => {
  event('project_click', {
    event_category: 'engagement',
    event_label: projectTitle,
  });
};

/**
 * Track section views
 * @param sectionName - The name of the section viewed
 */
export const trackSectionView = (sectionName: string): void => {
  event('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
  });
};

/**
 * Track external link clicks
 * @param url - The external URL clicked
 * @param linkText - The text/label of the link
 */
export const trackExternalLink = (url: string, linkText: string): void => {
  event('click', {
    event_category: 'outbound',
    event_label: linkText,
    value: url,
  });
};
