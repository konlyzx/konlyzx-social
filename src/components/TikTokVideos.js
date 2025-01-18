import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPlay, FaHeart, FaComment, FaShare } from 'react-icons/fa';

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  aspect-ratio: 9/16;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
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
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${VideoCard}:hover & {
    opacity: 1;
  }
`;

const VideoTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const VideoStats = styled.div`
  display: flex;
  justify-content: space-between;
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
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  border: 2px solid #69c9d0;
  
  ${VideoCard}:hover & {
    opacity: 1;
  }
`;

const videos = [
  {
    id: 1,
    title: "gotcha😆",
    thumbnail: "https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/91c52d85a4c34d028782dcde98375688~tplv-photomode-image.jpeg?lk3s=81f88b70&x-expires=1737320400&x-signature=yIVOeLlhEk6GTFRbz%2FlYJsZsYGw%3D&shp=81f88b70&shcp=-",
    likes: "12",
    comments: "0",
    shares: "1"
  },
  {
    id: 2,
    title: "Bobo Re Bobo😈",
    thumbnail: "https://image-va.tiktok.com/tos-maliva-p-0068/3ffc6e861c9642989e398ba36d114d3a~tplv-photomode-zoomcover:720:720.avif?lk3s=81f88b70&policy=eyJ2bSI6MywidWlkIjoiNjkzNzg0NjkwNjA5NDg5NjEzNCJ9&x-orig-authkey=953b87ea9b474969e4eab20d5c7fa858d23f02a8&x-orig-expires=1737316800&x-orig-sign=Yh3Klzx4SjqfXbvO1746ZYkBcoI%3D&shp=81f88b70&shcp=-",
    likes: "55.3K",
    comments: "20",
    shares: "931"
  },
  {
    id: 3,
    title: "Hoy es VIERNES!!!",
    thumbnail: "https://image-va.tiktok.com/tos-maliva-p-0068/ocSrIkCEhGAhzYSuBZLTFGWBlR6ACELfQfexeI~tplv-photomode-zoomcover:720:720.avif?lk3s=81f88b70&policy=eyJ2bSI6MywidWlkIjoiNjkzNzg0NjkwNjA5NDg5NjEzNCJ9&x-orig-authkey=953b87ea9b474969e4eab20d5c7fa858d23f02a8&x-orig-expires=1737316800&x-orig-sign=unUCVpLKaKE2uC1gpGbVg9m1kFU%3D&shp=81f88b70&shcp=-",
    likes: "1",
    comments: "0",
    shares: "0"
  },
  {
    id: 4,
    title: "🌬️",
    thumbnail: "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/ow9KiPdn9TVAitYBuEQBZBsESGYIUUzBi3EZ3~tplv-photomode-zoomcover:720:720.avif?lk3s=81f88b70&x-expires=1737320400&x-signature=Z1pyMFkoh9r%2B4FnxhZlxdFkESVk%3D&shp=81f88b70&shcp=-",
    likes: "10",
    comments: "0",
    shares: "1"
  }
];

const TikTokVideos = () => {
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
          <VideoOverlay>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoStats>
              <span><FaHeart /> {video.likes}</span>
              <span><FaComment /> {video.comments}</span>
              <span><FaShare /> {video.shares}</span>
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

export default TikTokVideos;
