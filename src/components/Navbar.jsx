import React from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => setActiveTab('home')}>
        Nam Vu <span className="nav-brand-dot"></span>
      </div>
      <div className="nav-links">
        <span 
          className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          About Me
        </span>
        <span 
          className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </span>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? <IconSun size={20} stroke={1.5} /> : <IconMoon size={20} stroke={1.5} />}
        </button>
      </div>
    </nav>
  );
}
