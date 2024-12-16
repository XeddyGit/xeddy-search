import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LoadScript, Libraries } from '@react-google-maps/api';
import HomePage from './components/Screen/HomePage'
import RestaurantDirectory from './components/RestaurantDirectory';
import RestaurantDetails from './components/RestaurantDetails';
import AboutPage from './components/Screen/AboutPage';
import ContactPage from './components/Screen/ContactPage';
import './index.css';
import ReactGA from 'react-ga4';

const libraries: Libraries = ['places'];

function App() {
  useEffect(() => {
    ReactGA.initialize('G-M4M7D5SNCX');
    ReactGA.send('pageview');
  }, []);

  return (
    <LoadScript 
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}
      libraries={libraries}
      loadingElement={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <Router>
        <PageTracker />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/directory" element={<RestaurantDirectory />} />
            <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </LoadScript>
  );
}

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send('pageview');
  }, [location]);

  return null;
};

export default App;
