import React, { useState, useEffect } from 'react';
import { WifiOff, Download, HardDrive } from 'lucide-react';
import { useOffline } from '../contexts/OfflineContext';
import VideoDownloadService from '../services/VideoDownloadService';

const OfflineIndicator = () => {
  const { isOnline } = useOffline();
  const [storageInfo, setStorageInfo] = useState({ usedMB: 0, availableMB: 0 });
  const [downloadedCount, setDownloadedCount] = useState(0);

  useEffect(() => {
    const updateStorageInfo = async () => {
      const info = await VideoDownloadService.getStorageInfo();
      setStorageInfo(info);

      const downloaded = await VideoDownloadService.getDownloadedVideos();
      setDownloadedCount(downloaded.length);
    };

    updateStorageInfo();

    // Update storage info periodically
    const interval = setInterval(updateStorageInfo, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isOnline) {
    return (
      <div className="bg-green-50 border-b border-green-200 px-4 py-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-green-800">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Online</span>
          </div>
          {downloadedCount > 0 && (
            <div className="flex items-center space-x-1 text-xs">
              <Download className="w-3 h-3" />
              <span>{downloadedCount} videos downloaded</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between text-yellow-800">
          <div className="flex items-center space-x-2">
            <WifiOff className="w-4 h-4" />
            <span className="text-sm font-medium">
              You're offline. Downloaded content is still available.
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            {downloadedCount > 0 && (
              <div className="flex items-center space-x-1">
                <Download className="w-3 h-3" />
                <span>{downloadedCount} videos available</span>
              </div>
            )}
            {storageInfo.usedMB > 0 && (
              <div className="flex items-center space-x-1">
                <HardDrive className="w-3 h-3" />
                <span>{storageInfo.usedMB}MB used</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineIndicator;
