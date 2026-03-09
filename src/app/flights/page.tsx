import type { Metadata } from 'next';
import Image from 'next/image';
import FlightSearchForm from '@/components/search/FlightSearchForm';
import FlightDealsWidget from '@/components/widgets/FlightDealsWidget';
import PopularRoutes from '@/components/PopularRoutes';

export const metadata: Metadata = {
  title: 'Cheap Flights - Compare & Book Airline Tickets | GoTraveled',
  description: 'Find and compare cheap flights from hundreds of airlines. Search, compare, and book the best flight deals worldwide with GoTraveled.',
  keywords: 'cheap flights, flight booking, airline tickets, flight deals, compare flights',
};

export default function FlightsPage() {
  const airlines = [
    'Emirates', 'Qatar Airways', 'Singapore Airlines', 
    'Lufthansa', 'British Airways', 'Air France'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Cheap Flights Worldwide
          </h1>
          <p className="text-xl mb-8">
            Compare prices from hundreds of airlines and travel agencies
          </p>
        </div>
      </section>

      {/* Flight Search Widget */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Search Flights</h2>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <FlightSearchForm />
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Popular Flight Routes</h2>
          <p className="section-subtitle text-center">
            Explore our most searched flight destinations
          </p>

          <PopularRoutes />
        </div>
      </section>

      {/* Cheap Flight Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Today's Best Flight Deals</h2>
          <p className="section-subtitle text-center">
            Handpicked deals updated daily
          </p>
          <FlightDealsWidget />
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Flight Booking Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Book in Advance
              </h3>
              <p className="text-gray-700">
                The best time to book flights is typically 2-3 months in advance for international 
                flights and 3-6 weeks for domestic flights to get the best prices.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Be Flexible with Dates
              </h3>
              <p className="text-gray-700">
                Flying on weekdays, especially Tuesday and Wednesday, is often cheaper than 
                weekend flights. Use our flexible date search to find the best deals.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Compare Airlines
              </h3>
              <p className="text-gray-700">
                Don't settle for the first price you see. Compare multiple airlines and booking 
                sites to ensure you're getting the best deal possible.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Consider Nearby Airports
              </h3>
              <p className="text-gray-700">
                Flying into or out of smaller nearby airports can sometimes save you significant 
                money, even with added transportation costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Airlines */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Partner Airlines</h2>
          <p className="section-subtitle text-center">
            Search flights from top airlines worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {airlines.map((airline) => (
              <div 
                key={airline}
                className="bg-white p-6 rounded-lg text-center font-semibold text-gray-700 shadow hover:shadow-lg transition-shadow"
              >
                {airline}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
