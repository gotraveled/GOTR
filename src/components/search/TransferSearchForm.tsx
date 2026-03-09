'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import RealCityAutocomplete from '@/components/RealCityAutocomplete';

export default function TransferSearchForm() {
  const [formData, setFormData] = useState({
    from: '',
    fromId: '',
    to: '',
    toId: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build KiwiTaxi affiliate URL with your marker
    const searchUrl = new URL('https://www.kiwitaxi.com/');
    searchUrl.searchParams.append('marker', '250882');
    
    if (formData.from) {
      searchUrl.searchParams.append('from', formData.from);
    }
    if (formData.to) {
      searchUrl.searchParams.append('to', formData.to);
    }
    if (formData.date) {
      searchUrl.searchParams.append('date', formData.date);
    }
    
    window.location.href = searchUrl.toString();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* From & To */}
      <div className="grid md:grid-cols-2 gap-4">
        <RealCityAutocomplete
          value={formData.from}
          onChange={(value, id) => setFormData({ ...formData, from: value, fromId: id })}
          placeholder="Airport or Hotel"
          label="From (Airport/Hotel)"
          required
        />
        <RealCityAutocomplete
          value={formData.to}
          onChange={(value, id) => setFormData({ ...formData, to: value, toId: id })}
          placeholder="Hotel or Address"
          label="To (Hotel/Address)"
          required
        />
      </div>

      {/* Date & Time */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">
          <FaCalendar className="inline mr-2 text-primary" />
          Pickup Date & Time
        </label>
        <input
          type="datetime-local"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      >
        Search Transfers
      </button>
    </form>
  );
}
