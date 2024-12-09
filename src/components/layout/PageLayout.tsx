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
      <header className="bg-blue-600 text-white p-4 shadow-lg flex justify-between items-center">
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