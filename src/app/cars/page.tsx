import type { Metadata } from 'next';
import CarWidget from '@/components/widgets/CarWidget';

export const metadata: Metadata = {
  title: 'Car Rental - Compare Prices & Book the Best Deals | GoTraveled',
  description: 'Find and compare car rental prices from top companies worldwide. Book the perfect rental car for your trip and save money.',
  keywords: 'car rental, rent a car, car hire, cheap car rentals, rental cars',
};

export default function CarsPage() {
  const rentalCompanies = [
    'Hertz', 'Enterprise', 'Avis', 'Budget', 
    'Europcar', 'Sixt', 'Thrifty', 'National'
  ];

  const popularCities = [
    {
      city: 'Los Angeles',
      country: 'USA',
      price: '$25/day',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      price: '$30/day',
    },
    {
      city: 'London',
      country: 'UK',
      price: '$28/day',
    },
    {
      city: 'Barcelona',
      country: 'Spain',
      price: '$22/day',
    },
    {
      city: 'Sydney',
      country: 'Australia',
      price: '$35/day',
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      price: '$40/day',
    },
  ];

  const affiliateUrl = 'https://www.discovercars.com/?a_aid=250882';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compare Car Rental Prices
          </h1>
          <p className="text-xl mb-8">
            Find the best car rental deals from top companies worldwide
          </p>
        </div>
      </section>

      {/* Car Search Widget */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <CarWidget />
          </div>
        </div>
      </section>

      {/* Popular Rental Cities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Popular Car Rental Destinations</h2>
          <p className="section-subtitle text-center">
            Find great car rental deals in these top locations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCities.map((location) => (
              <div key={location.city} className="card p-6">
                <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
                <p className="text-gray-600 mb-4">{location.country}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-xl">From {location.price}</span>
                  <a
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Search
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Choose Your Car Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Economy</h3>
              <p className="text-gray-600 mb-4">Perfect for budget travelers</p>
              <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                From $20/day →
              </a>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚙</div>
              <h3 className="text-xl font-bold mb-2">SUV</h3>
              <p className="text-gray-600 mb-4">Spacious and comfortable</p>
              <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                From $45/day →
              </a>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚐</div>
              <h3 className="text-xl font-bold mb-2">Van</h3>
              <p className="text-gray-600 mb-4">Ideal for groups</p>
              <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                From $60/day →
              </a>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🏎️</div>
              <h3 className="text-xl font-bold mb-2">Luxury</h3>
              <p className="text-gray-600 mb-4">Premium experience</p>
              <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                From $100/day →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Best Rental Companies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Top Car Rental Companies</h2>
          <p className="section-subtitle text-center">
            Compare prices from leading rental companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rentalCompanies.map((company) => (
              <div 
                key={company}
                className="bg-gray-50 p-6 rounded-lg text-center font-semibold text-gray-700 hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Rental Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Car Rental Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Book in Advance
              </h3>
              <p className="text-gray-700">
                Booking your rental car weeks in advance can save you up to 30% compared to 
                last-minute bookings, especially during peak travel seasons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Check Insurance Coverage
              </h3>
              <p className="text-gray-700">
                Review your credit card benefits and personal auto insurance to see if you're 
                already covered before purchasing additional rental insurance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Inspect Before Driving
              </h3>
              <p className="text-gray-700">
                Always inspect the car thoroughly before leaving the rental lot. Document any 
                existing damage with photos to avoid disputes when returning the vehicle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Fuel Policy
              </h3>
              <p className="text-gray-700">
                Understand the fuel policy. Full-to-full is usually the best deal - pick up with 
                a full tank and return it full to avoid expensive refueling charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Compare Prices
              </h3>
              <p className="text-gray-700">
                Use comparison sites to check prices across multiple rental companies. The same 
                car can have significantly different prices from different providers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Airport vs City Locations
              </h3>
              <p className="text-gray-700">
                Airport rentals are convenient but often more expensive due to additional fees. 
                Consider city locations if you can arrange transportation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
