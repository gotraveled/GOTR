'use client';

import { useState } from 'react';
import { FaCheckCircle, FaClock, FaExternalLinkAlt, FaChartLine } from 'react-icons/fa';

export default function AffiliatePartnersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const affiliates = [
    {
      name: 'Travelpayouts',
      category: 'Flights, Hotels, Cars, Transfers',
      status: 'active',
      commission: '2-5%',
      cookieDuration: '30 days',
      signupUrl: 'https://www.travelpayouts.com/',
      loginUrl: 'https://www.travelpayouts.com/login',
      trackingId: 'Marker: 250882',
      notes: 'Main provider for flights, hotels, car rentals, and transfers. Already integrated.',
      color: 'green'
    },
    {
      name: 'GetYourGuide',
      category: 'Tours & Activities',
      status: 'pending',
      commission: '8%',
      cookieDuration: '90 days',
      signupUrl: 'https://affiliate.getyourguide.com/',
      loginUrl: 'https://affiliate.getyourguide.com/login',
      trackingId: 'Pending approval',
      notes: 'Widget already installed on tours page. Need to apply and get affiliate tracking code.',
      color: 'yellow'
    },
    {
      name: 'Amazon Associates',
      category: 'Travel Products',
      status: 'pending',
      commission: '1-4%',
      cookieDuration: '24 hours',
      signupUrl: 'https://affiliate-program.amazon.com/',
      loginUrl: 'https://affiliate-program.amazon.com/',
      trackingId: 'Need to replace YOUR_AMAZON_TAG',
      notes: 'Store page created. Need to apply and update affiliate tag in code.',
      color: 'yellow'
    },
    {
      name: 'World Nomads',
      category: 'Travel Insurance',
      status: 'pending',
      commission: '$10-20 per sale',
      cookieDuration: '90 days',
      signupUrl: 'https://www.worldnomads.com/affiliates',
      loginUrl: 'https://www.worldnomads.com/affiliate/login',
      trackingId: 'Need affiliate code',
      notes: 'Easy approval. Widget ready on insurance page. Need to apply and update tracking code.',
      color: 'yellow'
    },
    {
      name: 'SafetyWing',
      category: 'Travel Insurance',
      status: 'pending',
      commission: '$5 per sale (recurring)',
      cookieDuration: '90 days',
      signupUrl: 'https://safetywing.com/affiliates',
      loginUrl: 'https://safetywing.com/affiliate-dashboard',
      trackingId: 'Need reference ID',
      notes: 'Remote worker insurance. Widget ready. Apply and update referenceID parameter.',
      color: 'yellow'
    },
  ];

  const actionItems = [
    {
      priority: 'high',
      task: 'Apply to GetYourGuide Affiliate Program',
      description: 'Sign up at affiliate.getyourguide.com with website details',
      status: 'todo'
    },
    {
      priority: 'high',
      task: 'Apply to Amazon Associates',
      description: 'Complete application at affiliate-program.amazon.com',
      status: 'todo'
    },
    {
      priority: 'high',
      task: 'Apply to World Nomads Affiliate',
      description: 'Sign up at worldnomads.com/affiliates',
      status: 'todo'
    },
    {
      priority: 'medium',
      task: 'Apply to SafetyWing Affiliates',
      description: 'Join program at safetywing.com/affiliates',
      status: 'todo'
    },
    {
      priority: 'medium',
      task: 'Update GetYourGuide Widget Code',
      description: 'Replace widget code in GetYourGuideWidget.tsx after approval',
      status: 'pending'
    },
    {
      priority: 'medium',
      task: 'Update Amazon Affiliate Tags',
      description: 'Replace YOUR_AMAZON_TAG in store pages with actual tag',
      status: 'pending'
    },
    {
      priority: 'medium',
      task: 'Update Insurance Affiliate Links',
      description: 'Add affiliate codes to TravelInsuranceWidget.tsx',
      status: 'pending'
    },
  ];

  const fileLocations = [
    {
      file: '/src/components/widgets/GetYourGuideWidget.tsx',
      purpose: 'GetYourGuide tours widget - Update after approval',
      action: 'Replace widget embed code with affiliate tracking'
    },
    {
      file: '/src/components/widgets/TravelInsuranceWidget.tsx',
      purpose: 'Insurance affiliate links',
      action: 'Update affiliateCode and referenceID parameters'
    },
    {
      file: '/src/app/store/page.tsx',
      purpose: 'Amazon product links',
      action: 'Replace YOUR_AMAZON_TAG with your actual tag'
    },
    {
      file: '/src/app/store/*/*.tsx',
      purpose: 'All store category pages',
      action: 'Update Amazon tags in all store pages'
    },
  ];

  const filteredAffiliates = affiliates.filter(aff => 
    activeTab === 'all' || aff.status === activeTab
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container-custom max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-2">Affiliate Partners Dashboard</h1>
          <p className="text-gray-600">Track and manage all affiliate partnerships for GoTraveled.com</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-green-500 text-white p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">
              {affiliates.filter(a => a.status === 'active').length}
            </div>
            <div className="text-sm">Active Partners</div>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">
              {affiliates.filter(a => a.status === 'pending').length}
            </div>
            <div className="text-sm">Pending Applications</div>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">
              {affiliates.length}
            </div>
            <div className="text-sm">Total Partners</div>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-xl">
            <div className="text-3xl font-bold mb-2">
              {actionItems.filter(a => a.status === 'todo').length}
            </div>
            <div className="text-sm">Action Items</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4 border-b mb-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-2 px-4 font-semibold transition-colors ${
                activeTab === 'all' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              All Partners ({affiliates.length})
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`pb-2 px-4 font-semibold transition-colors ${
                activeTab === 'active' 
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Active ({affiliates.filter(a => a.status === 'active').length})
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`pb-2 px-4 font-semibold transition-colors ${
                activeTab === 'pending' 
                  ? 'border-b-2 border-yellow-500 text-yellow-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Pending ({affiliates.filter(a => a.status === 'pending').length})
            </button>
          </div>

          {/* Affiliate Cards */}
          <div className="space-y-6">
            {filteredAffiliates.map((affiliate, idx) => (
              <div key={idx} className="border rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{affiliate.name}</h3>
                    <p className="text-sm text-gray-600">{affiliate.category}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    affiliate.status === 'active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {affiliate.status === 'active' ? <><FaCheckCircle className="inline mr-1" /> Active</> : <><FaClock className="inline mr-1" /> Pending</>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Commission:</span>
                    <span className="ml-2 text-sm text-gray-600">{affiliate.commission}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Cookie Duration:</span>
                    <span className="ml-2 text-sm text-gray-600">{affiliate.cookieDuration}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-sm font-semibold text-gray-700">Tracking ID:</span>
                    <span className="ml-2 text-sm text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded">{affiliate.trackingId}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4 bg-blue-50 p-3 rounded">
                  <strong>Notes:</strong> {affiliate.notes}
                </p>

                <div className="flex gap-3">
                  <a
                    href={affiliate.signupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    {affiliate.status === 'pending' ? 'Apply Now' : 'Visit Program'}
                    <FaExternalLinkAlt />
                  </a>
                  {affiliate.status === 'active' && (
                    <a
                      href={affiliate.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
                    >
                      Dashboard
                      <FaChartLine />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Action Items</h2>
          <div className="space-y-4">
            {actionItems.map((item, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        item.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.priority.toUpperCase()}
                      </span>
                      <h3 className="font-semibold">{item.task}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <input type="checkbox" className="mt-1 w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* File Locations */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Code Files to Update</h2>
          <div className="space-y-4">
            {fileLocations.map((file, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-mono text-sm text-blue-600 mb-2">{file.file}</div>
                <div className="text-sm text-gray-700 mb-2"><strong>Purpose:</strong> {file.purpose}</div>
                <div className="text-sm text-gray-600"><strong>Action:</strong> {file.action}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">📝 Application Instructions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">For GetYourGuide:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Go to affiliate.getyourguide.com and click "Join Now"</li>
                <li>Fill in website: gotraveled.com</li>
                <li>Description: "Comprehensive travel website with destination guides and booking services"</li>
                <li>Approval: Usually 1-3 business days</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">For Amazon Associates:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Sign up at affiliate-program.amazon.com</li>
                <li>Complete tax information</li>
                <li>Get your unique affiliate tag (usually: yourname-20)</li>
                <li>Update tag in all store page files</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">For Insurance Partners:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Apply to both World Nomads and SafetyWing</li>
                <li>Both typically approve within 24-48 hours</li>
                <li>Update affiliate codes in TravelInsuranceWidget.tsx</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
