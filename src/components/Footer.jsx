import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Wifi, WifiOff } from 'lucide-react';
import { useOffline } from '../contexts/OfflineContext';
import { useLocale } from '../contexts/LocaleContext';

const Footer = () => {
  const { isOnline } = useOffline();
  const { t } = useLocale();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* App Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo192.png" alt="Site Logo" className="w-8 h-8 rounded-lg bg-white p-1" />
              <span className="text-xl font-bold">{t(['Footer', 'First Aid Training'])}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t(['Footer', 'Comprehensive first aid and emergency training designed for crisis zones'])}.
              {t(['Footer', 'Learn life-saving skills that work offline'])}.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              {isOnline ? (
                <>
                  <Wifi className="w-4 h-4 text-green-400" />
                  <span>{t(['Footer', 'Online - Full access'])}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-yellow-400" />
                  <span>{t(['Footer', 'Offline - Downloaded content available'])}</span>
                </>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t(['Footer', 'Quick Access'])}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t(['Footer', 'Home'])}
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t(['Footer', 'Training Modules'])}
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t(['Footer', 'Your Progress'])}
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t(['Footer', 'Features'])}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary-400" />
                <span>{t(['Footer', 'Offline Access'])}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span>{t(['Footer', 'Life-Saving Skills'])}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-green-400" />
                <span>{t(['Footer', 'PWA Ready'])}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400 mb-2">
            {t(['Footer', 'Designed for crisis zones and emergency response'])}
          </p>
          <p className="text-sm text-gray-500">
            {t(['Footer', 'Made with ❤️ for communities in need'])} • {t(['Footer', 'Version'])} 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
