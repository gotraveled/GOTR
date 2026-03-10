import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaAmazon, FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Outdoor & Adventure Travel Gear | GoTraveled Store',
  description: 'Shop outdoor travel gear: backpacks, hiking boots, water bottles, and adventure essentials.',
};

export default function OutdoorPage() {
  const products = [
    {
      id: 1,
      name: 'Hydro Flask Water Bottle 32oz',
      price: 39.95,
      rating: 4.8,
      reviews: 67890,
      image: 'https://m.media-amazon.com/images/I/51nWbULJqQL._AC_SL1500_.jpg',
      amazonId: 'B01ACVR5IU',
      features: ['24hr Cold', '12hr Hot', 'BPA-Free', 'Lifetime Warranty']
    },
    {
      id: 2,
      name: 'Hiking Daypack 40L',
      price: 49.99,
      rating: 4.6,
      reviews: 23456,
      image: 'https://m.media-amazon.com/images/I/81fA7wqH4pL._AC_SL1500_.jpg',
      amazonId: 'B07JM8KLM9',
      features: ['40L Capacity', 'Rain Cover', 'Breathable', 'Multiple Pockets']
    },
    {
      id: 3,
      name: 'Quick Dry Microfiber Towel',
      price: 16.99,
      rating: 4.7,
      reviews: 34567,
      image: 'https://m.media-amazon.com/images/I/71oQ5h3FfcL._AC_SL1500_.jpg',
      amazonId: 'B01GW3RETS',
      features: ['Quick Dry', 'Compact', 'Antimicrobial', 'Multiple Sizes']
    },
    {
      id: 4,
      name: 'Portable Camping Chair',
      price: 34.99,
      rating: 4.5,
      reviews: 12345,
      image: 'https://m.media-amazon.com/images/I/71R3LrAe5PL._AC_SL1500_.jpg',
      amazonId: 'B07PFBL7JJ',
      features: ['Lightweight', 'Portable Bag', '300lb Capacity', 'Easy Setup']
    },
    {
      id: 5,
      name: 'LED Headlamp Flashlight',
      price: 19.99,
      rating: 4.6,
      reviews: 45678,
      image: 'https://m.media-amazon.com/images/I/61tIipM5vaL._AC_SL1500_.jpg',
      amazonId: 'B07CYZP3QB',
      features: ['Super Bright', 'Waterproof', 'Long Battery', 'Adjustable']
    },
    {
      id: 6,
      name: 'Compression Dry Bags Set',
      price: 24.99,
      rating: 4.7,
      reviews: 18900,
      image: 'https://m.media-amazon.com/images/I/81PZVmtCQXL._AC_SL1500_.jpg',
      amazonId: 'B07G74K9RB',
      features: ['Waterproof', '3-Pack', 'Space Saving', 'Durable']
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
        <div className="container-custom">
          <Link href="/store" className="text-green-100 hover:text-white mb-4 inline-block">← Back to Store</Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Outdoor & Adventure Gear</h1>
          <p className="text-xl text-green-100">Essential gear for hiking, camping, and outdoor adventures</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                <div className="relative h-64">
                  <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-10">⭐ {product.rating}</div>
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-base text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.reviews.toLocaleString()})</span>
                  </div>
                  <ul className="text-sm text-gray-600 mb-4 space-y-2">
                    {product.features.map((feature, idx) => (<li key={idx}>✓ {feature}</li>))}
                  </ul>
                  <div className="text-3xl font-bold text-blue-600 mb-4">${product.price}</div>
                  <a href={`https://www.amazon.com/dp/${product.amazonId}?tag=gotraveled0a-20`} target="_blank" rel="noopener noreferrer sponsored" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all text-center">
                    <FaAmazon className="inline mr-2 text-xl" />Buy on Amazon
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
