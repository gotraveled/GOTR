import type { Metadata } from 'next';
import Image from 'next/image';
import FlightDealsWidget from '@/components/widgets/FlightDealsWidget';
import HotelWidget from '@/components/widgets/HotelWidget';
import TaxiWidget from '@/components/widgets/TaxiWidget';

export const metadata: Metadata = {
  title: 'Paris Travel Guide 2026 - Flights, Hotels & Things to Do | GoTraveled',
  description: 'Complete Paris travel guide with tips on best hotels, cheap flights, airport transfers, top attractions like Eiffel Tower, and insider travel advice.',
  keywords: 'Paris travel guide, Paris hotels, flights to Paris, Paris attractions, Eiffel Tower, Louvre Museum',
};

export default function ParisPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80"
          alt="Paris Eiffel Tower"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Discover Paris
            </h1>
            <p className="text-2xl">The City of Light and Romance</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Visit Paris?</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Paris, the capital of France, is one of the most romantic and visited cities in the world. 
              Known as the City of Light, Paris offers an unparalleled blend of history, art, fashion, 
              gastronomy, and culture that captivates millions of visitors each year.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              From the iconic Eiffel Tower to world-class museums like the Louvre, from charming cafes 
              to haute couture fashion houses, Paris promises unforgettable experiences at every corner. 
              Whether you're strolling along the Seine, exploring Montmartre, or enjoying French cuisine, 
              Paris never disappoints.
            </p>
          </div>
        </div>
      </section>

      {/* Find Flights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Find Cheap Flights to Paris</h2>
          <p className="section-subtitle text-center">
            Compare prices and book the best flight deals to Paris Charles de Gaulle Airport (CDG)
          </p>
          <FlightDealsWidget />
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Top Attractions in Paris</h2>
          
          <div className="space-y-12 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">1. Eiffel Tower</h3>
                <p className="text-gray-700 mb-4">
                  The iconic iron lattice tower stands 330 meters tall and is the symbol of Paris. 
                  Built in 1889, it offers breathtaking views of the city from its three levels. 
                  Visit at sunset for spectacular views as the city lights up.
                </p>
                <p className="text-gray-700">
                  <strong>Pro Tip:</strong> Book tickets online in advance to skip the long queues. 
                  The tower sparkles every hour after sunset for 5 minutes.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80"
                  alt="Eiffel Tower"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80"
                  alt="Louvre Museum"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">2. Louvre Museum</h3>
                <p className="text-gray-700 mb-4">
                  The world largest art museum and a historic monument in Paris. Home to 
                  35,000 works of art including the Mona Lisa, Venus de Milo, and countless 
                  masterpieces spanning thousands of years.
                </p>
                <p className="text-gray-700">
                  <strong>Must-See:</strong> Allocate at least 3-4 hours. The museum is free 
                  on the first Sunday of each month.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">3. Notre-Dame Cathedral</h3>
                <p className="text-gray-700 mb-4">
                  A masterpiece of Gothic architecture, Notre-Dame has been at the heart of 
                  Paris for over 850 years. While currently under restoration following the 
                  2019 fire, the exterior and surrounding area remain stunning.
                </p>
                <p className="text-gray-700">
                  <strong>Visit:</strong> Île de la Cité, where Notre-Dame sits, is perfect 
                  for a riverside walk and exploring nearby Sainte-Chapelle.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
                  alt="Notre-Dame Cathedral"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80"
                  alt="Champs-Élysées"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-primary">4. Champs-Élysées</h3>
                <p className="text-gray-700 mb-4">
                  The most famous avenue in Paris, stretching from Place de la Concorde to 
                  the Arc de Triomphe. Lined with luxury shops, cafes, and theaters, it is 
                  the epitome of Parisian elegance.
                </p>
                <p className="text-gray-700">
                  <strong>Experience:</strong> Walk the avenue at night when the Arc de 
                  Triomphe is illuminated and the city comes alive.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">5. Montmartre & Sacré-Cœur</h3>
                <p className="text-gray-700 mb-4">
                  The historic hilltop district of Montmartre is the heart of bohemian Paris. 
                  Crowned by the white-domed Sacré-Cœur Basilica, it offers stunning panoramic 
                  views of the city and charming cobblestone streets.
                </p>
                <p className="text-gray-700">
                  <strong>Explore:</strong> Visit Place du Tertre where artists paint portraits, 
                  and enjoy the lively atmosphere of this artistic neighborhood.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
                  alt="Montmartre"
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
          <h2 className="section-title text-center">Find the Best Hotels in Paris</h2>
          <p className="section-subtitle text-center">
            From luxury palaces to boutique hotels, find your perfect Parisian accommodation
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
            Pre-book reliable airport pickup from Charles de Gaulle or Orly Airport
          </p>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <TaxiWidget />
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Essential Paris Travel Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Best Time to Visit</h3>
              <p className="text-gray-700">
                April to June and September to October offer the best weather with fewer crowds. 
                Summer (July-August) is peak season with higher prices. Winter has charm with 
                Christmas markets but can be cold and rainy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Getting Around</h3>
              <p className="text-gray-700">
                The Paris Metro is efficient, affordable, and covers the entire city. Purchase 
                a Navigo pass for unlimited travel. Walking is also wonderful for exploring 
                neighborhoods. Taxis and Uber are readily available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Language & Culture</h3>
              <p className="text-gray-700">
                While many Parisians speak English, learning basic French phrases is appreciated. 
                Always greet with "Bonjour" when entering shops. Tipping 5-10% is customary in 
                restaurants. Service charge is usually included.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Must-Try Foods</h3>
              <p className="text-gray-700">
                Croissants and baguettes for breakfast, authentic French onion soup, escargot, 
                coq au vin, and crème brûlée. Visit local bistros and brasseries for authentic 
                experiences. Don't miss macarons from Ladurée or Pierre Hermé.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Safety & Pickpockets</h3>
              <p className="text-gray-700">
                Paris is generally safe, but be aware of pickpockets in tourist areas, metros, 
                and around major attractions. Keep valuables secure, avoid showing expensive 
                items, and be cautious of distraction scams.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Museum Pass</h3>
              <p className="text-gray-700">
                Consider buying the Paris Museum Pass (2, 4, or 6 days) for unlimited access 
                to 60+ museums and monuments. Skip-the-line access can save hours of waiting 
                at popular sites like the Louvre and Versailles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
