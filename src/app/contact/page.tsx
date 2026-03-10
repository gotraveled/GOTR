'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create mailto link with all recipients
    const toEmail = 'info@gotraveled.com';
    const ccEmail = 'vijay0262@gmail.com';
    const subject = `Contact Form: ${formData.subject}`;
    const body = `
New Contact Form Submission

From: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from GoTraveled Contact Form
    `;

    // Open mailto link
    window.location.href = `mailto:${toEmail}?cc=${ccEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect to thank you page after short delay
    setTimeout(() => {
      router.push('/thank-you?type=contact');
    }, 1000);
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
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/90"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We'd love to hear from you</p>
          </div>
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

                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
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
                    <a href="mailto:info@gotraveled.com" className="text-gray-700 hover:text-primary">info@gotraveled.com</a><br />
                    <a href="mailto:vijay0262@gmail.com" className="text-gray-700 hover:text-primary">vijay0262@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+19094811234" className="text-gray-700 hover:text-primary">+1 (909) 481-1234</a>
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
                      7430 Pasito Ave<br />
                      Rancho Cucamonga, CA 91730<br />
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
