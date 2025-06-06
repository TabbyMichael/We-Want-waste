import React from 'react';
import { MapPin, Package, Truck, FileCheck, Calendar, CreditCard } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  { name: 'Postcode', icon: MapPin },
  { name: 'Waste Type', icon: Package },
  { name: 'Select Skip', icon: Truck },
  { name: 'Permit Check', icon: FileCheck },
  { name: 'Choose Date', icon: Calendar },
  { name: 'Payment', icon: CreditCard },
];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div 
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    ${isCompleted 
                      ? 'bg-amber-500 text-white dark:bg-amber-600 dark:text-white' 
                      : isCurrent 
                        ? 'bg-amber-100 text-amber-600 border-2 border-amber-600 dark:bg-amber-700 dark:text-amber-300 dark:border-amber-500' 
                        : 'bg-gray-100 text-gray-400 dark:bg-slate-700 dark:text-gray-500'}
                  `}
                >
                  <StepIcon size={20} />
                </div>
                <span 
                  className={`
                    mt-2 text-sm font-medium
                    ${isCompleted 
                      ? 'text-amber-600 dark:text-amber-400' 
                      : isCurrent 
                        ? 'text-amber-600 dark:text-amber-300' 
                        : 'text-gray-400 dark:text-gray-500'}
                  `}
                >
                  {step.name}
                </span>
              </div>
              
              {index < steps.length - 1 && (
                <div 
                  className={`
                    flex-1 h-1 mx-2
                    ${index < currentStep ? 'bg-amber-500 dark:bg-amber-600' : 'bg-gray-200 dark:bg-slate-600'}
                  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;