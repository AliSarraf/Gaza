import React, { useState, useEffect } from 'react';
import { Download, Trash2, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import VideoDownloadService from '../services/VideoDownloadService';
import { useProgress } from '../contexts/ProgressContext';

const VideoDownloadButton = ({ video, size = 'md' }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStatus, setDownloadStatus] = useState('not_started');
  const [error, setError] = useState(null);
  const { addDownloadedVideo, removeDownloadedVideo } = useProgress();

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  useEffect(() => {
    const checkDownloadStatus = async () => {
      const downloaded = await VideoDownloadService.isVideoDownloaded(video.id);
      setIsDownloaded(downloaded);

      if (downloaded) {
        setDownloadStatus('completed');
        setDownloadProgress(100);
      }
    };

    checkDownloadStatus();
  }, [video.id]);

  const handleDownload = async () => {
    if (downloadStatus === 'downloading') return;

    setError(null);
    setDownloadStatus('downloading');
    setDownloadProgress(0);

    await VideoDownloadService.downloadVideo(
      video,
      (progress) => {
        setDownloadProgress(progress);
      },
      async (result) => {
        if (result.success) {
          setIsDownloaded(true);
          setDownloadStatus('completed');
          setDownloadProgress(100);
          await addDownloadedVideo(video.id);
        } else {
          setError(result.error || 'Download failed');
          setDownloadStatus('error');
          setDownloadProgress(0);
        }
      }
    );
  };

  const handleDelete = async () => {
    if (downloadStatus === 'downloading') return;

    const result = await VideoDownloadService.deleteVideo(video.id);
    if (result.success) {
      setIsDownloaded(false);
      setDownloadStatus('not_started');
      setDownloadProgress(0);
      await removeDownloadedVideo(video.id);
    } else {
      setError(result.error || 'Delete failed');
    }
  };

  const getButtonContent = () => {
    switch (downloadStatus) {
      case 'downloading':
        return (
          <>
            <Loader className={`${iconSizes[size]} animate-spin`} />
            <span>{downloadProgress}%</span>
          </>
        );
      case 'completed':
        return (
          <>
            <CheckCircle className={`${iconSizes[size]} text-green-600`} />
            <span>Downloaded</span>
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle className={`${iconSizes[size]} text-red-600`} />
            <span>Error</span>
          </>
        );
      default:
        return (
          <>
            <Download className={iconSizes[size]} />
            <span>Download</span>
          </>
        );
    }
  };

  const getButtonClass = () => {
    const baseClass = `${sizeClasses[size]} rounded-lg font-medium transition-all duration-200 flex items-center space-x-2`;

    switch (downloadStatus) {
      case 'downloading':
        return `${baseClass} bg-blue-100 text-blue-700 cursor-not-allowed`;
      case 'completed':
        return `${baseClass} bg-green-100 text-green-700 hover:bg-green-200`;
      case 'error':
        return `${baseClass} bg-red-100 text-red-700 hover:bg-red-200`;
      default:
        return `${baseClass} bg-gray-100 text-gray-700 hover:bg-gray-200`;
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center space-x-2">
        <button
          onClick={isDownloaded ? handleDelete : handleDownload}
          disabled={downloadStatus === 'downloading'}
          className={getButtonClass()}
          title={isDownloaded ? 'Delete downloaded video' : 'Download for offline viewing'}
        >
          {getButtonContent()}
        </button>

        {isDownloaded && downloadStatus !== 'downloading' && (
          <button
            onClick={handleDelete}
            className={`${sizeClasses[size]} rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 bg-red-100 text-red-700 hover:bg-red-200`}
            title="Delete downloaded video"
          >
            <Trash2 className={iconSizes[size]} />
          </button>
        )}
      </div>

      {downloadStatus === 'downloading' && (
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-blue-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${downloadProgress}%` }}
          />
        </div>
      )}

      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
};

export default VideoDownloadButton;
