import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart, FaStar, FaAmazon } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Travel Store - Best Travel Gear & Accessories | GoTraveled',
  description: 'Shop the best travel products, luggage, backpacks, accessories, and travel essentials. Curated selection of top-rated travel gear with Amazon prices.',
  keywords: 'travel store, travel gear, luggage, backpacks, travel accessories, travel products',
};

export default function StorePage() {
  const categories = [
    { name: 'Luggage & Bags', href: '/store/luggage', icon: '🎒', count: 25 },
    { name: 'Electronics', href: '/store/electronics', icon: '📱', count: 30 },
    { name: 'Travel Accessories', href: '/store/accessories', icon: '✈️', count: 40 },
    { name: 'Outdoor Gear', href: '/store/outdoor', icon: '🏕️', count: 20 },
    { name: 'Health & Safety', href: '/store/health', icon: '🏥', count: 15 },
    { name: 'Comfort & Sleep', href: '/store/comfort', icon: '😴', count: 18 },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Samsonite Omni PC Hardside Luggage',
      category: 'Luggage',
      price: 129.99,
      rating: 4.7,
      reviews: 12847,
      image: 'https://m.media-amazon.com/images/I/81EHRGIPyVL._AC_SL1500_.jpg',
      amazonId: 'B01J24H2K0',
      features: ['Expandable', 'Scratch Resistant', '10 Year Warranty']
    },
    {
      id: 2,
      name: 'Osprey Farpoint 40 Travel Backpack',
      category: 'Backpacks',
      price: 159.95,
      rating: 4.8,
      reviews: 5623,
      image: 'https://m.media-amazon.com/images/I/71WLbcfvXHL._AC_SL1500_.jpg',
      amazonId: 'B07VQYHVKM',
      features: ['Carry-on Size', 'Laptop Sleeve', 'Lifetime Guarantee']
    },
    {
      id: 3,
      name: 'Anker PowerCore 20000mAh Charger',
      category: 'Electronics',
      price: 49.99,
      rating: 4.6,
      reviews: 89234,
      image: 'https://m.media-amazon.com/images/I/61Py5wY1GDL._AC_SL1500_.jpg',
      amazonId: 'B00X5RV14Y',
      features: ['Fast Charging', 'Dual USB', '20000mAh']
    },
    {
      id: 4,
      name: 'BAGSMART Packing Cubes 8 Set',
      category: 'Accessories',
      price: 29.99,
      rating: 4.7,
      reviews: 15678,
      image: 'https://m.media-amazon.com/images/I/81UVrC1O3lL._AC_SL1500_.jpg',
      amazonId: 'B07Y4ZQKLS',
      features: ['8 Pieces', 'Waterproof', 'Multiple Sizes']
    },
    {
      id: 5,
      name: 'Bose QuietComfort 45 Headphones',
      category: 'Electronics',
      price: 279.00,
      rating: 4.8,
      reviews: 34567,
      image: 'https://m.media-amazon.com/images/I/51w+9ZPpucL._AC_SL1000_.jpg',
      amazonId: 'B098FKXT8L',
      features: ['Noise Cancelling', '24hr Battery', 'Bluetooth']
    },
    {
      id: 6,
      name: 'Trtl Travel Pillow',
      category: 'Comfort',
      price: 59.99,
      rating: 4.5,
      reviews: 23456,
      image: 'https://m.media-amazon.com/images/I/71q5lVoUcQL._AC_SL1500_.jpg',
      amazonId: 'B00LB7REFK',
      features: ['Ergonomic', 'Machine Washable', 'Compact']
    },
    {
      id: 7,
      name: 'Universal Travel Adapter USB-C',
      category: 'Electronics',
      price: 24.99,
      rating: 4.6,
      reviews: 45123,
      image: 'https://m.media-amazon.com/images/I/61vC96c6OzL._AC_SL1500_.jpg',
      amazonId: 'B07VLLBNN4',
      features: ['150+ Countries', '4 USB Ports', 'Fast Charging']
    },
    {
      id: 8,
      name: 'Compression Socks Travel (3 Pairs)',
      category: 'Health',
      price: 19.99,
      rating: 4.6,
      reviews: 8934,
      image: 'https://m.media-amazon.com/images/I/81YqCZJbIvL._AC_SL1500_.jpg',
      amazonId: 'B01LXO7T3W',
      features: ['Improve Circulation', 'Unisex', 'Graduated Compression']
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
            alt="Travel Store"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/90"></div>
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <FaShoppingCart className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travel Store
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Curated selection of the best travel gear, luggage, and accessories
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <FaAmazon className="text-2xl" />
                <span>Amazon Prices</span>
              </div>
              <span className="text-blue-300">•</span>
              <div>⭐ Top Rated Products</div>
              <span className="text-blue-300">•</span>
              <div>🚚 Fast Shipping</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 text-center group hover:bg-blue-50"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-base">{category.name}</h3>
                <p className="text-sm text-gray-500 font-medium">{category.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Travel Essentials</h2>
          <p className="section-subtitle text-center">
            Hand-picked products loved by travelers worldwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold z-10">
                    ⭐ {product.rating}
                  </div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <div className="text-xs text-primary font-semibold mb-1">{product.category}</div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  <ul className="text-xs text-gray-600 mb-3 space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-primary">
                      ${product.price}
                    </div>
                  </div>

                  <a
                    href={`https://www.amazon.com/dp/${product.amazonId}?tag=YOUR_AMAZON_TAG`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-2.5 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center"
                  >
                    <FaAmazon className="inline mr-2" />
                    Buy on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/store/all" className="btn-primary inline-block">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Shop Our Travel Store?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Curated Selection</h3>
              <p className="text-gray-600">
                Every product is hand-picked and tested by experienced travelers. We only recommend what we'd use ourselves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Best Prices</h3>
              <p className="text-gray-600">
                Shop directly on Amazon for competitive prices, fast shipping, and easy returns. No markup, just great deals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Top Rated</h3>
              <p className="text-gray-600">
                All products are highly rated with thousands of verified reviews. Travel with confidence knowing you have the best gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive travel gear guides and packing lists to find exactly what you need for your trip.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/blog" className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Travel Guides
            </Link>
            <Link href="/blog" className="bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-primary transform hover:scale-105 transition-all">
              Packing Lists
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
