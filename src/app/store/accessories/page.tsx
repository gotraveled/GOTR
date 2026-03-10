import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaAmazon, FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Travel Accessories & Organizers | GoTraveled Store',
  description: 'Shop essential travel accessories: packing cubes, toiletry bags, travel pillows, and organization essentials.',
};

export default function AccessoriesPage() {
  const products = [
    {
      id: 1,
      name: 'Packing Cubes Set of 6',
      price: 24.99,
      rating: 4.7,
      reviews: 28945,
      image: 'https://m.media-amazon.com/images/I/81UVrC1O3lL._AC_SL1500_.jpg',
      amazonId: 'B07Y4ZQKLS',
      features: ['6-Piece Set', 'Waterproof', 'Multiple Sizes', 'Durable Zippers']
    },
    {
      id: 2,
      name: 'TSA Approved Toiletry Bag',
      price: 16.99,
      rating: 4.6,
      reviews: 15234,
      image: 'https://m.media-amazon.com/images/I/71y0BX3a0RL._AC_SL1500_.jpg',
      amazonId: 'B07TD3XDNZ',
      features: ['Clear PVC', 'TSA Compliant', 'Leak-Proof', 'Hanging Hook']
    },
    {
      id: 3,
      name: 'Travel Neck Pillow Memory Foam',
      price: 19.99,
      rating: 4.5,
      reviews: 34567,
      image: 'https://m.media-amazon.com/images/I/71q5lVoUcQL._AC_SL1500_.jpg',
      amazonId: 'B07Q4SF2G4',
      features: ['Memory Foam', 'Washable Cover', 'Compact', '360° Support']
    },
    {
      id: 4,
      name: 'Luggage Tags Set of 4',
      price: 9.99,
      rating: 4.6,
      reviews: 12890,
      image: 'https://m.media-amazon.com/images/I/81MLVZH6PiL._AC_SL1500_.jpg',
      amazonId: 'B07F2V8FV5',
      features: ['Stainless Steel', 'Privacy Flap', 'Pack of 4', 'Easy to Spot']
    },
    {
      id: 5,
      name: 'Cable Organizer Travel Case',
      price: 14.99,
      rating: 4.7,
      reviews: 23456,
      image: 'https://m.media-amazon.com/images/I/81VRKkfYMBL._AC_SL1500_.jpg',
      amazonId: 'B07VQYHVKM',
      features: ['Multiple Pockets', 'Waterproof', 'Elastic Loops', 'Compact Design']
    },
    {
      id: 6,
      name: 'RFID Passport Holder Wallet',
      price: 12.99,
      rating: 4.8,
      reviews: 45678,
      image: 'https://m.media-amazon.com/images/I/81HXXR7VjPL._AC_SL1500_.jpg',
      amazonId: 'B077ZPXQ54',
      features: ['RFID Blocking', 'Passport + Cards', 'Vegan Leather', 'Slim Design']
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-12">
        <div className="container-custom">
          <Link href="/store" className="text-orange-100 hover:text-white mb-4 inline-block">
            ← Back to Store
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Accessories</h1>
          <p className="text-xl text-orange-100">
            Essential organizers and accessories to keep your trip smooth and stress-free
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
                  <h3 className="font-bold text-base text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                  
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

                  <div className="text-3xl font-bold text-orange-600 mb-4">${product.price}</div>

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
