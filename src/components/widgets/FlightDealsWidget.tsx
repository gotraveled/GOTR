'use client';

import { useEffect, useRef } from 'react';

const FlightDealsWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://trpwdg.com/content?currency=usd&trs=17835&shmarker=250882&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=true&primary=%230085FF&promo_id=4044&campaign_id=100';
    script.async = true;

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current && widgetRef.current.contains(script)) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={widgetRef}
      className="min-h-[300px] flex items-center justify-center"
    >
      <div className="text-gray-500">Loading flight deals...</div>
    </div>
  );
};

export default FlightDealsWidget;
