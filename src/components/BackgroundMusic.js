import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaVolumeUp, FaVolumeMute, FaMusic, FaPlay, FaPause } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MusicControl = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.25rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;

const MusicInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  svg {
    color: var(--primary-color);
  }
`;

const Button = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioPath = `${process.env.PUBLIC_URL}/music/background.mp3`;
    audioRef.current = new Audio(audioPath);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15; // 15% de volumen

    // Intentar reproducir automáticamente
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Reproducción automática prevenida:", error);
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      <MusicControl
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="music-control"
      >
        <MusicInfo>
          <FaMusic /> Now Playing
        </MusicInfo>
        <Button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </Button>
      </MusicControl>
    </AnimatePresence>
  );
};

export default BackgroundMusic;
