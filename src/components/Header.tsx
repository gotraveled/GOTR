'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Flights', href: '/flights' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Car Rentals', href: '/cars' },
    { name: 'Airport Transfers', href: '/transfers' },
    { name: 'Tours & Activities', href: '/tours' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FaPlane className="text-primary text-2xl md:text-3xl" />
            <span className="text-2xl md:text-3xl font-bold text-primary">
              GoTraveled
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Search & Login */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FiSearch className="text-xl text-gray-700" />
            </button>
            <button className="btn-primary">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary w-full">Login</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
