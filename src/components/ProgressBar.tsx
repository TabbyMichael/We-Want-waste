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
                      ? 'bg-blue-600 text-white' 
                      : isCurrent 
                        ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' 
                        : 'bg-gray-100 text-gray-400'}
                  `}
                >
                  <StepIcon size={20} />
                </div>
                <span 
                  className={`
                    mt-2 text-sm font-medium
                    ${isCompleted 
                      ? 'text-blue-600' 
                      : isCurrent 
                        ? 'text-blue-600' 
                        : 'text-gray-400'}
                  `}
                >
                  {step.name}
                </span>
              </div>
              
              {index < steps.length - 1 && (
                <div 
                  className={`
                    flex-1 h-1 mx-2
                    ${index < currentStep ? 'bg-blue-600' : 'bg-gray-200'}
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