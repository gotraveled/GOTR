import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Travel Blog - Tips, Guides & Inspiration | GoTraveled',
  description: 'Read our travel blog for destination guides, money-saving tips, and travel inspiration from around the world.',
  keywords: 'travel blog, travel tips, destination guides, travel inspiration',
};

export default function BlogPage() {
  const articles = [
    {
      title: 'Best Hotels in Bali: Luxury to Budget Options',
      excerpt: 'Discover the most amazing hotels and resorts in Bali for an unforgettable tropical vacation. From luxury beachfront villas to budget-friendly hostels.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      category: 'Hotels',
      date: 'March 5, 2026',
      readTime: '8 min',
      slug: 'best-hotels-in-bali',
    },
    {
      title: 'How to Find Cheap Flights from India to Dubai',
      excerpt: 'Find the best deals on flights from India to Dubai and save money on your next trip with these expert tips and booking strategies.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      category: 'Flights',
      date: 'March 4, 2026',
      readTime: '6 min',
      slug: 'cheap-flights-india-dubai',
    },
    {
      title: 'Top 10 Things to Do in Paris',
      excerpt: 'Experience the magic of Paris with our guide to the city must-see attractions, hidden gems, and insider tips for first-time visitors.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      category: 'Destinations',
      date: 'March 3, 2026',
      readTime: '10 min',
      slug: 'top-10-things-paris',
    },
    {
      title: 'Thailand Travel Guide: Complete 2-Week Itinerary',
      excerpt: 'Plan the perfect Thailand adventure with our comprehensive 2-week itinerary covering Bangkok, Chiang Mai, and the best Thai islands.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      category: 'Destinations',
      date: 'March 2, 2026',
      readTime: '12 min',
      slug: 'thailand-travel-guide',
    },
    {
      title: 'Best Time to Visit Japan: Cherry Blossoms & More',
      excerpt: 'Learn about the best seasons to visit Japan, from cherry blossom season to autumn foliage, and plan your perfect Japanese adventure.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      category: 'Travel Tips',
      date: 'March 1, 2026',
      readTime: '7 min',
      slug: 'best-time-visit-japan',
    },
    {
      title: '15 Money-Saving Tips for Budget Travelers',
      excerpt: 'Travel more for less with these proven money-saving strategies. Learn how to find deals, cut costs, and maximize your travel budget.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80',
      category: 'Travel Tips',
      date: 'February 28, 2026',
      readTime: '9 min',
      slug: 'money-saving-tips-budget-travelers',
    },
  ];

  const categories = ['All', 'Destinations', 'Hotels', 'Flights', 'Travel Tips'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Blog & Guides
          </h1>
          <p className="text-xl">
            Get inspired with expert travel tips, destination guides, and insider knowledge
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <Link href={`/blog/${articles[0].slug}`} className="card group overflow-hidden grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {articles[0].category}
              </span>
              <h3 className="text-3xl font-bold mt-4 mb-4 group-hover:text-primary transition-colors">
                {articles[0].title}
              </h3>
              <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaCalendar className="text-primary" />
                  <span>{articles[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="text-primary" />
                  <span>{articles[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Link 
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-primary" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-primary" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Travel Tip</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for exclusive deals and travel inspiration
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
