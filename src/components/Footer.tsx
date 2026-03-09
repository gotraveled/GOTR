import Link from 'next/link';
import { FaPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaShieldAlt, FaAward, FaHeadset } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Flights', href: '/flights' },
      { name: 'Hotels', href: '/hotels' },
      { name: 'Car Rentals', href: '/cars' },
      { name: 'Airport Transfers', href: '/transfers' },
      { name: 'Tours & Activities', href: '/tours' },
    ],
    destinations: [
      { name: 'Dubai', href: '/destinations/dubai' },
      { name: 'Bali', href: '/destinations/bali' },
      { name: 'Paris', href: '/destinations/paris' },
      { name: 'Thailand', href: '/destinations/thailand' },
      { name: 'Tokyo', href: '/destinations/tokyo' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Footer Top - Trust Badges */}
      <div className="border-b border-gray-700">
        <div className="container-custom py-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-3xl text-blue-400 mb-2" />
              <p className="text-sm font-semibold">Secure Payment</p>
              <p className="text-xs text-gray-400">SSL Encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <FaAward className="text-3xl text-yellow-400 mb-2" />
              <p className="text-sm font-semibold">Best Price Guarantee</p>
              <p className="text-xs text-gray-400">Find Better? Refund!</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHeadset className="text-3xl text-green-400 mb-2" />
              <p className="text-sm font-semibold">24/7 Support</p>
              <p className="text-xs text-gray-400">Always Here to Help</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 rounded-xl">
                  <FaPlane className="text-white text-xl transform -rotate-45" />
                </div>
              </div>
              <span className="text-2xl font-black">GoTraveled</span>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted travel companion for finding the best deals on flights, hotels, 
              car rentals, and transfers worldwide. Save time and money with GoTraveled.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-blue-700 hover:text-white transition-all">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} GoTraveled. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Powered by</span>
              <span className="text-blue-400 font-semibold">Travelpayouts</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Affiliate Partner</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>🔒 Secure Booking</span>
              <span>✓ Verified Deals</span>
              <span>★ 4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
