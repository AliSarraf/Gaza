import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Wifi, WifiOff } from 'lucide-react';
import { useOffline } from '../contexts/OfflineContext';
import {i18n} from "../i18n";

const Footer = () => {
  const { isOnline } = useOffline();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* App Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FA</span>
              </div>
              <span className="text-xl font-bold">{i18n.t(['Footer', 'First Aid Training'])}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {i18n.t(['Footer', 'Comprehensive first aid and emergency training designed for crisis zones'])}.
              {i18n.t(['Footer', 'Learn life-saving skills that work offline'])}.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              {isOnline ? (
                <>
                  <Wifi className="w-4 h-4 text-green-400" />
                  <span>{i18n.t(['Footer', 'Online - Full access'])}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-yellow-400" />
                  <span>{i18n.t(['Footer', 'Offline - Downloaded content available'])}</span>
                </>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{i18n.t(['Footer', 'Quick Access'])}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {i18n.t(['Footer', 'Home'])}
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-gray-300 hover:text-white transition-colors">
                  {i18n.t(['Footer', 'Training Modules'])}
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-gray-300 hover:text-white transition-colors">
                  {i18n.t(['Footer', 'Your Progress'])}
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{i18n.t(['Footer', 'Features'])}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary-400" />
                <span>{i18n.t(['Footer', 'Offline Access'])}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-primary-400" />
                <span>{i18n.t(['Footer', 'Life-Saving Skills'])}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 text-primary-400" />
                <span>{i18n.t(['Footer', 'PWA Ready'])}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 {i18n.t(['Footer', 'First Aid Training'])}. {i18n.t(['Footer', 'Designed for crisis zones and emergency response'])}.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              {i18n.t(['Footer', "Version"])} 1.0.0
            </span>
            <span className="text-xs text-gray-500">
              {i18n.t(['Footer', 'Made with ❤\uFE0F for communities in need'])}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 