import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Home, BookOpen, BarChart3 } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { useOffline } from '../contexts/OfflineContext';
import {i18n} from "../i18n";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const location = useLocation();
  const { getProgressPercentage } = useProgress();
  const { isOnline } = useOffline();

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPrompt(false);
        setDeferredPrompt(null);
      }
    }
  };

  const navigation = [
    { name: i18n.t(['Header', 'Home']), href: '/', icon: Home },
    { name: i18n.t(['Header', 'Modules']), href: '/modules', icon: BookOpen },
    { name: i18n.t(['Header', 'Progress']), href: '/progress', icon: BarChart3 },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FA</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">{i18n.t(['Header', 'First Aid Training'])}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Progress Indicator */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">
                  {getProgressPercentage()}%
                </span>
              </div>
              <span className="text-sm text-gray-600">{i18n.t(['Header', 'Complete'])}</span>
            </div>

            {/* Online/Offline Status */}
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
              isOnline 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isOnline ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span>{isOnline ? i18n.t(['Header', 'Online']) : i18n.t(['Header', 'Offline'])}</span>
            </div>

            {/* Install Button */}
            {showInstallPrompt && (
              <button
                onClick={handleInstallClick}
                className="flex items-center space-x-1 bg-primary-600 text-white px-3 py-1 rounded-md text-sm hover:bg-primary-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{i18n.t(['Header', 'Install'])}</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Progress */}
              <div className="px-3 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{i18n.t(['Header', 'Progress'])}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {getProgressPercentage()}% {i18n.t(["Header", "Complete"])}
                  </span>
                </div>
              </div>

              {/* Mobile Install Button */}
              {showInstallPrompt && (
                <button
                  onClick={handleInstallClick}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white px-3 py-2 rounded-md text-sm hover:bg-primary-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{i18n.t(["Header", "Install App"])}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 