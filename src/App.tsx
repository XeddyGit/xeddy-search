import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDirectory from './components/RestaurantDirectory';
import RestaurantDetails from './components/RestaurantDetails';
import './index.css';
import { LoadScript } from '@react-google-maps/api';

function App() {
  // Type assertion to ensure the API key is treated as a string
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;
  
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<RestaurantDirectory />} />
            <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} />
          </Routes>
        </div>
      </Router>
    </LoadScript>
  );
}

export default App;
