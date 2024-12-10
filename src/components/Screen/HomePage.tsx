import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Submitted email:', email);
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
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            
            <button 
              onClick={() => navigate('/directory')} 
              className="bg-blue-600 text-white py-4 px-8 rounded-lg w-full mt-4 hover:bg-blue-700 transition duration-200 text-lg font-semibold shadow-lg transform hover:scale-105"
            >
              Go to Directory
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;