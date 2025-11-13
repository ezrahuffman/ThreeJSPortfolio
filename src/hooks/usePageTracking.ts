import { useEffect } from 'react';
import { pageview } from '../utils/analytics';

/**
 * Custom hook to track page views on component mount
 * This can be extended to work with React Router if you add routing later
 */
export const usePageTracking = (): void => {
  useEffect(() => {
    // Track initial page load
    pageview(window.location.pathname + window.location.search);
  }, []);
};
