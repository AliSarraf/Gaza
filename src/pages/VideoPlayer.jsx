import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Minimize, 
  SkipBack, SkipForward, ArrowLeft, FileText 
} from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { useOffline } from '../contexts/OfflineContext';
import {useModuleData} from "../contexts/ModuleDataContext";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const videoRef = useRef(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const { modules, getVideoById } = useModuleData();
  const { isVideoDownloaded } = useProgress();
  const { isOnline } = useOffline();

  const video = getVideoById(videoId);
  const isDownloaded = isVideoDownloaded(videoId);

  // Find the module this video belongs to
  const module = modules.find(m => m.videos.some(v => v.id === videoId));

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!video) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Video Not Found</h1>
          <Link to="/modules" className="text-primary-600 hover:text-primary-700">
            Back to Modules
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="relative">
        {/* Video Container */}
        <div className="relative w-full max-w-2xl mx-auto aspect-video bg-black mt-4">
          {video.videoUrl.includes('youtube.com/embed') && (
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-contain bg-black rounded-lg"
              frameBorder="0"
            />
          )}
        </div>

        {/* Back Button */}
        <Link
          to={module ? `/modules/${module.id}` : '/modules'}
          className="absolute top-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>

      {/* Transcript Panel */}
      {showTranscript && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Transcript</h3>
              <button
                onClick={() => setShowTranscript(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed">{video.transcript}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 