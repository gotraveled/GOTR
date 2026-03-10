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
    <div className="w-full">
      <div 
        ref={widgetRef}
        className="min-h-[400px] w-full overflow-hidden"
        style={{
          minHeight: '400px',
          width: '100%',
        }}
      >
        <div className="flex items-center justify-center h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">Loading customer reviews...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferReviewsWidget;
