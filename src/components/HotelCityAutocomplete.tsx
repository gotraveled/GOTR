'use client';

import { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaHotel } from 'react-icons/fa';

interface SearchResult {
  name: string;
  type: string; // 'city', 'hotel', 'region'
  country: string;
  displayName: string;
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
    if (searchTerm.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      // Using Travelpayouts Places API which includes hotels, cities, and landmarks
      const response = await fetch(
        `https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(searchTerm)}&locale=en&types[]=city&types[]=hotel`
      );
      
      const data = await response.json();
      
      if (data && Array.isArray(data)) {
        const results: SearchResult[] = data.slice(0, 15).map((item: any) => ({
          name: item.name || item.city_name || '',
          type: item.type || 'city',
          country: item.country_name || item.country || '',
          displayName: item.name || item.city_name || ''
        }));
        
        setSuggestions(results);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('Destination search error:', error);
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
    return <FaMapMarkerAlt className="text-green-600" />;
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getIcon(result.type)}
                  <div>
                    <div className="font-semibold text-gray-800">
                      {result.displayName}
                    </div>
                    <div className="text-xs text-gray-500">
                      {getTypeLabel(result.type)} • {result.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showSuggestions && suggestions.length === 0 && !isLoading && inputValue.length >= 2 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4">
          <p className="text-gray-600 text-sm">💡 <strong>Tip:</strong> Type any hotel name, city, or address.</p>
          <p className="text-gray-500 text-xs mt-1">Booking.com will search for it when you submit.</p>
        </div>
      )}
    </div>
  );
}
