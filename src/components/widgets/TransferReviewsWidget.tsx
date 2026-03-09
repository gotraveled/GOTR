'use client';

import { useEffect, useRef } from 'react';

const TransferReviewsWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://trpwdg.com/content?currency=usd&trs=17835&shmarker=250882&locale=en&powered_by=true&limit=10&promo_id=2948&campaign_id=1';
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
      <div className="text-gray-500">Loading reviews...</div>
    </div>
  );
};

export default TransferReviewsWidget;
