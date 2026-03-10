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
    <section className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
          alt="Travel Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/90"></div>
      </div>
      
      <div className="relative container-custom py-16 md:py-24">
        {/* Hero Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Explore the World with Confidence
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Compare millions of flights, hotels & car rentals from hundreds of travel sites to find the best deal
          </p>
        </div>

        {/* Search Widget Container */}
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="bg-white rounded-t-2xl shadow-2xl">
            <div className="flex border-b-2 border-gray-100">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-5 px-4 font-bold text-sm md:text-base transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-primary border-b-4 border-primary -mb-0.5'
                        : 'bg-gray-50 text-gray-600 hover:bg-white hover:text-secondary'
                    }`}
                  >
                    <Icon className="text-xl md:text-2xl" />
                    <span className="hidden sm:inline">{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-b-2xl p-8 md:p-10">
              {activeTab === 'flights' && <FlightSearchForm />}
              {activeTab === 'hotels' && <HotelSearchForm />}
              {activeTab === 'cars' && <CarSearchForm />}
              {activeTab === 'transfers' && <TransferSearchForm />}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold">500+</p>
              <p className="text-sm text-blue-100">Airlines</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold">1M+</p>
              <p className="text-sm text-blue-100">Hotels</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold">5M+</p>
              <p className="text-sm text-blue-100">Happy Travelers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
