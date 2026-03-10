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
    const today = new Date();
    const departure = new Date(today);
    departure.setDate(departure.getDate() + 30);
    const returnDate = new Date(departure);
    returnDate.setDate(returnDate.getDate() + 7);

    // Format dates to DDMMYY for Aviasales
    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2);
      return `${day}${month}${year}`;
    };
    
    const departureFormatted = formatDate(departure);
    const returnFormatted = formatDate(returnDate);
    
    // Aviasales format: /ORIGIN-DESTINATION-DDMMYY-DDMMYY-PASSENGERS
    const searchUrl = `https://book.gotraveled.com/${route.fromCode}-${route.toCode}-${departureFormatted}-${returnFormatted}-1?marker=250882`;
    
    window.location.href = searchUrl;
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
