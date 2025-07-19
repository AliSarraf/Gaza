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
    // Notify user of available update
    if (confirm('New version available! Would you like to update?')) {
      // Tell the waiting SW to skip waiting
      if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
      window.location.reload();
    }
  },
  onSuccess: (registration) => {
    console.log('PWA installed successfully');
    // Optionally show install success message
  }
});
