import React from 'react';
import { Search } from 'lucide-react';

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
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Logo Section */}
      <div className="flex justify-end mb-6">
        {/* Logo and Text Container */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">Powered by</span>
          <div className="flex-shrink-0 w-24 h-24">
            <img
              src="https://i.imgur.com/YmicuRC.png"
              alt="Xeddy Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

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
  );
};

export default PageLayout; 