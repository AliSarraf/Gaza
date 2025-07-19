import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
<<<<<<< HEAD:src/App.js
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';
import VideoPlayer from './pages/VideoPlayer';
import Quiz from './pages/Quiz';
import Progress from './pages/Progress';
import Flashcards from './pages/Flashcards';
import OfflineIndicator from './components/OfflineIndicator';
import { ProgressProvider } from './contexts/ProgressContext';
import { OfflineProvider } from './contexts/OfflineContext';
=======
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Modules from './pages/Modules.jsx';
import ModuleDetail from './pages/ModuleDetail.jsx';
import VideoPlayer from './pages/VideoPlayer.jsx';
import Quiz from './pages/Quiz.jsx';
import Progress from './pages/Progress.jsx';
import OfflineIndicator from './components/OfflineIndicator.jsx';
import { ProgressProvider } from './contexts/ProgressContext.jsx';
import { OfflineProvider } from './contexts/OfflineContext.jsx';
>>>>>>> 923de1fb201d0feae5f83e3028312b5779e35dc6:src/App.jsx

function App() {
  return (
    <OfflineProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Helmet>
              <title>First Aid Training PWA</title>
              <meta name="description" content="Comprehensive first aid and emergency training for crisis zones" />
            </Helmet>
            
            <Header />
            <OfflineIndicator />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modules" element={<Modules />} />
                <Route path="/modules/:moduleId" element={<ModuleDetail />} />
                <Route path="/video/:videoId" element={<VideoPlayer />} />
                <Route path="/quiz/:moduleId" element={<Quiz />} />
                <Route path="/flashcards/:moduleId" element={<Flashcards />} />
                <Route path="/progress" element={<Progress />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </Router>
      </ProgressProvider>
    </OfflineProvider>
  );
}

export default App; 