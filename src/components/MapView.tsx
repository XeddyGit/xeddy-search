import { GoogleMap, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useMemo, useRef } from 'react';
import { Restaurant } from './RestaurantDirectory/types';
import { useNavigate } from 'react-router-dom';

interface MapViewProps {
  restaurants: Restaurant[];
  selectedUniversity: string;
}

// Custom PulsingMarker class - only create when google is available
const createPulsingMarkerClass = (google: typeof window.google) => {
  return class PulsingMarker extends google.maps.Marker {
    private pulsingDot: ReturnType<typeof setInterval> | null = null;
    private clicked: boolean = false;

    constructor(options: google.maps.MarkerOptions) {
      super({
        ...options,
        optimized: false,
        clickable: true,
        zIndex: 1
      });
      this.createPulsingDot();
    }

    private createPulsingDot(): void {
      const svg: google.maps.Symbol = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#4285F4',
        fillOpacity: 1,
        scale: 8,
        strokeColor: '#4285F4',
        strokeWeight: 2
      };

      this.setIcon(svg);
      this.startPulsing();
    }

    private startPulsing(): void {
      if (this.clicked) return;

      let direction = 1;
      let scale = 8;

      this.pulsingDot = setInterval(() => {
        const icon = this.getIcon() as google.maps.Symbol;
        if (scale >= 12) direction = -1;
        if (scale <= 8) direction = 1;
        scale += direction * 0.5;
        icon.scale = scale;
        this.setIcon(icon);
      }, 200);
    }

    public stopPulsing(): void {
      if (this.pulsingDot) {
        clearInterval(this.pulsingDot);
        this.pulsingDot = null;
      }
    }

    public setClicked(): void {
      this.clicked = true;
      this.stopPulsing();
      const icon = this.getIcon() as google.maps.Symbol;
      icon.fillColor = '#34A853';
      icon.strokeColor = '#34A853';
      icon.scale = 10;
      this.setIcon(icon);
    }

    public resetState(): void {
      this.clicked = false;
      const icon = this.getIcon() as google.maps.Symbol;
      icon.fillColor = '#4285F4';
      icon.strokeColor = '#4285F4';
      icon.scale = 8;
      this.setIcon(icon);
      this.startPulsing();
    }
  }
};

const universityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Georgetown University': { lat: 38.9076, lng: -77.0723 },
  'American University': { lat: 38.9365, lng: -77.0878 },
  'George Washington University': { lat: 38.8997, lng: -77.0489 },
  'Howard University': { lat: 38.9234, lng: -77.0216 },
  'University of Maryland Baltimore County': { lat: 39.2544, lng: -76.7135 },
  'Towson University': { lat: 39.3937, lng: -76.6066 },
};

function MapView({ restaurants, selectedUniversity }: MapViewProps) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const markersRef = useRef<Map<string, InstanceType<ReturnType<typeof createPulsingMarkerClass>>>>(new Map());
  const PulsingMarkerRef = useRef<ReturnType<typeof createPulsingMarkerClass> | null>(null);

  const defaultCenter = useMemo(() => ({
    lat: 38.9072,
    lng: -77.0369
  }), []);

  useEffect(() => {
    if (mapRef && selectedUniversity !== 'All Universities') {
      const uniCoords = universityCoordinates[selectedUniversity];
      if (uniCoords) {
        mapRef.setCenter(uniCoords);
        mapRef.setZoom(12);
      }
    }
  }, [selectedUniversity, mapRef]);

  useEffect(() => {
    return () => {
      markersRef.current.forEach(marker => {
        marker.stopPulsing();
        marker.setMap(null);
      });
      markersRef.current.clear();
    };
  }, []);

  const onLoad = (map: google.maps.Map): void => {
    setMapRef(map);
    setIsLoaded(true);
    // Create PulsingMarker class once google is available
    PulsingMarkerRef.current = createPulsingMarkerClass(window.google);
  };

  const handleMarkerClick = (restaurant: Restaurant) => {
    if (selectedRestaurant) {
      const prevMarker = markersRef.current.get(selectedRestaurant.id.toString());
      prevMarker?.resetState();
    }

    const marker = markersRef.current.get(restaurant.id.toString());
    marker?.setClicked();
    setSelectedRestaurant(restaurant);
  };

  useEffect(() => {
    if (!mapRef || !isLoaded || !PulsingMarkerRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      marker.stopPulsing();
      marker.setMap(null);
    });
    markersRef.current.clear();

    // Create new markers
    restaurants.forEach(restaurant => {
      if (!PulsingMarkerRef.current) return; // Type guard

      const marker = new PulsingMarkerRef.current({
        position: {
          lat: restaurant.latitude,
          lng: restaurant.longitude
        },
        map: mapRef
      });

      marker.addListener('click', () => handleMarkerClick(restaurant));
      markersRef.current.set(restaurant.id.toString(), marker);
    });
  }, [restaurants, mapRef, isLoaded]);

  return (
    <div className="relative" style={{ zIndex: 0 }}>
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={{ 
          width: '100%', 
          height: '400px',
          margin: '20px 0'
        }}
        center={selectedUniversity !== 'All Universities' 
          ? universityCoordinates[selectedUniversity] 
          : defaultCenter}
        zoom={12}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        {selectedRestaurant && (
          <InfoWindow
            position={{ lat: selectedRestaurant.latitude, lng: selectedRestaurant.longitude }}
            onCloseClick={() => {
              const marker = markersRef.current.get(selectedRestaurant.id.toString());
              marker?.resetState();
              setSelectedRestaurant(null);
            }}
          >
            <div className="max-w-[200px]" onClick={() => navigate(`/restaurant/${selectedRestaurant.id}`)}>
              <img 
                src={selectedRestaurant.imageUrl} 
                alt={selectedRestaurant.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="font-bold text-blue-600 text-lg mb-1 hover:underline cursor-pointer">
                {selectedRestaurant.name}
              </h3>
              <p className="text-sm text-gray-600">{selectedRestaurant.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default MapView; 