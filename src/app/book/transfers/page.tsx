'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaTaxi, FaArrowLeft } from 'react-icons/fa';

function TransferSearchContent() {
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get search parameters
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const date = searchParams.get('date') || '';
    const time = searchParams.get('time') || '12:00';

    // Build KiwiTaxi URL with affiliate marker
    const kiwiTaxiUrl = `https://www.kiwitaxi.com/?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}&time=${time}&partner=250882`;

    // Create iframe for KiwiTaxi integration
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      
      const iframe = document.createElement('iframe');
      iframe.src = kiwiTaxiUrl;
      iframe.style.width = '100%';
      iframe.style.height = '1200px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '0.75rem';
      iframe.setAttribute('loading', 'eager');
      
      containerRef.current.appendChild(iframe);
    }
  }, [searchParams]);

  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-6 shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <FaArrowLeft />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <FaTaxi className="text-2xl" />
              <div>
                <h1 className="text-2xl font-bold">Transfer Search Results</h1>
                {from && to && (
                  <p className="text-orange-100 text-sm">{from} → {to}</p>
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
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-600 mx-auto mb-6"></div>
              <p className="text-gray-700 font-semibold text-lg">Searching transfers...</p>
              <p className="text-gray-500 text-sm mt-2">Finding the best transfer options for you</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-orange-600">Fixed</p>
            <p className="text-sm text-gray-600">Prices</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-orange-600">Meet & Greet</p>
            <p className="text-sm text-gray-600">Service</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-2xl font-bold text-orange-600">24/7</p>
            <p className="text-sm text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookTransfersPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <TransferSearchContent />
    </Suspense>
  );
}
