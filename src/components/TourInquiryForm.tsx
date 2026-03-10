'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaUsers, FaCommentDots } from 'react-icons/fa';

interface TourInquiryFormProps {
  tourName: string;
  destination: string;
}

export default function TourInquiryForm({ tourName, destination }: TourInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '2',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Tour Inquiry: ${tourName} - ${destination}`;
    const body = `
Tour Package: ${tourName}
Destination: ${destination}

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Travel Details:
Preferred Travel Date: ${formData.travelDate}
Number of Travelers: ${formData.travelers}

Message:
${formData.message}

Please provide pricing and availability for this tour package.
    `;
    
    window.location.href = `mailto:support@gotraveled.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        travelDate: '',
        travelers: '2',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          📋 Tour Inquiry Form
        </h2>
        <p className="text-gray-600 text-lg">
          Contact us for pricing, availability, and booking details
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-100 border-2 border-green-500 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            Thank You!
          </h3>
          <p className="text-green-700 text-lg">
            Your inquiry has been sent. We'll contact you shortly with pricing and details.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <FaUser className="inline mr-2 text-blue-600" />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 bg-white"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <FaEnvelope className="inline mr-2 text-blue-600" />
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 bg-white"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <FaPhone className="inline mr-2 text-blue-600" />
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 bg-white"
                placeholder="+1 234 567 8900"
                required
              />
            </div>

            {/* Travel Date */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                <FaCalendar className="inline mr-2 text-blue-600" />
                Preferred Travel Date
              </label>
              <input
                type="date"
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 bg-white"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          {/* Number of Travelers */}
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaUsers className="inline mr-2 text-blue-600" />
              Number of Travelers
            </label>
            <select
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 bg-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Person' : 'People'}
                </option>
              ))}
              <option value="10+">10+ People (Group)</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold mb-2 text-gray-700">
              <FaCommentDots className="inline mr-2 text-blue-600" />
              Additional Requirements / Questions
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 bg-white"
              rows={4}
              placeholder="Tell us about your preferences, special requirements, or any questions you have..."
            />
          </div>

          {/* Submit Button */}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg"
            >
              📨 Send Inquiry & Get Pricing
            </button>
            
            <p className="text-sm text-gray-600 text-center">
              * Required fields. We'll respond within 24 hours with pricing and availability.
            </p>
          </div>
        </form>
      )}

      {/* Contact Info */}
      <div className="mt-8 pt-8 border-t-2 border-gray-200">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl mb-2">📞</div>
            <p className="text-sm font-bold text-gray-800">Call Us</p>
            <p className="text-sm text-gray-600">+1 234 567 8900</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📧</div>
            <p className="text-sm font-bold text-gray-800">Email Us</p>
            <p className="text-sm text-gray-600">support@gotraveled.com</p>
          </div>
          <div>
            <div className="text-2xl mb-2">💬</div>
            <p className="text-sm font-bold text-gray-800">Response Time</p>
            <p className="text-sm text-gray-600">Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
