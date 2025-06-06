import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, Home, Leaf, Briefcase, ArrowLeft, ArrowRight, Info, CheckSquare, Square } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface WasteTypeOption {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
}

const wasteOptions: WasteTypeOption[] = [
  { id: 'construction', name: 'Construction Waste', description: 'Building materials and renovation debris.', icon: HardHat },
  { id: 'household', name: 'Household Waste', description: 'General household items and furniture.', icon: Home },
  { id: 'garden', name: 'Garden Waste', description: 'Green waste and landscaping materials.', icon: Leaf },
  { id: 'commercial', name: 'Commercial Waste', description: 'Business and office clearance.', icon: Briefcase },
];

const WasteTypePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleToggleType = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) ? prev.filter(id => id !== typeId) : [...prev, typeId]
    );
  };

  const handleContinue = () => {
    if (selectedTypes.length > 0) {
      console.log('Selected waste types:', selectedTypes);
      // Navigate to the next step (Select Skip)
      navigate('/'); // Current route for SkipSelector
    } else {
      alert('Please select at least one waste type.');
    }
  };

  const handleBack = () => {
    // Navigate to the previous step (Postcode page - assuming it's the root or a specific route)
    navigate('/'); // Placeholder - update if Postcode page has a different route
  };

  const commonCardStyle = "p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center text-left relative";
  const selectedCardStyle = "border-amber-500 bg-amber-50 dark:bg-slate-700 shadow-lg";
  const unselectedCardStyle = "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-slate-800 hover:shadow-md";
  const iconSize = 24; // Smaller icon size for cards

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl min-h-screen flex flex-col">
      <ProgressBar currentStep={1} /> {/* Waste Type is step 1 (Postcode is 0) */}
      <div className="text-center my-10 flex-grow">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-3">
          What type of waste are you disposing of?
        </h1>
        <div className="inline-flex items-center bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-lg text-md mb-8">
          <Info size={20} className="mr-2" />
          Select all that apply
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {wasteOptions.map((option) => {
            const isSelected = selectedTypes.includes(option.id);
            const IconComponent = option.icon;
            return (
              <div 
                key={option.id}
                className={`${commonCardStyle} ${isSelected ? selectedCardStyle : unselectedCardStyle}`}
                onClick={() => handleToggleType(option.id)}
              >
                <IconComponent size={iconSize} className={`mr-4 ${isSelected ? 'text-amber-600' : 'text-gray-500 dark:text-gray-400'}`} />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{option.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
                </div>
                {isSelected ? 
                  <CheckSquare size={24} className="absolute top-4 right-4 text-amber-600" /> :
                  <Square size={24} className="absolute top-4 right-4 text-gray-400 dark:text-gray-500" />
                }
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-auto py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="px-8 py-3 rounded-lg font-semibold text-lg transition-all bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500 flex items-center justify-center"
          >
            <ArrowLeft size={20} className="mr-2" /> Back
          </button>
          <button
            onClick={handleContinue}
            disabled={selectedTypes.length === 0}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg ${
              selectedTypes.length > 0
                ? 'bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
            }`}
          >
            Continue <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteTypePage;
