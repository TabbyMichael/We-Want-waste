import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import ProgressBar from './ProgressBar'; // Assuming ProgressBar is in the same directory

type PlacementOption = 'private' | 'public';

const PermitCheckPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<PlacementOption | null>(null);

  const handleSelectOption = (option: PlacementOption) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      console.log('Selected placement:', selectedOption);
      // Navigate to the next step, e.g., Choose Date
      // navigate('/choose-date'); // Placeholder
      alert(`Proceeding with ${selectedOption} property selection. Next step: Choose Date (not yet implemented).`);
    } else {
      alert('Please select an option.');
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page (Skip Selector)
  };

  const commonCardStyle = "p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center";
  const selectedCardStyle = "border-amber-500 bg-amber-50 dark:bg-slate-700 shadow-lg scale-105";
  const unselectedCardStyle = "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-slate-800 hover:shadow-md";
  const iconSize = 48;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl min-h-screen flex flex-col">
      <ProgressBar currentStep={3} /> {/* Assuming Permit Check is step 3 */}
      <div className="text-center my-10 flex-grow">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-3">
          Where will the skip be placed?
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          This helps us determine if you need a permit for your skip.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-2xl mx-auto">
          {/* Private Property Card */}
          <div 
            className={`${commonCardStyle} ${selectedOption === 'private' ? selectedCardStyle : unselectedCardStyle}`}
            onClick={() => handleSelectOption('private')}
          >
            <Home size={iconSize} className={`mb-4 ${selectedOption === 'private' ? 'text-amber-600' : 'text-gray-500 dark:text-gray-400'}`} />
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Private Property</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Driveway or private land</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">No permit required when placed on your private property.</p>
          </div>

          {/* Public Road Card */}
          <div 
            className={`${commonCardStyle} ${selectedOption === 'public' ? selectedCardStyle : unselectedCardStyle}`}
            onClick={() => handleSelectOption('public')}
          >
            <Users size={iconSize} className={`mb-4 ${selectedOption === 'public' ? 'text-amber-600' : 'text-gray-500 dark:text-gray-400'}`} /> {/* Using Users as a placeholder for Public/Road */}
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Public Road</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Council or public property</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">Permit required for placement on public roads.</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-auto py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <button
            onClick={handleBack}
            className="px-8 py-3 rounded-lg font-semibold text-lg transition-all bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500 flex items-center justify-center"
          >
            <ArrowLeft size={20} className="mr-2" /> Back
          </button>
          <button
            onClick={handleContinue}
            disabled={!selectedOption}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg ${
              selectedOption
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

export default PermitCheckPage;
