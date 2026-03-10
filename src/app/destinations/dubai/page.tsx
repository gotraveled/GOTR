import type { Metadata } from 'next';
import Image from 'next/image';
import FlightDealsWidget from '@/components/widgets/FlightDealsWidget';
import HotelWidget from '@/components/widgets/HotelWidget';
import TaxiWidget from '@/components/widgets/TaxiWidget';

export const metadata: Metadata = {
  title: 'Dubai Travel Guide 2026 - Flights, Hotels & Things to Do | GoTraveled',
  description: 'Complete Dubai travel guide with tips on best hotels, cheap flights, airport transfers, top attractions, and insider travel advice for visiting Dubai, UAE.',
  keywords: 'Dubai travel guide, Dubai hotels, flights to Dubai, Dubai attractions, Dubai travel tips, visit Dubai',
};

export default function DubaiPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Discover Dubai
            </h1>
            <p className="text-2xl">The City of Gold and Modern Marvels</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Why Visit Dubai?</h2>
            <p className="text-gray-700 mb-4">
              Dubai, the crown jewel of the United Arab Emirates, is a mesmerizing blend of 
              traditional Arabian culture and ultra-modern architecture. This dynamic city has 
              transformed from a small fishing village into one of the world's most visited 
              destinations, attracting over 16 million tourists annually.
            </p>
            <p className="text-gray-700 mb-4">
              From the world's tallest building, the Burj Khalifa, to pristine beaches, luxury 
              shopping malls, and thrilling desert safaris, Dubai offers something for every 
              traveler. Whether you're seeking adventure, relaxation, or cultural experiences, 
              this vibrant metropolis delivers unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Find Flights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Find Cheap Flights to Dubai</h2>
          <p className="section-subtitle text-center">
            Compare prices and book the best flight deals to Dubai International Airport (DXB)
          </p>
          <FlightDealsWidget />
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Top Attractions in Dubai</h2>
          
          <div className="space-y-8 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">1. Burj Khalifa</h3>
                <p className="text-gray-700 mb-4">
                  Standing at 828 meters (2,717 feet), the Burj Khalifa is the world's tallest 
                  building and Dubai's most iconic landmark. Visit the observation decks on the 
                  124th, 125th, and 148th floors for breathtaking 360-degree views of the city, 
                  desert, and ocean.
                </p>
                <p className="text-gray-700">
                  <strong>Pro Tip:</strong> Book tickets online in advance to save money and avoid 
                  long queues. Sunset visits offer stunning views as the city transitions from day 
                  to night.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
                  alt="Burj Khalifa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80"
                  alt="Dubai Mall"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">2. The Dubai Mall</h3>
                <p className="text-gray-700 mb-4">
                  The Dubai Mall is the world's largest shopping and entertainment destination, 
                  featuring over 1,200 stores, an aquarium, ice rink, and the spectacular Dubai 
                  Fountain show. It's not just about shopping - it's a complete entertainment 
                  experience.
                </p>
                <p className="text-gray-700">
                  <strong>Must-See:</strong> The Dubai Aquarium & Underwater Zoo houses thousands 
                  of aquatic animals, including sharks and rays.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">3. Palm Jumeirah</h3>
                <p className="text-gray-700 mb-4">
                  This iconic man-made island in the shape of a palm tree is home to luxury resorts, 
                  pristine beaches, and world-class restaurants. The Palm Jumeirah represents Dubai's 
                  ambition and engineering prowess.
                </p>
                <p className="text-gray-700">
                  <strong>Experience:</strong> Visit Atlantis, The Palm for water parks, aquariums, 
                  and stunning views from The View at The Palm observation deck.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Palm Jumeirah"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80"
                  alt="Dubai Desert Safari"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">4. Desert Safari</h3>
                <p className="text-gray-700 mb-4">
                  Experience the magic of the Arabian desert with dune bashing, camel riding, 
                  sandboarding, and traditional Bedouin camp entertainment. Desert safaris are 
                  typically offered in the late afternoon, including dinner and cultural performances.
                </p>
                <p className="text-gray-700">
                  <strong>Book:</strong> Evening desert safaris with BBQ dinner and entertainment 
                  are the most popular option for first-time visitors.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">5. Dubai Marina</h3>
                <p className="text-gray-700 mb-4">
                  Dubai Marina is a stunning waterfront development featuring a beautiful promenade, 
                  luxury yachts, restaurants, and cafes. Take a dhow cruise for dinner or explore 
                  the Marina Walk for shopping and dining.
                </p>
                <p className="text-gray-700">
                  <strong>Evening Activity:</strong> The Marina comes alive at night with illuminated 
                  skyscrapers and a vibrant dining scene.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80"
                  alt="Dubai Marina"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Find the Best Hotels in Dubai</h2>
          <p className="section-subtitle text-center">
            From luxury resorts to budget-friendly options, find your perfect accommodation
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <HotelWidget />
          </div>
        </div>
      </section>

      {/* Airport Transfers */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Book Airport Transfers</h2>
          <p className="section-subtitle text-center">
            Pre-book reliable airport pickup from Dubai International Airport
          </p>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <TaxiWidget />
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Essential Dubai Travel Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Best Time to Visit</h3>
              <p className="text-gray-700">
                November to March offers the most pleasant weather with temperatures between 20-30°C 
                (68-86°F). Avoid summer months (June-August) when temperatures exceed 40°C (104°F). 
                The Dubai Shopping Festival in January offers amazing deals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Currency & Payment</h3>
              <p className="text-gray-700">
                The currency is UAE Dirham (AED). Credit cards are widely accepted. ATMs are readily 
                available. Tipping is appreciated but not mandatory - 10% is standard in restaurants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Dress Code</h3>
              <p className="text-gray-700">
                While Dubai is modern and tolerant, dress modestly in public places. Cover shoulders 
                and knees when visiting malls, restaurants, and cultural sites. Beachwear is acceptable 
                only at beaches and pools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Transportation</h3>
              <p className="text-gray-700">
                Dubai Metro is efficient and affordable for getting around. Taxis are metered and 
                relatively cheap. Ride-sharing apps like Uber and Careem are widely used. Consider 
                renting a car for flexibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Language</h3>
              <p className="text-gray-700">
                Arabic is the official language, but English is widely spoken everywhere. Most signs, 
                menus, and announcements are in both Arabic and English, making it very tourist-friendly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Safety</h3>
              <p className="text-gray-700">
                Dubai is one of the safest cities in the world with extremely low crime rates. However, 
                always keep valuables secure and be aware of your surroundings, especially in crowded areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title">Dubai Budget Guide</h2>
          
          <div className="space-y-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Budget Travel ($50-100/day)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Budget hotel or hostel: $30-50</li>
                <li>Local food and street eats: $15-25</li>
                <li>Public transportation: $5-10</li>
                <li>Free attractions and beaches: $0-15</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Mid-Range Travel ($150-300/day)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>3-4 star hotel: $80-150</li>
                <li>Restaurant meals: $40-70</li>
                <li>Taxis and tours: $30-50</li>
                <li>Paid attractions: $20-30</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Luxury Travel ($400+/day)</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>5-star hotel or resort: $250-500+</li>
                <li>Fine dining: $100-200</li>
                <li>Private tours and experiences: $100-300</li>
                <li>Premium attractions and activities: $50-100</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
