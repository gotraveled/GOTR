'use client';

import { useEffect } from 'react';

export default function ImprovedFlightSearchWidget() {
  useEffect(() => {
    // Create container for Travelpayouts widget
    const container = document.getElementById('tp-flight-widget');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create script element
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.src = 'https://tp.media/content?promo_id=4041&shmarker=250882&powered_by=true&locale=en&searchUrl=www.aviasales.com/search&primary=%230C73FE&one_way=false&only_direct=false&period=year&range=7,14';
    script.async = true;

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>
      <div id="tp-flight-widget" className="min-h-[400px]"></div>
      <noscript>
        <a href="https://www.aviasales.com/?marker=250882" target="_blank" rel="noopener noreferrer">
          Search cheap flights
        </a>
      </noscript>
    </div>
  );
}
