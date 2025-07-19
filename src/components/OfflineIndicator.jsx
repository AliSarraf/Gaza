import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOffline } from '../contexts/OfflineContext';
import { useLocale } from '../contexts/LocaleContext';

const OfflineIndicator = () => {
  const { isOnline } = useOffline();
  const { t } = useLocale();

  if (isOnline) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2 text-yellow-800">
        <WifiOff className="w-4 h-4" />
        <span className="text-sm font-medium">
          {t(["OfflineIndicator", "You're offline"])}. {t(["OfflineIndicator", "Downloaded content is still available"])}.
        </span>
      </div>
    </div>
  );
};

export default OfflineIndicator;
