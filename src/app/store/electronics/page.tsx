import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaAmazon, FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Best Travel Electronics & Gadgets 2026 | GoTraveled Store',
  description: 'Shop essential travel electronics: portable chargers, adapters, headphones, cameras and more tech gear for travelers.',
};

export default function ElectronicsPage() {
  const products = [
    {
      id: 1,
      name: 'Anker PowerCore 20000mAh Portable Charger',
      price: 49.99,
      rating: 4.6,
      reviews: 89234,
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80',
      amazonId: 'B00X5RV14Y',
      features: ['20000mAh Capacity', 'Fast Charging', 'Dual USB Ports', 'Compact Design']
    },
    {
      id: 2,
      name: 'Universal Travel Adapter with 4 USB Ports',
      price: 24.99,
      rating: 4.6,
      reviews: 45123,
      image: 'https://images.unsplash.com/photo-1591290619762-a5e0ca0b6fd4?w=400&q=80',
      amazonId: 'B07VLLBNN4',
      features: ['150+ Countries', '4 USB Ports', 'Type-C Fast Charge', 'Safety Certified']
    },
    {
      id: 3,
      name: 'Bose QuietComfort 45 Wireless Headphones',
      price: 279.00,
      rating: 4.8,
      reviews: 34567,
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&q=80',
      amazonId: 'B098FKXT8L',
      features: ['Noise Cancelling', '24hr Battery', 'Bluetooth 5.1', 'Premium Sound']
    },
    {
      id: 4,
      name: 'Apple AirTag 4 Pack - GPS Tracker',
      price: 99.00,
      rating: 4.7,
      reviews: 67890,
      image: 'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=400&q=80',
      amazonId: 'B0932QJ2JZ',
      features: ['Track Luggage', 'Find My Network', 'Replaceable Battery', 'Water Resistant']
    },
    {
      id: 5,
      name: 'GoPro HERO11 Black Action Camera',
      price: 349.99,
      rating: 4.7,
      reviews: 12345,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80',
      amazonId: 'B0B9SMTV9K',
      features: ['5.3K Video', 'Waterproof', 'Image Stabilization', 'Voice Control']
    },
    {
      id: 6,
      name: 'Kindle Paperwhite E-Reader (16 GB)',
      price: 139.99,
      rating: 4.8,
      reviews: 156789,
      image: 'https://images.unsplash.com/photo-1592496001020-d31bd830651f?w=400&q=80',
      amazonId: 'B08KTZ8249',
      features: ['Waterproof', 'Weeks Battery', 'Adjustable Light', '16GB Storage']
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container-custom">
          <Link href="/store" className="text-purple-100 hover:text-white mb-4 inline-block">
            ← Back to Store
          </Link>
          <h1 className="text-4xl font-bold mb-4">Travel Electronics & Gadgets</h1>
          <p className="text-xl text-purple-100">
            Essential tech gear to stay charged, connected, and entertained on the go
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-10">
                    ⭐ {product.rating}
                  </div>
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 h-14">{product.name}</h3>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({product.reviews.toLocaleString()})</span>
                  </div>

                  <ul className="text-sm text-gray-600 mb-4 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>

                  <div className="text-3xl font-bold text-blue-600 mb-4">${product.price}</div>

                  <a
                    href={`https://www.amazon.com/dp/${product.amazonId}?tag=gotraveled0a-20`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all text-center"
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
