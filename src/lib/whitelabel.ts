// Travelpayouts White Label Configuration

export const WHITELABEL_CONFIG = {
  marker: '250882',
  projectId: '17835',
  
  // Aviasales/Jetradar White Label
  flights: {
    searchUrl: 'https://search.jetradar.com/search',
    iframeUrl: 'https://hydra.jetradar.com/searches/new',
  },
  
  // Hotels White Label
  hotels: {
    searchUrl: 'https://tp.media/content',
    promoId: '7866',
  },
  
  // KiwiTaxi White Label
  transfers: {
    searchUrl: 'https://tp.media/content',
    promoId: '2949',
  },
  
  // DiscoverCars
  cars: {
    affiliateUrl: 'https://www.discovercars.com/?a_aid=250882',
  },
};

export function buildFlightSearchUrl(params: {
  origin: string;
  destination: string;
  departure: string;
  returnDate?: string;
  passengers?: string;
}) {
  const { origin, destination, departure, returnDate, passengers = '1' } = params;
  
  const urlParams = new URLSearchParams({
    origin_iata: origin,
    destination_iata: destination,
    depart_date: departure,
    adults: passengers,
    marker: WHITELABEL_CONFIG.marker,
    with_request: 'true',
  });
  
  if (returnDate) {
    urlParams.append('return_date', returnDate);
  }
  
  return `${WHITELABEL_CONFIG.flights.searchUrl}?${urlParams.toString()}`;
}

export function buildHotelSearchUrl(params: {
  city: string;
  checkIn: string;
  checkOut: string;
  guests?: string;
}) {
  const { city, checkIn, checkOut, guests = '2' } = params;
  
  return `${WHITELABEL_CONFIG.hotels.searchUrl}?promo_id=${WHITELABEL_CONFIG.hotels.promoId}&shmarker=${WHITELABEL_CONFIG.marker}&locale=en&currency=usd&city=${encodeURIComponent(city)}&check_in=${checkIn}&check_out=${checkOut}&guests=${guests}`;
}

export function buildTransferSearchUrl(params: {
  from: string;
  to: string;
  date: string;
}) {
  const { from, to, date } = params;
  
  return `${WHITELABEL_CONFIG.transfers.searchUrl}?promo_id=${WHITELABEL_CONFIG.transfers.promoId}&shmarker=${WHITELABEL_CONFIG.marker}&locale=en&currency=usd&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`;
}

export function buildCarRentalUrl(params: {
  pickup: string;
  dropoff: string;
  pickupDate: string;
  dropoffDate: string;
}) {
  const { pickup, dropoff, pickupDate, dropoffDate } = params;
  
  return `${WHITELABEL_CONFIG.cars.affiliateUrl}&pick_up=${encodeURIComponent(pickup)}&drop_off=${encodeURIComponent(dropoff)}&pick_up_date=${pickupDate}&drop_off_date=${dropoffDate}`;
}
