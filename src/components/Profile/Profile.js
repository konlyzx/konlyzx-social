import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCode, FaMusic, FaGlobe, FaTwitch, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const interests = [
    { icon: <FaGamepad />, label: 'Gaming' },
    { icon: <FaCode />, label: 'Desarrollo' },
    { icon: <FaMusic />, label: 'Música' },
    { icon: <FaGlobe />, label: 'Comunidad' }
  ];

  const socialLinks = [
    { icon: <FaTwitch />, url: 'https://twitch.tv/konlyzx', label: 'Twitch' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@konlyzxx', label: 'YouTube' },
    { icon: <FaTiktok />, url: 'https://tiktok.com/@kevinzxr6', label: 'TikTok' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="profile-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="profile-header" variants={itemVariants}>
        <div className="profile-image-container">
          <motion.img
            src="https://yt3.ggpht.com/ze_nIK1ulrsegdmKlVYjFSNDlx2wFTDBP_hha9feZSw8h9smB99n4WqmVp3qUGNFnOxwQPZz=s108-c-k-c0x00ffffff-no-rj"
            alt="KonlyZX Profile"
            className="profile-image"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
          <div className="status-badge online">En vivo</div>
        </div>
        <h1 className="profile-name">KonlyZX</h1>
        <p className="profile-tagline">Creador de Contenido & Desarrollador</p>
      </motion.div>

      <motion.div className="profile-stats" variants={itemVariants}>
        <div className="stat-item">
          <span className="stat-value">5K+</span>
          <span className="stat-label">Seguidores</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">50K+</span>
          <span className="stat-label">Visualizaciones</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">20+</span>
          <span className="stat-label">Streams</span>
        </div>
      </motion.div>

      <motion.div className="profile-interests" variants={itemVariants}>
        <h2>Intereses</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.label}
              className="interest-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="interest-icon">{interest.icon}</span>
              <span className="interest-label">{interest.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="profile-bio" variants={itemVariants}>
        <h2>Sobre Mí</h2>
        <p>¡Hola! Soy KonlyZX, un apasionado creador de contenido y desarrollador. Me especializo en gaming, particularmente en GTA RP y Fortnite, mientras construyo una comunidad increíble de gamers y entusiastas de la tecnología.</p>
        <p>Como desarrollador, disfruto creando soluciones innovadoras y compartiendo conocimientos con mi audiencia. Mi misión es inspirar y entretener a través de streams, videos y proyectos creativos.</p>
      </motion.div>

      <motion.div className="profile-social" variants={itemVariants}>
        <h2>Sígueme</h2>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
              <span>{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
