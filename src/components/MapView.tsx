import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import { Restaurant } from './RestaurantDirectory/types';

interface MapViewProps {
  restaurants: Restaurant[];
  selectedUniversity: string;
}

const universityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Georgetown University': { lat: 38.9076, lng: -77.0723 },
  'American University': { lat: 38.9365, lng: -77.0878 },
  'George Washington University': { lat: 38.8997, lng: -77.0489 },
  'Howard University': { lat: 38.9234, lng: -77.0216 },
  // Add other universities as needed
};

function MapView({ restaurants, selectedUniversity }: MapViewProps) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);

  // Default center (e.g., Washington DC area)
  const defaultCenter = {
    lat: 38.9072,
    lng: -77.0369
  };

  // Update map center and zoom when university changes
  useEffect(() => {
    if (mapRef && selectedUniversity !== 'All Universities') {
      const uniCoords = universityCoordinates[selectedUniversity];
      if (uniCoords) {
        mapRef.setCenter(uniCoords);
        mapRef.setZoom(12); // Adjust zoom level as needed
      }
    }
  }, [selectedUniversity, mapRef]);

  const onLoad = (map: google.maps.Map): void => {
    setMapRef(map);
  };

  return (
    <GoogleMap
      onLoad={onLoad}
      mapContainerStyle={{ 
        width: '100%', 
        height: '400px',
        margin: '20px 0'  // Optional: adds some spacing
      }}
      center={selectedUniversity !== 'All Universities' 
        ? universityCoordinates[selectedUniversity] 
        : defaultCenter}
      zoom={12}  // Adjust this value as needed
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {/* University Marker */}
      {selectedUniversity !== 'All Universities' && universityCoordinates[selectedUniversity] && (
        <Marker
          position={universityCoordinates[selectedUniversity]}
          icon={{
            url: '', // Add your custom university marker icon
            scaledSize: new window.google.maps.Size(80, 40)
          }}
        />
      )}

      {/* Restaurant Markers */}
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={{
            lat: restaurant.latitude,
            lng: restaurant.longitude
          }}
          onClick={() => setSelectedRestaurant(restaurant)}
        />
      ))}

      {/* Info Window */}
      {selectedRestaurant && (
        <InfoWindow
          position={{
            lat: selectedRestaurant.latitude,
            lng: selectedRestaurant.longitude
          }}
          onCloseClick={() => setSelectedRestaurant(null)}
          options={{
            maxWidth: 300,
            pixelOffset: new window.google.maps.Size(0, -5)
          }}
        >
          <div style={{ maxWidth: '280px' }}>
            <img 
              src={selectedRestaurant.imageUrl} 
              alt={selectedRestaurant.name}
              style={{ 
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                marginBottom: '8px',
                borderRadius: '4px'
              }} 
            />
            <h2 className="text-lg font-bold mb-1">{selectedRestaurant.name}</h2>
            <p className="mb-1">Rating: {selectedRestaurant.rating}/5</p>
            <div className="flex flex-wrap gap-1">
              {selectedRestaurant.nearestUniversity.map((university, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2 py-0.5 bg-blue-100 rounded-md text-xs text-blue-600"
                >
                  {university}
                </span>
              ))}
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default MapView; 