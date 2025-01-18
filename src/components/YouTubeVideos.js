import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPlay, FaEye, FaClock } from 'react-icons/fa';

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 2rem 0;
`;

const VideoCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover .video-overlay {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const VideoTitle = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const VideoStats = styled.div`
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
  background: rgba(255, 0, 0, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${VideoCard}:hover & {
    opacity: 1;
  }
`;

const videos = [
  {
    id: 1,
    title: "FORTNITE ES GAY",
    thumbnail: "https://i.ytimg.com/an_webp/xCi2L5eYk0g/mqdefault_6s.webp?du=3000&sqp=CMCQq7wG&rs=AOn4CLCBTD-YS3VkBlbqFrxFNeudofy_4g",
    views: "200+",
    duration: "1:27"
  },
  {
    id: 2,
    title: "CALIFICANDO PLANTILLAS DE SEGUIDORES",
    thumbnail: "https://i.ytimg.com/vi/FUCf3f4yIf4/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDO9FXg43-M0iATkSl4xLRLDwdLaw",
    views: "799+",
    duration: "12:45"
  },
  {
    id: 3,
    title: "ASÍ PUEDES DESCARGAR DRAGON BALL SPARKING ZERO EN PC ¿GRATIS？ ｜ METODO DEFINITIVO🔥🎮",
    thumbnail: "https://i.ytimg.com/vi/TzI_IrYqJ9M/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA9Jyw3i-KFnJzQrzZkg0wOCXJ2hw",
    views: "400+",
    duration: "2:28"
  }
];

const YouTubeVideos = () => {
  return (
    <VideoGrid>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Thumbnail src={video.thumbnail} alt={video.title} />
          <VideoOverlay className="video-overlay">
            <VideoTitle>{video.title}</VideoTitle>
            <VideoStats>
              <span><FaEye /> {video.views}</span>
              <span><FaClock /> {video.duration}</span>
            </VideoStats>
          </VideoOverlay>
          <PlayButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay />
          </PlayButton>
        </VideoCard>
      ))}
    </VideoGrid>
  );
};

export default YouTubeVideos;
