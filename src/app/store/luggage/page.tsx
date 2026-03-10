import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaAmazon, FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Best Travel Luggage & Suitcases 2026 | GoTraveled Store',
  description: 'Shop top-rated luggage, carry-ons, and suitcases. From hardside to softside, find the perfect travel bag for your next trip.',
};

export default function LuggagePage() {
  const products = [
    {
      id: 1,
      name: 'Samsonite Omni PC Hardside Luggage',
      price: 129.99,
      rating: 4.7,
      reviews: 12847,
      image: 'https://m.media-amazon.com/images/I/81EHRGIPyVL._AC_SL1500_.jpg',
      amazonId: 'B01J24H2K0',
      features: ['Scratch Resistant', 'Expandable', '10 Year Warranty', 'Spinner Wheels']
    },
    {
      id: 2,
      name: 'Travelpro Maxlite 5 Softside Luggage',
      price: 89.99,
      rating: 4.6,
      reviews: 8234,
      image: 'https://m.media-amazon.com/images/I/81rHGBZe5OL._AC_SL1500_.jpg',
      amazonId: 'B01MUC4OB9',
      features: ['Lightweight', 'Expandable', 'USB Port', 'Water Resistant']
    },
    {
      id: 3,
      name: 'Coolife Hardside Luggage Set',
      price: 169.99,
      rating: 4.5,
      reviews: 15623,
      image: 'https://m.media-amazon.com/images/I/81lVHjP5W2L._AC_SL1500_.jpg',
      amazonId: 'B07VLLBNN4',
      features: ['3 Piece Set', 'TSA Lock', 'Spinner Wheels', 'Durable']
    },
    {
      id: 4,
      name: 'Rockland Melbourne Hardside Luggage',
      price: 59.99,
      rating: 4.4,
      reviews: 23456,
      image: 'https://m.media-amazon.com/images/I/81jOCRaBmkL._AC_SL1500_.jpg',
      amazonId: 'B00F9S8FOO',
      features: ['Budget Friendly', 'Multiple Colors', 'Expandable', 'Scratch Resistant']
    },
    {
      id: 5,
      name: 'Delsey Paris Helium Aero Hardside',
      price: 149.99,
      rating: 4.7,
      reviews: 9876,
      image: 'https://m.media-amazon.com/images/I/71FJY8tTF0L._AC_SL1500_.jpg',
      amazonId: 'B01LZMVKWH',
      features: ['Expandable', 'TSA Lock', '10 Year Warranty', 'Lightweight']
    },
    {
      id: 6,
      name: 'American Tourister Moonlight Luggage',
      price: 79.99,
      rating: 4.5,
      reviews: 17890,
      image: 'https://m.media-amazon.com/images/I/81RqfFP7WxL._AC_SL1500_.jpg',
      amazonId: 'B078RZ9JXL',
      features: ['Value Pick', 'Durable', 'Spinner Wheels', 'Multiple Sizes']
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-12">
        <div className="container-custom">
          <Link href="/store" className="text-orange-100 hover:text-white mb-4 inline-block">
            ← Back to Store
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Luggage & Suitcases</h1>
          <p className="text-xl text-orange-100">
            Premium luggage from top brands - durable, stylish, and travel-tested
          </p>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-8 bg-orange-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">🎯 How to Choose the Right Luggage</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold text-orange-600 mb-2">Size Matters</h3>
                <p className="text-sm text-gray-600">Carry-on (22") for short trips, checked (26-28") for longer journeys. Check airline restrictions.</p>
              </div>
              <div>
                <h3 className="font-bold text-orange-600 mb-2">Hard vs Soft</h3>
                <p className="text-sm text-gray-600">Hardside protects fragiles better. Softside is lighter and more flexible for packing.</p>
              </div>
              <div>
                <h3 className="font-bold text-orange-600 mb-2">Wheel Type</h3>
                <p className="text-sm text-gray-600">Spinner wheels (4-wheel) rotate 360°. Inline wheels (2-wheel) are more stable on uneven surfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-10">
                    ⭐ {product.rating}
                  </div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-base text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  <ul className="text-sm text-gray-600 mb-4 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-orange-600">
                      ${product.price}
                    </div>
                  </div>

                  <a
                    href={`https://www.amazon.com/dp/${product.amazonId}?tag=gotraveled0a-20`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center"
                  >
                    <FaAmazon className="inline mr-2 text-xl" />
                    Buy on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
