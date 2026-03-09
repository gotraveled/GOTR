'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function FlightSearchContent() {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get search parameters
    const origin = searchParams.get('origin') || '';
    const destination = searchParams.get('destination') || '';
    const departure = searchParams.get('departure') || '';
    const returnDate = searchParams.get('return') || '';
    const passengers = searchParams.get('passengers') || '1';

    // Build Travelpayouts white-label URL
    const whitelabelUrl = `https://search.jetradar.com/search?origin_iata=${origin}&destination_iata=${destination}&depart_date=${departure}&return_date=${returnDate}&adults=${passengers}&marker=250882&with_request=true`;

    // Create iframe for white-label
    if (containerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.src = whitelabelUrl;
      iframe.style.width = '100%';
      iframe.style.minHeight = '100vh';
      iframe.style.border = 'none';
      iframe.allow = 'geolocation';
      
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(iframe);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
            <h1 className="text-3xl font-bold">Search Flights</h1>
            <p className="text-blue-100 mt-2">Find the best flight deals worldwide</p>
          </div>
          
          <div ref={containerRef} className="min-h-[600px] flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading flight search...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookFlightsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <FlightSearchContent />
    </Suspense>
  );
}
