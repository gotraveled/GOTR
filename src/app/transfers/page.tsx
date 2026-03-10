'use client';

import TaxiWidget from '@/components/widgets/TaxiWidget';
import TransferBookingWidget from '@/components/widgets/TransferBookingWidget';
import TransferReviewsWidget from '@/components/widgets/TransferReviewsWidget';
import { useEffect } from 'react';

export default function TransfersPage() {
  useEffect(() => {
    document.title = 'Airport Transfers - Book Reliable Airport Taxi Service | GoTraveled';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book reliable airport transfers and taxi services worldwide. Pre-book your airport pickup and enjoy hassle-free transportation.');
    }
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const popularRoutes = [
    { airport: 'Dubai International', city: 'Dubai Downtown', price: '$25' },
    { airport: 'Heathrow Airport', city: 'London City Center', price: '$45' },
    { airport: 'JFK Airport', city: 'Manhattan', price: '$65' },
    { airport: 'CDG Airport', city: 'Paris City Center', price: '$55' },
    { airport: 'Ngurah Rai Airport', city: 'Seminyak, Bali', price: '$15' },
    { airport: 'Narita Airport', city: 'Tokyo City', price: '$80' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Airport Transfers Worldwide
          </h1>
          <p className="text-xl mb-8">
            Reliable, safe, and affordable airport taxi and transfer services
          </p>
        </div>
      </section>

      {/* Transfer Search Widget */}
      <section id="booking-section" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Book Your Airport Transfer</h2>
            <TaxiWidget />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Why Book Airport Transfers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⏰
              </div>
              <h3 className="text-xl font-bold mb-3">Save Time</h3>
              <p className="text-gray-600">
                Skip the taxi queue and get picked up directly from arrivals with pre-booked transfers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold mb-3">Fixed Prices</h3>
              <p className="text-gray-600">
                No surprises - know your exact price before you book with transparent pricing
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable Service</h3>
              <p className="text-gray-600">
                Professional drivers, flight monitoring, and 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Airport Routes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Popular Airport Routes</h2>
          <p className="section-subtitle text-center">
            Book airport transfers to these popular destinations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <div key={index} className="card p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-lg font-bold text-gray-800">{route.airport}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">To</p>
                  <p className="text-lg font-bold text-gray-800">{route.city}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{route.price}</span>
                  <button onClick={scrollToBooking} className="btn-primary">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Booking Widget */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Available Transfers</h2>
          <p className="section-subtitle text-center mb-8">
            Browse and book from thousands of transfer options worldwide
          </p>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <TransferBookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Choose Your Transfer Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Private Car</h3>
              <p className="text-gray-600 mb-4">Up to 3 passengers</p>
              <p className="text-primary font-bold">From $25</p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚙</div>
              <h3 className="text-xl font-bold mb-2">Private SUV</h3>
              <p className="text-gray-600 mb-4">Up to 5 passengers</p>
              <p className="text-primary font-bold">From $40</p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚐</div>
              <h3 className="text-xl font-bold mb-2">Minivan</h3>
              <p className="text-gray-600 mb-4">Up to 8 passengers</p>
              <p className="text-primary font-bold">From $60</p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-bold mb-2">Shuttle Bus</h3>
              <p className="text-gray-600 mb-4">Shared service</p>
              <p className="text-primary font-bold">From $10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Customer Reviews</h2>
          <p className="section-subtitle text-center mb-8">
            See what our customers say about their transfer experience
          </p>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <TransferReviewsWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Airport Transfer Tips</h2>
          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Book in Advance
              </h3>
              <p className="text-gray-700">
                Pre-booking your airport transfer ensures availability and often better prices, 
                especially during peak travel seasons or holidays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Provide Flight Details
              </h3>
              <p className="text-gray-700">
                Always provide your flight number when booking. This allows the service to track 
                your flight and adjust pickup time if there are delays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Check Inclusions
              </h3>
              <p className="text-gray-700">
                Verify what's included in the price - luggage allowance, tolls, parking fees, and 
                waiting time to avoid surprise charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">
                Meet & Greet Service
              </h3>
              <p className="text-gray-700">
                Opt for meet & greet service where the driver waits at arrivals with a name sign. 
                It's especially helpful in unfamiliar airports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
