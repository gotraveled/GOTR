'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendar, FaUser } from 'react-icons/fa';
import HotelCityAutocomplete from '@/components/HotelCityAutocomplete';

const HotelWidget = () => {
  const [formData, setFormData] = useState({
    destination: '',
    destinationId: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build Booking.com search URL
    const [checkInYear, checkInMonth, checkInDay] = formData.checkIn.split('-');
    const [checkOutYear, checkOutMonth, checkOutDay] = formData.checkOut.split('-');
    
    const params = new URLSearchParams();
    params.append('aid', '338584');
    params.append('label', 'affnetTP_393530915594160');
    params.append('ss', formData.destination);
    params.append('checkin_year', checkInYear);
    params.append('checkin_month', checkInMonth);
    params.append('checkin_monthday', checkInDay);
    params.append('checkout_year', checkOutYear);
    params.append('checkout_month', checkOutMonth);
    params.append('checkout_monthday', checkOutDay);
    params.append('group_adults', formData.adults);
    params.append('group_children', formData.children);
    params.append('no_rooms', '1');
    params.append('sb_price_type', 'total');
    params.append('from_sf', '1');
    
    window.location.href = `https://sp.booking.com/searchresults.html?${params.toString()}`;
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Get tomorrow's date for default check-in
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  
  // Get date one week from now for default check-out
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 8);
  const nextWeekStr = nextWeek.toISOString().split('T')[0];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Destination */}
        <HotelCityAutocomplete
          value={formData.destination}
          onChange={(value) => setFormData({ ...formData, destination: value })}
          placeholder="Type any city, hotel name, or address"
          label="Where are you going?"
          required
        />

        {/* Check-in and Check-out */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaCalendar className="inline mr-2 text-blue-600" />
              Check-in
            </label>
            <input
              type="date"
              value={formData.checkIn}
              min={today}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaCalendar className="inline mr-2 text-blue-600" />
              Check-out
            </label>
            <input
              type="date"
              value={formData.checkOut}
              min={formData.checkIn || today}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800"
              required
            />
          </div>
        </div>

        {/* Guests */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaUser className="inline mr-2 text-blue-600" />
              Adults
            </label>
            <select
              value={formData.adults}
              onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaUser className="inline mr-2 text-blue-600" />
              Children
            </label>
            <select
              value={formData.children}
              onChange={(e) => setFormData({ ...formData, children: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800"
            >
              {[0, 1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
        >
          Search Hotels
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-2">
          Search powered by Booking.com - Access to millions of properties worldwide
        </p>
      </form>
    </div>
  );
};

export default HotelWidget;
