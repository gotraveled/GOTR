'use client';

import { useEffect, useRef, useState } from 'react';

const FlightSearchWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadWidget = () => {
      try {
        if (!containerRef.current) return;

        // Clear any existing content
        containerRef.current.innerHTML = '';

        // Create script element
        const script = document.createElement('script');
        script.charset = 'utf-8';
        script.src = '//www.travelpayouts.com/widgets/50a14f00d3b26e2e0df91f06811211da.js?v=2213';
        script.async = true;
        
        script.onload = () => {
          setIsLoading(false);
          setHasError(false);
        };
        
        script.onerror = () => {
          setIsLoading(false);
          setHasError(true);
        };

        // Create widget container
        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'travelpayouts-widget';
        widgetDiv.setAttribute('data-marker', '250882');
        
        containerRef.current.appendChild(widgetDiv);
        containerRef.current.appendChild(script);

        // Timeout fallback
        const timeout = setTimeout(() => {
          if (isLoading) {
            setHasError(true);
            setIsLoading(false);
          }
        }, 10000);

        return () => {
          clearTimeout(timeout);
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
          }
        };
      } catch (error) {
        console.error('Widget loading error:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadWidget();
  }, []);

  if (hasError) {
    return (
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Search Flights</h3>
        <p className="text-gray-600 mb-6">
          Use our direct flight search to find the best deals from hundreds of airlines worldwide.
        </p>
        <a
          href="https://www.aviasales.com/?marker=250882"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Search Flights Now →
        </a>
      </div>
    );
  }

  return (
    <div className="relative min-h-[450px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading flight search widget...</p>
          </div>
        </div>
      )}
      <div ref={containerRef} className="w-full" />
    </div>
  );
};

export default FlightSearchWidget;
