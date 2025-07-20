import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Download, CheckCircle, Clock, FileText, Award, ArrowLeft, PlayCircle } from 'lucide-react';
import { getModuleById } from '../data/modules';
import { useProgress } from '../contexts/ProgressContext';
import { useOffline } from '../contexts/OfflineContext';
import { i18n } from '../i18n';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const { isModuleCompleted, getQuizScore, addDownloadedVideo, isVideoDownloaded, loading } = useProgress();
  const { isOnline } = useOffline();

  const module = getModuleById(moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{i18n.t(['ModuleDetail', 'Module Not Found'])}</h1>
          <Link to="/modules" className="text-primary-600 hover:text-primary-700">
            {i18n.t(['ModuleDetail', 'Back to Modules'])}
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-gray-600">Loading progress...</span>
      </div>
    );
  }

  const isCompleted = isModuleCompleted(moduleId);
  const quizScore = getQuizScore(moduleId);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/modules"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{i18n.t(['ModuleDetail', 'Back to Modules'])}</span>
        </Link>

        {/* Module Header */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-0">
              <span className="text-3xl sm:text-4xl">{module.icon}</span>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{module.title}</h1>
                <p className="text-base sm:text-lg text-gray-600">{module.description}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-sm text-gray-500 mb-1">{i18n.t(['ModuleDetail', 'Duration'])}</div>
              <div className="text-lg font-semibold text-gray-900">{module.duration}</div>
            </div>
          </div>

          {/* Module Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{module.videos.length}</div>
              <div className="text-xs sm:text-sm text-gray-600">{i18n.t(['ModuleDetail', 'Training Videos'])}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{module.quiz.questions.length}</div>
              <div className="text-xs sm:text-sm text-gray-600">{i18n.t(['ModuleDetail', 'Quiz Questions'])}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-gray-900">
                {isCompleted ? i18n.t(['ModuleDetail', 'Complete']) : i18n.t(['ModuleDetail', 'In Progress'])}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">{i18n.t(['ModuleDetail', 'Status'])}</div>
            </div>
          </div>

          {/* Quiz Score */}
          {quizScore !== null && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">{i18n.t(['ModuleDetail', 'Quiz Completed'])}</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{quizScore}%</div>
                  <div className="text-sm text-green-700">{i18n.t(['ModuleDetail', 'Score'])}</div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {!isCompleted ? (
              <Link
                to={`/video/${module.videos[0].id}`}
                className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>{i18n.t(['ModuleDetail', 'Start Module'])}</span>
              </Link>
            ) : (
              <Link
                to={`/video/${module.videos[0].id}`}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>{i18n.t(['ModuleDetail', 'Review Module'])}</span>
              </Link>
            )}
            
            <Link
              to={`/quiz/${moduleId}`}
              className="flex-1 bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>{i18n.t(['ModuleDetail', 'Take Quiz'])}</span>
            </Link>
          </div>
        </div>

        {/* Flashcards Section */}
        {module.flashcards && module.flashcards.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">First Aid Flashcards</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {module.flashcards.slice(0, 4).map((flashcard) => (
                <div key={flashcard.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{flashcard.icon}</span>
                    <h3 className="font-semibold text-gray-900">{flashcard.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{flashcard.description}</p>
                  <div className="text-xs text-gray-500">
                    {flashcard.steps.length} steps • ~{Math.ceil(flashcard.steps.length * 1.5)} min
                  </div>
                </div>
              ))}
            </div>

            <Link
              to={`/flashcards/${moduleId}`}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>View all</span>
            </Link>
          </div>
        )}

        {/* Training Videos */}
        {isOnline && module.videos && module.videos.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <PlayCircle className="w-6 h-6 text-primary-600" />
              {i18n.t(['ModuleDetail', 'Training Videos'])}
            </h3>
            <ul className="divide-y divide-gray-200">
              {module.videos.map((video) => (
                <li key={video.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="flex-shrink-0 w-16 h-10 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-primary-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-base truncate text-gray-900">{video.title}</h4>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {/* Watch Button */}
                    <Link
                      to={`/video/${video.id}`}
                      className="btn btn-primary px-3 py-2 text-xs sm:text-sm"
                    >
                      {i18n.t(['ModuleDetail', 'Watch'])}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Offline Notice */}
        {!isOnline && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-800 font-medium">{i18n.t(['ModuleDetail', 'You\'re currently offline'])}</span>
            </div>
            <p className="text-yellow-700 text-sm mt-1">
              {i18n.t(['ModuleDetail', 'You\'re currently offline description'])}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleDetail;

