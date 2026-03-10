'use client';

import { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaHotel, FaCity } from 'react-icons/fa';

interface SearchResult {
  name: string;
  type: string;
  country: string;
  displayName: string;
  city?: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  required?: boolean;
}

export default function HotelCityAutocomplete({ value, onChange, placeholder, label, required = false }: Props) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchDestinations = async (searchTerm: string) => {
    if (searchTerm.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      // Try using Booking.com destinations API
      const response = await fetch(
        `/api/hotel-autocomplete?query=${encodeURIComponent(searchTerm)}`
      );
      
      if (response.ok) {
        const data = await response.json();
        
        if (data && data.results && Array.isArray(data.results)) {
          const results: SearchResult[] = data.results.slice(0, 15).map((item: any) => {
            const isHotel = item.dest_type === 'hotel' || item.type === 'hotel';
            const displayName = isHotel && item.city_name 
              ? `${item.label || item.name} (${item.city_name})`
              : (item.label || item.name);
            
            return {
              name: item.label || item.name || '',
              type: isHotel ? 'hotel' : 'city',
              country: item.country || '',
              city: item.city_name || '',
              displayName: displayName
            };
          });
          
          setSuggestions(results);
          setShowSuggestions(true);
          setIsLoading(false);
          return;
        }
      }
      
      // Fallback: Search cities with Travelpayouts
      const cityResponse = await fetch(
        `https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(searchTerm)}&locale=en&types[]=city`
      );
      
      const cityData = await cityResponse.json();
      
      if (cityData && Array.isArray(cityData)) {
        const results: SearchResult[] = cityData.slice(0, 10).map((item: any) => ({
          name: item.name || item.city_name || '',
          type: 'city',
          country: item.country_name || item.country || '',
          displayName: item.name || item.city_name || ''
        }));
        
        setSuggestions(results);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('Hotel search error:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
    
    // Debounce search
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    searchTimeoutRef.current = setTimeout(() => {
      searchDestinations(value);
    }, 300);
  };

  const handleSuggestionClick = (result: SearchResult) => {
    setInputValue(result.displayName);
    onChange(result.displayName);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSuggestionClick(suggestions[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const getIcon = (type: string) => {
    if (type === 'hotel') return <FaHotel className="text-blue-600" />;
    return <FaCity className="text-green-600" />;
  };

  const getTypeLabel = (type: string) => {
    if (type === 'hotel') return 'Hotel';
    if (type === 'city') return 'City';
    return 'Location';
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold mb-2 text-gray-700">
        <FaMapMarkerAlt className="inline mr-2 text-primary" />
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (suggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
        autoComplete="off"
        required={required}
      />
      
      {isLoading && (
        <div className="absolute right-3 top-12">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-2xl max-h-96 overflow-y-auto">
          {suggestions.map((result, index) => (
            <div
              key={`${result.name}-${index}`}
              onClick={() => handleSuggestionClick(result)}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                {getIcon(result.type)}
                <div>
                  <div className="font-semibold text-gray-800">
                    {result.displayName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {getTypeLabel(result.type)}{result.country && ` • ${result.country}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showSuggestions && suggestions.length === 0 && !isLoading && inputValue.length >= 3 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4">
          <p className="text-gray-600 text-sm mb-2">💡 <strong>You can type:</strong></p>
          <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc">
            <li><strong>Hotel + City:</strong> "Oberoi Mumbai"</li>
            <li><strong>Specific Hotel:</strong> "Taj Mahal Palace"</li>
            <li><strong>Just City:</strong> "Paris" or "New York"</li>
          </ul>
          <p className="text-green-600 text-xs mt-2 font-semibold">✓ Booking.com will show all matching hotels when you search!</p>
        </div>
      )}
    </div>
  );
}
