import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import required icons
import { Search, MapPin, CreditCard, School, Bike, UtensilsCrossed } from 'lucide-react';
// Import UI components
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
// Import data from data.ts
import { restaurantData, universities, cuisineTypes } from './data';
import PageLayout from '../layout/PageLayout';


// Main component
const RestaurantDirectory = () => {
  const navigate = useNavigate();
  
  // State management for filters and searches
  const [nameSearch, setNameSearch] = useState("");
  const [cuisineSearch, setCuisineSearch] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("All Universities");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [showOnlyCampusCard, setShowOnlyCampusCard] = useState(false);

  // Filter restaurants based on all criteria
  const filteredRestaurants = restaurantData.filter(restaurant => {
    // Check if restaurant name matches search
    const matchesName = restaurant.name.toLowerCase().includes(nameSearch.toLowerCase());
    
    // Check if any menu item matches search
    const matchesMenuItem = restaurant.menuItems.some(item => 
      item.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(nameSearch.toLowerCase())
    );
    
    // Check if any cuisine type matches search
    const matchesCuisineSearch = cuisineSearch === "" || 
      restaurant.cuisine.some(cuisine => 
        cuisine.toLowerCase().includes(cuisineSearch.toLowerCase())
      );
    
    // Check other filters
    const matchesUniversity = selectedUniversity === "All Universities" || 
      restaurant.nearestUniversity === selectedUniversity;
    const matchesCuisineDropdown = selectedCuisine === "All Cuisines" || 
      restaurant.cuisine.includes(selectedCuisine.toLowerCase());
    const matchesCampusCard = !showOnlyCampusCard || restaurant.acceptsCampusCard;
    
    // Return true if name OR menu items match, AND all other criteria match
    return (matchesName || matchesMenuItem) && matchesCuisineSearch && 
           matchesUniversity && matchesCuisineDropdown && matchesCampusCard;
  });

  // Handler to navigate to restaurant menu
  const handleRestaurantClick = (restaurantId: number | string) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  // Component render
  return (
    <PageLayout
      title="Off Campus Directory (powered by Xeddy)"
      searchPlaceholder="Search by restaurant name or menu item..."
      searchValue={nameSearch}
      onSearchChange={setNameSearch}
    >
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* University Filter */}
        <select
          className="p-2 border rounded-lg"
          value={selectedUniversity}
          onChange={(e) => setSelectedUniversity(e.target.value)}
        >
          {universities.map(uni => (
            <option key={uni} value={uni}>{uni}</option>
          ))}
        </select>
        
        {/* Cuisine Dropdown Filter */}
        <select
          className="p-2 border rounded-lg"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          {cuisineTypes.map(cuisine => (
            <option key={cuisine} value={cuisine}>
              {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
            </option>
          ))}
        </select>
        
        {/* Campus Card Filter */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showOnlyCampusCard}
            onChange={(e) => setShowOnlyCampusCard(e.target.checked)}
            className="rounded"
          />
          <span>Campus Card Only</span>
        </label>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-gray-600">
        Found {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map(restaurant => (
          <Card 
            key={restaurant.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{restaurant.name}</span>
                <span className="text-sm font-normal">★ {restaurant.rating}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {/* Restaurant Details */}
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{restaurant.address} ({restaurant.distance})</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <School className="h-4 w-4 mr-2" />
                  <span>{restaurant.nearestUniversity}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span>{restaurant.acceptsCampusCard ? "Accepts Campus Card" : "No Campus Card"}</span>
                </div>
                {/* Cuisine Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {restaurant.cuisine.map(type => (
                    <span
                      key={type}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  ))}
                </div>

                {/* Delivery Information */}
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Bike className="h-4 w-4" />
                  <div className="flex flex-wrap gap-2">
                    {restaurant.delivery.doordash && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        DoorDash
                      </span>
                    )}
                    {restaurant.delivery.ubereats && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        UberEats
                      </span>
                    )}
                    {restaurant.delivery.grubhub && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                        GrubHub
                      </span>
                    )}
                    {restaurant.delivery.inhouse && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs flex items-center gap-1">
                        <UtensilsCrossed className="h-3 w-3" />
                        In-house
                      </span>
                    )}
                    {!restaurant.delivery.doordash && 
                     !restaurant.delivery.ubereats && 
                     !restaurant.delivery.grubhub && 
                     !restaurant.delivery.inhouse && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        No Delivery
                      </span>
                    )}
                  </div>
                </div>

                {/* Popular Menu Items - Now with search highlight */}
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Popular Items</h3>
                  {restaurant.menuItems
                    .filter(item => 
                      !nameSearch || 
                      item.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
                      item.description.toLowerCase().includes(nameSearch.toLowerCase())
                    )
                    .slice(0, 3)
                    .map(item => (
                      <div key={item.name} className="flex justify-between text-sm text-gray-700 mb-1">
                        <span className={
                          nameSearch && 
                          (item.name.toLowerCase().includes(nameSearch.toLowerCase()) ||
                           item.description.toLowerCase().includes(nameSearch.toLowerCase()))
                            ? "bg-yellow-100"
                            : ""
                        }>
                          {item.name}
                        </span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

// Export the component
export default RestaurantDirectory;