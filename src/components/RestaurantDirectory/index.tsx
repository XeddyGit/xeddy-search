import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import required icons
import { MapPin, School, Bike, UtensilsCrossed, List, Map, Star } from 'lucide-react';
// Import UI components
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
// Import data from data.ts
import { restaurants, universities, cuisineTypes } from './data/index';
import PageLayout from '../layout/PageLayout';
import MapView from '../MapView';


// Main component
const RestaurantDirectory = () => {
  const navigate = useNavigate();
  
  // Google Analytics Integration
  useEffect(() => {
    // Initialize Google Analytics
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', "G-M4M7D5SNCX"); // Replace with your tracking ID

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-M4M7D5SNCX`; // Replace with your tracking ID
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  // State management for filters and searches
  const [nameSearch, setNameSearch] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("All Universities");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [view, setView] = useState<'list' | 'map'>('list');

  // Filter restaurants based on all criteria
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      // Check if matches university filter
      const matchesUniversity = selectedUniversity === "All Universities" || 
        restaurant.nearestUniversity.includes(selectedUniversity);
      
      // Check if matches cuisine filter
      const matchesCuisineDropdown = selectedCuisine === "All Cuisines" || 
        restaurant.cuisine.includes(selectedCuisine.toLowerCase());

      // Check if matches search term (restaurant name or menu items)
      const searchTerm = nameSearch.toLowerCase().trim();
      const matchesSearch = searchTerm === "" || 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.menuItems.some(item => 
          item.name.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm)
        );

      return matchesUniversity && matchesCuisineDropdown && matchesSearch;
    });
  }, [selectedUniversity, selectedCuisine, nameSearch]);

  // Handler to navigate to restaurant menu
  const handleRestaurantClick = (restaurantId: number | string) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  // Component render
  return (
    <PageLayout
      title="Off Campus Directory (OCD)"
      searchPlaceholder="Search by restaurant name or menu item..."
      searchValue={nameSearch}
      onSearchChange={(value) => setNameSearch(value)}
    >
      {/* Filter Section with Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        {/* Filters Row */}
        <div className="flex flex-wrap gap-4">
          <select
            className="flex-1 min-w-[200px] p-3 rounded-lg border border-gray-200 
                       hover:border-blue-500 focus:border-blue-500 focus:ring-2 
                       focus:ring-blue-200 transition-all appearance-none bg-white"
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
          >
            {universities.map(uni => (
              <option key={uni} value={uni}>{uni}</option>
            ))}
          </select>
          
          <select
            className="flex-1 min-w-[200px] p-3 rounded-lg border border-gray-200 
                       hover:border-blue-500 focus:border-blue-500 focus:ring-2 
                       focus:ring-blue-200 transition-all appearance-none bg-white"
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          >
            {cuisineTypes.map(cuisine => (
              <option key={cuisine} value={cuisine}>
                {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="mb-4 text-gray-600">
        Found {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
      </div>

      {/* Add Tab Switcher */}
      <div className="mb-6">
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setView('list')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              view === 'list' 
                ? 'bg-white shadow-md text-blue-600 scale-105' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <List className="w-4 h-4" />
            <span>List View</span>
          </button>
          <button
            onClick={() => setView('map')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
              view === 'map' 
                ? 'bg-white shadow text-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>Map View</span>
          </button>
        </div>
      </div>

      {/* Conditional Rendering based on View */}
      {view === 'list' ? (
        // Restaurant Cards Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map(restaurant => (
            <Card 
              key={restaurant.id} 
              className="group hover:shadow-lg transition-all duration-200 cursor-pointer 
                         bg-white border-gray-100 hover:-translate-y-1"
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-start">
                  <span className="text-lg font-semibold text-gray-900">{restaurant.name}</span>
                  <span className="flex items-center gap-1 bg-gray-50 group-hover:bg-gray-100 
                                 px-3 py-1 rounded-full text-sm font-medium transition-colors">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    {restaurant.rating}
                  </span>
                </CardTitle>
                
                {/* Location and Distance */}
                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{restaurant.address} ({restaurant.distance})</span>
                </div>
              </CardHeader>

              <CardContent>
                {/* Cuisine Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.cuisine.map(type => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-gray-50 group-hover:bg-gray-100 
                               rounded-full text-sm text-gray-600 transition-colors"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  ))}
                </div>

                {/* University Affiliations */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.nearestUniversity.map((university, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1.5 
                               bg-blue-50 group-hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <School className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">
                        {university}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Delivery Services - Enhanced */}
                <div className="flex flex-wrap items-center gap-2">
                  <Bike className="h-4 w-4 text-gray-500" />
                  <div className="flex flex-wrap gap-2">
                    {restaurant.delivery.doordash && (
                      <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium
                                     group-hover:bg-red-100 transition-colors">
                        DoorDash
                      </span>
                    )}
                    {restaurant.delivery.ubereats && (
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium
                                     group-hover:bg-green-100 transition-colors">
                        UberEats
                      </span>
                    )}
                    {restaurant.delivery.grubhub && (
                      <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium
                                     group-hover:bg-orange-100 transition-colors">
                        GrubHub
                      </span>
                    )}
                    {restaurant.delivery.inhouse && (
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium
                                     group-hover:bg-blue-100 transition-colors flex items-center gap-1">
                        <UtensilsCrossed className="h-3 w-3" />
                        In-house
                      </span>
                    )}
                  </div>
                </div>

                {/* Popular Items - Enhanced */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Popular Items</h3>
                  <div className="space-y-2">
                    {restaurant.menuItems
                      .filter(item => 
                        !nameSearch || 
                        item.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
                        item.description.toLowerCase().includes(nameSearch.toLowerCase()) ||
                        restaurant.name.toLowerCase().includes(nameSearch.toLowerCase())
                      )
                      .slice(0, 3)
                      .map(item => (
                        <div 
                          key={item.name} 
                          className="flex justify-between items-center py-1 group-hover:bg-gray-50 
                                    rounded-lg transition-colors px-2"
                        >
                          <span className={`text-sm text-gray-700 ${
                            nameSearch && 
                            (item.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
                             item.description.toLowerCase().includes(nameSearch.toLowerCase()))
                              ? "bg-yellow-100 px-1 rounded"
                              : ""
                          }`}>
                            {item.name}
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <div style={{ height: '400px', width: '100%' }}>
            <MapView 
              restaurants={filteredRestaurants} 
              selectedUniversity={selectedUniversity} 
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

// Export the component
export default RestaurantDirectory;