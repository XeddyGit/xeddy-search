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
      {/* Centered Logo Section */}
      <div className="flex justify-start mb-6">
        {/* 
          Logo Container:
          - w-32 h-32: 128x128px size (much larger than before)
          - You can adjust size using:
            - w-24 h-24: 96x96px (smaller)
            - w-32 h-32: 128x128px (current)
            - w-40 h-40: 160x160px (larger)
            - w-48 h-48: 192x192px (even larger)
        */}
        <div className="flex-shrink-0 w-64 h-32">
          <img
            src="https://i.imgur.com/YmicuRC.png"  // Replace with your Imgur logo URL
            alt="Xeddy Logo"
            className="w-full h-full object-contain"
          />
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