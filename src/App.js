import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { FaTwitch, FaYoutube, FaTiktok, FaGamepad, FaCalendar, FaCode, FaMusic, FaGlobe, FaHeart } from 'react-icons/fa';
import StatsCard from './components/StatsCard';
import Profile from './components/Profile/Profile';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import YouTubeVideos from './components/YouTubeVideos';
import TwitchClips from './components/TwitchClips';
import TikTokVideos from './components/TikTokVideos';
import BackgroundMusic from './components/BackgroundMusic';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <div className="loader-content" />
        </div>
      ) : (
        <>
          <ScrollProgress />
          <BackToTop />
          <BackgroundMusic />
          <nav className="nav-container">
            <div className="nav-content">
              <motion.div 
                className="logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Konlyzx</h3>
              </motion.div>
              <motion.div 
                className="nav-links"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="#profile" className="nav-link">Perfil</a>
                <a href="#twitch" className="nav-link">Twitch</a>
                <a href="#youtube" className="nav-link">YouTube</a>
                <a href="#tiktok" className="nav-link">TikTok</a>
              </motion.div>
            </div>
          </nav>

          <main className="app-container">
            <section id="profile" className="section profile-section">
              <Profile />
            </section>

            <section id="twitch" className="section twitch-section">
              <div className="section-content">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2><FaTwitch /> Twitch Channel</h2>
                  <div className="grid-container">
                    <StatsCard title="Followers" value="1.5K" icon={<FaGamepad />} />
                    <StatsCard title="Total Views" value="25K" icon={<FaGlobe />} />
                    <StatsCard title="Clips" value="50+" icon={<FaCalendar />} />
                  </div>
                  <h3 className="section-subtitle">Clips Destacados</h3>
                  <TwitchClips />
                </motion.div>
              </div>
            </section>

            <section id="youtube" className="section youtube-section">
              <div className="section-content">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2><FaYoutube /> YouTube Channel</h2>
                  <div className="grid-container">
                    <StatsCard title="Subscribers" value="16" icon={<FaGamepad />} />
                    <StatsCard title="Total Views" value="2000" icon={<FaGlobe />} />
                    <StatsCard title="Videos" value="3" icon={<FaCalendar />} />
                  </div>
                  <h3 className="section-subtitle">Últimos Videos</h3>
                  <YouTubeVideos />
                </motion.div>
              </div>
            </section>

            <section id="tiktok" className="section tiktok-section">
              <div className="section-content">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2><FaTiktok /> TikTok</h2>
                  <div className="grid-container">
                    <StatsCard title="Followers" value="5K" icon={<FaHeart />} />
                    <StatsCard title="Total Likes" value="70K" icon={<FaGlobe />} />
                    <StatsCard title="Videos" value="4" icon={<FaCalendar />} />
                  </div>
                  <h3 className="section-subtitle">Videos Virales</h3>
                  <TikTokVideos />
                </motion.div>
              </div>
            </section>
          </main>

          <footer className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h3>KonlyZX</h3>
                <p>Creador de contenido y desarrollador</p>
                <div className="social-links">
                  <a href="https://twitch.tv/konlyzx" target="_blank" rel="noopener noreferrer">
                    <FaTwitch />
                  </a>
                  <a href="https://youtube.com/@konlyzxx" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                  <a href="https://tiktok.com/@kevinzxr6" target="_blank" rel="noopener noreferrer">
                    <FaTiktok />
                  </a>
                </div>
              </div>
              <div className="footer-section">
                <h4>Enlaces Rápidos</h4>
                <ul>
                  <li><a href="#profile">Perfil</a></li>
                  <li><a href="#twitch">Twitch</a></li>
                  <li><a href="#youtube">YouTube</a></li>
                  <li><a href="#tiktok">TikTok</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contacto</h4>
                <ul>
                  <li>Discord: KonlyZX</li>
                  <li>Email: contacto@konlyzx.com</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} KonlyZX. Todos los derechos reservados.</p>
            </div>
          </footer>
          <Chatbot />
        </>
      )}
    </div>
  );
}

export default App;
