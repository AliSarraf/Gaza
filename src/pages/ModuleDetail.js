import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, CheckCircle, Clock, FileText, Award, ArrowLeft, Download, Wifi, WifiOff } from 'lucide-react';
import { getModuleById } from '../data/modules';
import { useProgress } from '../contexts/ProgressContext';
import { useOffline } from '../contexts/OfflineContext';
import VideoDownloadButton from '../components/VideoDownloadButton';
import ContentCachingService from '../services/ContentCachingService';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const [isModuleCached, setIsModuleCached] = useState(false);
  const [cachingModule, setCachingModule] = useState(false);
  const { isModuleCompleted, getQuizScore } = useProgress();
  const { isOnline } = useOffline();

  const module = getModuleById(moduleId);

  useEffect(() => {
    const checkCacheStatus = async () => {
      if (module) {
        const cached = await ContentCachingService.isModuleCached(moduleId);
        setIsModuleCached(cached);
      }
    };
    checkCacheStatus();
  }, [moduleId, module]);

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

  const isCompleted = isModuleCompleted(moduleId);
  const quizScore = getQuizScore(moduleId);

  const handleCacheModule = async () => {
    if (!isOnline) {
      alert('You need to be online to cache module content.');
      return;
    }

    setCachingModule(true);
    try {
      await ContentCachingService.cacheModuleData(module);
      setIsModuleCached(true);
      alert('Module content cached successfully! You can now access it offline.');
    } catch (error) {
      alert('Failed to cache module content. Please try again.');
    } finally {
      setCachingModule(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/modules"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Modules</span>
        </Link>

        {/* Offline Status Banner */}
        {!isOnline && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <WifiOff className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-800 font-medium">
                You're offline. {isModuleCached ? 'This module is available offline.' : 'Some content may not be available.'}
              </span>
            </div>
          </div>
        )}

        {/* Module Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{module.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{module.title}</h1>
                <p className="text-lg text-gray-600">{module.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Duration</div>
              <div className="text-lg font-semibold text-gray-900">{module.duration}</div>
              {isModuleCached && (
                <div className="flex items-center space-x-1 text-green-600 text-sm mt-1">
                  <Download className="w-3 h-3" />
                  <span>Cached</span>
                </div>
              )}
            </div>
          </div>

          {/* Module Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{module.videos.length}</div>
              <div className="text-sm text-gray-600">Training Videos</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{module.quiz.questions.length}</div>
              <div className="text-sm text-gray-600">Quiz Questions</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {isCompleted ? 'Complete' : 'In Progress'}
              </div>
              <div className="text-sm text-gray-600">Status</div>
            </div>
          </div>

          {/* Quiz Score */}
          {quizScore !== null && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Quiz Completed</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{quizScore}%</div>
                  <div className="text-sm text-green-700">Score</div>
                </div>
              </div>
            </div>
          )}

          {/* Offline Actions */}
          {isOnline && !isModuleCached && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-blue-800">Make Available Offline</h3>
                  <p className="text-blue-700 text-sm">Cache this module for offline access</p>
                </div>
                <button
                  onClick={handleCacheModule}
                  disabled={cachingModule}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{cachingModule ? 'Caching...' : 'Cache Module'}</span>
                </button>
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
                <span>Start Module</span>
              </Link>
            ) : (
              <Link
                to={`/video/${module.videos[0].id}`}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Review Module</span>
              </Link>
            )}
            
            <Link
              to={`/quiz/${moduleId}`}
              className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>{quizScore !== null ? 'Retake Quiz' : 'Take Quiz'}</span>
            </Link>
          </div>
        </div>

        {/* Videos Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Videos</h2>
          <div className="grid gap-6">
            {module.videos.map((video, index) => (
              <div key={video.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-3">{video.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{video.duration}</span>
                      </div>
                      <span>Video {index + 1} of {module.videos.length}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2 ml-4">
                    <Link
                      to={`/video/${video.id}`}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch</span>
                    </Link>
                    <VideoDownloadButton video={video} size="sm" />
                  </div>
                </div>

                {/* Video thumbnail if available */}
                {video.thumbnail && (
                  <div className="mt-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-32 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;

