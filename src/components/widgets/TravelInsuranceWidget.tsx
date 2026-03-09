'use client';

import { FaShieldAlt, FaHospital, FaPlane, FaSuitcase } from 'react-icons/fa';

export default function TravelInsuranceWidget() {
  const benefits = [
    { icon: FaHospital, title: 'Medical Coverage', desc: 'Emergency medical expenses abroad' },
    { icon: FaPlane, title: 'Trip Cancellation', desc: 'Get refund if plans change' },
    { icon: FaSuitcase, title: 'Lost Luggage', desc: 'Compensation for lost belongings' },
    { icon: FaShieldAlt, title: '24/7 Assistance', desc: 'Emergency support anytime' },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
      <div className="text-center mb-8">
        <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Protect Your Trip
        </h2>
        <p className="text-gray-600 text-lg">
          Travel with peace of mind - comprehensive insurance coverage
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
              <Icon className="text-2xl text-green-600 mb-2" />
              <h3 className="font-bold text-gray-800 mb-1">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        {/* World Nomads */}
        <a
          href="https://www.worldnomads.com/?affiliateCode=gotraveled&utm_source=gotraveled&utm_medium=affiliate"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all text-center"
        >
          Get Quote from World Nomads →
        </a>

        {/* SafetyWing */}
        <a
          href="https://safetywing.com/?referenceID=gotraveled&utm_source=gotraveled&utm_medium=affiliate"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all text-center"
        >
          Get Quote from SafetyWing →
        </a>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        Prices from $40/month. Compare quotes to find the best coverage for your trip.
      </p>
    </div>
  );
}
