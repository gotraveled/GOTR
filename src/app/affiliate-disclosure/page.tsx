import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | GoTraveled',
  description: 'Learn about our affiliate relationships and how GoTraveled earns commissions to keep our service free.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate Disclosure</h1>
          <p className="text-xl">Transparency in how we operate</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-6">
              <strong>Last Updated: March 9, 2026</strong>
            </p>

            <h2 className="text-2xl font-bold mb-4">Affiliate Partnerships</h2>
            <p className="text-gray-700 mb-6">
              GoTraveled participates in various affiliate marketing programs, which means we may earn 
              commissions when you click on links to third-party websites and make qualifying purchases 
              or bookings. These affiliate partnerships help us keep our service free for travelers 
              worldwide.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Affiliate Partners</h2>
            <p className="text-gray-700 mb-4">
              We partner with Travelpayouts and work with the following travel service providers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Aviasales:</strong> Flight search and booking</li>
              <li><strong>DiscoverCars:</strong> Car rental services</li>
              <li><strong>KiwiTaxi:</strong> Airport transfer services</li>
              <li>Various hotel booking platforms</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-700 mb-6">
              When you click on a link to one of our partner websites and make a purchase or booking, 
              we may receive a commission at no additional cost to you. The price you pay remains the 
              same whether you use our links or visit the provider's website directly.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-gray-700 mb-6">
              Despite our affiliate relationships, we are committed to providing honest, unbiased 
              information and recommendations. Our affiliate partnerships do not influence our editorial 
              content, reviews, or recommendations. We only recommend products and services that we 
              believe provide value to our users.
            </p>

            <h2 className="text-2xl font-bold mb-4">Best Price Guarantee</h2>
            <p className="text-gray-700 mb-6">
              We work hard to ensure you get the best deals available. Our search tools compare prices 
              from multiple providers, and we're transparent about our affiliate relationships. If you 
              find a better price elsewhere, we encourage you to take advantage of it.
            </p>

            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about our affiliate relationships or how we operate, please 
              don't hesitate to contact us. We're committed to maintaining transparency and trust with 
              our users.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mt-8">
              <p className="text-gray-800">
                <strong>Contact Us:</strong> If you have questions about this disclosure or our 
                affiliate practices, please email us at support@gotraveled.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
