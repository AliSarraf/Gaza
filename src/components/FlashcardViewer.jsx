import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertTriangle, Lightbulb, X } from 'lucide-react';

const FlashcardViewer = ({ flashcardSet, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!flashcardSet || !flashcardSet.steps || flashcardSet.steps.length === 0) {
    return null;
  }

  const { steps, title, description, icon } = flashcardSet;
  const step = steps[currentStep];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-none sm:rounded-2xl w-full h-full sm:max-w-4xl sm:w-full sm:h-auto max-h-full overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 sm:p-6 rounded-t-none sm:rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-2xl sm:text-3xl">{icon}</span>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold">{title}</h2>
                <p className="text-xs sm:text-base text-red-100">{description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 transition-colors p-1 sm:p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="px-4 sm:px-6 pt-2 sm:pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
        {/* Step Navigation Dots */}
        <div className="flex justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentStep 
                  ? 'bg-red-600' 
                  : index < currentStep 
                    ? 'bg-green-500' 
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        {/* Flashcard Content */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex-1 overflow-y-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-8 shadow-sm">
            {/* Step Title */}
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
                {step.step}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{step.title}</h3>
            </div>
            {/* Main Content */}
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{step.content}</p>
            </div>
            {/* Warning Alert */}
            {step.warning && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1 text-xs sm:text-base">⚠️ Critical Warning</h4>
                    <p className="text-red-700 text-xs sm:text-base">{step.warning}</p>
                  </div>
                </div>
              </div>
            )}
            {/* Tip */}
            {step.tip && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1 text-xs sm:text-base">💡 Pro Tip</h4>
                    <p className="text-blue-700 text-xs sm:text-base">{step.tip}</p>
                  </div>
                </div>
              </div>
            )}
            {/* Image Placeholder */}
            {step.image && (
              <div className="bg-gray-100 rounded-lg h-40 sm:h-64 flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-center text-gray-500">
                  <div className="text-2xl sm:text-4xl mb-2">📷</div>
                  <p className="text-xs sm:text-sm">Training Image</p>
                  <p className="text-xs">{step.image}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-4 sm:px-6 py-2 sm:py-4 bg-gray-50 rounded-b-none sm:rounded-b-2xl gap-2 sm:gap-0">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-2 sm:px-4 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base sm:text-base whitespace-normal"
          >
            <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
            <span className="truncate">Previous</span>
          </button>
          <div className="flex flex-row flex-wrap justify-center gap-1 sm:gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-normal ${
                  index === currentStep
                    ? 'bg-red-600 text-white'
                    : index < currentStep
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-2 sm:px-4 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base sm:text-base whitespace-normal"
          >
            <span className="truncate">Next</span>
            <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
          </button>
        </div>
        {/* Complete Message */}
        {currentStep === steps.length - 1 && (
          <div className="px-4 sm:px-6 pb-2 sm:pb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-center">
              <div className="text-green-600 text-xl sm:text-2xl mb-2">✅</div>
              <h4 className="font-semibold text-green-800 mb-1 text-base sm:text-lg">Training Complete!</h4>
              <p className="text-green-700 text-xs sm:text-sm">
                You've completed all steps for {title.toLowerCase()}. Review as needed.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardViewer; 