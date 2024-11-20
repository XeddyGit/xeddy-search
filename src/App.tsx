import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDirectory from './components/RestaurantDirectory';
import RestaurantDetails from './components/RestaurantDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RestaurantDirectory />} />
          <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
