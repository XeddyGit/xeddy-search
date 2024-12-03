import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

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
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
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

          {/* Navigation Links */}
          <nav className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.imgur.com/lfqO7fW.pngm')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-4">Local DC food,<span className="text-black"> your campus card.</span></h1>
          <p className="text-lg mb-6">Most universities don't highlight all the spots in the city you can use your campus card. So, we did.</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your university email"
                value={email}
                onChange={handleEmailChange}
                className="p-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full text-black"
                required
              />
              <button type="submit" className="bg-green-600 text-white p-4 rounded-r-lg hover:bg-green-700 transition duration-200">
                Add for deals
              </button>
            </div>
            <button 
              onClick={() => navigate('/directory')} 
              className="bg-blue-600 text-white p-3 rounded-lg w-full mt-4 hover:bg-blue-700 transition duration-200"
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