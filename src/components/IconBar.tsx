import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faDrumstickBite, faFish, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

// Add the interface back
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
    // Store the selected cuisine in localStorage
    localStorage.setItem('selectedCuisine', selectedCuisine);
    // Call the onCuisineSelect prop if provided
    if (onCuisineSelect) {
      onCuisineSelect(selectedCuisine);
    }
    // Navigate to directory
    navigate('/directory');
  };

  return (
    <div className="flex justify-center items-center gap-8 mt-8 p-6">
      <div className="flex gap-12">
        {icons.map(({ icon, label, iconColor, bgGradient, glowColor, cuisine }) => (
          <div
            key={label}
            className="relative group cursor-pointer"
            onClick={() => {
              console.log('Clicking icon for:', label);
              handleIconClick(cuisine);
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${glowColor}
                          rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 
                          opacity-50 group-hover:opacity-70 scale-110`}
            />
            <div className={`relative bg-gradient-to-b ${bgGradient} p-4 rounded-2xl 
                          backdrop-blur-sm transform transition-transform duration-300 
                          hover:scale-110 cursor-pointer 
                          w-16 h-16 flex items-center justify-center`}
            >
              <FontAwesomeIcon
                icon={icon}
                className={`${iconColor} h-8 w-8`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconBar;
