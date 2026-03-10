'use client';

import Image from 'next/image';
import Link from 'next/link';
import GetYourGuideWidget from '@/components/widgets/GetYourGuideWidget';
import { useEffect } from 'react';

export default function ToursPage() {
  useEffect(() => {
    document.title = 'Tours & Activities - Book Experiences Worldwide | GoTraveled';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover and book amazing tours, activities, and experiences around the world. From city tours to adventure activities.');
    }
  }, []);
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
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
            alt="India Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-pink-600/85 to-purple-700/90"></div>
        </div>
        <div className="container-custom relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            India Tour Packages & International Tours
          </h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Explore incredible India and discover amazing international destinations with our curated tour packages
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Choose Your Adventure</h2>
          <p className="section-subtitle text-center">Complete tour packages with accommodation, transport, and sightseeing</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            <Link href="/tours/domestic" className="group block">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image 
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80" 
                    alt="Domestic India Tours" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-4xl font-bold mb-3">🇮🇳 Domestic Tours</h3>
                    <p className="text-lg mb-2">Explore Incredible India</p>
                    <p className="text-sm text-gray-200">Kashmir • Himachal • Rajasthan • Kerala • Goa</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Discover India's diverse landscapes from Himalayan peaks to tropical beaches. 35+ destinations including Kashmir, Shimla, Jaipur, Kerala, and more.</p>
                  <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                    <span>Explore Domestic Tours</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/tours/international" className="group block">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="relative h-80">
                  <Image 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" 
                    alt="International Tours" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-4xl font-bold mb-3">🌍 International Tours</h3>
                    <p className="text-lg mb-2">Discover the World</p>
                    <p className="text-sm text-gray-200">Dubai • Singapore • Thailand • Europe • Bali</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Experience world-class destinations across Asia, Middle East, and Europe. 9 international packages including Dubai, Thailand, Singapore, and more.</p>
                  <div className="flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform">
                    <span>Explore International Tours</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Regions */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Popular Regions in India</h2>
          <p className="section-subtitle text-center">Explore diverse landscapes and rich cultural heritage</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <Link href="/tours/domestic" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-40">
                  <Image src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=400&q=80" alt="Kashmir" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">Kashmir</h3>
                    <p className="text-xs">Paradise on Earth</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/tours/domestic" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-40">
                  <Image src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&q=80" alt="Rajasthan" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">Rajasthan</h3>
                    <p className="text-xs">Royal Heritage</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/tours/domestic" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-40">
                  <Image src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80" alt="Kerala" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">Kerala</h3>
                    <p className="text-xs">God's Own Country</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/tours/domestic" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-40">
                  <Image src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80" alt="Goa" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">Goa</h3>
                    <p className="text-xs">Beach Paradise</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Tour Packages</h2>
          <p className="section-subtitle text-center">Handpicked tours for unforgettable experiences</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Link href="/tours/domestic/kashmir" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-56">
                  <Image src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=600&q=80" alt="Kashmir" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Popular</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Kashmir Valley Tour</h3>
                  <p className="text-gray-600 text-sm mb-3">Srinagar • Gulmarg • Pahalgam • Sonamarg</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">Contact for Pricing</span>
                    <span className="text-sm text-gray-500">5-7 Days</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/tours/domestic/golden-triangle" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-56">
                  <Image src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80" alt="Golden Triangle" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Bestseller</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Golden Triangle Tour</h3>
                  <p className="text-gray-600 text-sm mb-3">Delhi • Agra • Jaipur</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">Contact for Pricing</span>
                    <span className="text-sm text-gray-500">5-7 Days</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/tours/international/dubai" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-56">
                  <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" alt="Dubai" fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">International</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-secondary transition-colors">Dubai Explorer</h3>
                  <p className="text-gray-600 text-sm mb-3">Burj Khalifa • Desert Safari • Dubai Mall</p>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-bold">Contact for Pricing</span>
                    <span className="text-sm text-gray-500">4-5 Days</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/tours/domestic" className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all mr-4">
              View All Domestic Tours
            </Link>
            <Link href="/tours/international" className="inline-block bg-gradient-to-r from-accent to-primary text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all">
              View All International Tours
            </Link>
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

      {/* GetYourGuide Widget - Activities & Tours */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Explore Tours & Activities Worldwide</h2>
          <p className="section-subtitle text-center mb-8">
            Discover thousands of tours, activities, and experiences powered by GetYourGuide
          </p>
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <GetYourGuideWidget />
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
