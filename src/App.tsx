import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { UmrahGuide } from './components/UmrahGuide';
import { Preparation } from './components/Preparation';
import { Duas } from './components/Duas';
import { PrayerTimes } from './components/PrayerTimes';
import { Qibla } from './components/Qibla';
import { Home as HomeIcon, BookOpen, Heart, Clock, Compass } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
      case 'guide':
        return <UmrahGuide onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'preparation':
        return <Preparation onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'duas':
        return <Duas onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'prayer':
        return <PrayerTimes onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'qibla':
        return <Qibla onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      default:
        return <Home onNavigate={setCurrentView} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      {renderView()}
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg z-50 transition-colors">
        <div className="max-w-lg mx-auto px-4">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setCurrentView('home')}
              className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                currentView === 'home' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Beranda</span>
            </button>
            
            <button
              onClick={() => setCurrentView('guide')}
              className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                currentView === 'guide' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-xs">Panduan</span>
            </button>
            
            <button
              onClick={() => setCurrentView('qibla')}
              className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                currentView === 'qibla' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              <Compass className="w-6 h-6" />
              <span className="text-xs">Kiblat</span>
            </button>
            
            <button
              onClick={() => setCurrentView('duas')}
              className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                currentView === 'duas' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              <Heart className="w-6 h-6" />
              <span className="text-xs">Doa</span>
            </button>
            
            <button
              onClick={() => setCurrentView('prayer')}
              className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                currentView === 'prayer' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              <Clock className="w-6 h-6" />
              <span className="text-xs">Waktu Shalat</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}