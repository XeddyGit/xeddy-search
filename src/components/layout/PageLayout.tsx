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