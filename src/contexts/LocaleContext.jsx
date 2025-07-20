import React, { createContext, useContext, useState, useEffect } from 'react';
import { i18n } from '../i18n';

const LocaleContext = createContext();

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

export const LocaleProvider = ({ children }) => {
  // Get initial locale from localStorage or default to 'en'
  const [currentLocale, setCurrentLocale] = useState(() => {
    return localStorage.getItem('locale') || 'ar';
  });

  // Add a version counter to force re-renders when locale changes
  const [localeVersion, setLocaleVersion] = useState(0);

  // Update i18n locale when currentLocale changes
  useEffect(() => {
    i18n.locale = currentLocale;
    localStorage.setItem('locale', currentLocale);

    // Update document direction for RTL languages
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLocale;

    // Increment version to trigger re-renders
    setLocaleVersion(prev => prev + 1);
  }, [currentLocale]);

  const changeLocale = (newLocale) => {
    setCurrentLocale(newLocale);
  };

  // Helper function to get translations with automatic re-rendering
  const t = (key) => {
    // The localeVersion dependency ensures components re-render when locale changes
    return i18n.t(key);
  };

  const availableLocales = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ];

  const value = {
    currentLocale,
    changeLocale,
    availableLocales,
    t,
    localeVersion // This will trigger re-renders when it changes
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};
