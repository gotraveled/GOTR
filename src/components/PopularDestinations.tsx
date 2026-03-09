import Image from 'next/image';
import Link from 'next/link';

const PopularDestinations = () => {
  const destinations = [
    {
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      link: '/destinations/dubai',
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      link: '/destinations/bali',
    },
    {
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      link: '/destinations/paris',
    },
    {
      name: 'Thailand',
      country: 'Asia',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      link: '/destinations/thailand',
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      link: '/destinations/tokyo',
    },
    {
      name: 'New York',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
      link: '/destinations/new-york',
    },
  ];

  return (
    <div className="container-custom">
      <h2 className="section-title text-center">Popular Destinations</h2>
      <p className="section-subtitle text-center">
        Explore amazing destinations around the world
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Link 
            key={destination.name} 
            href={destination.link}
            className="card group cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                <p className="text-blue-200">{destination.country}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
