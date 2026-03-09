'use client';

import { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface City {
  id: string;
  name: string;
  country: string;
}

interface Props {
  value: string;
  onChange: (value: string, id: string) => void;
  placeholder: string;
  label: string;
  required?: boolean;
}

export default function RealCityAutocomplete({ value, onChange, placeholder, label, required = false }: Props) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<City[]>([]);
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

  const searchCities = async (searchTerm: string) => {
    if (searchTerm.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      // Using Travelpayouts City Autocomplete API
      const response = await fetch(
        `https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(searchTerm)}&locale=en&types[]=city`
      );
      
      const data = await response.json();
      
      if (data && Array.isArray(data)) {
        const cities: City[] = data.slice(0, 10).map((item: any) => ({
          id: item.id || item.code || '',
          name: item.name || item.city_name || '',
          country: item.country_name || item.country || ''
        }));
        
        setSuggestions(cities);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('City search error:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value, '');
    
    // Debounce search
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    searchTimeoutRef.current = setTimeout(() => {
      searchCities(value);
    }, 300);
  };

  const handleSuggestionClick = (city: City) => {
    setInputValue(city.name);
    onChange(city.name, city.id);
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
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-2xl max-h-80 overflow-y-auto">
          {suggestions.map((city, index) => (
            <div
              key={`${city.id}-${index}`}
              onClick={() => handleSuggestionClick(city)}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-800">{city.name}</div>
                <div className="text-xs text-gray-500">{city.country}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {showSuggestions && suggestions.length === 0 && !isLoading && inputValue.length >= 2 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4">
          <p className="text-gray-500 text-sm">No cities found. Try a different search.</p>
        </div>
      )}
    </div>
  );
}
