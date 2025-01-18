import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
  
  .icon {
    font-size: 2rem;
    color: #6C63FF;
    margin-bottom: 1rem;
  }
  
  .title {
    font-size: 0.875rem;
    color: #a8a8a8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  
  .value {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6C63FF, #8B7FFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
`;

const StatsCard = ({ title, value, icon }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="value">{value}</p>
    </Card>
  );
};

export default StatsCard;
