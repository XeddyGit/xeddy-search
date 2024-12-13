import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { restaurants } from '../RestaurantDirectory/data/index';
import PageLayout from '../layout/PageLayout';
import { CreditCard, School, MapPin, Star } from 'lucide-react';
import { EDealButton } from '../EmailDealButton/EDealButton';

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
      <Card className="overflow-hidden bg-white shadow-lg">
        {restaurant.imageUrl && (
          <div className="relative h-72 w-full">
            <img
              src={restaurant.imageUrl}
              alt={restaurant.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <CardHeader className="space-y-6">
          <div className="space-y-4">
            <CardTitle className="text-4xl font-bold tracking-tight">{restaurant.name}</CardTitle>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                <CreditCard className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  {restaurant.acceptsCampusCard ? 'Accepts Campus Card' : 'No Campus Card'}
                </span>
              </div>

              {restaurant.nearestUniversity.map((university: string, index: number) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2"
                >
                  <School className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">
                    {university}
                  </span>
                </div>
              ))}
            </div>

            {restaurant.hasDeals && restaurant.currentDeal && (
              <div className="mt-4">
                <EDealButton 
                  restaurantName={restaurant.name}
                  dealDetails={restaurant.currentDeal}
                />
              </div>
            )}

            <div className="space-y-4 pt-4">
              <a 
                href={restaurant.addressLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
              >
                <MapPin className="h-4 w-4" />
                {restaurant.address}
              </a>

              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                  <Star className="h-4 w-4" fill="currentColor" />
                  {restaurant.rating}
                </span>

                {restaurant.cuisine.map(type => (
                  <span
                    key={type}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Menu Items</h2>
              <div className="mt-6 divide-y divide-gray-200">
                {filteredMenuItems.map(item => (
                  <div key={item.name} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex gap-6">
                      {item.imageUrl && !imageErrors[item.name] && (
                        <div className="flex-none">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="h-24 w-24 rounded-lg object-cover"
                            onError={() => handleImageError(item.name)}
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                          <div className="text-right">
                            {item.largePrice ? (
                              <div className="space-y-1">
                                <div className="text-sm text-gray-500">9" ${item.price.toFixed(2)}</div>
                                <div className="font-medium text-gray-900">12" ${item.largePrice.toFixed(2)}</div>
                              </div>
                            ) : (
                              <div className="font-medium text-gray-900">${item.price.toFixed(2)}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default RestaurantDetails;
