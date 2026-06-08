import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import { Mail, Phone, MapPin, FileText, ArrowUp } from 'lucide-react';

// Inline SVG Icons for Brands
const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Import assets
import avatar from './assets/img/Namvu.dd66b779.jpg';
import client1 from './assets/img/client1.e85cba31.png';
import client2 from './assets/img/client2.179f95ac.png';
import client3 from './assets/img/client3.3bb91fed.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Set initial theme based on system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Listen to scroll events to show/hide Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <div className="main-panel">
        
        {/* Navbar */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        {activeTab === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="hero-sec">
              <img src={avatar} alt="Nam Vu Avatar" className="hero-avatar" />
              <div className="hero-content">
                <h1 className="hero-title">HELLO, I'M NAM VU</h1>
                <p className="hero-subtitle">
                  Computer Science and Software Engineer Graduate from University of Canterbury
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                  <span className="hero-location">
                    <MapPin size={16} /> Christchurch, New Zealand
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button className="btn-primary" onClick={() => setActiveTab('projects')}>
                  View projects
                </button>
                <a 
                  href="https://drive.google.com/open?id=1NWaPCDRPtDxHVktXbaITyTVpSyV2OXb2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                >
                  <FileText size={18} /> Download CV
                </a>
              </div>
            </section>

            {/* About Me Section */}
            <section className="about-sec">
              <h2 className="section-header">About me</h2>
              <hr />
              <div className="section-content">
                <p>
                  I was born and grew up in the beautiful coastal city of Ha Long, Vietnam. At the age of eighteen, I moved to New Zealand to pursue my dream as a software developer, studying at the University of Canterbury under the University First Year Scholarship for International Students.
                </p>
                <p>
                  I completed a Bachelor of Science majoring in Computer Science (BSc) at the University of Canterbury. Alongside core computer science courses, my studies spanned different disciplines including Software Engineering, Information Systems, and Mathematics.
                </p>
                <p>
                  In my free time, I love learning new technical skills, playing sports, and hanging out with friends. I enjoy creating new systems and learning by doing. I practice what I have learned by applying theories into real-world projects, such as building dynamic games, networking simulations, mobile utilities, and building custom web applications.
                </p>
                <p>
                  Sports is another huge passion of mine. Back in high school, I represented my class to play in a local football tournament, securing the third prize. I follow rugby, football, and other international sports tournaments in my free time.
                </p>
              </div>
            </section>

            {/* Clients / Collaborations Showcase */}
            <section className="clients-sec">
              <h2 className="section-header" style={{ fontSize: '1.5rem', opacity: 0.85 }}>Collaborated With</h2>
              <hr style={{ width: '40px', margin: '0.5rem auto 1rem' }} />
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '3rem', 
                flexWrap: 'wrap',
                opacity: 0.7,
                marginTop: '1rem'
              }}>
                <img src={client1} alt="Collaborator 1" style={{ height: '35px', filter: darkMode ? 'brightness(0) invert(1)' : 'none' }} />
                <img src={client2} alt="Collaborator 2" style={{ height: '35px', filter: darkMode ? 'brightness(0) invert(1)' : 'none' }} />
                <img src={client3} alt="Collaborator 3" style={{ height: '35px', filter: darkMode ? 'brightness(0) invert(1)' : 'none' }} />
              </div>
            </section>

            {/* Contact Section */}
            <section className="contact-sec">
              <h2 className="section-header">Contact</h2>
              <hr />
              <div className="contact-grid">
                <div className="contact-info">
                  <div className="info-item">
                    <div className="info-icon"><Phone size={20} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-bright)' }}>+64 22 0523882</div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><Mail size={20} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-bright)' }}>vuphuongnam81197@gmail.com</div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon"><MapPin size={20} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-bright)' }}>Christchurch, New Zealand</div>
                    </div>
                  </div>
                </div>

                <div className="contact-links">
                  <p style={{ fontWeight: 600, color: 'var(--text-bright)' }}>Find Me On Social Media</p>
                  <div className="social-icons">
                    <a 
                      href="https://github.com/npv14" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={28} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/npv14" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <Projects />
        )}

        {/* Footer */}
        <footer className="footer">
          <p>© Nam Vu. All Rights Reserved.</p>
        </footer>
      </div>

      {/* Back to Top */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}
