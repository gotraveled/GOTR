'use client';

import { useEffect, useState } from 'react';
import { FaPlane, FaArrowRight } from 'react-icons/fa';

interface FlightDeal {
  origin: string;
  destination: string;
  price: number;
  currency: string;
  departure_at: string;
  return_at: string;
  airline: string;
}

const FlightDealsWidget = () => {
  const [deals, setDeals] = useState<FlightDeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        // Fetch real flight deals from Travelpayouts API
        // Popular routes: NYC, LAX, MIA, CHI, SFO to international destinations
        const response = await fetch('/api/flight-deals');
        
        if (response.ok) {
          const data = await response.json();
          if (data.deals && data.deals.length > 0) {
            setDeals(data.deals);
            setIsLoading(false);
            return;
          }
        }
        
        // Fallback to mock data if API fails
        const mockDeals: FlightDeal[] = [
          {
            origin: 'NYC',
            destination: 'London',
            price: 299,
            currency: 'USD',
            departure_at: '2026-04-15',
            return_at: '2026-04-22',
            airline: 'British Airways'
          },
          {
            origin: 'LAX',
            destination: 'Tokyo',
            price: 450,
            currency: 'USD',
            departure_at: '2026-05-10',
            return_at: '2026-05-20',
            airline: 'ANA'
          },
          {
            origin: 'NYC',
            destination: 'Paris',
            price: 320,
            currency: 'USD',
            departure_at: '2026-06-01',
            return_at: '2026-06-10',
            airline: 'Air France'
          },
          {
            origin: 'MIA',
            destination: 'Barcelona',
            price: 280,
            currency: 'USD',
            departure_at: '2026-04-20',
            return_at: '2026-04-28',
            airline: 'Iberia'
          },
          {
            origin: 'SFO',
            destination: 'Sydney',
            price: 580,
            currency: 'USD',
            departure_at: '2026-07-15',
            return_at: '2026-07-30',
            airline: 'Qantas'
          },
          {
            origin: 'CHI',
            destination: 'Dubai',
            price: 420,
            currency: 'USD',
            departure_at: '2026-05-05',
            return_at: '2026-05-15',
            airline: 'Emirates'
          }
        ];
        
        setDeals(mockDeals);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching deals:', err);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchDeals();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading flight deals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {deals.map((deal, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">{deal.origin}</p>
                <p className="text-xs text-gray-500">Origin</p>
              </div>
              <FaPlane className="text-blue-600 text-xl" />
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">{deal.destination}</p>
                <p className="text-xs text-gray-500">Destination</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600 mb-1">Round Trip from</p>
            <p className="text-3xl font-bold text-blue-600">
              ${deal.price}
            </p>
            <p className="text-xs text-gray-500 mt-1">{deal.airline}</p>
          </div>
          
          <div className="text-sm text-gray-600 mb-4">
            <p className="flex justify-between">
              <span>Depart:</span>
              <span className="font-semibold">{new Date(deal.departure_at).toLocaleDateString()}</span>
            </p>
            <p className="flex justify-between">
              <span>Return:</span>
              <span className="font-semibold">{new Date(deal.return_at).toLocaleDateString()}</span>
            </p>
          </div>
          
          <button
            onClick={() => {
              // Build flightSearch code from deal dates
              const depDate = new Date(deal.departure_at);
              const depDay = String(depDate.getDate()).padStart(2, '0');
              const depMonth = String(depDate.getMonth() + 1).padStart(2, '0');
              
              const retDate = new Date(deal.return_at);
              const retDay = String(retDate.getDate()).padStart(2, '0');
              const retMonth = String(retDate.getMonth() + 1).padStart(2, '0');
              
              const flightSearchCode = `${deal.origin}${depDay}${depMonth}${deal.destination}${retDay}${retMonth}1`;
              
              const params = new URLSearchParams();
              params.append('flightSearch', flightSearchCode);
              params.append('destination_airports', '0');
              params.append('origin_airports', '1');
              params.append('marker', '250882');
              
              window.location.href = `https://book.gotraveled.com/?${params.toString()}`;
            }}
            className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-bold py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
          >
            View Deal <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FlightDealsWidget;
