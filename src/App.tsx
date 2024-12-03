import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Screen/HomePage'
import RestaurantDirectory from './components/RestaurantDirectory';
import RestaurantDetails from './components/RestaurantDetails';
import './index.css';
import { LoadScript } from '@react-google-maps/api';

function App() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <Router>
        <div className="App">
          <Routes>
           // <Route path="/" element={<HomePage />} />
            <Route path="/directory" element={<RestaurantDirectory />} />
            <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} />
          </Routes>
        </div>
      </Router>
    </LoadScript>
  );
}

export default App;
