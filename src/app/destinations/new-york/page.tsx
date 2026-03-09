import type { Metadata } from 'next';
import Image from 'next/image';
import HotelWidget from '@/components/widgets/HotelWidget';
import ToursWidget from '@/components/widgets/ToursWidget';

export const metadata: Metadata = {
  title: 'New York Travel Guide 2026 - NYC Hotels, Tours & Attractions | GoTraveled',
  description: 'Complete New York City travel guide with tips on best hotels, tours, top attractions, and insider advice for visiting NYC.',
};

export default function NewYorkPage() {
  const attractions = [
    {
      name: 'Statue of Liberty & Ellis Island',
      description: 'Visit America\'s most iconic symbol of freedom. Take the ferry to Liberty Island and explore the museum. Book tickets months in advance for crown access.',
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80'
    },
    {
      name: 'Central Park',
      description: 'NYC\'s 843-acre urban oasis. Rent bikes, visit Bethesda Fountain, Bow Bridge, and Strawberry Fields. Free outdoor concerts in summer.',
      image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80'
    },
    {
      name: 'Empire State Building',
      description: 'Iconic Art Deco skyscraper with observation decks on 86th and 102nd floors. Best views at sunset. Buy skip-the-line tickets online.',
      image: 'https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&q=80'
    },
    {
      name: 'Times Square',
      description: 'The heart of NYC with dazzling billboards, Broadway theaters, and street performers. Visit both day and night for different experiences.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80"
          alt="New York City Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">New York City</h1>
            <p className="text-2xl">The City That Never Sleeps</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Visit New York?</h2>
          <p className="text-gray-700 mb-4">
            New York City is the ultimate urban destination where world-class museums, iconic landmarks, 
            diverse neighborhoods, and endless entertainment come together. From the bright lights of 
            Times Square to the serenity of Central Park, NYC offers experiences for every traveler.
          </p>
          <p className="text-gray-700">
            With 8.3 million residents, NYC is America's largest city and a global hub for finance, 
            culture, fashion, and food. Whether it's your first visit or your fiftieth, the city 
            always has something new to discover.
          </p>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Must-See Attractions</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {attractions.map((attraction, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={attraction.image} alt={attraction.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{attraction.name}</h3>
                  <p className="text-gray-700">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Find Hotels in New York</h2>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <HotelWidget />
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Book Tours & Activities</h2>
          <ToursWidget city="New York" partnerId="250882" />
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title">NYC Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Best Time to Visit</h3>
              <p className="text-gray-700">
                April-June and September-November offer pleasant weather and fewer crowds. 
                Winter is magical with holiday decorations but cold. Summer is hot and crowded.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Getting Around</h3>
              <p className="text-gray-700">
                Subway is fastest and cheapest ($2.90/ride). Get a MetroCard for unlimited rides. 
                Taxis and Uber available everywhere. Walking is great for exploring neighborhoods.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Budget Tips</h3>
              <p className="text-gray-700">
                Many museums have "pay what you wish" hours. Walk the High Line and Brooklyn Bridge for free. 
                Eat at food trucks and pizza joints. Stay in Brooklyn or Queens for cheaper hotels.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-gray-700">
                NYC is safe but stay alert. Keep valuables secure in crowded areas. 
                Stick to well-lit streets at night. Be wary of street scams near tourist spots.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
