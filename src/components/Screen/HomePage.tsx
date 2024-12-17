import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupModal from '../MailerLiteModal';
import MasterSearch from '../MasterSearch';
import { restaurants, universities } from '../RestaurantDirectory/data/index';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-1 shadow-lg flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')} role="button" tabIndex={0}>
          <span className="font-bold text-lg">Powered by</span>
          <div className="flex-shrink-0 w-24 h-24">
            <img src="https://i.imgur.com/YmicuRC.png" alt="Xeddy Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Burger Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`flex-col md:flex-row md:flex md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">Home</Link>
          <Link to="/about" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">About</Link>
          <Link to="/contact" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.imgur.com/lfqO7fW.pngm')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Local food,<span className="text-black"> your campus card.</span></h1>
          <p className="text-lg mb-6">Most universities don't highlight all the spots in the city you can use your campus card. So, we did.</p>
          
          <MasterSearch restaurants={restaurants} universities={universities} />

           <div className="flex flex-col items-center gap-4 w-full max-w-md">
            {/*<button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white py-4 px-8 rounded-lg w-full 
                       hover:bg-green-700 transition duration-200 text-lg font-semibold"
            >
              Sign Up for Deals
            </button> */}

            <button 
              onClick={() => navigate('/directory')} 
              className="bg-blue-600 text-white py-4 px-8 rounded-lg w-full 
                       hover:bg-blue-700 transition duration-200 text-lg font-semibold 
                       shadow-lg transform hover:scale-105"
            >
              Go to Directory
            </button>
          </div> 
        </div>
      </div>

      <SignupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>© {new Date().getFullYear()} Xeddy Inc. All rights reserved.</span>
            <a 
              href="https://www.joinxeddy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Join Xeddy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;