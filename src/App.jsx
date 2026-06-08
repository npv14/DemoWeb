import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconFileText, 
  IconArrowUp, 
  IconCompass, 
  IconActivity, 
  IconBrain,
  IconBrandGithub,
  IconBrandLinkedin
} from '@tabler/icons-react';
import { motion } from 'motion/react';

// Import assets
import avatar from './assets/img/Namvu.dd66b779.jpg';
import client1 from './assets/img/client1.e85cba31.png';
import client2 from './assets/img/client2.179f95ac.png';
import client3 from './assets/img/client3.3bb91fed.png';
import halongImg from './assets/img/halong_minimalist.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync theme class with darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

  // Motion variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
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
            {/* Hero Section - Split Layout */}
            <motion.section 
              className="hero-sec"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div className="hero-text-block" variants={itemVariants}>
                <h1 className="hero-title">Hello, I'm <span>Nam Vu</span></h1>
                <p className="hero-subtitle">
                  Computer Science and Software Engineering Graduate from University of Canterbury.
                </p>
                <span className="hero-location">
                  <IconMapPin size={16} stroke={1.5} /> Christchurch, New Zealand
                </span>
                <div className="hero-ctas">
                  <button className="btn-primary" onClick={() => setActiveTab('projects')}>
                    View projects
                  </button>
                  <a 
                    href="https://drive.google.com/open?id=1NWaPCDRPtDxHVktXbaITyTVpSyV2OXb2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary"
                  >
                    <IconFileText size={18} stroke={1.5} /> Download CV
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="hero-avatar-container" 
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="hero-avatar-wrapper">
                  <img src={avatar} alt="Nam Vu Avatar" className="hero-avatar" />
                </div>
              </motion.div>
            </motion.section>

            {/* About Me Section - Bento Grid */}
            <section className="about-sec">
              <h2 className="section-header">About me</h2>
              <motion.div 
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Cell 1: Bio & Education (span 8) */}
                <motion.div 
                  className="bento-card col-span-8 bento-cell-about"
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                >
                  <div className="bento-card-title">
                    <IconCompass size={18} stroke={1.5} className="text-accent" /> My Journey
                  </div>
                  <p>
                    I was born and grew up in the beautiful coastal city of Ha Long, Vietnam. At the age of eighteen, I moved to New Zealand to pursue my dream as a software developer, studying at the University of Canterbury under the University First Year Scholarship for International Students.
                  </p>
                  <p>
                    I completed a Bachelor of Science majoring in Computer Science (BSc) at the University of Canterbury. Alongside core computer science courses, my studies spanned different disciplines including Software Engineering, Information Systems, and Mathematics.
                  </p>
                </motion.div>

                {/* Cell 2: Quick Facts / Origin (span 4) */}
                <motion.div 
                  className="bento-card col-span-4 bento-cell-stats" 
                  style={{ background: 'var(--accent-glow)', borderColor: 'var(--accent)' }}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="bento-card-title">
                    <IconActivity size={18} stroke={1.5} style={{ color: 'var(--accent)' }} /> Quick Facts
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Origin</div>
                    <div className="stat-value">Ha Long, Vietnam 🇻🇳</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Current Base</div>
                    <div className="stat-value">Christchurch, NZ 🇳🇿</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Scholarship</div>
                    <div className="stat-value">UC First Year Scholar</div>
                  </div>
                </motion.div>

                {/* Cell 3: Technical Skills (span 4) */}
                <motion.div 
                  className="bento-card col-span-4 bento-cell-tech"
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                >
                  <div className="bento-card-title">
                    <IconBrain size={18} stroke={1.5} className="text-accent" /> Core Stack
                  </div>
                  <div className="tech-tag-container">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">C++</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">SQL</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Git</span>
                  </div>
                </motion.div>

                {/* Cell 4: Landscape Visual (span 4) */}
                <motion.div 
                  className="bento-card col-span-4 bento-cell-visual"
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                >
                  <img src={halongImg} alt="Ha Long Bay Minimalist" className="bento-visual-img" />
                  <div className="bento-visual-overlay">
                    <div className="bento-visual-title">Ha Long Bay</div>
                    <div className="bento-visual-desc">My hometown & heritage</div>
                  </div>
                </motion.div>

                {/* Cell 5: Personal Passions & Hobbies (span 4) */}
                <motion.div 
                  className="bento-card col-span-4 bento-cell-about"
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                >
                  <div className="bento-card-title">Passions & Hobbies</div>
                  <p>
                    I practice what I have learned by applying theories into real-world projects, building dynamic games, networking simulations, and custom web applications.
                  </p>
                  <p>
                    Sports is another huge passion of mine. I played in a local football tournament and follow rugby, football, and international sports in my free time.
                  </p>
                </motion.div>
              </motion.div>
            </section>

            {/* Collaborations Logo Wall */}
            <motion.section 
              className="logo-wall-sec"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="logo-wall-title">Collaborated With</h2>
              <div className="logo-wall-container">
                <img 
                  src={client1} 
                  alt="Collaborator 1" 
                  className="logo-item" 
                  style={{ filter: darkMode ? 'brightness(0) invert(1) opacity(0.5)' : 'grayscale(100%) opacity(0.5)' }} 
                />
                <img 
                  src={client2} 
                  alt="Collaborator 2" 
                  className="logo-item" 
                  style={{ filter: darkMode ? 'brightness(0) invert(1) opacity(0.5)' : 'grayscale(100%) opacity(0.5)' }} 
                />
                <img 
                  src={client3} 
                  alt="Collaborator 3" 
                  className="logo-item" 
                  style={{ filter: darkMode ? 'brightness(0) invert(1) opacity(0.5)' : 'grayscale(100%) opacity(0.5)' }} 
                />
              </div>
            </motion.section>

            {/* Contact Section */}
            <section className="contact-sec">
              <h2 className="section-header">Contact</h2>
              <motion.div 
                className="contact-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
              >
                <div className="contact-info">
                  <motion.div className="info-item" variants={itemVariants}>
                    <div className="info-icon"><IconPhone size={20} stroke={1.5} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-bright)' }}>+64 22 0523882</div>
                    </div>
                  </motion.div>
                  <motion.div className="info-item" variants={itemVariants}>
                    <div className="info-icon"><IconMail size={20} stroke={1.5} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-bright)' }}>vuphuongnam81197@gmail.com</div>
                    </div>
                  </motion.div>
                  <motion.div className="info-item" variants={itemVariants}>
                    <div className="info-icon"><IconMapPin size={20} stroke={1.5} /></div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-bright)' }}>Christchurch, New Zealand</div>
                    </div>
                  </motion.div>
                </div>

                <motion.div className="contact-social-card" variants={itemVariants}>
                  <p style={{ fontWeight: 650, color: 'var(--text-bright)', fontSize: '1.05rem' }}>Find Me On Social Media</p>
                  <div className="social-icons">
                    <a 
                      href="https://github.com/npv14" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="GitHub"
                    >
                      <IconBrandGithub size={24} stroke={1.5} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/npv14" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="LinkedIn"
                    >
                      <IconBrandLinkedin size={24} stroke={1.5} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
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
        <IconArrowUp size={22} stroke={1.5} />
      </button>
    </div>
  );
}
