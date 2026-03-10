import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GoTraveled',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export const dynamic = 'force-dynamic';

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">How we protect your information</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-6">
              <strong>Last Updated: March 9, 2026</strong>
            </p>

            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              At GoTraveled, we take your privacy seriously. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website. 
              Please read this privacy policy carefully.
            </p>

            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect information about you in various ways:</p>
            
            <h3 className="text-xl font-bold mb-3">Personal Data</h3>
            <p className="text-gray-700 mb-4">
              When you use our services, we may collect personally identifiable information such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Name and email address (if you subscribe to our newsletter)</li>
              <li>Search queries and preferences</li>
              <li>Browser and device information</li>
              <li>IP address and location data</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              When you visit our website, we automatically collect certain information about your 
              device and browsing actions, including cookies and similar tracking technologies.
            </p>

            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize user experience</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Analyze usage patterns and trends</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              We work with third-party service providers (such as Travelpayouts, Aviasales, 
              DiscoverCars, and KiwiTaxi) to provide travel booking services. When you click on 
              links to these services, you will be subject to their privacy policies. We encourage 
              you to review their privacy policies before making any bookings.
            </p>

            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to track activity on our website and 
              store certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent. However, if you do not accept cookies, you may 
              not be able to use some portions of our service.
            </p>

            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security measures to protect your 
              personal information. However, please note that no method of transmission over the 
              Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our service is not directed to individuals under the age of 18. We do not knowingly 
              collect personal information from children. If you become aware that a child has 
              provided us with personal information, please contact us.
            </p>

            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about this Privacy Policy, please contact us at: 
              privacy@gotraveled.com
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mt-8">
              <p className="text-gray-800">
                <strong>Email:</strong> privacy@gotraveled.com<br />
                <strong>Website:</strong> https://gotraveled.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
