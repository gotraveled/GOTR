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
    <div className="w-full">
      <div 
        ref={widgetRef}
        className="min-h-[500px] w-full overflow-hidden"
        style={{
          minHeight: '500px',
          width: '100%',
        }}
      >
        <div className="flex items-center justify-center h-[500px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">Loading available transfers...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferBookingWidget;
