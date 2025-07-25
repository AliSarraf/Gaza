import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
import ScrollToTop from './components/ScrollToTop';
import { ProgressProvider } from './contexts/ProgressContext';
import { OfflineProvider } from './contexts/OfflineContext';
import { LocaleProvider } from './contexts/LocaleContext.jsx';
import {ModuleDataProvider} from "./contexts/ModuleDataContext";

function App() {
  return (
    <LocaleProvider>
      <ModuleDataProvider>
        <OfflineProvider>
          <ProgressProvider>
            <Router>
              <ScrollToTop />
              <div className="min-h-screen bg-gray-50 flex flex-col">
                <Helmet>
                  <title>Yeshfi</title>
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
      </ModuleDataProvider>
    </LocaleProvider>
  );
}

export default App;
