'use client';

import { useState } from 'react';
import { FaCalendar, FaUser } from 'react-icons/fa';
import RealCityAutocomplete from '@/components/RealCityAutocomplete';

export default function HotelSearchForm() {
  const [formData, setFormData] = useState({
    city: '',
    cityId: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build Hotellook search URL
    // Format: https://search.hotellook.com/?city=CITY&checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD&adults=N&marker=250882
    const params = new URLSearchParams();
    
    // Use city name or city ID if available
    if (formData.cityId) {
      params.append('cityId', formData.cityId);
    } else {
      params.append('city', formData.city);
    }
    
    params.append('checkIn', formData.checkIn);
    params.append('checkOut', formData.checkOut);
    params.append('adults', formData.guests);
    params.append('marker', '250882');
    
    // Redirect to Hotellook search
    window.location.href = `https://search.hotellook.com/?${params.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* City */}
      <RealCityAutocomplete
        value={formData.city}
        onChange={(value, id) => setFormData({ ...formData, city: value, cityId: id })}
        placeholder="City, hotel, or landmark"
        label="Destination"
        required
      />

      {/* Dates & Guests */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaCalendar className="inline mr-2 text-primary" />
            Check-in
          </label>
          <input
            type="date"
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaCalendar className="inline mr-2 text-primary" />
            Check-out
          </label>
          <input
            type="date"
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaUser className="inline mr-2 text-primary" />
            Guests
          </label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      >
        Search Hotels
      </button>
    </form>
  );
}
