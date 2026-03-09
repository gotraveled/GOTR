import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tokyo Travel Guide 2026 - Best Districts, Hotels & Things to Do | GoTraveled',
  description: 'Complete Tokyo travel guide with tips on Shibuya, Shinjuku, temples, and attractions. Plan your perfect Tokyo trip.',
  keywords: 'Tokyo travel, Tokyo hotels, Shibuya, Shinjuku, Tokyo attractions, Japan travel',
};

export default function TokyoPage() {
  return (
    <div>
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80"
          alt="Tokyo Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Tokyo</h1>
            <p className="text-2xl">Where Tradition Meets Innovation</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Visit Tokyo?</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Tokyo is a mesmerizing metropolis where ancient temples coexist with futuristic 
            skyscrapers. Experience incredible food, cutting-edge technology, traditional culture, 
            and world-class shopping in Japan's dynamic capital.
          </p>
          
          <div className="my-12">
            <Link href="/flights" className="btn-primary mr-4">Find Flights to Tokyo</Link>
            <Link href="/hotels" className="btn-secondary">Book Hotels</Link>
          </div>

          <h2 className="text-3xl font-bold mb-6">Must-Visit Districts</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Shibuya</h3>
              <p className="text-gray-700">
                Experience the famous Shibuya Crossing, trendy fashion, and vibrant nightlife 
                in Tokyo's youth culture hub.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Shinjuku</h3>
              <p className="text-gray-700">
                Tokyo's busiest district with skyscrapers, department stores, restaurants, and 
                the beautiful Shinjuku Gyoen garden.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Asakusa</h3>
              <p className="text-gray-700">
                Visit the ancient Senso-ji Temple, traditional shops on Nakamise Street, and 
                experience old Tokyo charm.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Harajuku</h3>
              <p className="text-gray-700">
                Center of youth fashion and culture, home to Takeshita Street and the peaceful 
                Meiji Shrine.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Travel Tips</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>Best Time:</strong> March-May (cherry blossoms) or September-November</li>
            <li><strong>Currency:</strong> Japanese Yen (JPY), cash is king</li>
            <li><strong>Transport:</strong> JR Pass for trains, IC card for local transport</li>
            <li><strong>Language:</strong> English in tourist areas, learn basic phrases</li>
            <li><strong>Etiquette:</strong> Bow when greeting, no tipping, quiet on trains</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Tokyo?</h2>
          <Link href="/" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 inline-block">
            Search Now
          </Link>
        </div>
      </section>
    </div>
  );
}
