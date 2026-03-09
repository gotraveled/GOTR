'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our services? Want to partner with us? Or just want to say hello? 
                We're here to help! Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">support@gotraveled.com</p>
                    <p className="text-gray-700">partnerships@gotraveled.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-700">
                      123 Travel Street<br />
                      Suite 456<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold mb-3">FAQ</h3>
                <p className="text-gray-700 mb-2">
                  Before reaching out, you might find answers to common questions in our FAQ section.
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">
                  View Frequently Asked Questions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Support Hours</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="font-semibold">Monday - Friday</span>
                <span className="text-gray-700">9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-semibold">Saturday</span>
                <span className="text-gray-700">10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold">Sunday</span>
                <span className="text-gray-700">Closed</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              * Response time for email inquiries is typically within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
