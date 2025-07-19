import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Trophy, Clock, BookOpen, CheckCircle, 
  TrendingUp, Target, Star 
} from 'lucide-react';
import { trainingModules } from '../data/modules';
import { useProgress } from '../contexts/ProgressContext';
import { useLocale } from '../contexts/LocaleContext';

const Progress = () => {
  const { 
    completedModules, 
    quizScores, 
    downloadedVideos, 
    getProgressPercentage,
    loading 
  } = useProgress();
  const { t } = useLocale();

  const progressPercentage = getProgressPercentage();
  const totalModules = trainingModules.length;
  const totalVideos = trainingModules.reduce((sum, module) => sum + module.videos.length, 0);
  const totalQuestions = trainingModules.reduce((sum, module) => sum + module.quiz.questions.length, 0);

  const averageQuizScore = completedModules.length > 0 
    ? Math.round(completedModules.reduce((sum, moduleId) => {
        const score = quizScores[moduleId] || 0;
        return sum + score;
      }, 0) / completedModules.length)
    : 0;

  const getModuleProgress = (moduleId) => {
    const isCompleted = completedModules.includes(moduleId);
    const score = quizScores[moduleId] || null;
    return { isCompleted, score };
  };

  const getAchievementLevel = () => {
    if (progressPercentage >= 90) return { level: t(['Progress', 'Expert']), icon: Trophy, color: 'text-yellow-600' };
    if (progressPercentage >= 70) return { level: t(['Progress', 'Advanced']), icon: Award, color: 'text-purple-600' };
    if (progressPercentage >= 50) return { level: t(['Progress', 'Intermediate']), icon: Star, color: 'text-blue-600' };
    if (progressPercentage >= 25) return { level: t(['Progress', 'Beginner']), icon: BookOpen, color: 'text-green-600' };
    return { level: t(['Progress', 'New Learner']), icon: BookOpen, color: 'text-gray-600' };
  };

  const achievement = getAchievementLevel();
  const AchievementIcon = achievement.icon;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">{t(['Progress', 'Your Learning Progress'])}</h1>
          <p className="text-base sm:text-lg text-gray-600">
            {t(['Progress', 'Track your journey through first aid and emergency training'])}
          </p>
        </div>

        {/* Overall Progress Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            {/* Progress Circle */}
            <div className="text-center">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeDasharray={`${progressPercentage}, 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-2xl font-bold text-gray-900">{progressPercentage}%</span>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{t(['Progress', 'Overall Progress'])}</h3>
            </div>

            {/* Achievement Level */}
            <div className="text-center">
              <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <AchievementIcon className={`w-10 h-10 sm:w-12 sm:h-12 ${achievement.color}`} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{achievement.level}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t(['Progress', 'Achievement Level'])}</p>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{t(['Progress', 'Completed Modules'])}</span>
                <span className="font-semibold text-gray-900">{completedModules.length}/{totalModules}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{t(['Progress', 'Average Quiz Score'])}</span>
                <span className="font-semibold text-gray-900">{averageQuizScore}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{t(['Progress', 'Downloaded Videos'])}</span>
                <span className="font-semibold text-gray-900">{downloadedVideos.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{completedModules.length}</div>
            <div className="text-sm sm:text-base text-gray-600">{t(['Progress', 'Modules Completed'])}</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{totalQuestions}</div>
            <div className="text-sm sm:text-base text-gray-600">{t(['Progress', 'Quiz Questions'])}</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{averageQuizScore}%</div>
            <div className="text-sm sm:text-base text-gray-600">{t(['Progress', 'Average Score'])}</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{totalVideos}</div>
            <div className="text-sm sm:text-base text-gray-600">{t(['Progress', 'Total Videos'])}</div>
          </div>
        </div>

        {/* Module Progress */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t(['Progress', 'Module Progress'])}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {trainingModules.map((module) => {
              const progress = getModuleProgress(module.id);
              
              return (
                <div key={module.id} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{module.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-500">{module.duration}</p>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                      progress.isCompleted 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {progress.isCompleted ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>{t(['Progress', 'Complete'])}</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-4 h-4" />
                          <span>{t(['Progress', 'In Progress'])}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{t(['Progress', 'Videos'])}</span>
                      <span className="text-gray-900">{module.videos.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{t(['Progress', 'Quiz Questions'])}</span>
                      <span className="text-gray-900">{module.quiz.questions.length}</span>
                    </div>
                    {progress.score !== null && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{t(['Progress', 'Quiz Score'])}</span>
                        <span className={`font-semibold ${
                          progress.score >= 70 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {progress.score}%
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <Link
                      to={`/modules/${module.id}`}
                      className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        progress.isCompleted
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-primary-600 text-white hover:bg-primary-700'
                      }`}
                    >
                      {progress.isCompleted ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>{t(['Progress', 'Review'])}</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-4 h-4" />
                          <span>{t(['Progress', 'Continue'])}</span>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t(['Progress', 'Achievements'])}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-4 rounded-lg border-2 ${
              completedModules.length >= 1 
                ? 'border-green-200 bg-green-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  completedModules.length >= 1 ? 'bg-green-600' : 'bg-gray-400'
                }`}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t(['Progress', 'First Steps'])}</h3>
                  <p className="text-sm text-gray-600">{t(['Progress', 'Complete your first module'])}</p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${
              completedModules.length >= 3 
                ? 'border-blue-200 bg-blue-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  completedModules.length >= 3 ? 'bg-blue-600' : 'bg-gray-400'
                }`}>
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t(['Progress', 'Getting There'])}</h3>
                  <p className="text-sm text-gray-600">{t(['Progress', 'Complete 3 modules'])}</p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${
              completedModules.length >= 5 
                ? 'border-purple-200 bg-purple-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  completedModules.length >= 5 ? 'bg-purple-600' : 'bg-gray-400'
                }`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t(['Progress', 'Halfway There'])}</h3>
                  <p className="text-sm text-gray-600">{t(['Progress', 'Complete 5 modules'])}</p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${
              averageQuizScore >= 80 
                ? 'border-yellow-200 bg-yellow-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  averageQuizScore >= 80 ? 'bg-yellow-600' : 'bg-gray-400'
                }`}>
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t(['Progress', 'High Achiever'])}</h3>
                  <p className="text-sm text-gray-600">{t(['Progress', 'Average quiz score ≥ 80%'])}</p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${
              downloadedVideos.length >= 5 
                ? 'border-green-200 bg-green-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  downloadedVideos.length >= 5 ? 'bg-green-600' : 'bg-gray-400'
                }`}>
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t(['Progress', 'Offline Learner'])}</h3>
                  <p className="text-sm text-gray-600">{t(['Progress', 'Download 5 videos'])}</p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${
              progressPercentage >= 100 
                ? 'border-yellow-200 bg-yellow-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  progressPercentage >= 100 ? 'bg-yellow-600' : 'bg-gray-400'
                }`}>
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t(['Progress', 'Master'])}</h3>
                  <p className="text-sm text-gray-600">{t(['Progress', 'Complete all modules'])}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <Link
            to="/modules"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
          >
            <BookOpen className="w-5 h-5" />
            <span>{t(['Progress', 'Continue Learning'])}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Progress;
