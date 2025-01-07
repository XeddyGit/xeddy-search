import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupModal from '../MailerLiteModal';
import MasterSearch from '../MasterSearch';
import IconBar from '../IconBar';
import { restaurants, universities } from '../RestaurantDirectory/data/index';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-1 shadow-lg relative z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => navigate('/')} 
              role="button" 
              tabIndex={0}
            >
              <span className="font-bold text-lg">Powered by</span>
              <div className="flex-shrink-0 w-24 h-24">
                <img 
                  src="https://i.imgur.com/YmicuRC.png" 
                  alt="Xeddy Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden focus:outline-none relative w-8 h-8 flex items-center justify-center z-50"
              aria-label="Toggle menu"
            >
              <div className="relative">
                <span 
                  className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out
                  ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out mt-1.5
                  ${isMenuOpen ? 'opacity-0' : ''}`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out mt-1.5
                  ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </div>
            </button>

            {/* Navigation Menu */}
            <div 
              className={`
                md:relative md:block md:w-auto
                absolute top-full left-0 right-0 
                transition-all duration-200 ease-in-out
                ${isMenuOpen ? 'block' : 'hidden'}
              `}
            >
              <nav className={`
                bg-blue-600 shadow-lg md:shadow-none
                md:bg-transparent md:flex md:space-x-4
                py-2 px-4 md:p-0
              `}>
                <Link 
                  to="/directory" 
                  className="block py-2 px-4 hover:bg-blue-700 md:inline-flex md:items-center
                            text-white transition-all duration-200 font-medium
                            border border-transparent hover:border-blue-400 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Directory
                </Link>
                <Link 
                  to="/about" 
                  className="block py-2 px-4 hover:bg-blue-700 md:inline-flex md:items-center
                            text-white transition-all duration-200 font-medium
                            border border-transparent hover:border-blue-400 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-2 px-4 hover:bg-blue-700 md:inline-flex md:items-center
                            text-white transition-all duration-200 font-medium
                            border border-transparent hover:border-blue-400 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.imgur.com/lfqO7fW.pngm')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Local food,<span className="text-black"> your campus card.</span></h1>
          <p className="text-lg mb-6">Most universities don't highlight all the spots in the city you can use your campus card. So, we did.</p>
          
          <MasterSearch restaurants={restaurants} universities={universities} />

           <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <button 
              onClick={() => navigate('/directory')} 
              className="bg-blue-600 text-white py-4 px-8 rounded-lg w-full 
                       hover:bg-blue-700 transition duration-200 text-lg font-semibold 
                       shadow-lg transform hover:scale-105"
            >
              Go to Directory
            </button>
            <IconBar onCuisineSelect={(cuisine) => setSelectedCuisine(cuisine)} />
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