import { FaShieldAlt, FaAward, FaUsers, FaHeadset, FaLock, FaStar } from 'react-icons/fa';

const TrustBadges = () => {
  const badges = [
    {
      icon: FaShieldAlt,
      title: 'Secure Booking',
      description: 'SSL encrypted transactions',
      color: 'text-green-600'
    },
    {
      icon: FaAward,
      title: 'Best Price Guarantee',
      description: 'Find lower price? We refund the difference',
      color: 'text-blue-600'
    },
    {
      icon: FaUsers,
      title: '5M+ Happy Travelers',
      description: 'Join millions of satisfied customers',
      color: 'text-purple-600'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Always here to help you',
      color: 'text-orange-600'
    },
    {
      icon: FaLock,
      title: 'Safe & Secure',
      description: 'Your data is protected',
      color: 'text-red-600'
    },
    {
      icon: FaStar,
      title: '4.8/5 Rating',
      description: 'Based on 50,000+ reviews',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Book With Us?</h2>
          <p className="text-gray-600">Trusted by millions of travelers worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-full bg-gray-50 group-hover:scale-110 transition-transform ${badge.color}`}>
                    <Icon className="text-3xl" />
                  </div>
                </div>
                <h3 className="font-bold text-sm text-gray-800 mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 mb-6">Powered by world's leading travel providers</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-gray-400 font-bold text-lg">Aviasales</div>
            <div className="text-gray-400 font-bold text-lg">Hotellook</div>
            <div className="text-gray-400 font-bold text-lg">KiwiTaxi</div>
            <div className="text-gray-400 font-bold text-lg">DiscoverCars</div>
            <div className="text-gray-400 font-bold text-lg">Travelpayouts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
