'use client';

import { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface City {
  name: string;
  country: string;
  region?: string;
}

// Popular cities for hotels - in production, this would be fetched from an API
const POPULAR_CITIES: City[] = [
  { name: 'New York', country: 'USA', region: 'New York' },
  { name: 'London', country: 'UK', region: 'England' },
  { name: 'Paris', country: 'France', region: 'Île-de-France' },
  { name: 'Tokyo', country: 'Japan', region: 'Kanto' },
  { name: 'Dubai', country: 'UAE' },
  { name: 'Singapore', country: 'Singapore' },
  { name: 'Barcelona', country: 'Spain', region: 'Catalonia' },
  { name: 'Rome', country: 'Italy', region: 'Lazio' },
  { name: 'Amsterdam', country: 'Netherlands', region: 'North Holland' },
  { name: 'Bangkok', country: 'Thailand' },
  { name: 'Istanbul', country: 'Turkey' },
  { name: 'Bali', country: 'Indonesia' },
  { name: 'Los Angeles', country: 'USA', region: 'California' },
  { name: 'Sydney', country: 'Australia', region: 'New South Wales' },
  { name: 'Miami', country: 'USA', region: 'Florida' },
  { name: 'Las Vegas', country: 'USA', region: 'Nevada' },
  { name: 'Hong Kong', country: 'Hong Kong' },
  { name: 'Seoul', country: 'South Korea' },
  { name: 'Mumbai', country: 'India', region: 'Maharashtra' },
  { name: 'Delhi', country: 'India' },
  { name: 'Berlin', country: 'Germany' },
  { name: 'Vienna', country: 'Austria' },
  { name: 'Prague', country: 'Czech Republic' },
  { name: 'Athens', country: 'Greece' },
  { name: 'Lisbon', country: 'Portugal' },
  { name: 'Madrid', country: 'Spain' },
  { name: 'San Francisco', country: 'USA', region: 'California' },
  { name: 'Chicago', country: 'USA', region: 'Illinois' },
  { name: 'Melbourne', country: 'Australia', region: 'Victoria' },
  { name: 'Vancouver', country: 'Canada', region: 'British Columbia' },
];

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  required?: boolean;
}

export default function CityAutocomplete({ value, onChange, placeholder, label, required = false }: Props) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
    
    if (value.length > 0) {
      const filtered = POPULAR_CITIES.filter(city =>
        city.name.toLowerCase().includes(value.toLowerCase()) ||
        city.country.toLowerCase().includes(value.toLowerCase()) ||
        (city.region && city.region.toLowerCase().includes(value.toLowerCase()))
      ).slice(0, 8);
      
      setSuggestions(filtered);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (city: City) => {
    const displayValue = city.name;
    setInputValue(displayValue);
    onChange(displayValue);
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

  const handleFocus = () => {
    if (inputValue.length > 0 && suggestions.length > 0) {
      setShowSuggestions(true);
    } else if (inputValue.length === 0) {
      // Show popular cities when field is empty
      setSuggestions(POPULAR_CITIES.slice(0, 8));
      setShowSuggestions(true);
    }
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
        onFocus={handleFocus}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 bg-white"
        autoComplete="off"
        required={required}
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-2xl max-h-80 overflow-y-auto">
          {suggestions.map((city, index) => (
            <div
              key={`${city.name}-${city.country}`}
              onClick={() => handleSuggestionClick(city)}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800">{city.name}</div>
                  {city.region && (
                    <div className="text-xs text-gray-500">{city.region}, {city.country}</div>
                  )}
                  {!city.region && (
                    <div className="text-xs text-gray-500">{city.country}</div>
                  )}
                </div>
                <FaMapMarkerAlt className="text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showSuggestions && suggestions.length === 0 && inputValue.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4">
          <p className="text-gray-500 text-sm">No cities found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
}
