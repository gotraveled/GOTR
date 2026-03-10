import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  if (!query || query.length < 3) {
    return NextResponse.json({ results: [] });
  }

  try {
    // Try multiple Booking.com autocomplete endpoints
    const endpoints = [
      // Endpoint 1: Main autocomplete
      `https://accommodations.booking.com/autocomplete.json?text=${encodeURIComponent(query)}&language=en`,
      // Endpoint 2: Search autocomplete
      `https://www.booking.com/autocomplete_xhr?text=${encodeURIComponent(query)}&lang=en`,
      // Endpoint 3: Destinations
      `https://www.booking.com/destinations/autocomplete.json?term=${encodeURIComponent(query)}&lang=en`
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.9',
            'Referer': 'https://www.booking.com/'
          },
          next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (response.ok) {
          const data = await response.json();
          
          // Handle different response formats
          let rawResults = [];
          
          if (Array.isArray(data)) {
            rawResults = data;
          } else if (data?.results) {
            rawResults = data.results;
          } else if (data?.data) {
            rawResults = data.data;
          }

          if (rawResults.length > 0) {
            const results = rawResults.slice(0, 15).map((item: any) => {
              const isHotel = item.dest_type === 'hotel' || item.type === 'hotel' || item.cc1 === 'hotel';
              const name = item.name || item.label || item.dest_name || '';
              const city = item.city_name || item.city || '';
              
              return {
                label: isHotel && city ? `${name} (${city})` : name,
                name: name,
                dest_type: isHotel ? 'hotel' : 'city',
                type: isHotel ? 'hotel' : 'city',
                city_name: city,
                country: item.country || item.region || '',
                dest_id: item.dest_id || item.id
              };
            }).filter((item: any) => item.name); // Remove empty results

            if (results.length > 0) {
              return NextResponse.json({ results });
            }
          }
        }
      } catch (endpointError) {
        console.error(`Endpoint failed: ${endpoint}`, endpointError);
        continue;
      }
    }

    // All endpoints failed - return empty
    return NextResponse.json({ results: [] });
    
  } catch (error) {
    console.error('Hotel autocomplete error:', error);
    return NextResponse.json({ results: [] });
  }
}
