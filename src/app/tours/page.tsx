import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tours & Activities - Book Experiences Worldwide | GoTraveled',
  description: 'Discover and book amazing tours, activities, and experiences around the world. From city tours to adventure activities.',
  keywords: 'tours, activities, experiences, sightseeing, adventure tours, city tours',
};

export default function ToursPage() {
  const categories = [
    {
      name: 'City Tours',
      description: 'Explore cities with guided tours',
      icon: '🏙️',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    },
    {
      name: 'Adventure Activities',
      description: 'Thrilling outdoor adventures',
      icon: '🏔️',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
    },
    {
      name: 'Food & Wine Tours',
      description: 'Culinary experiences',
      icon: '🍷',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    },
    {
      name: 'Cultural Experiences',
      description: 'Immerse in local culture',
      icon: '🎭',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    },
    {
      name: 'Water Sports',
      description: 'Aquatic adventures',
      icon: '🏄',
      image: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=600&q=80',
    },
    {
      name: 'Nature & Wildlife',
      description: 'Explore natural wonders',
      icon: '🦁',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
    },
  ];

  const popularTours = [
    {
      title: 'Dubai Desert Safari with BBQ Dinner',
      location: 'Dubai, UAE',
      price: '$65',
      rating: 4.8,
      reviews: 2456,
      image: 'https://images.unsplash.com/photo-1559167357-d2bc0b036d9c?w=600&q=80',
    },
    {
      title: 'Eiffel Tower Skip-the-Line Tour',
      location: 'Paris, France',
      price: '$45',
      rating: 4.9,
      reviews: 3821,
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80',
    },
    {
      title: 'Bali Temple & Rice Terrace Tour',
      location: 'Bali, Indonesia',
      price: '$35',
      rating: 4.7,
      reviews: 1987,
      image: 'https://images.unsplash.com/photo-1555400082-93d78760e1cb?w=600&q=80',
    },
    {
      title: 'Tokyo Food Walking Tour',
      location: 'Tokyo, Japan',
      price: '$85',
      rating: 4.9,
      reviews: 2103,
      image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=600&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Tours & Activities Worldwide
          </h1>
          <p className="text-xl mb-8 text-center">
            Discover unforgettable experiences and adventures around the globe
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="input-field text-gray-900"
              />
              <input
                type="date"
                className="input-field text-gray-900"
              />
              <button className="btn-primary">Search Tours</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Browse by Category</h2>
          <p className="section-subtitle text-center">
            Find the perfect activity for your adventure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="card group cursor-pointer">
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">{category.icon}</div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Popular Tours & Activities</h2>
          <p className="section-subtitle text-center">
            Top-rated experiences chosen by travelers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTours.map((tour) => (
              <div key={tour.title} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{tour.location}</p>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="text-yellow-500">⭐ {tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      {tour.price}
                    </span>
                    <button className="btn-primary text-sm px-4 py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Book Tours With GoTraveled?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Find the best prices or we'll refund the difference
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Reviews</h3>
              <p className="text-gray-600">
                Real reviews from real travelers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Booking</h3>
              <p className="text-gray-600">
                Safe and secure payment processing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💬
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Customer support whenever you need it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Tour Booking Tips</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Book in Advance
              </h3>
              <p className="text-gray-700">
                Popular tours and activities can sell out quickly, especially during peak seasons. 
                Book at least a week in advance to secure your spot and often get better prices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Check Cancellation Policy
              </h3>
              <p className="text-gray-700">
                Always review the cancellation policy before booking. Many tours offer free 
                cancellation up to 24 hours before the activity starts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Read Reviews
              </h3>
              <p className="text-gray-700">
                Check recent reviews to get honest feedback from other travelers. Look for comments 
                about the guide, group size, and overall experience quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Arrive Early
              </h3>
              <p className="text-gray-700">
                Plan to arrive at the meeting point 15 minutes early. This ensures you don't miss 
                the tour and gives you time to check in and ask any last-minute questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
