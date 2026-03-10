'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaPlane, FaHotel, FaCar, FaTaxi } from 'react-icons/fa';

export default function QuickSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState<'flights' | 'hotels' | 'cars' | 'transfers'>('flights');
  const router = useRouter();

  const [flightData, setFlightData] = useState({ origin: '', destination: '', departure: '' });
  const [hotelData, setHotelData] = useState({ city: '', checkIn: '', checkOut: '' });
  const [carData, setCarData] = useState({ pickup: '', pickupDate: '' });
  const [transferData, setTransferData] = useState({ from: '', to: '', date: '' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    switch (activeType) {
      case 'flights':
        if (flightData.origin && flightData.destination && flightData.departure) {
          // Format date from YYYY-MM-DD to DDMMYY
          const [year, month, day] = flightData.departure.split('-');
          const formattedDate = `${day}${month}${year.slice(-2)}`;
          
          // Aviasales format: /ORIGIN-DESTINATION-DDMMYY-PASSENGERS (one-way)
          const searchUrl = `https://book.gotraveled.com/${flightData.origin.toUpperCase()}-${flightData.destination.toUpperCase()}-${formattedDate}-1?marker=250882`;
          window.location.href = searchUrl;
        }
        break;
      case 'hotels':
        if (hotelData.city && hotelData.checkIn && hotelData.checkOut) {
          const params = new URLSearchParams(hotelData);
          window.location.href = `https://book.gotraveled.com/hotels?${params.toString()}`;
        }
        break;
      case 'cars':
        if (carData.pickup && carData.pickupDate) {
          const params = new URLSearchParams({
            ...carData,
            dropoff: carData.pickup,
            dropoffDate: carData.pickupDate
          });
          window.location.href = `https://book.gotraveled.com/cars?${params.toString()}`;
        }
        break;
      case 'transfers':
        if (transferData.from && transferData.to && transferData.date) {
          const params = new URLSearchParams(transferData);
          window.location.href = `https://book.gotraveled.com/transfers?${params.toString()}`;
        }
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2"
        aria-label="Quick Search"
      >
        <FaSearch className="text-xl text-gray-700" />
        <span className="hidden md:inline text-sm font-medium">Quick Search</span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Quick Search</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Type Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveType('flights')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    activeType === 'flights'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaPlane /> Flights
                </button>
                <button
                  onClick={() => setActiveType('hotels')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    activeType === 'hotels'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaHotel /> Hotels
                </button>
                <button
                  onClick={() => setActiveType('cars')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    activeType === 'cars'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaCar /> Cars
                </button>
                <button
                  onClick={() => setActiveType('transfers')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    activeType === 'transfers'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaTaxi /> Transfers
                </button>
              </div>

              {/* Search Forms */}
              <form onSubmit={handleSearch} className="space-y-4">
                {activeType === 'flights' && (
                  <>
                    <input
                      type="text"
                      placeholder="From (e.g., NYC)"
                      value={flightData.origin}
                      onChange={(e) => setFlightData({ ...flightData, origin: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="To (e.g., LAX)"
                      value={flightData.destination}
                      onChange={(e) => setFlightData({ ...flightData, destination: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                    <input
                      type="date"
                      value={flightData.departure}
                      onChange={(e) => setFlightData({ ...flightData, departure: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                  </>
                )}

                {activeType === 'hotels' && (
                  <>
                    <input
                      type="text"
                      placeholder="City or Hotel"
                      value={hotelData.city}
                      onChange={(e) => setHotelData({ ...hotelData, city: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        placeholder="Check-in"
                        value={hotelData.checkIn}
                        onChange={(e) => setHotelData({ ...hotelData, checkIn: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                        required
                      />
                      <input
                        type="date"
                        placeholder="Check-out"
                        value={hotelData.checkOut}
                        onChange={(e) => setHotelData({ ...hotelData, checkOut: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                        required
                      />
                    </div>
                  </>
                )}

                {activeType === 'cars' && (
                  <>
                    <input
                      type="text"
                      placeholder="Pickup Location"
                      value={carData.pickup}
                      onChange={(e) => setCarData({ ...carData, pickup: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                    <input
                      type="datetime-local"
                      value={carData.pickupDate}
                      onChange={(e) => setCarData({ ...carData, pickupDate: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                  </>
                )}

                {activeType === 'transfers' && (
                  <>
                    <input
                      type="text"
                      placeholder="From (Airport/Hotel)"
                      value={transferData.from}
                      onChange={(e) => setTransferData({ ...transferData, from: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="To (Hotel/Address)"
                      value={transferData.to}
                      onChange={(e) => setTransferData({ ...transferData, to: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                    <input
                      type="datetime-local"
                      value={transferData.date}
                      onChange={(e) => setTransferData({ ...transferData, date: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary outline-none"
                      required
                    />
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Search Now
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
