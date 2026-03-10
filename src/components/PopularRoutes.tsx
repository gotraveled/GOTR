'use client';

interface Route {
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  price: string;
}

export default function PopularRoutes() {
  const popularRoutes: Route[] = [
    { from: 'New York', fromCode: 'NYC', to: 'London', toCode: 'LON', price: '$299' },
    { from: 'Los Angeles', fromCode: 'LAX', to: 'Tokyo', toCode: 'TYO', price: '$450' },
    { from: 'Mumbai', fromCode: 'BOM', to: 'Dubai', toCode: 'DXB', price: '$180' },
    { from: 'Paris', fromCode: 'PAR', to: 'Barcelona', toCode: 'BCN', price: '$89' },
    { from: 'Sydney', fromCode: 'SYD', to: 'Bali', toCode: 'DPS', price: '$210' },
    { from: 'Singapore', fromCode: 'SIN', to: 'Bangkok', toCode: 'BKK', price: '$75' },
  ];

  const handleRouteSearch = (route: Route) => {
    window.location.href = `https://book.gotraveled.com/?marker=250882`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularRoutes.map((route, index) => (
        <div key={index} className="card p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-lg font-semibold text-gray-800">{route.from}</p>
              <p className="text-sm text-gray-500">to</p>
              <p className="text-lg font-semibold text-gray-800">{route.to}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">From</p>
              <p className="text-2xl font-bold text-primary">{route.price}</p>
            </div>
          </div>
          <button 
            onClick={() => handleRouteSearch(route)}
            className="btn-primary w-full"
          >
            Search Flights
          </button>
        </div>
      ))}
    </div>
  );
}
