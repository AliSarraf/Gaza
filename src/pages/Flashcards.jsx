import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, Clock, Users } from 'lucide-react';
import { getModuleById } from '../data/modules';
import FlashcardViewer from '../components/FlashcardViewer';

const Flashcards = () => {
  const { moduleId } = useParams();
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);
  
  const module = getModuleById(moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h1>
          <Link to="/modules" className="text-primary-600 hover:text-primary-700">
            Back to Modules
          </Link>
        </div>
      </div>
    );
  }

  const flashcards = module.flashcards || [];

  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/modules/${moduleId}`}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Module</span>
          </Link>
          
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">No Flashcards Available</h1>
            <p className="text-gray-600">This module doesn't have flashcard content yet.</p>
          </div>
        </div>
      </div>
    );
  }

  const startFlashcard = (flashcard) => {
    setSelectedFlashcard(flashcard);
  };

  const closeFlashcard = () => {
    setSelectedFlashcard(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Back Button */}
        <Link
          to={`/modules/${moduleId}`}
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Module</span>
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-4xl">{module.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {module.title} - First Aid Flashcards
              </h1>
              <p className="text-lg text-gray-600">
                Interactive step-by-step training for emergency situations
              </p>
            </div>
          </div>

          {/* Module Stats */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{flashcards.length}</div>
              <div className="text-sm text-gray-600">Flashcard Sets</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {flashcards.reduce((total, set) => total + set.steps.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Steps</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">~20 min</div>
              <div className="text-sm text-gray-600">Training Time</div>
            </div>
          </div>
        </div>

        {/* Flashcard Sets */}
        <div className="space-y-6">
          {flashcards.map((flashcard, index) => (
            <div key={flashcard.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">{flashcard.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {flashcard.title}
                    </h3>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">{flashcard.description}</p>
                    <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{flashcard.steps.length} Steps</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>~{Math.ceil(flashcard.steps.length * 1.5)} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Emergency Response</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => startFlashcard(flashcard)}
                  className="w-full md:w-auto bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 text-base sm:text-lg whitespace-normal"
                >
                  <Play className="w-5 h-5" />
                  <span className="truncate">Start Training</span>
                </button>
              </div>
              {/* Steps Preview */}
              <div className="mt-4 sm:mt-6 border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Training Steps:</h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                  {flashcard.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
                        {step.step}
                      </div>
                      <span className="truncate max-w-[120px] sm:max-w-none">{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-blue-900 mb-3">💡 Training Tips</h3>
          <ul className="text-blue-800 text-sm space-y-2">
            <li>• Practice each flashcard set multiple times to build muscle memory</li>
            <li>• Pay special attention to warnings - they highlight critical safety information</li>
            <li>• Use the tips provided to improve your technique and efficiency</li>
            <li>• Review regularly to maintain your emergency response skills</li>
          </ul>
        </div>

        {/* Emergency Context */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-red-900 mb-3">⚠️ Emergency Context</h3>
          <p className="text-red-800 text-sm">
            These flashcards are designed for blast injury scenarios where immediate action can save lives. 
            In real emergencies, always call for professional medical help while providing first aid. 
            These techniques are meant to stabilize patients until advanced medical care arrives.
          </p>
        </div>
      </div>

      {/* Flashcard Viewer Modal */}
      {selectedFlashcard && (
        <FlashcardViewer 
          flashcardSet={selectedFlashcard} 
          onClose={closeFlashcard}
        />
      )}
    </div>
  );
};

export default Flashcards; 