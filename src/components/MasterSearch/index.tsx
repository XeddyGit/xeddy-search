import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from '../RestaurantDirectory/types';

interface SearchBarProps {
  restaurants: Restaurant[];
  universities: string[];
}

const MasterSearch: React.FC<SearchBarProps> = ({ restaurants, universities }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<(Restaurant | string)[]>([]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const placeholders = [
    "I'm a student at...",
    "I'm hungry for...",
    "The best pizza in..."
  ];

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = placeholders[placeholderIndex];
      
      if (isDeleting) {
        currentText = currentPhrase.substring(0, currentIndex - 1);
        currentIndex--;
      } else {
        currentText = currentPhrase.substring(0, currentIndex + 1);
        currentIndex++;
      }

      setCurrentPlaceholder(currentText);

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentIndex === currentPhrase.length) {
        // Pause at the end of typing
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        currentIndex = 0;
        typingSpeed = 500;
      }

      timeout = setTimeout(type, typingSpeed);
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [placeholderIndex]);

  const parseNaturalLanguageQuery = (query: string) => {
    query = query.toLowerCase();
    
    // Extract key information from the query
    const universityMatch = universities.find(uni => 
      query.includes(uni.toLowerCase()) && uni !== "All Universities"
    );
    
    // Check for cuisine types
    const commonCuisineTypes = ['pizza', 'burger', 'sushi', 'chinese', 'italian', 'mexican'];
    const cuisineMatch = commonCuisineTypes.find(cuisine => 
      query.includes(cuisine.toLowerCase())
    );
    
    // Check for qualifiers
    const hasQualityIndicator = query.includes('best') || query.includes('top') || query.includes('highest rated');
    
    // Filter and sort results
    let results = restaurants.filter((restaurant: Restaurant) => {
      const matchesCuisine = cuisineMatch ? 
        restaurant.cuisine.some(type => type.toLowerCase().includes(cuisineMatch)) : true;
      
      const matchesUniversity = universityMatch ? 
        restaurant.nearestUniversity.some(uni => uni.toLowerCase() === universityMatch.toLowerCase()) : true;
      
      return matchesCuisine && matchesUniversity;
    });

    // Sort by rating if looking for "best"
    if (hasQualityIndicator) {
      results = results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return results;
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSearchResults([]); // Clear results if input is empty
      return;
    }

    // Check if the query looks like a natural language question
    if (value.includes('?') || 
        value.toLowerCase().includes('what') || 
        value.toLowerCase().includes('where') ||
        value.toLowerCase().includes('best') ||
        value.toLowerCase().includes('near')) {
      // Handle as natural language query
      const results = parseNaturalLanguageQuery(value);
      setSearchResults(results);
      return;
    }

    // Regular search logic for non-question queries
    const filteredRestaurants = restaurants.filter((restaurant: Restaurant) =>
      restaurant.name.toLowerCase().includes(value.toLowerCase()) ||
      restaurant.menuItems.some(item => item.name.toLowerCase().includes(value.toLowerCase())) ||
      restaurant.cuisine.some(type => type.toLowerCase().includes(value.toLowerCase()))
    );

    const filteredUniversities = universities
      .filter(university => 
        university !== "All Universities" && 
        university.toLowerCase().includes(value.toLowerCase())
      );

    setSearchResults([...filteredRestaurants, ...filteredUniversities]);
  };

  const handleResultClick = (result: Restaurant | string) => {
    if (typeof result === 'object' && 'menuItems' in result) {
      navigate(`/restaurant/${result.id}`); // Navigate to restaurant details
    } else {
      // Handle university click by navigating to directory with university filter
      navigate(`/directory?university=${encodeURIComponent(result)}`);
    }
    setSearchTerm(''); // Clear search term
    setSearchResults([]); // Clear results
  };

  return (
    <div className="relative w-full max-w-4xl mb-8">
      <input
        type="text"
        placeholder={currentPlaceholder}
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-4 text-lg rounded-full w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition duration-200 text-black"
      />
      {searchTerm && searchResults.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-md max-h-60 overflow-y-auto z-50">
          {searchResults.map((result, index) => (
            <div 
              key={index} 
              onClick={() => handleResultClick(result)} 
              className="p-4 cursor-pointer hover:bg-gray-200 rounded-md text-black transition duration-200 flex items-center justify-between"
            >
              <span>{typeof result === 'object' && 'menuItems' in result ? result.name : result}</span>
              <div className="flex gap-2 flex-wrap items-center justify-end">
                {typeof result === 'object' && 'menuItems' in result ? (
                  <>
                    {/* University badges */}
                    {result.nearestUniversity.map((uni: string, idx: number) => (
                      <span 
                        key={`uni-${idx}`}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                      >
                        {uni}
                      </span>
                    ))}
                    {/* Cuisine badges */}
                    {result.cuisine.map((type: string, idx: number) => (
                      <span 
                        key={`cuisine-${idx}`}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </>
                ) : (
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    University
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MasterSearch;
