'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPlane, FaHotel, FaCar, FaTaxi } from 'react-icons/fa';
import FlightSearchForm from './search/FlightSearchForm';
import HotelSearchForm from './search/HotelSearchForm';
import CarSearchForm from './search/CarSearchForm';
import TransferSearchForm from './search/TransferSearchForm';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const tabs = [
    { id: 'flights', name: 'Flights', icon: FaPlane },
    { id: 'hotels', name: 'Hotels', icon: FaHotel },
    { id: 'cars', name: 'Cars', icon: FaCar },
    { id: 'transfers', name: 'Transfers', icon: FaTaxi },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-primary to-secondary text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container-custom py-20 md:py-32">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Cheap Flights, Hotels & Travel Deals Worldwide
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Search and compare millions of travel options to save on your next adventure
          </p>
        </div>

        {/* Search Widget Container */}
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="bg-white rounded-t-xl shadow-lg">
            <div className="flex border-b">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-primary border-b-4 border-primary'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="text-xl" />
                    <span className="hidden sm:inline">{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-b-xl p-6 md:p-8">
              {activeTab === 'flights' && <FlightSearchForm />}
              {activeTab === 'hotels' && <HotelSearchForm />}
              {activeTab === 'cars' && <CarSearchForm />}
              {activeTab === 'transfers' && <TransferSearchForm />}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by millions</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Best price guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
