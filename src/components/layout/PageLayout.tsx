import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ReactGA from 'react-ga4';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const PageLayout = ({ 
  children, 
  title, 
  showSearch = true,
  searchPlaceholder = "Search...",
  searchValue = "",
  onSearchChange = () => {}
}: PageLayoutProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    ReactGA.initialize('G-M4M7D5SNCX'); // Replace with your tracking ID
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-1 shadow-lg flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')} role="button" tabIndex={0}>
          <span className="font-bold text-lg">Powered by</span>
          <div className="flex-shrink-0 w-24 h-24">
            <img src="https://i.imgur.com/YmicuRC.png" alt="Xeddy Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Animated Hamburger Menu Icon */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none relative w-8 h-8 flex items-center justify-center"
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

        {/* Navigation Links */}
        <nav className={`
          ${isMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-blue-600 p-4 space-y-2 shadow-lg md:relative md:bg-transparent md:p-0 md:shadow-none' 
            : 'hidden'
          } 
          md:flex md:space-y-0 md:space-x-4 md:items-center
        `}>
          <Link 
            to="/directory" 
            className="block md:inline-flex items-center px-4 py-2 rounded-lg 
                      text-white hover:bg-blue-700 hover:text-white 
                      transition-all duration-200 font-medium
                      border border-transparent hover:border-blue-400"
          >
            Directory
          </Link>
          <Link 
            to="/about" 
            className="block md:inline-flex items-center px-4 py-2 rounded-lg 
                      text-white hover:bg-blue-700 hover:text-white 
                      transition-all duration-200 font-medium
                      border border-transparent hover:border-blue-400"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="block md:inline-flex items-center px-4 py-2 rounded-lg 
                      text-white hover:bg-blue-700 hover:text-white 
                      transition-all duration-200 font-medium
                      border border-transparent hover:border-blue-400"
          >
            Contact
          </Link>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto p-6 flex-grow">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          
          {/* Search Section */}
          {showSearch && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={searchValue}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Page Content */}
        {children}
      </div>

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

export default PageLayout; 