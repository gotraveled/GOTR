'use client';

import { useEffect, useRef, useState } from 'react';

const TransferBookingWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://trpwdg.com/content?currency=usd&trs=17835&shmarker=250882&locale=en&from=&to=&country=&powered_by=true&transfers_limit=10&promo_id=2949&campaign_id=1';
    script.async = true;

    script.onload = () => {
      setLoading(false);
    };

    script.onerror = () => {
      setLoading(false);
    };

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    // Hide loading after 3 seconds as fallback
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      if (widgetRef.current && widgetRef.current.contains(script)) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">Loading available transfers...</p>
          </div>
        </div>
      )}
      <div 
        ref={widgetRef}
        className="min-h-[500px] w-full"
        style={{
          minHeight: '500px',
          width: '100%',
        }}
      />
    </div>
  )
};

export default TransferBookingWidget;
