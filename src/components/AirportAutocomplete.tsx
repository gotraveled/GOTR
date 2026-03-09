'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlane } from 'react-icons/fa';

interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

// Popular airports - in production, this would be fetched from an API
const POPULAR_AIRPORTS: Airport[] = [
  { code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA' },
  { code: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'USA' },
  { code: 'LHR', name: 'London Heathrow', city: 'London', country: 'UK' },
  { code: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'UAE' },
  { code: 'SIN', name: 'Singapore Changi', city: 'Singapore', country: 'Singapore' },
  { code: 'HND', name: 'Tokyo Haneda', city: 'Tokyo', country: 'Japan' },
  { code: 'CDG', name: 'Paris Charles de Gaulle', city: 'Paris', country: 'France' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany' },
  { code: 'AMS', name: 'Amsterdam Schiphol', city: 'Amsterdam', country: 'Netherlands' },
  { code: 'ICN', name: 'Incheon International', city: 'Seoul', country: 'South Korea' },
  { code: 'SYD', name: 'Sydney Airport', city: 'Sydney', country: 'Australia' },
  { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok', country: 'Thailand' },
  { code: 'DEL', name: 'Indira Gandhi International', city: 'Delhi', country: 'India' },
  { code: 'BOM', name: 'Chhatrapati Shivaji International', city: 'Mumbai', country: 'India' },
  { code: 'DPS', name: 'Ngurah Rai International', city: 'Bali', country: 'Indonesia' },
  { code: 'ORD', name: "O'Hare International", city: 'Chicago', country: 'USA' },
  { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International', city: 'Atlanta', country: 'USA' },
  { code: 'SFO', name: 'San Francisco International', city: 'San Francisco', country: 'USA' },
  { code: 'MIA', name: 'Miami International', city: 'Miami', country: 'USA' },
  { code: 'BCN', name: 'Barcelona-El Prat', city: 'Barcelona', country: 'Spain' },
  { code: 'FCO', name: 'Leonardo da Vinci-Fiumicino', city: 'Rome', country: 'Italy' },
  { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul', country: 'Turkey' },
  { code: 'DOH', name: 'Hamad International', city: 'Doha', country: 'Qatar' },
  { code: 'MEL', name: 'Melbourne Airport', city: 'Melbourne', country: 'Australia' },
  { code: 'HKG', name: 'Hong Kong International', city: 'Hong Kong', country: 'Hong Kong' },
];

interface Props {
  value: string;
  onChange: (value: string, code: string) => void;
  placeholder: string;
  label: string;
  icon?: React.ComponentType<any>;
}

export default function AirportAutocomplete({ value, onChange, placeholder, label, icon: Icon = FaPlane }: Props) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
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
    
    if (value.length > 0) {
      const filtered = POPULAR_AIRPORTS.filter(airport =>
        airport.code.toLowerCase().includes(value.toLowerCase()) ||
        airport.name.toLowerCase().includes(value.toLowerCase()) ||
        airport.city.toLowerCase().includes(value.toLowerCase()) ||
        airport.country.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8);
      
      setSuggestions(filtered);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (airport: Airport) => {
    const displayValue = `${airport.city} (${airport.code})`;
    setInputValue(displayValue);
    onChange(displayValue, airport.code);
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
      // Show popular airports when field is empty
      setSuggestions(POPULAR_AIRPORTS.slice(0, 8));
      setShowSuggestions(true);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold mb-2 text-gray-700">
        <Icon className="inline mr-2 text-primary" />
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
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-2xl max-h-80 overflow-y-auto">
          {suggestions.map((airport, index) => (
            <div
              key={airport.code}
              onClick={() => handleSuggestionClick(airport)}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800">
                    {airport.city} ({airport.code})
                  </div>
                  <div className="text-sm text-gray-600">{airport.name}</div>
                </div>
                <div className="text-xs text-gray-500">{airport.country}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showSuggestions && suggestions.length === 0 && inputValue.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4">
          <p className="text-gray-500 text-sm">No airports found. Try searching by city or airport code.</p>
        </div>
      )}
    </div>
  );
}
