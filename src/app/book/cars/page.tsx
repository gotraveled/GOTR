'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CarRedirectContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get search parameters
    const pickupLocation = searchParams.get('pickup') || '';
    const dropoffLocation = searchParams.get('dropoff') || '';
    const pickupDate = searchParams.get('pickupDate') || '';
    const dropoffDate = searchParams.get('dropoffDate') || '';

    // Redirect to DiscoverCars with affiliate link
    const discoverCarsUrl = `https://www.discovercars.com/?a_aid=250882&pick_up=${encodeURIComponent(pickupLocation)}&drop_off=${encodeURIComponent(dropoffLocation)}&pick_up_date=${pickupDate}&drop_off_date=${dropoffDate}`;
    
    window.location.href = discoverCarsUrl;
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold mb-2">Redirecting to Car Rental Search</h2>
        <p className="text-gray-600">Please wait...</p>
      </div>
    </div>
  );
}

export default function BookCarsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <CarRedirectContent />
    </Suspense>
  );
}
