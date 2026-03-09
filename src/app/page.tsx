import Hero from '@/components/Hero';
import PopularDestinations from '@/components/PopularDestinations';
import FlightDealsWidget from '@/components/widgets/FlightDealsWidget';
import HotelWidget from '@/components/widgets/HotelWidget';
import TaxiWidget from '@/components/widgets/TaxiWidget';
import Newsletter from '@/components/Newsletter';
import BlogSection from '@/components/BlogSection';
import TrustBadges from '@/components/TrustBadges';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <PopularDestinations />
      </section>

      {/* Cheap Flight Deals */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Cheap Flight Deals</h2>
          <p className="section-subtitle text-center">
            Discover amazing flight deals to destinations worldwide
          </p>
          <FlightDealsWidget />
        </div>
      </section>

      {/* Best Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Find the Best Hotels</h2>
          <p className="section-subtitle text-center">
            Search and compare hotels at the best prices
          </p>
          <HotelWidget />
        </div>
      </section>

      {/* Airport Transfers */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Airport Transfers</h2>
          <p className="section-subtitle text-center">
            Book reliable airport transfers worldwide
          </p>
          <TaxiWidget />
        </div>
      </section>

      {/* Travel Blog */}
      <section className="py-16 bg-gray-50">
        <BlogSection />
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary">
        <Newsletter />
      </section>
    </div>
  );
}
