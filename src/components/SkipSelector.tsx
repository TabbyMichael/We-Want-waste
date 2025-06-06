import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import SkipCard from './SkipCard';
import ProgressBar from './ProgressBar';
import { Skip } from '../types'; // Import Skip type
import { useSkips } from '../hooks/useSkips';
import { Truck, ArrowLeft, ArrowRight } from 'lucide-react'; // Removed Loader2 and CheckCircle

interface SkipSelectorProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const SkipSelector: React.FC<SkipSelectorProps> = ({ setIsLoading }) => {
  const [showSummaryView, setShowSummaryView] = useState<boolean>(false);
  const { skips, loading, error } = useSkips();
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  // Effect to update global loading state based on useSkips
  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  // Load selected skip from localStorage on component mount
  useEffect(() => {
    const savedSkipId = localStorage.getItem('selectedSkip');
    if (savedSkipId && skips.length > 0) { 
      const skip = skips.find((s) => s.id === Number(savedSkipId));
      if (skip) {
        setSelectedSkip(skip);
        // Optional: If you want to directly go to summary view if a skip was previously selected and persisted
        // setShowSummaryView(true); 
      }
    }
  }, [skips]);

  // Save selected skip to localStorage when it changes
  useEffect(() => {
    if (selectedSkip) {
      localStorage.setItem('selectedSkip', selectedSkip.id.toString());
    }
  }, [selectedSkip]);

  const handleSelectSkip = (skip: Skip) => {
    setIsLoading(true);
    // Simulate loading for 500ms, or replace with real async logic if needed
    setTimeout(() => {
      setSelectedSkip(skip);
      setShowSummaryView(true);
      setIsLoading(false);
    }, 500);
  };


  if (loading) {
    return null; // Let the global Loader handle the spinner
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <Truck size={48} className="text-red-500 mb-4" />
        <p className="text-xl text-red-600 dark:text-red-400">{error}</p>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
          We couldn't load the available skips at the moment. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {showSummaryView && selectedSkip ? (
        // START: Selected Skip Summary View
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            You've Selected: <span className="text-amber-600 dark:text-amber-400">{selectedSkip.size}</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img 
                src={`/assets/${String(selectedSkip.size).match(/\d+/)?.[0]}-yarder-skip.jpg`} 
                alt={selectedSkip.size} 
                className="w-full h-auto object-contain rounded-lg max-h-[300px] md:max-h-[450px] transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            {/* Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-4xl font-semibold mb-3 text-gray-900 dark:text-white">{selectedSkip.size}</h3>
              <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                £{selectedSkip.price}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {selectedSkip.hire_period}
              </p>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 p-3 rounded-md">
                Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
              </p>
            </div>
          </div>

          {/* Footer with Back and Continue buttons for summary view */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-gray-200 dark:border-gray-700 pt-8 gap-4">
            <button
              onClick={() => {
                setShowSummaryView(false);
              }}
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-lg transition-all bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500 flex items-center justify-center"
            >
              <ArrowLeft size={20} className="mr-2" /> Back to Skips
            </button>
            <button
              onClick={() => alert(`Proceeding to next step with ${selectedSkip.size}`)} 
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-lg transition-all bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              Continue <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
        // END: Selected Skip Summary View
      ) : (
        // START: Original Skip Grid View
        <>
          <ProgressBar currentStep={2} />
          {/* Main header for the skip selection page - only for grid view */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Choose Your Skip Size
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Select the skip size that best suits your needs</p>
          </div>
          {/* Grid of skips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip === skip}
                onSelect={() => handleSelectSkip(skip)}
              />
            ))}
          </div>
          
          {/* Footer for grid view */}
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 p-4 md:relative md:bg-transparent md:dark:bg-transparent md:border-0 md:p-0 md:mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
              <button 
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-lg transition-all bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500 flex items-center justify-center"
                onClick={() => window.history.back()} 
              >
                <ArrowLeft size={20} className="mr-2" /> Back
              </button>
              
              {selectedSkip && ( 
                <div className="hidden md:flex items-center text-amber-600 dark:text-amber-400">
                  <Truck size={20} className="mr-2" />
                  <span className="font-medium">
                    {selectedSkip.size} Selected
                  </span>
                </div>
              )}

              <button 
                className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg ${selectedSkip !== null
                    ? 'bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                }`}
                disabled={selectedSkip === null}
                onClick={() => {
                  if (selectedSkip) {
                    // Placeholder for actual navigation or action
                    console.log('Proceeding to next step with skip ID:', selectedSkip.id); 
                    // Potentially: setShowSummaryView(true); // Or navigate to a different route/component
                  }
                }}
              >
                Continue <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </>
        // END: Original Skip Grid View
      )}
    </div>
  );
};

export default SkipSelector;