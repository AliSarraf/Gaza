import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, XCircle, ArrowRight, ArrowLeft, 
  Award, Clock, FileText, Home 
} from 'lucide-react';
import { getModuleById } from '../data/modules';
import { useProgress } from '../contexts/ProgressContext';

const Quiz = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { updateQuizScore, completeModule, isModuleCompleted, getQuizScore, downloadedVideos, loading, completedModules, quizScores } = useProgress();

  const module = getModuleById(moduleId);
  const questions = module?.quiz?.questions || [];

  useEffect(() => {
    if (!module) {
      navigate('/modules');
      return;
    }

    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [module, navigate]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      const selectedAnswer = selectedAnswers[question.id];
      if (selectedAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const handleSubmitQuiz = async () => {
    setIsSubmitting(true);
    try {
      const score = calculateScore();
      // Atomically update both quiz score and completion status
      const isPassing = score >= 70;
      // Merge with all previously completed modules
      const newCompletedModules = isPassing
        ? Array.from(new Set([...(completedModules || []), moduleId]))
        : completedModules || [];
      // Merge with all previous quiz scores
      const newQuizScores = { ...(quizScores || {}), [moduleId]: score };
      await updateQuizScore(moduleId, score, newCompletedModules, newQuizScores, downloadedVideos);
      setShowResults(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getQuestionStatus = (questionIndex) => {
    const question = questions[questionIndex];
    const hasAnswered = selectedAnswers.hasOwnProperty(question.id);
    
    if (questionIndex === currentQuestion) {
      return 'current';
    } else if (hasAnswered) {
      return 'answered';
    } else {
      return 'unanswered';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'bg-primary-600 text-white';
      case 'answered':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h1>
          <Link to="/modules" className="text-primary-600 hover:text-primary-700">
            Back to Modules
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-gray-600">Loading progress...</span>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const isPassing = score >= 70;
    const correctAnswers = questions.filter(q => 
      selectedAnswers[q.id] === q.correctAnswer
    ).length;

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="text-center mb-8">
            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isPassing ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {isPassing ? (
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
              ) : (
                <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {isPassing ? 'Congratulations!' : 'Quiz Complete'}
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {isPassing 
                ? 'You have successfully completed this module!' 
                : 'You need 70% to pass. Review the material and try again.'
              }
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  isPassing ? 'text-green-600' : 'text-red-600'
                }`}>
                  {score}%
                </div>
                <div className="text-sm sm:text-base text-gray-600">Final Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {correctAnswers}/{questions.length}
                </div>
                <div className="text-sm sm:text-base text-gray-600">Correct Answers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {formatTime(timeSpent)}
                </div>
                <div className="text-sm sm:text-base text-gray-600">Time Spent</div>
              </div>
            </div>
          </div>

          {/* Question Review */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Question Review</h2>
            <div className="space-y-6">
              {questions.map((question, index) => {
                const selectedAnswer = selectedAnswers[question.id];
                const isCorrect = selectedAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {question.question}
                        </h3>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded-lg border ${
                                optionIndex === question.correctAnswer
                                  ? 'bg-green-50 border-green-200'
                                  : optionIndex === selectedAnswer && !isCorrect
                                  ? 'bg-red-50 border-red-200'
                                  : 'bg-gray-50 border-gray-200'
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                {optionIndex === question.correctAnswer && (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {optionIndex === selectedAnswer && !isCorrect && (
                                  <XCircle className="w-5 h-5 text-red-600" />
                                )}
                                <span className={optionIndex === question.correctAnswer ? 'text-green-800 font-medium' : ''}>
                                  {option}
                                </span>
                                {optionIndex === question.correctAnswer && (
                                  <span className="text-green-600 text-sm font-medium">(Correct)</span>
                                )}
                                {optionIndex === selectedAnswer && !isCorrect && (
                                  <span className="text-red-600 text-sm font-medium">(Your Answer)</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/modules/${moduleId}`}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>Review Module</span>
            </Link>
            <Link
              to="/modules"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>All Modules</span>
            </Link>
            {!isPassing && (
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setSelectedAnswers({});
                  setTimeSpent(0);
                }}
                className="bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retake Quiz</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiz Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{module.title} Quiz</h1>
              <p className="text-gray-600">Test your knowledge of the training material</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{formatTime(timeSpent)}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Navigation */}
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${getStatusColor(getQuestionStatus(index))}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQ.id, index)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedAnswers[currentQ.id] === index
                    ? 'border-primary-600 bg-primary-50 text-primary-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQ.id] === index
                      ? 'border-primary-600 bg-primary-600'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswers[currentQ.id] === index && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={isSubmitting || Object.keys(selectedAnswers).length < questions.length}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Quiz</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                disabled={!selectedAnswers[currentQ.id]}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {Object.keys(selectedAnswers).length}
              </div>
              <div className="text-sm text-gray-600">Answered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {questions.length - Object.keys(selectedAnswers).length}
              </div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {Math.round((Object.keys(selectedAnswers).length / questions.length) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {formatTime(timeSpent)}
              </div>
              <div className="text-sm text-gray-600">Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz; 