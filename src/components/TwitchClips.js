import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPlay, FaEye, FaClock, FaGamepad } from 'react-icons/fa';

const ClipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 2rem 0;
`;

const ClipCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ClipOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ClipCard}:hover & {
    opacity: 1;
  }
`;

const GameTag = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(145, 70, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ClipTitle = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const ClipStats = styled.div`
  display: flex;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const PlayButton = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(145, 70, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ClipCard}:hover & {
    opacity: 1;
  }
`;

const clips = [
  {
    id: 1,
    title: "¡CLUTCH ÉPICO en el 1v5! 🎮",
    thumbnail: "https://static-cdn.jtvnw.net/previews-ttv/live_user_konlyzx-320x180.jpg",
    game: "Counter-Strike 2",
    views: "1.2K",
    duration: "0:45"
  },
  {
    id: 2,
    title: "¡VICTORIA con ESTILO! 🏆",
    thumbnail: "https://static-cdn.jtvnw.net/previews-ttv/live_user_konlyzx-320x180.jpg",
    game: "Fortnite",
    views: "987",
    duration: "1:20"
  },
  {
    id: 3,
    title: "¡MOMENTAZO en DIRECTO! 😱",
    thumbnail: "https://static-cdn.jtvnw.net/previews-ttv/live_user_konlyzx-320x180.jpg",
    game: "GTA V RP",
    views: "2.1K",
    duration: "1:05"
  }
];

const TwitchClips = () => {
  return (
    <ClipsGrid>
      {clips.map((clip) => (
        <ClipCard
          key={clip.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Thumbnail src={clip.thumbnail} alt={clip.title} />
          <GameTag>
            <FaGamepad /> {clip.game}
          </GameTag>
          <ClipOverlay>
            <ClipTitle>{clip.title}</ClipTitle>
            <ClipStats>
              <span><FaEye /> {clip.views}</span>
              <span><FaClock /> {clip.duration}</span>
            </ClipStats>
          </ClipOverlay>
          <PlayButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay />
          </PlayButton>
        </ClipCard>
      ))}
    </ClipsGrid>
  );
};

export default TwitchClips;
