import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faDrumstickBite, faFish, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface IconBarProps {
  onCuisineSelect?: (cuisine: string) => void;
}

const IconBar: React.FC<IconBarProps> = ({ onCuisineSelect }) => {
  const navigate = useNavigate();

  const icons = [
    { 
      icon: faPizzaSlice, 
      label: 'Pizza',
      iconColor: 'text-green-200',
      bgGradient: 'from-green-600 to-green-700',
      glowColor: 'from-green-500/30 to-green-800/30',
      cuisine: 'Pizza'
    },
    { 
      icon: faDrumstickBite, 
      label: 'Wings',
      iconColor: 'text-blue-200',
      bgGradient: 'from-blue-600 to-blue-700',
      glowColor: 'from-blue-500/30 to-blue-800/30',
      cuisine: 'American'
    },
    { 
      icon: faFish, 
      label: 'Fish',
      iconColor: 'text-yellow-100',
      bgGradient: 'from-yellow-500 to-yellow-700',
      glowColor: 'from-yellow-500/30 to-orange-800/30',
      cuisine: 'Seafood'
    },
    { 
      icon: faHamburger, 
      label: 'Burger',
      iconColor: 'text-red-200',
      bgGradient: 'from-red-600 to-red-700',
      glowColor: 'from-red-500/30 to-red-800/30',
      cuisine: 'Fast Food'
    }
  ];

  const handleIconClick = (selectedCuisine: string) => {
    localStorage.setItem('selectedCuisine', selectedCuisine);
    if (onCuisineSelect) {
      onCuisineSelect(selectedCuisine);
    }
    navigate('/directory');
  };

  return (
    <div className="flex justify-center items-center mt-4 md:mt-8 p-3 md:p-6">
      <div className="flex gap-3 md:gap-8 lg:gap-12">
        {icons.map(({ icon, label, iconColor, bgGradient, glowColor, cuisine }) => (
          <div
            key={label}
            className="relative group cursor-pointer"
            onClick={() => handleIconClick(cuisine)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${glowColor}
                          rounded-xl md:rounded-2xl blur-md md:blur-xl group-hover:blur-2xl 
                          transition-all duration-300 opacity-50 group-hover:opacity-70 scale-110`}
            />
            <div className={`relative bg-gradient-to-b ${bgGradient} p-2 md:p-4 
                          rounded-xl md:rounded-2xl backdrop-blur-sm transform 
                          transition-transform duration-300 hover:scale-105 
                          cursor-pointer border border-gray-700/50
                          w-12 h-12 md:w-16 md:h-16 flex items-center justify-center`}
            >
              <FontAwesomeIcon
                icon={icon}
                className={`${iconColor} h-6 w-6 md:h-8 md:w-8`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconBar;
