import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thailand Travel Guide 2026 - Bangkok, Islands & Temples | GoTraveled',
  description: 'Complete Thailand travel guide covering Bangkok, Phuket, Chiang Mai, and islands. Find flights, hotels, and travel tips.',
  keywords: 'Thailand travel, Bangkok, Phuket, Chiang Mai, Thai islands, Thailand hotels',
};

export default function ThailandPage() {
  return (
    <div>
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80"
          alt="Thailand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Thailand</h1>
            <p className="text-2xl">Land of Smiles</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Visit Thailand?</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Thailand offers an incredible mix of bustling cities, tranquil beaches, ancient temples, 
            and world-famous cuisine. From the vibrant streets of Bangkok to the pristine islands 
            of the south, Thailand captivates every traveler.
          </p>
          
          <div className="my-12">
            <Link href="/flights" className="btn-primary mr-4">Find Flights</Link>
            <Link href="/hotels" className="btn-secondary">Book Hotels</Link>
          </div>

          <h2 className="text-3xl font-bold mb-6">Top Destinations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Bangkok</h3>
              <p className="text-gray-700">
                Visit the Grand Palace, Wat Pho, floating markets, and experience amazing street food 
                in this vibrant capital city.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Phuket</h3>
              <p className="text-gray-700">
                Thailand's largest island offers beautiful beaches, water sports, nightlife, and 
                easy access to nearby islands like Phi Phi.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Chiang Mai</h3>
              <p className="text-gray-700">
                Northern Thailand's cultural capital, famous for ancient temples, night markets, 
                elephant sanctuaries, and mountain scenery.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Travel Essentials</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>Best Time:</strong> November-February (cool and dry season)</li>
            <li><strong>Currency:</strong> Thai Baht (THB)</li>
            <li><strong>Language:</strong> Thai, but English widely spoken in tourist areas</li>
            <li><strong>Visa:</strong> Many nationalities get 30-60 days visa-free</li>
            <li><strong>Transport:</strong> Domestic flights, trains, buses very affordable</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Thailand Adventure</h2>
          <Link href="/" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 inline-block">
            Search Flights & Hotels
          </Link>
        </div>
      </section>
    </div>
  );
}
