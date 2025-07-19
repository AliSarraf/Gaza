import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const UpdateNotification = ({ onUpdate, onDismiss }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-blue-600 text-white rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Update Available</h3>
          <p className="text-sm text-blue-100 mb-3">
            A new version of the app is available with improvements and bug fixes.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={onUpdate}
              className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-blue-50 flex items-center space-x-1"
            >
              <Download className="w-3 h-3" />
              <span>Update Now</span>
            </button>
            <button
              onClick={onDismiss}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-400"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="text-blue-200 hover:text-white ml-2 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const PWAUpdateManager = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    // Listen for the custom update event
    const handleUpdateAvailable = (event) => {
      setRegistration(event.detail.registration);
      setShowUpdate(true);
    };

    window.addEventListener('sw-update-available', handleUpdateAvailable);

    return () => {
      window.removeEventListener('sw-update-available', handleUpdateAvailable);
    };
  }, []);

  const handleUpdate = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
    setShowUpdate(false);
  };

  const handleDismiss = () => {
    setShowUpdate(false);
  };

  if (!showUpdate) {
    return null;
  }

  return (
    <UpdateNotification
      onUpdate={handleUpdate}
      onDismiss={handleDismiss}
    />
  );
};

export default PWAUpdateManager;
