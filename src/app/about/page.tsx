import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - GoTraveled | Your Trusted Travel Partner',
  description: 'Learn about GoTraveled, your trusted partner for finding the best travel deals on flights, hotels, car rentals, and more.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GoTraveled</h1>
          <p className="text-xl">Your trusted partner for finding the best travel deals worldwide</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              GoTraveled is a leading travel comparison platform dedicated to helping travelers find 
              the best deals on flights, hotels, car rentals, and airport transfers worldwide. We 
              believe that everyone deserves to explore the world without breaking the bank.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Our mission is simple: to make travel accessible and affordable for everyone. We achieve 
              this by comparing prices from hundreds of travel providers, ensuring you always get the 
              best deal possible. Whether you're planning a budget backpacking trip or a luxury vacation, 
              we're here to help you save money and time.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">What We Offer</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Flight Search:</strong> Compare prices from hundreds of airlines and travel 
                agencies to find the cheapest flights
              </li>
              <li>
                <strong>Hotel Booking:</strong> Search and book hotels worldwide with the best rates 
                guaranteed
              </li>
              <li>
                <strong>Car Rentals:</strong> Find the perfect rental car from leading companies at 
                competitive prices
              </li>
              <li>
                <strong>Airport Transfers:</strong> Pre-book reliable airport pickups and transfers 
                for a hassle-free journey
              </li>
              <li>
                <strong>Travel Guides:</strong> Comprehensive destination guides with insider tips and 
                recommendations
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose GoTraveled?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-primary">Best Price Guarantee</h3>
                <p className="text-gray-700">
                  We compare prices from hundreds of providers to ensure you get the best deal every time.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-primary">Easy to Use</h3>
                <p className="text-gray-700">
                  Our user-friendly platform makes it simple to search, compare, and book your travel.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-primary">Trusted Partners</h3>
                <p className="text-gray-700">
                  We work with reputable travel providers to ensure quality and reliability.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-primary">24/7 Support</h3>
                <p className="text-gray-700">
                  Our customer support team is always available to help with your travel needs.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Start Your Journey</h2>
            <p className="text-gray-700 mb-6">
              Ready to find your next adventure? Start searching for flights, hotels, and more on 
              GoTraveled today. Join millions of travelers who trust us to find the best travel deals 
              worldwide.
            </p>

            <div className="text-center mt-12">
              <a href="/" className="btn-primary inline-block">
                Start Exploring
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
