import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-200" />
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="h-6 w-24 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-200" />
            </div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <div className="h-4 w-16 bg-gray-200 rounded mb-1" />
                <div className="h-7 w-20 bg-gray-200 rounded" />
              </div>
              <div className="h-5 w-16 bg-gray-200 rounded" />
            </div>
            <div className="h-10 bg-gray-200 rounded-lg w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;