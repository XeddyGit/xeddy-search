import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { restaurants } from '../RestaurantDirectory/data/index';
import PageLayout from '../layout/PageLayout';
import { CreditCard, School } from 'lucide-react';

const RestaurantDetails = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const [menuSearch, setMenuSearch] = useState("");
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const restaurant = restaurants.find(r => r.id === parseInt(restaurantId!));
  
  const filteredMenuItems = restaurant?.menuItems.filter(item =>
    item.name.toLowerCase().includes(menuSearch.toLowerCase()) ||
    item.description.toLowerCase().includes(menuSearch.toLowerCase())
  ) || [];

  const handleImageError = (itemName: string) => {
    setImageErrors(prev => ({
      ...prev,
      [itemName]: true
    }));
  };

  if (!restaurant) {
    return (
      <PageLayout title="Restaurant Not Found" showSearch={false}>
        <Card>
          <CardContent>
            <p className="text-center text-gray-600">Restaurant not found</p>
          </CardContent>
        </Card>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={restaurant.name}
      searchPlaceholder="Search menu items..."
      searchValue={menuSearch}
      onSearchChange={setMenuSearch}
    >
      <Card>
        {restaurant.imageUrl && (
          <div className="relative w-full h-64 mb-4">
            <img
              src={restaurant.imageUrl}
              alt={restaurant.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-3xl font-bold">{restaurant.name}</CardTitle>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-800">
                {restaurant.acceptsCampusCard ? 'Accepts Campus Card' : 'No Campus Card'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {restaurant.nearestUniversity.map((university: string, index: number) => (
                <div 
                  key={index}
                  className="inline-flex items-center space-x-2 px-2 py-1 bg-blue-100 rounded-md"
                >
                  <School className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">
                    {university}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">{restaurant.address} - {restaurant.distance}</p>
              <p className="text-gray-500">{restaurant.nearestUniversity}</p>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  ★ {restaurant.rating}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {restaurant.cuisine.map(type => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-6">Menu Items</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Popular Items
              </h3>
              
              {filteredMenuItems.map(item => (
                <div key={item.name} className="border-b pb-4 last:border-b-0">
                  <div className="flex gap-4">
                    {/* Image Container */}
                    {item.imageUrl && !imageErrors[item.name] && (
                      <div className="flex-shrink-0 w-24 h-24">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full rounded-lg object-cover"
                          onError={() => handleImageError(item.name)}
                        />
                      </div>
                    )}
                    
                    {/* Item Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="text-gray-700 font-semibold ml-4">
                          {item.largePrice ? (
                            <div className="text-right">
                              <div>9" ${item.price.toFixed(2)}</div>
                              <div>12" ${item.largePrice.toFixed(2)}</div>
                            </div>
                          ) : (
                            <div>${item.price.toFixed(2)}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default RestaurantDetails;
