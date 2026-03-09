'use client';

import { useEffect, useRef } from 'react';

const FlightSearchWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://trpwdg.com/content?currency=usd&trs=17835&shmarker=250882&searchUrl=www.aviasales.com%2Fsearch&locale=en&powered_by=true&one_way=false&only_direct=false&period=year&range=7%2C14&primary=%230C73FE&color_background=%23ffffff&dark=%23000000&light=%23FFFFFF&achieve=%2345AD35&promo_id=4041&campaign_id=100';
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
      className="min-h-[400px] flex items-center justify-center"
    >
      <div className="text-gray-500">Loading flight search...</div>
    </div>
  );
};

export default FlightSearchWidget;
