'use client';

import { useState } from 'react';
import { FaPlane, FaCalendar, FaUser } from 'react-icons/fa';
import RealAirportAutocomplete from '@/components/RealAirportAutocomplete';

export default function FlightSearchForm() {
  const [formData, setFormData] = useState({
    origin: '',
    originCode: '',
    destination: '',
    destinationCode: '',
    departure: '',
    return: '',
    passengers: '1',
    tripType: 'roundtrip'
  });

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build Aviasales white label search URL
    const origin = formData.originCode || formData.origin;
    const destination = formData.destinationCode || formData.destination;
    const departure = formData.departure;
    const returnDate = formData.return;
    
    // Aviasales white label URL format
    // Format: https://book.gotraveled.com/searches/new?origin_iata=NYC&destination_iata=LON&depart_date=2024-03-15&return_date=2024-03-22&adults=1&children=0&infants=0&trip_class=0&marker=250882
    
    const params = new URLSearchParams({
      origin_iata: origin,
      destination_iata: destination,
      depart_date: departure,
      adults: formData.passengers,
      children: '0',
      infants: '0',
      trip_class: '0', // Economy
      marker: '250882'
    });
    
    if (formData.tripType === 'roundtrip' && returnDate) {
      params.append('return_date', returnDate);
    }
    
    const searchUrl = `https://book.gotraveled.com/searches/new?${params.toString()}`;
    
    window.location.href = searchUrl;
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
        <RealAirportAutocomplete
          value={formData.origin}
          onChange={(displayValue, code) => setFormData({ ...formData, origin: displayValue, originCode: code })}
          placeholder="City or Airport"
          label="From"
          icon={FaPlane}
        />
        <RealAirportAutocomplete
          value={formData.destination}
          onChange={(displayValue, code) => setFormData({ ...formData, destination: displayValue, destinationCode: code })}
          placeholder="City or Airport"
          label="To"
        />
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
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
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
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
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
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
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
