'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import RealCityAutocomplete from '@/components/RealCityAutocomplete';

const CarWidget = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    pickupId: '',
    dropoff: '',
    dropoffId: '',
    pickupDate: '',
    dropoffDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams({
      pickup: formData.pickup,
      dropoff: formData.dropoff,
      pickupDate: formData.pickupDate,
      dropoffDate: formData.dropoffDate,
    });

    window.location.href = `/book/cars?${params.toString()}`;
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Find the Best Car Rental Deals
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Compare car rental prices from hundreds of companies worldwide
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup & Dropoff Locations */}
        <div className="grid md:grid-cols-2 gap-4">
          <RealCityAutocomplete
            value={formData.pickup}
            onChange={(value, id) => setFormData({ ...formData, pickup: value, pickupId: id })}
            placeholder="City or Airport"
            label="Pick-up Location"
            required
          />
          <RealCityAutocomplete
            value={formData.dropoff}
            onChange={(value, id) => setFormData({ ...formData, dropoff: value, dropoffId: id })}
            placeholder="City or Airport"
            label="Drop-off Location"
            required
          />
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              <FaCalendar className="inline mr-2 text-primary" />
              Pick-up Date & Time
            </label>
            <input
              type="datetime-local"
              value={formData.pickupDate}
              onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              <FaCalendar className="inline mr-2 text-primary" />
              Drop-off Date & Time
            </label>
            <input
              type="datetime-local"
              value={formData.dropoffDate}
              onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Search Car Rentals
        </button>
      </form>
    </div>
  );
};

export default CarWidget;
