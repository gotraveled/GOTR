'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCar, FaArrowLeft } from 'react-icons/fa';

function CarSearchContent() {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get search parameters
    const pickup = searchParams.get('pickup') || '';
    const dropoff = searchParams.get('dropoff') || '';
    const pickupDate = searchParams.get('pickupDate') || '';
    const dropoffDate = searchParams.get('dropoffDate') || '';

    // Build DiscoverCars URL with affiliate marker
    const discoverCarsUrl = `https://www.discovercars.com/?a_aid=250882&pick_up=${encodeURIComponent(pickup)}&drop_off=${encodeURIComponent(dropoff)}&pick_up_date=${pickupDate}&drop_off_date=${dropoffDate}`;

    // Create iframe for DiscoverCars integration
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      
      const iframe = document.createElement('iframe');
      iframe.src = discoverCarsUrl;
      iframe.style.width = '100%';
      iframe.style.height = '1200px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '0.75rem';
      iframe.setAttribute('loading', 'eager');
      
      containerRef.current.appendChild(iframe);
    }
  }, [searchParams]);

  const pickup = searchParams.get('pickup') || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-6 shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <FaArrowLeft />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <FaCar className="text-2xl" />
              <div>
                <h1 className="text-2xl font-bold">Car Rental Search Results</h1>
                {pickup && (
                  <p className="text-green-100 text-sm">Pickup: {pickup}</p>
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
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mx-auto mb-6"></div>
              <p className="text-gray-700 font-semibold text-lg">Searching car rentals...</p>
              <p className="text-gray-500 text-sm mt-2">Finding the best vehicles for you</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-green-600">900+</p>
            <p className="text-sm text-gray-600">Suppliers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-green-600">Best Price</p>
            <p className="text-sm text-gray-600">Guaranteed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-green-600">Free</p>
            <p className="text-sm text-gray-600">Cancellation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookCarsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <CarSearchContent />
    </Suspense>
  );
}
