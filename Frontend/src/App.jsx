import { useState } from 'react';
import Dashboard from './components/Dashboard';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isDark, setIsDark] = useState(false);

  const handleNavChange = (view) => {
    setCurrentView(view);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      isDark ? 'bg-[#232323] text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentView={currentView}
        onNavChange={handleNavChange}
      />
      <div className="container mx-auto px-4 py-8 flex-1 w-full">
        {currentView === 'feedback' ? (
          <div>
            <FeedbackForm isDark={isDark} />
          </div>
        ) : (
          <div>
            <h1 className="text-3xl text-center font-bold mb-6">Feedback & Comments</h1>
            <Dashboard isDark={isDark}/>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
