'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import { FaPlane, FaHotel, FaCar, FaTaxi, FaUmbrellaBeach, FaMapMarkedAlt, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Flights', href: '/flights', icon: FaPlane },
    { name: 'Hotels', href: '/hotels', icon: FaHotel },
    { name: 'Cars', href: '/cars', icon: FaCar },
    { name: 'Transfers', href: '/transfers', icon: FaTaxi },
    { name: 'Tours', href: '/tours', icon: FaUmbrellaBeach },
    { name: 'Store', href: '/store', icon: FaShoppingBag },
    { name: 'Destinations', href: '/destinations', icon: FaMapMarkedAlt },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <FiPhone className="text-sm" />
                <span className="hidden md:inline">24/7 Support</span>
              </a>
              <a href="mailto:support@gotraveled.com" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <FiMail className="text-sm" />
                <span className="hidden md:inline">support@gotraveled.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-blue-200">Best Price Guaranteed</span>
              <span className="text-blue-200">|</span>
              <span className="text-yellow-300 font-semibold">🔥 Hot Deals Today!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image 
                src="/logo.png" 
                alt="GoTraveled - Your Travel Companion" 
                width={150} 
                height={45}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 group"
                  >
                    <Icon className="text-lg group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Contact */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="text-2xl text-gray-700" />
              ) : (
                <FiMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="text-lg" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                <div className="pt-4 px-4">
                  <Link href="/contact" className="block w-full py-2.5 px-4 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
