import Link from 'next/link';
import { FaPlane, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <FaPlane className="text-primary text-2xl" />
              <span className="text-2xl font-bold">GoTraveled</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner for finding the best travel deals worldwide. 
              Book flights, hotels, car rentals, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin className="text-xl" />
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
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} GoTraveled. All rights reserved. | Powered by Travelpayouts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
