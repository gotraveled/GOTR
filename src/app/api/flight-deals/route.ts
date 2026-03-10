import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = process.env.TRAVELPAYOUTS_API_TOKEN;
    
    if (!token) {
      console.error('TRAVELPAYOUTS_API_TOKEN not found');
      return NextResponse.json({ deals: [] });
    }

    // Popular routes to check for deals
    const routes = [
      { origin: 'NYC', destination: 'LON' }, // New York to London
      { origin: 'LAX', destination: 'TYO' }, // Los Angeles to Tokyo
      { origin: 'NYC', destination: 'PAR' }, // New York to Paris
      { origin: 'MIA', destination: 'BCN' }, // Miami to Barcelona
      { origin: 'SFO', destination: 'SYD' }, // San Francisco to Sydney
      { origin: 'CHI', destination: 'DXB' }, // Chicago to Dubai
      { origin: 'LAX', destination: 'LON' }, // LA to London
      { origin: 'NYC', destination: 'TYO' }, // NYC to Tokyo
    ];

    const deals: any[] = [];

    // Fetch latest prices for each route
    for (const route of routes) {
      try {
        // Use Travelpayouts Latest Prices API
        const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${route.origin}&destination=${route.destination}&currency=usd&token=${token}`;
        
        const response = await fetch(url, {
          next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (response.ok) {
          const data = await response.json();
          
          if (data.success && data.data && data.data.length > 0) {
            // Get the cheapest flight from the response
            const cheapest = data.data[0];
            
            deals.push({
              origin: cheapest.origin || route.origin,
              destination: cheapest.destination || route.destination,
              price: Math.round(cheapest.price || cheapest.value),
              currency: 'USD',
              departure_at: cheapest.departure_at || cheapest.depart_date,
              return_at: cheapest.return_at || cheapest.return_date,
              airline: cheapest.airline || 'Multiple Airlines'
            });
          }
        }
      } catch (routeError) {
        console.error(`Failed to fetch deal for ${route.origin}-${route.destination}:`, routeError);
        continue;
      }
      
      // Limit to 6 deals to match the grid
      if (deals.length >= 6) break;
    }

    // If we got some deals, return them
    if (deals.length > 0) {
      return NextResponse.json({ deals });
    }

    // No deals found, return empty
    return NextResponse.json({ deals: [] });
    
  } catch (error) {
    console.error('Flight deals API error:', error);
    return NextResponse.json({ deals: [] });
  }
}
