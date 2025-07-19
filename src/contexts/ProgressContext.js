import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { openDB } from 'idb';

const ProgressContext = createContext();

const initialState = {
  completedModules: [],
  quizScores: {},
  downloadedVideos: [],
  loading: true,
};

const progressReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'LOAD_PROGRESS':
      return { 
        ...state, 
        completedModules: action.payload.completedModules || [],
        quizScores: action.payload.quizScores || {},
        downloadedVideos: action.payload.downloadedVideos || [],
        loading: false 
      };
    case 'COMPLETE_MODULE':
      return {
        ...state,
        completedModules: [...new Set([...state.completedModules, action.payload])]
      };
    case 'UPDATE_QUIZ_SCORE':
      return {
        ...state,
        quizScores: {
          ...state.quizScores,
          [action.payload.moduleId]: action.payload.score
        }
      };
    case 'ADD_DOWNLOADED_VIDEO':
      return {
        ...state,
        downloadedVideos: [...new Set([...state.downloadedVideos, action.payload])]
      };
    case 'REMOVE_DOWNLOADED_VIDEO':
      return {
        ...state,
        downloadedVideos: state.downloadedVideos.filter(id => id !== action.payload)
      };
    default:
      return state;
  }
};

export const ProgressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  // Initialize IndexedDB
  useEffect(() => {
    const initDB = async () => {
      try {
        const db = await openDB('firstAidTraining', 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains('progress')) {
              db.createObjectStore('progress', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('videos')) {
              db.createObjectStore('videos', { keyPath: 'id' });
            }
          },
        });

        // Load existing progress
        const progress = await db.get('progress', 'userProgress') || {};
        dispatch({ type: 'LOAD_PROGRESS', payload: progress });
      } catch (error) {
        console.error('Error initializing IndexedDB:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    initDB();
  }, []);

  // Save progress to IndexedDB
  const saveProgress = async (progressData) => {
    try {
      const db = await openDB('firstAidTraining', 1);
      await db.put('progress', {
        id: 'userProgress',
        ...progressData
      });
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const completeModule = async (moduleId) => {
    dispatch({ type: 'COMPLETE_MODULE', payload: moduleId });
    const newCompletedModules = [...new Set([...state.completedModules, moduleId])];
    await saveProgress({
      completedModules: newCompletedModules,
      quizScores: state.quizScores,
      downloadedVideos: state.downloadedVideos
    });
  };

  const updateQuizScore = async (moduleId, score) => {
    dispatch({ type: 'UPDATE_QUIZ_SCORE', payload: { moduleId, score } });
    const newQuizScores = { ...state.quizScores, [moduleId]: score };
    await saveProgress({
      completedModules: state.completedModules,
      quizScores: newQuizScores,
      downloadedVideos: state.downloadedVideos
    });
  };

  const addDownloadedVideo = async (videoId) => {
    dispatch({ type: 'ADD_DOWNLOADED_VIDEO', payload: videoId });
    const newDownloadedVideos = [...new Set([...state.downloadedVideos, videoId])];
    await saveProgress({
      completedModules: state.completedModules,
      quizScores: state.quizScores,
      downloadedVideos: newDownloadedVideos
    });
  };

  const removeDownloadedVideo = async (videoId) => {
    dispatch({ type: 'REMOVE_DOWNLOADED_VIDEO', payload: videoId });
    const newDownloadedVideos = state.downloadedVideos.filter(id => id !== videoId);
    await saveProgress({
      completedModules: state.completedModules,
      quizScores: state.quizScores,
      downloadedVideos: newDownloadedVideos
    });
  };

  const isModuleCompleted = (moduleId) => {
    return state.completedModules.includes(moduleId);
  };

  const getQuizScore = (moduleId) => {
    return state.quizScores[moduleId] || null;
  };

  const isVideoDownloaded = (videoId) => {
    return state.downloadedVideos.includes(videoId);
  };

  const getProgressPercentage = () => {
    const totalModules = 8; // Total number of modules
    return Math.round((state.completedModules.length / totalModules) * 100);
  };

  const value = {
    ...state,
    completeModule,
    updateQuizScore,
    addDownloadedVideo,
    removeDownloadedVideo,
    isModuleCompleted,
    getQuizScore,
    isVideoDownloaded,
    getProgressPercentage,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}; 