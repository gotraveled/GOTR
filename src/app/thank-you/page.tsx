'use client';

import { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'contact';

  const messages = {
    contact: {
      title: 'Thank You for Contacting Us!',
      message: 'We have received your message and will get back to you within 24 hours.',
      icon: '📧',
    },
    'tour-inquiry': {
      title: 'Thank You for Your Tour Inquiry!',
      message: 'We have received your tour inquiry and will send you pricing and availability details within 24 hours.',
      icon: '🏖️',
    },
    booking: {
      title: 'Thank You for Your Booking Request!',
      message: 'We have received your booking request and will confirm your reservation shortly.',
      icon: '✅',
    },
  };

  const content = messages[type as keyof typeof messages] || messages.contact;

  return (
    <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="text-8xl mb-6">{content.icon}</div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {content.message}
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-3 text-gray-800">What happens next?</h3>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Our team will review your request carefully</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>You'll receive a response within 24 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Check your email (including spam folder) for our reply</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all mr-4"
          >
            Back to Home
          </Link>
          
          <Link 
            href="/tours" 
            className="inline-block bg-white border-2 border-primary text-primary font-bold py-4 px-8 rounded-xl hover:bg-primary hover:text-white transition-all"
          >
            Explore Tours
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-bold mb-4 text-gray-800">Need Immediate Assistance?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <p className="text-sm font-semibold text-gray-800">Call Us</p>
              <a href="tel:+19094811234" className="text-sm text-primary hover:underline">
                +1 (909) 481-1234
              </a>
            </div>
            <div>
              <div className="text-2xl mb-2">📧</div>
              <p className="text-sm font-semibold text-gray-800">Email</p>
              <a href="mailto:info@gotraveled.com" className="text-sm text-primary hover:underline">
                info@gotraveled.com
              </a>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <p className="text-sm font-semibold text-gray-800">Visit Us</p>
              <p className="text-sm text-gray-600">
                Rancho Cucamonga, CA
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default function ThankYouPage() {
  useEffect(() => {
    document.title = 'Thank You | GoTraveled';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent p-4">
      <Suspense fallback={
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
