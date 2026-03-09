'use client';

import { useEffect, useRef } from 'react';

const TransferBookingWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://trpwdg.com/content?currency=usd&trs=17835&shmarker=250882&locale=en&from=&to=&country=&powered_by=true&transfers_limit=10&promo_id=2949&campaign_id=1';
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
      <div className="text-gray-500">Loading transfer booking...</div>
    </div>
  );
};

export default TransferBookingWidget;
