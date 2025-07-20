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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const { modules, getVideoById } = useModuleData();
  const { isVideoDownloaded } = useProgress();
  const { isOnline } = useOffline();

  const video = getVideoById(videoId);
  const isDownloaded = isVideoDownloaded(videoId);

  // Find the module this video belongs to
  const module = modules.find(m => m.videos.some(v => v.id === videoId));

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleTimeUpdate = () => setCurrentTime(videoElement.currentTime);
    const handleLoadedMetadata = () => setDuration(videoElement.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setBuffering(true);
    const handleCanPlay = () => setBuffering(false);

    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('waiting', handleWaiting);
    videoElement.addEventListener('canplay', handleCanPlay);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('waiting', handleWaiting);
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekTime = (clickX / width) * duration;
    videoRef.current.currentTime = seekTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.volume = volume;
      setIsMuted(false);
    } else {
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const skipTime = (seconds) => {
    videoRef.current.currentTime += seconds;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

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
    <div className="min-h-screen bg-black">
      <div className="relative">
        {/* Video Container */}
        <div className="relative w-full max-w-2xl mx-auto aspect-video bg-black mt-4">
          {video.videoUrl.includes('youtube.com/embed') ? (
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-contain bg-black rounded-lg"
              frameBorder="0"
            />
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full object-contain rounded-lg"
              poster={video.thumbnail}
              preload="metadata"
            >
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Offline Indicator */}
          {!isOnline && isDownloaded && (
            <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
              Playing Offline
            </div>
          )}

          {/* Buffering Indicator */}
          {buffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 sm:p-4">
            {/* Progress Bar */}
            <div 
              className="w-full h-1 bg-gray-600 rounded cursor-pointer mb-2 sm:mb-4"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-primary-600 rounded relative"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full"></div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>

                {/* Skip Back/Forward */}
                <button
                  onClick={() => skipTime(-10)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => skipTime(10)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Volume - Hidden on very small screens */}
                <div className="hidden sm:flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20"
                  />
                </div>

                {/* Time Display */}
                <span className="text-white text-xs sm:text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Transcript Toggle */}
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="text-white hover:text-gray-300 transition-colors"
                  title="Toggle Transcript"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {isFullscreen ? <Minimize className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>
          </div>
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