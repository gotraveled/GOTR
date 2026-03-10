import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  if (!query || query.length < 3) {
    return NextResponse.json({ results: [] });
  }

  try {
    // Try Booking.com GraphQL autocomplete API
    const graphqlQuery = {
      operationName: 'searchAutoComplete',
      variables: {
        request: {
          language: 'en-us',
          searchTerm: query
        }
      },
      query: `
        query searchAutoComplete($request: SearchAutocompleteRequest!) {
          searchAutocomplete(request: $request) {
            results {
              destId
              destType
              city
              country
              name
              __typename
            }
            __typename
          }
        }
      `
    };

    const response = await fetch('https://www.booking.com/dml/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: JSON.stringify(graphqlQuery)
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data?.data?.searchAutocomplete?.results) {
        const results = data.data.searchAutocomplete.results.map((item: any) => ({
          label: item.name,
          name: item.name,
          dest_type: item.destType?.toLowerCase() || 'city',
          type: item.destType?.toLowerCase() || 'city',
          city_name: item.city,
          country: item.country,
          dest_id: item.destId
        }));

        return NextResponse.json({ results });
      }
    }

    // Fallback: return empty to let client use Travelpayouts
    return NextResponse.json({ results: [] });
    
  } catch (error) {
    console.error('Hotel autocomplete error:', error);
    // Return empty to trigger fallback
    return NextResponse.json({ results: [] });
  }
}
