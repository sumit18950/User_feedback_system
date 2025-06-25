import React, { useState } from 'react';

const Navbar = ({ isDark, onToggleTheme, currentView, onNavChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`p-4 md:p-6 md:px-8 flex justify-between items-center transition-colors duration-200 ${
      isDark ? 'bg-[#111111] text-white' : 'bg-[#16610E] text-white'
    }`}>
      <div className="font-bold text-lg">Feedback Dashboard</div>
      {/* Hamburger for mobile */}
      <button className="md:hidden ml-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Desktop navlinks and theme toggle */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex gap-2">
          <button
            onClick={() => onNavChange('dashboard')}
            className={`px-4 py-1 rounded transition font-semibold text-sm focus:outline-none ${
              currentView === 'dashboard'
                ? 'bg-white text-[#16610E] shadow'
                : 'bg-transparent text-white hover:bg-white/20'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavChange('feedback')}
            className={`px-4 py-1 rounded transition font-semibold text-sm focus:outline-none ${
              currentView === 'feedback'
                ? 'bg-white text-[#16610E] shadow'
                : 'bg-transparent text-white hover:bg-white/20'
            }`}
          >
            Add Feedback
          </button>
        </div>
        <button
          onClick={onToggleTheme}
          className={`relative w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
            isDark ? 'bg-gray-700' : 'bg-blue-700'
          }`}
          aria-label="Toggle theme"
        >
          <span
            className={`absolute left-1 top-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-yellow-400 bg-white ${
              isDark ? 'translate-x-6' : ''
            }`}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </span>
        </button>
      </div>
      {/* Mobile sidebar menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black bg-opacity-40" onClick={() => setMenuOpen(false)}></div>
          <div className={`w-64 max-w-full h-full bg-[#111111] text-white shadow-lg p-6 flex flex-col gap-6 animate-slide-in-right`}>
            <button className="self-end mb-4" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={() => { onNavChange('dashboard'); setMenuOpen(false); }}
              className={`px-4 py-2 rounded transition font-semibold text-base focus:outline-none text-left ${
                currentView === 'dashboard'
                  ? 'bg-white text-[#16610E] shadow'
                  : 'bg-transparent text-white hover:bg-white/20'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => { onNavChange('feedback'); setMenuOpen(false); }}
              className={`px-4 py-2 rounded transition font-semibold text-base focus:outline-none text-left ${
                currentView === 'feedback'
                  ? 'bg-white text-[#16610E] shadow'
                  : 'bg-transparent text-white hover:bg-white/20'
              }`}
            >
              Add Feedback
            </button>
            <button
              onClick={onToggleTheme}
              className={`relative w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                isDark ? 'bg-gray-700' : 'bg-blue-700'
              } mt-4`}
              aria-label="Toggle theme"
            >
              <span
                className={`absolute left-1 top-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-yellow-400 bg-white ${
                  isDark ? 'translate-x-6' : ''
                }`}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 