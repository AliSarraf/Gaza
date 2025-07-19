import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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