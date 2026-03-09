'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="container-custom text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-xl text-blue-100 mb-8">
        Get the best travel deals and tips delivered to your inbox
      </p>

      <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button 
          type="submit"
          className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
        >
          <FaPaperPlane />
          <span className="hidden sm:inline">Subscribe</span>
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
