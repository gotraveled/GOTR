'use client';

import { useState } from 'react';
import { FaTaxi, FaMapMarkerAlt, FaCalendar, FaClock } from 'react-icons/fa';

const TaxiWidget = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '12:00',
    passengers: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build KiwiTaxi search URL with affiliate marker
    const searchUrl = new URL('https://www.kiwitaxi.com/');
    searchUrl.searchParams.append('from', formData.pickup);
    searchUrl.searchParams.append('to', formData.dropoff);
    searchUrl.searchParams.append('date', formData.date);
    searchUrl.searchParams.append('time', formData.time);
    searchUrl.searchParams.append('passengers', formData.passengers);
    searchUrl.searchParams.append('partner', '250882');
    
    window.open(searchUrl.toString(), '_blank');
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl">
      <div className="text-center mb-6">
        <FaTaxi className="text-5xl text-orange-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-800">Book Your Transfer</h3>
        <p className="text-gray-600">Reliable airport transfers and private car service</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Pickup Location */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">
            <FaMapMarkerAlt className="inline mr-2 text-orange-600" />
            Pickup Location
          </label>
          <input
            type="text"
            placeholder="Airport, hotel, or address"
            value={formData.pickup}
            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Dropoff Location */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">
            <FaMapMarkerAlt className="inline mr-2 text-orange-600" />
            Dropoff Location
          </label>
          <input
            type="text"
            placeholder="Hotel, airport, or address"
            value={formData.dropoff}
            onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Date and Time */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaCalendar className="inline mr-2 text-orange-600" />
              Pickup Date
            </label>
            <input
              type="date"
              value={formData.date}
              min={today}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaClock className="inline mr-2 text-orange-600" />
              Pickup Time
            </label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-800"
              required
            />
          </div>
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">
            <FaTaxi className="inline mr-2 text-orange-600" />
            Number of Passengers
          </label>
          <select
            value={formData.passengers}
            onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-800"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
        >
          Find Transfer Options
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-2">
          Powered by KiwiTaxi - Pre-book reliable transfers worldwide
        </p>
      </form>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="text-center p-4 bg-white rounded-lg">
          <p className="text-2xl mb-2">✓</p>
          <p className="text-sm font-semibold text-gray-700">Fixed Prices</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg">
          <p className="text-2xl mb-2">✓</p>
          <p className="text-sm font-semibold text-gray-700">Meet & Greet</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg">
          <p className="text-2xl mb-2">✓</p>
          <p className="text-sm font-semibold text-gray-700">24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default TaxiWidget;
