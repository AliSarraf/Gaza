import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Award, Download, Shield, Heart, Users, Clock } from 'lucide-react';
import { trainingModules } from '../data/modules';
import { useProgress } from '../contexts/ProgressContext';
import { useOffline } from '../contexts/OfflineContext';
import { useLocale } from '../contexts/LocaleContext';

const Home = () => {
  const { getProgressPercentage, completedModules } = useProgress();
  const { isOnline } = useOffline();
  const { t } = useLocale();

  const featuredModules = trainingModules.slice(0, 3);
  const progressPercentage = getProgressPercentage();

  const features = [
    {
      icon: Shield,
      title: t(['Home', 'Offline Access']),
      description: t(['Home', 'Download videos and access training content without internet connection'])
    },
    {
      icon: Heart,
      title: t(['Home', 'Life-Saving Skills']),
      description: t(['Home', 'Learn critical first aid techniques for emergency situations'])
    },
    {
      icon: Users,
      title: t(['Home', 'Community Focused']),
      description: t(['Home', 'Designed specifically for crisis zones and community responders'])
    },
    {
      icon: Clock,
      title: t(['Home', 'Self-Paced Learning']),
      description: t(['Home', 'Learn at your own pace with comprehensive video tutorials'])
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t(["Home", "First Aid Training for Gaza"])}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto px-4">
              {t(["Home", "Comprehensive emergency training designed to work offline"])} {t(["Home", "Learn life-saving skills that can make a difference when professional help is delayed"])}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/modules"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>{t(['Home', 'Start Training'])}</span>
              </Link>
              <Link
                to="/progress"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Award className="w-5 h-5" />
                <span>{t(['Home', 'View Progress'])}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t(['Home', 'Your Learning Journey'])}</h2>
            <p className="text-base sm:text-lg text-gray-600">{t(['Home', 'Track your progress through our comprehensive training modules'])}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">{t(['Home', 'Overall Progress'])}</span>
              <span className="text-2xl font-bold text-primary-600">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{completedModules.length}/{trainingModules.length} {t(['Home', 'Modules Completed'])}</span>
              <span>{trainingModules.length - completedModules.length} {t(['Home', 'Remaining'])}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t(['Home', 'Why Choose This Training?'])}</h2>
            <p className="text-base sm:text-lg text-gray-600">{t(['Home', 'Designed specifically for challenging environments and limited resources'])}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t(['Home', 'Featured Training Modules'])}</h2>
            <p className="text-base sm:text-lg text-gray-600">{t(['Home', 'Start with these essential life-saving skills'])}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModules.map((module) => (
              <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{module.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-500">{module.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{module.videos.length} videos</span>
                    <Link
                      to={`/modules/${module.id}`}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>{t(['Home', 'Start'])}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/modules"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>{t(['Home', 'View All Modules'])}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Offline Capability */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 sm:p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t(['Home', 'Learn Offline'])}</h2>
                  <p className="text-lg sm:text-xl text-primary-100 mb-6">
                    {t(['Home', 'Download training videos to your device and access them without internet connection'])}.
                    {t(['Home', 'Perfect for areas with limited connectivity'])}.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>{t(['Home', 'Download videos'])}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>{t(['Home', 'Access offline'])}</span>
                    </div>
                  </div>
                </div>
                              <div className="text-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                  <p className="text-sm sm:text-base text-primary-100">
                    {isOnline ? t(['Home', 'Ready to download content']) : t(['Home', 'Currently offline - using downloaded content'])}
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

