'use client';

import { useState } from 'react';
import { FaPlane, FaCalendar, FaUser } from 'react-icons/fa';

export default function FlightSearchForm() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departure: '',
    return: '',
    passengers: '1',
    tripType: 'roundtrip'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query string
    const params = new URLSearchParams({
      origin: formData.origin,
      destination: formData.destination,
      departure: formData.departure,
      return: formData.return,
      passengers: formData.passengers,
    });

    // Redirect to booking subdomain
    window.location.href = `https://book.gotraveled.com/flights?${params.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Trip Type */}
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="roundtrip"
            checked={formData.tripType === 'roundtrip'}
            onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
            className="w-4 h-4 text-primary"
          />
          <span className="text-gray-700 font-medium">Round Trip</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={formData.tripType === 'oneway'}
            onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
            className="w-4 h-4 text-primary"
          />
          <span className="text-gray-700 font-medium">One Way</span>
        </label>
      </div>

      {/* Origin & Destination */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaPlane className="inline mr-2 text-primary" />
            From
          </label>
          <input
            type="text"
            placeholder="City or Airport"
            value={formData.origin}
            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaPlane className="inline mr-2 text-primary transform rotate-90" />
            To
          </label>
          <input
            type="text"
            placeholder="City or Airport"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          />
        </div>
      </div>

      {/* Dates & Passengers */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaCalendar className="inline mr-2 text-primary" />
            Departure
          </label>
          <input
            type="date"
            value={formData.departure}
            onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          />
        </div>
        {formData.tripType === 'roundtrip' && (
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              <FaCalendar className="inline mr-2 text-primary" />
              Return
            </label>
            <input
              type="date"
              value={formData.return}
              onChange={(e) => setFormData({ ...formData, return: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaUser className="inline mr-2 text-primary" />
            Passengers
          </label>
          <select
            value={formData.passengers}
            onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      >
        Search Flights
      </button>
    </form>
  );
}
