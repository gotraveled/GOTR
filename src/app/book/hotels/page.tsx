'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaHotel, FaArrowLeft } from 'react-icons/fa';

function HotelSearchContent() {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get search parameters
    const city = searchParams.get('city') || '';
    const checkIn = searchParams.get('checkIn') || '';
    const checkOut = searchParams.get('checkOut') || '';
    const guests = searchParams.get('guests') || '2';

    // Use Travelpayouts Hotellook widget that stays on our domain
    if (containerRef.current && city && checkIn && checkOut) {
      containerRef.current.innerHTML = '';
      
      // Create widget container
      const widgetDiv = document.createElement('div');
      widgetDiv.setAttribute('data-marker', '250882');
      widgetDiv.setAttribute('data-city', city);
      widgetDiv.setAttribute('data-check_in', checkIn);
      widgetDiv.setAttribute('data-check_out', checkOut);
      widgetDiv.setAttribute('data-adults', guests);
      
      // Add Hotellook search script
      const script = document.createElement('script');
      script.src = `//tp.media/content?promo_id=7866&shmarker=250882&trs=17835&type=hotel&city=${encodeURIComponent(city)}&check_in=${checkIn}&check_out=${checkOut}&guests=${guests}&locale=en&currency=usd&powered_by=true`;
      script.async = true;
      script.charset = 'utf-8';
      
      containerRef.current.appendChild(widgetDiv);
      containerRef.current.appendChild(script);
    }
  }, [searchParams]);

  const city = searchParams.get('city') || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <FaArrowLeft />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <FaHotel className="text-2xl" />
              <div>
                <h1 className="text-2xl font-bold">Hotel Search Results</h1>
                {city && (
                  <p className="text-purple-100 text-sm">Hotels in {city}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="container-custom py-8">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div ref={containerRef} className="min-h-[800px] flex items-center justify-center bg-gray-50">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-700 font-semibold text-lg">Searching hotels...</p>
              <p className="text-gray-500 text-sm mt-2">Finding the best accommodations for you</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-purple-600">1M+</p>
            <p className="text-sm text-gray-600">Hotels</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-purple-600">Best Price</p>
            <p className="text-sm text-gray-600">Guaranteed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-purple-600">24/7</p>
            <p className="text-sm text-gray-600">Support</p>
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
