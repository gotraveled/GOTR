'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

export default function TransferSearchForm() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams({
      from: formData.from,
      to: formData.to,
      date: formData.date,
    });

    window.location.href = `https://book.gotraveled.com/transfers?${params.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* From & To */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaMapMarkerAlt className="inline mr-2 text-primary" />
            From (Airport/Hotel)
          </label>
          <input
            type="text"
            placeholder="Airport or Hotel"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            <FaMapMarkerAlt className="inline mr-2 text-primary" />
            To (Hotel/Address)
          </label>
          <input
            type="text"
            placeholder="Hotel or Address"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            required
          />
        </div>
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
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
