import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Play, CheckCircle, Clock, Filter } from 'lucide-react';
import { trainingModules } from '../data/modules';
import { useProgress } from '../contexts/ProgressContext';

const Modules = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isModuleCompleted, getQuizScore, loading } = useProgress();

  const categories = [
    { id: 'all', name: 'All Modules' },
    { id: 'trauma', name: 'Trauma & Injuries' },
    { id: 'medical', name: 'Medical Emergencies' },
    { id: 'specialized', name: 'Specialized Care' },
    { id: 'psychological', name: 'Psychological Support' }
  ];

  const categoryMapping = {
    'traumatic-injuries': 'trauma',
    'burns-management': 'trauma',
    'head-spinal-trauma': 'trauma',
    'chest-abdominal-injuries': 'medical',
    'vulnerable-populations': 'specialized',
    'building-collapse': 'trauma',
    'chemical-injuries': 'medical',
    'psychological-first-aid': 'psychological'
  };

  const filteredModules = useMemo(() => {
    return trainingModules.filter(module => {
      const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          module.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                            categoryMapping[module.id] === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, categoryMapping]);

  const getModuleStatus = (moduleId) => {
    const isCompleted = isModuleCompleted(moduleId);
    const quizScore = getQuizScore(moduleId);
    
    if (isCompleted && quizScore !== null) {
      return { status: 'completed', score: quizScore };
    } else if (isCompleted) {
      return { status: 'in-progress', score: null };
    } else {
      return { status: 'not-started', score: null };
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" />;
      case 'in-progress':
        return <Clock className="w-5 h-5" />;
      default:
        return <Play className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-gray-600">Loading progress...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Training Modules</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive first aid and emergency training modules designed for crisis zones. 
            Learn essential life-saving skills at your own pace.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search modules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredModules.length} of {trainingModules.length} modules
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredModules.map((module) => {
            const status = getModuleStatus(module.id);
            
            return (
              <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Module Header */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                      <span className="text-2xl sm:text-3xl flex-shrink-0">{module.icon}</span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{module.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">{module.duration}</p>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(status.status)}`}>
                      {getStatusIcon(status.status)}
                      <span className="capitalize hidden sm:inline">
                        {status.status === 'completed' ? 'Complete' : 
                         status.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{module.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
                    <span>{module.videos.length} videos</span>
                    <span>{module.quiz.questions.length} quiz questions</span>
                  </div>

                  {/* Quiz Score */}
                  {status.score !== null && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-800">Quiz Score</span>
                        <span className="text-lg font-bold text-green-600">{status.score}%</span>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <Link
                    to={`/modules/${module.id}`}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      status.status === 'completed'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {status.status === 'completed' ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Review</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Start Module</span>
                      </>
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No modules found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modules; 