import React from 'react';
import styled, { keyframes } from 'styled-components';
import cr7Gif from '../../assets/images/cr7.gif';

const jumpAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const ChatbotButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  &:hover {
    animation: ${jumpAnimation} 0.5s ease infinite;
  }
`;

const PixelArtCR7 = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${cr7Gif});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
`;

const ButtonText = styled.div`
  background-color: #b30000;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

const ChatbotButton = ({ onClick }) => {
  return (
    <ChatbotButtonContainer onClick={onClick}>
      <PixelArtCR7 />
      <ButtonText>¡Habla con el BICHO!</ButtonText>
    </ChatbotButtonContainer>
  );
};

export default ChatbotButton;
