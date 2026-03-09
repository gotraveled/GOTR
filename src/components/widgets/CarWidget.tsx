'use client';

const CarWidget = () => {
  const affiliateUrl = `https://www.discovercars.com/?a_aid=250882`;

  return (
    <div className="text-center py-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Find the Best Car Rental Deals
      </h3>
      <p className="text-gray-600 mb-6">
        Compare car rental prices from hundreds of companies worldwide
      </p>
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-block"
      >
        Search Car Rentals
      </a>
    </div>
  );
};

export default CarWidget;
