import type { Metadata } from 'next';
import Image from 'next/image';
import TravelInsuranceWidget from '@/components/widgets/TravelInsuranceWidget';
import { FaShieldAlt, FaHospital, FaPlane, FaSuitcase, FaPassport, FaUmbrellaBeach, FaExclamationTriangle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Travel Insurance - Protect Your Trip | GoTraveled',
  description: 'Get comprehensive travel insurance coverage for your trip. Medical emergencies, trip cancellation, lost luggage, and 24/7 assistance. Compare quotes from top providers.',
  keywords: 'travel insurance, trip insurance, medical coverage, trip cancellation, travel protection',
};

// Force dynamic rendering to avoid timeout
export const dynamic = 'force-dynamic';

export default function InsurancePage() {
  const coverageTypes = [
    {
      icon: FaHospital,
      title: 'Medical Emergencies',
      description: 'Coverage for hospital bills, doctor visits, and emergency medical treatment abroad',
      details: ['Emergency medical treatment', 'Hospital stays', 'Emergency dental', 'Medical evacuation']
    },
    {
      icon: FaPlane,
      title: 'Trip Cancellation',
      description: 'Get your money back if you need to cancel your trip due to covered reasons',
      details: ['Flight cancellations', 'Hotel bookings', 'Pre-paid activities', 'Tour packages']
    },
    {
      icon: FaSuitcase,
      title: 'Lost or Delayed Luggage',
      description: 'Compensation for lost, stolen, or delayed baggage and personal belongings',
      details: ['Lost luggage reimbursement', 'Delayed baggage expenses', 'Stolen items coverage', 'Emergency purchases']
    },
    {
      icon: FaPassport,
      title: 'Travel Delays',
      description: 'Coverage for unexpected delays, missed connections, and travel interruptions',
      details: ['Flight delays', 'Missed connections', 'Accommodation costs', 'Meal expenses']
    },
    {
      icon: FaUmbrellaBeach,
      title: 'Adventure Activities',
      description: 'Protection for adventure sports and outdoor activities during your trip',
      details: ['Skiing/snowboarding', 'Scuba diving', 'Hiking/trekking', 'Water sports']
    },
    {
      icon: FaShieldAlt,
      title: '24/7 Emergency Assistance',
      description: 'Round-the-clock support hotline for emergencies and travel assistance',
      details: ['Emergency helpline', 'Medical referrals', 'Legal assistance', 'Travel updates']
    },
  ];

  const whyInsure = [
    {
      title: 'Medical Costs Abroad',
      description: 'Medical treatment in foreign countries can be extremely expensive. A simple emergency room visit can cost thousands of dollars.',
      stat: 'Average cost: $5,000+'
    },
    {
      title: 'Trip Cancellations',
      description: 'Life is unpredictable. If you need to cancel your trip due to illness, family emergency, or other covered reasons, you could lose all pre-paid expenses.',
      stat: 'Protect up to $10,000'
    },
    {
      title: 'Lost Luggage',
      description: 'Airlines lose or delay millions of bags each year. Travel insurance covers replacement essentials and compensation.',
      stat: '5.6 bags per 1,000 passengers'
    },
    {
      title: 'Peace of Mind',
      description: 'Travel worry-free knowing you\'re protected against unexpected events that could derail your trip.',
      stat: 'Priceless'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Travel Insurance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 via-blue-600/85 to-teal-600/90"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <FaShieldAlt className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travel Insurance
            </h1>
            <p className="text-xl mb-8">
              Protect Your Trip, Your Health, and Your Investment
            </p>
            <p className="text-lg text-green-100">
              Comprehensive travel insurance coverage starting from $40/month
            </p>
          </div>
        </div>
      </section>

      {/* Get Quote Widget */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <TravelInsuranceWidget />
        </div>
      </section>

      {/* Why Travel Insurance */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Do You Need Travel Insurance?</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Travel insurance is essential protection for your trip. Here's why millions of travelers choose to protect their journeys:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            {whyInsure.map((reason, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-green-700">{reason.title}</h3>
                <p className="text-gray-700 mb-4">{reason.description}</p>
                <div className="bg-white p-3 rounded-lg inline-block">
                  <span className="text-sm font-semibold text-green-600">{reason.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">What's Covered?</h2>
          <p className="section-subtitle text-center">
            Comprehensive protection for all aspects of your trip
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {coverageTypes.map((coverage, idx) => {
              const Icon = coverage.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Icon className="text-4xl text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{coverage.title}</h3>
                  <p className="text-gray-600 mb-4">{coverage.description}</p>
                  <ul className="space-y-2">
                    {coverage.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="section-title text-center">How Travel Insurance Works</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-600">
                1
              </div>
              <h3 className="font-bold mb-2">Get a Quote</h3>
              <p className="text-sm text-gray-600">Enter your trip details and compare plans from top providers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                2
              </div>
              <h3 className="font-bold mb-2">Choose Your Plan</h3>
              <p className="text-sm text-gray-600">Select the coverage level that fits your needs and budget</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-purple-600">
                3
              </div>
              <h3 className="font-bold mb-2">Travel Protected</h3>
              <p className="text-sm text-gray-600">Your coverage begins instantly after purchase confirmation</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-teal-600">
                4
              </div>
              <h3 className="font-bold mb-2">File Claims Easy</h3>
              <p className="text-sm text-gray-600">24/7 support and simple online claim process if needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Travel Scenarios */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container-custom max-w-5xl">
          <h2 className="section-title text-center">Real Scenarios Where Insurance Saves the Day</h2>
          
          <div className="space-y-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <FaExclamationTriangle className="text-3xl text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Medical Emergency in Thailand</h3>
                  <p className="text-gray-700 mb-2">
                    Sarah fell ill in Bangkok and needed hospitalization. Her travel insurance covered $8,500 in medical bills and arranged medical evacuation.
                  </p>
                  <span className="text-sm font-semibold text-green-600">Saved: $8,500</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <FaPlane className="text-3xl text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Flight Cancelled Due to Weather</h3>
                  <p className="text-gray-700 mb-2">
                    Mark's flight to Paris was cancelled due to storms. Insurance covered his hotel, meals, and rebooking costs.
                  </p>
                  <span className="text-sm font-semibold text-green-600">Saved: $1,200</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <FaSuitcase className="text-3xl text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Lost Luggage in Europe</h3>
                  <p className="text-gray-700 mb-2">
                    Emma's luggage was lost for 4 days. Insurance reimbursed her for emergency clothing and toiletries purchases.
                  </p>
                  <span className="text-sm font-semibold text-green-600">Saved: $650</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">When should I buy travel insurance?</h3>
              <p className="text-gray-700">
                Buy as soon as you book your trip to get maximum coverage. Some benefits like pre-existing condition coverage require you to buy within 14-21 days of your initial trip deposit.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">How much does travel insurance cost?</h3>
              <p className="text-gray-700">
                Typically 4-10% of your total trip cost. For a $3,000 trip, expect to pay $120-$300 depending on coverage level, age, and destination.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Does travel insurance cover COVID-19?</h3>
              <p className="text-gray-700">
                Most policies now cover COVID-19 related trip cancellations and medical expenses. Check specific policy details as coverage varies by provider.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Can I buy insurance after I've started my trip?</h3>
              <p className="text-gray-700">
                Some providers offer "already traveling" plans, but coverage is limited. It's always best to buy before you depart for full protection.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">What's not covered by travel insurance?</h3>
              <p className="text-gray-700">
                Typically excluded: pre-existing medical conditions (unless waived), extreme sports without adventure coverage, travel to high-risk countries, alcohol/drug-related incidents, and intentional self-harm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Let the Unexpected Ruin Your Trip
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get comprehensive travel insurance and travel with confidence. Compare quotes in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#quote"
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:+18009370173" 
              className="bg-green-800 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-900 transform hover:scale-105 transition-all"
            >
              Call: 1-800-937-0173
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
