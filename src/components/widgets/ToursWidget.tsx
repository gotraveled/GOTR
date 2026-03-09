'use client';

import { useEffect, useRef } from 'react';

interface ToursWidgetProps {
  city?: string;
  partnerId?: string;
}

export default function ToursWidget({ city = '', partnerId = '250882' }: ToursWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // GetYourGuide widget script
      const script = document.createElement('script');
      script.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js';
      script.setAttribute('data-gyg-partner-id', partnerId);
      script.async = true;
      
      containerRef.current.appendChild(script);

      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    }
  }, [partnerId, city]);

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Book Tours & Activities
        </h3>
        <p className="text-gray-600">
          Discover unique experiences and skip-the-line tickets
        </p>
      </div>

      <div ref={containerRef} 
           className="gyg-widget" 
           data-gyg-widget="activities" 
           data-gyg-partner-id={partnerId}
           data-gyg-q={city}
           data-gyg-number-of-items="6">
      </div>

      {/* Fallback button */}
      <div className="text-center mt-6">
        <a
          href={`https://www.getyourguide.com/s/?partner_id=${partnerId}&q=${encodeURIComponent(city)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Browse All Tours & Activities →
        </a>
      </div>
    </div>
  );
}
