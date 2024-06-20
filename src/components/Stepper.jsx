import React from 'react';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className={`flex-1 text-center ${index < currentStep ? 'text-indigo-600' : 'text-gray-400'}`}>
          <div className={`rounded-full h-8 w-8 flex items-center justify-center mx-auto ${index <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>
            {index + 1}
          </div>
          <div className="mt-2">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
