import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Skip } from '../types';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  // Manually construct the image URL based on skip.size
  // Extracts the number and builds a consistent image name like '4-yarder-skip.jpg'
  const sizeNumberOnly = String(skip.size).match(/\d+/)?.[0];
  const imageName = sizeNumberOnly ? `${sizeNumberOnly}-yarder-skip.jpg` : 'default-skip.jpg'; // Fallback if no number found
  const localImageUrl = `/assets/${imageName}`;
  // Extract the numeric part from the size for the size indicator
  const sizeNumber = skip.size.match(/\d+/)?.[0] || '';

  return (
    <div 
      className={`
        rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02]
        dark:bg-slate-800 
        ${isSelected 
          ? 'border-2 border-amber-500 dark:border-amber-400 shadow-lg bg-white dark:bg-slate-800' 
          : 'border border-gray-200 dark:border-gray-700 hover:shadow-md bg-white dark:bg-slate-800'}
      `}
    >
      <div className="relative">
        <img 
          src={localImageUrl} 
          alt={`${skip.size} Skip`}
          className="w-full h-72 object-cover"
        />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{skip.size}</h3>
            <p className="text-gray-600 dark:text-gray-300">{skip.hire_period}</p>
          </div>
          
          <div className="size-indicator flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center text-white font-bold">
              {sizeNumber}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Yards</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">£{skip.price}</p>
          </div>
          
          {skip.feature && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {skip.feature}
            </span>
          )}
        </div>
        
        <button
          onClick={onSelect}
          className={`
            w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center
            ${isSelected 
              ? 'bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-800 dark:text-amber-100 dark:border-amber-700' 
              : 'bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700'}
          `}
        >
          {isSelected ? (
            <>
              <CheckCircle size={18} className="mr-2" />
              Selected
            </>
          ) : (
            'Select Skip'
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;