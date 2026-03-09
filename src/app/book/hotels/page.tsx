'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function HotelSearchContent() {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get search parameters
    const city = searchParams.get('city') || '';
    const checkIn = searchParams.get('checkIn') || '';
    const checkOut = searchParams.get('checkOut') || '';
    const guests = searchParams.get('guests') || '2';

    // Build hotel search widget with white-label
    if (containerRef.current) {
      const script = document.createElement('script');
      script.src = `https://tp.media/content?promo_id=7866&shmarker=250882&locale=en&currency=usd&city=${city}&check_in=${checkIn}&check_out=${checkOut}&guests=${guests}`;
      script.async = true;
      
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(script);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
            <h1 className="text-3xl font-bold">Search Hotels</h1>
            <p className="text-blue-100 mt-2">Find the perfect accommodation for your stay</p>
          </div>
          
          <div ref={containerRef} className="min-h-[600px] p-6">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-gray-600">Loading hotel search...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookHotelsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <HotelSearchContent />
    </Suspense>
  );
}
