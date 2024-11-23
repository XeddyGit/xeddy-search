import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Restaurant } from './RestaurantDirectory/types';
import { useState } from 'react';

interface MapViewProps {
  restaurants: Restaurant[];
}

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

const MapView: React.FC<MapViewProps> = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const center = {
    lat: 38.9072,
    lng: -77.0369
  };

  const mapContainerStyle = {
    width: '100%',
    height: '600px',
    borderRadius: '0.5rem'
  };

  if (!process.env.REACT_APP_GOOGLE_MAPS_API_KEY) {
    return <div className="p-4">Please configure Google Maps API key</div>;
  }

  return (
    <LoadScript 
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      key="google-maps-script"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
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

        {selectedRestaurant && (
          <InfoWindow
            position={{
              lat: selectedRestaurant.latitude,
              lng: selectedRestaurant.longitude
            }}
            onCloseClick={() => setSelectedRestaurant(null)}
          >
            <div>
              <h3>{selectedRestaurant.name}</h3>
              <p>Rating: {selectedRestaurant.rating}/5</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView; 