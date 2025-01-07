import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ReactGA from 'react-ga4';

declare global {
  interface Window {
    [key: `ga-disable-${string}`]: boolean;
  }
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    } else if (hasAcceptedCookies === 'true') {
      // Initialize analytics only if cookies were previously accepted
      ReactGA.initialize('G-M4M7D5SNCX');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    // Initialize analytics after user accepts
    ReactGA.initialize('G-M4M7D5SNCX');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    // Disable analytics
    window['ga-disable-G-M4M7D5SNCX'] = true;
    // Remove existing cookies
    document.cookie.split(';').forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 flex items-center">
            <p className="text-sm text-gray-700">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <a href="https://www.joinxeddy.com/privacy" className="text-blue-600 hover:text-blue-800 underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecline}
              className="text-gray-500 hover:text-gray-700 text-sm font-medium"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium 
                       hover:bg-blue-700 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-500 p-1"
              aria-label="Close cookie banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
