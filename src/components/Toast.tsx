import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  visible, 
  onClose, 
  duration = 3000 
}) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
    
    if (visible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Allow time for exit animation
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [visible, onClose, duration]);

  return (
    <div 
      className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2 
        bg-white shadow-lg rounded-lg border border-gray-100
        px-4 py-3 w-11/12 max-w-md z-50 flex items-center justify-between
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <div className="flex items-center">
        <CheckCircle size={20} className="text-green-500 mr-3" />
        <p className="text-gray-800">{message}</p>
      </div>
      <button 
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="text-gray-400 hover:text-gray-600 ml-2"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;