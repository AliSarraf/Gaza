import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality with update handling
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    // Send message to trigger update notification component
    window.dispatchEvent(new CustomEvent('sw-update-available', {
      detail: { registration }
    }));
  },
  onSuccess: (registration) => {
    console.log('PWA installed successfully');
    // Optionally show install success message
  }
});
