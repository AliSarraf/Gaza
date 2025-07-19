import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Download, CheckCircle, Clock, FileText, Award, ArrowLeft } from 'lucide-react';
import { getModuleById } from '../data/modules';
import { useProgress } from '../contexts/ProgressContext';
import { useOffline } from '../contexts/OfflineContext';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const [downloadingVideos, setDownloadingVideos] = useState(new Set());
  const { isModuleCompleted, getQuizScore, addDownloadedVideo, isVideoDownloaded } = useProgress();
  const { isOnline } = useOffline();

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

  const isCompleted = isModuleCompleted(moduleId);
  const quizScore = getQuizScore(moduleId);

  const handleDownloadVideo = async (videoId) => {
    if (!isOnline) {
      alert('You need to be online to download videos.');
      return;
    }

    setDownloadingVideos(prev => new Set(prev).add(videoId));
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Add to downloaded videos
      await addDownloadedVideo(videoId);
      
      alert('Video downloaded successfully! You can now watch it offline.');
    } catch (error) {
      alert('Failed to download video. Please try again.');
    } finally {
      setDownloadingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(videoId);
        return newSet;
      });
    }
  };

  const getVideoStatus = (videoId) => {
    if (isVideoDownloaded(videoId)) {
      return 'downloaded';
    }
    if (downloadingVideos.has(videoId)) {
      return 'downloading';
    }
    return 'not-downloaded';
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
              className="flex-1 bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>Take Quiz</span>
            </Link>
          </div>
        </div>

        {/* Flashcards Section */}
        {module.flashcards && module.flashcards.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">First Aid Flashcards</h2>
              <Link
                to={`/flashcards/${moduleId}`}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
              >
                <span>View All</span>
              </Link>
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
              <span>Start Flashcard Training</span>
            </Link>
          </div>
        )}

        {/* Videos Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Videos</h2>
          
          <div className="space-y-4">
            {module.videos.map((video, index) => {
              const videoStatus = getVideoStatus(video.id);
              
              return (
                <div key={video.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                        <p className="text-gray-600 text-sm">{video.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-500">{video.duration}</span>
                          {videoStatus === 'downloaded' && (
                            <span className="text-sm text-green-600 font-medium">✓ Downloaded</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {/* Download Button */}
                      {videoStatus === 'not-downloaded' && (
                        <button
                          onClick={() => handleDownloadVideo(video.id)}
                          disabled={!isOnline}
                          className="p-2 text-gray-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          title={!isOnline ? 'You need to be online to download' : 'Download for offline viewing'}
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      )}
                      
                      {videoStatus === 'downloading' && (
                        <div className="p-2 text-primary-600">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"></div>
                        </div>
                      )}
                      
                      {videoStatus === 'downloaded' && (
                        <div className="p-2 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                      
                      {/* Watch Button */}
                      <Link
                        to={`/video/${video.id}`}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Offline Notice */}
        {!isOnline && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-800 font-medium">You're currently offline</span>
            </div>
            <p className="text-yellow-700 text-sm mt-1">
              Only downloaded videos are available. Connect to the internet to download more content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleDetail; 