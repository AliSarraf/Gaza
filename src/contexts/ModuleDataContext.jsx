import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocale } from './LocaleContext';

const ModuleDataContext = createContext();

export const useModuleData = () => {
  const context = useContext(ModuleDataContext);
  if (!context) {
    throw new Error('useModuleData must be used within a ModuleDataProvider');
  }
  return context;
};

export const ModuleDataProvider = ({ children }) => {
  const { currentLocale } = useLocale();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const loadModules = async () => {
      try {
        let imported;
        if (currentLocale === 'ar') {
          imported = await import('../data/locales/modules-ar.js');
        } else {
          imported = await import('../data/locales/modules-en.js');
        }
        if (isMounted) {
          setModules(imported.trainingModules);
        }
      } catch (err) {
        setModules([]);
      }
    };
    loadModules();
    return () => { isMounted = false; };
  }, [currentLocale]);

  // Helper functions
  const getModuleById = (id) => modules.find(m => m.id === id);
  const getVideoById = (videoId) => {
    for (const module of modules) {
      const video = module.videos.find(v => v.id === videoId);
      if (video) return video;
    }
    return null;
  };

  return (
    <ModuleDataContext.Provider value={{ modules, getModuleById, getVideoById }}>
      {children}
    </ModuleDataContext.Provider>
  );
};

