import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bali Travel Guide 2026 - Best Beaches, Hotels & Things to Do | GoTraveled',
  description: 'Complete Bali travel guide with tips on best beaches, hotels, temples, and attractions. Plan your perfect Bali vacation.',
  keywords: 'Bali travel guide, Bali hotels, Bali beaches, Ubud, Seminyak, Bali temples',
};

export default function BaliPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80"
          alt="Bali Beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Bali</h1>
            <p className="text-2xl">Island of Gods and Tropical Paradise</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Why Visit Bali?</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Bali, Indonesia's most famous island, offers stunning beaches, ancient temples, 
            lush rice terraces, and vibrant culture. From surfing in Canggu to temple visits 
            in Ubud, Bali has something for everyone.
          </p>
          
          <div className="my-12">
            <Link href="/flights" className="btn-primary mr-4">Find Flights to Bali</Link>
            <Link href="/hotels" className="btn-secondary">Book Hotels in Bali</Link>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Top Things to Do</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">1. Ubud Rice Terraces</h3>
              <p className="text-gray-700">
                Visit the iconic Tegalalang Rice Terraces, a UNESCO World Heritage site featuring 
                stunning stepped paddy fields carved into hillsides.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">2. Seminyak Beach</h3>
              <p className="text-gray-700">
                Enjoy world-class beach clubs, restaurants, and shopping in Bali's most upscale 
                beach resort area with stunning sunsets.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">3. Tanah Lot Temple</h3>
              <p className="text-gray-700">
                Ancient Hindu temple perched on a rock formation in the sea, offering spectacular 
                sunset views and cultural experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-primary">4. Uluwatu Temple</h3>
              <p className="text-gray-700">
                Clifftop temple with breathtaking ocean views. Watch the famous Kecak fire dance 
                performance at sunset.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Travel Tips</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><strong>Best Time:</strong> April-October for dry season, less rain</li>
            <li><strong>Currency:</strong> Indonesian Rupiah (IDR), exchange at official money changers</li>
            <li><strong>Transport:</strong> Rent a scooter or hire a driver for day trips</li>
            <li><strong>Visa:</strong> Many nationalities get 30-day visa on arrival</li>
            <li><strong>Respect:</strong> Dress modestly when visiting temples</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Bali?</h2>
          <p className="text-xl mb-8">Find the best deals on flights and hotels</p>
          <Link href="/" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 inline-block">
            Search Now
          </Link>
        </div>
      </section>
    </div>
  );
}
