import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock } from 'react-icons/fa';

const BlogSection = () => {
  const articles = [
    {
      title: 'Best Hotels in Bali',
      excerpt: 'Discover the most amazing hotels and resorts in Bali for an unforgettable tropical vacation.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      date: 'March 5, 2026',
      readTime: '5 min',
      slug: 'best-hotels-in-bali',
    },
    {
      title: 'Cheap Flights from India to Dubai',
      excerpt: 'Find the best deals on flights from India to Dubai and save money on your next trip.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
      date: 'March 4, 2026',
      readTime: '6 min',
      slug: 'cheap-flights-india-dubai',
    },
    {
      title: 'Top 10 Things to Do in Paris',
      excerpt: 'Experience the magic of Paris with our guide to the citys must-see attractions and hidden gems.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      date: 'March 3, 2026',
      readTime: '8 min',
      slug: 'top-10-things-paris',
    },
  ];

  return (
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="section-title">Travel Blog & Guides</h2>
        <p className="section-subtitle">
          Get inspired with travel tips, destination guides, and insider knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
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
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <FaCalendar className="text-primary" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="text-primary" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/blog" className="btn-primary">
          View All Articles
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
