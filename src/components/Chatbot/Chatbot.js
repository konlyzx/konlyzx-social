import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ChatbotButton from './ChatbotButton';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: ${props => props.$isOpen ? '20px' : '-100%'};
  right: 120px;
  width: 350px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: bottom 0.3s ease-in-out;
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: linear-gradient(135deg, #b30000 0%, #800000 100%);
  color: white;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  &::before {
    content: '🏆';
    position: absolute;
    right: 50px;
    opacity: 0.2;
    font-size: 24px;
  }
`;

const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MinimizeButton = styled.button`
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transition: all 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

  &:hover {
    opacity: 0.8;
    &::after {
      content: 'SIUUU!';
      position: absolute;
      top: -20px;
      right: 0;
      font-size: 12px;
      background: rgba(0,0,0,0.7);
      padding: 4px 8px;
      border-radius: 4px;
      white-space: nowrap;
    }
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
`;

const MessageContainer = styled.div`
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: ${props => props.$isUser ? '#e8e8e8' : '#b30000'};
  color: ${props => props.$isUser ? '#333' : 'white'};
  padding: 10px 15px;
  border-radius: ${props => props.$isUser ? '20px 20px 0 20px' : '20px 20px 20px 0'};
  max-width: 80%;
  margin: ${props => props.$isUser ? '5px 5px 5px auto' : '5px'};
  position: relative;
  animation: ${fadeIn} 0.3s ease;

  ${props => !props.$isUser && `
    &::before {
      content: '⚽';
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      opacity: 0.7;
    }
  `}
`;

const InputContainer = styled.div`
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background: #b30000;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: #cc0000;
    &::after {
      content: '⚽';
      margin-left: 5px;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: '¡Siiiiii! Soy Cristiano Ronaldo. ¿En qué puedo ayudarte? SUUUUUUU! 🏆⚽', isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getRonaldoResponse = (input) => {
    const lowercaseInput = input.toLowerCase();

    // Respuesta para "mh"
    if (lowercaseInput === 'mh') {
      return "La H es muda, ¡SIUUU! 🤫";
    }

    // Respuestas sobre Mistulino
    if (lowercaseInput.includes('mistulino') || lowercaseInput.includes('mistu')) {
      const mistuResponses = [
        "¡SIUUU! 🎮 Mistulino es el mejor streamer de Popota, su comunidad es la más random que he visto ¡Como mis regates! 🎯",
        "¡Eh! Mistulino es como yo en el streaming, ¡El BICHO de Popota! Su comunidad es única, como mis celebraciones SIUUU! 🎮✨",
        "Mistulino tiene una energía increíble en stream, ¡Como yo en el campo! Y su comunidad... ¡Más random que mis peinados! 😎",
        "¡SIUUU! Mistulino es el GOAT de Popota, ¡Como yo en el fútbol! Y su comunidad es tan diversa como mis trofeos 🏆"
      ];
      return mistuResponses[Math.floor(Math.random() * mistuResponses.length)];
    }

    // Respuestas sobre la comunidad de Mistulino
    if (lowercaseInput.includes('comunidad') || lowercaseInput.includes('random')) {
      const communityResponses = [
        "La comunidad de Mistulino es como mi colección de Balones de Oro, ¡Única y especial! SIUUU! 🌈✨",
        "¡SIUUU! En la comunidad de Mistulino todos son bienvenidos, ¡Como en mi equipo! Diversidad y respeto ante todo 🎮💪",
        "¡La comunidad más random de Popota! Como decimos en Portugal: ¡SIUUUU! 🎯🌟"
      ];
      return communityResponses[Math.floor(Math.random() * communityResponses.length)];
    }

    // Respuestas sobre streaming/Popota
    if (lowercaseInput.includes('stream') || lowercaseInput.includes('popota')) {
      const streamResponses = [
        "¡Popota tiene al mejor streamer, SIUUU! Mistulino es el CR7 de los streams 🎮👑",
        "En Popota, Mistulino es como yo en la Champions League, ¡Siempre dando espectáculo! SIUUU! 🎯",
        "Streaming con pasión, ¡Como yo juego al fútbol! Mistulino es el BICHO de Popota 🎮⚽"
      ];
      return streamResponses[Math.floor(Math.random() * streamResponses.length)];
    }
    
    // Respuestas originales sobre fútbol
    if (lowercaseInput.includes('gol') || lowercaseInput.includes('golazo')) {
      return "¡SIUUUUU! 🔥 Los goles son mi vida. ¡Tengo más de 800 goles en mi carrera! Cuando marco un gol, todo el estadio grita SIUUUU conmigo. ⚽🏆";
    }
    
    if (lowercaseInput.includes('mejor') || lowercaseInput.includes('goat')) {
      return "Soy el mejor de la historia, 5 Champions League, 5 Balones de Oro, ¡y sigo hambriento de más! SIUUUU! 🐐🏆 La mentalidad del campeón nunca se rinde.";
    }
    
    if (lowercaseInput.includes('entrena') || lowercaseInput.includes('ejercicio') || lowercaseInput.includes('fitness')) {
      return "¡El trabajo duro vence al talento! Entreno 6 horas al día, duermo 8 horas, y siempre al 100%. ¡Disciplina y dedicación! 💪 SIUUUU!";
    }
    
    if (lowercaseInput.includes('consejo') || lowercaseInput.includes('éxito')) {
      return "Escucha bien, amigo: ¡Trabaja más duro que todos! Cuando otros duermen, yo entreno. Cuando otros entrenan, yo sigo entrenando. ¡La mentalidad del campeón! SIUUUU! 🏆💪";
    }
    
    if (lowercaseInput.includes('messi')) {
      return "Respeto a todos los jugadores, pero yo me centro en ser mejor cada día. ¡Soy el BICHO! SIUUUU! 🔥⚽";
    }
    
    if (lowercaseInput.includes('champions') || lowercaseInput.includes('copa')) {
      return "¡5 Champions League! Soy Mr. Champions, el máximo goleador de la historia de la competición. ¡SIUUUU! Cada noche de Champions es mágica. 🏆⚽";
    }
    
    if (lowercaseInput.includes('portugal') || lowercaseInput.includes('selección')) {
      return "¡Portugal siempre en mi corazón! Capitán y máximo goleador histórico de selecciones. ¡SIUUUU! 🇵🇹⚽ ¡Vamos Portugal!";
    }
    
    if (lowercaseInput.includes('familia') || lowercaseInput.includes('hijo')) {
      return "Mi familia es lo más importante. Mis hijos son mi motivación para ser mejor cada día. ¡El BICHO es padre orgulloso! SIUUUU! 👨‍👦❤️";
    }

    // Respuestas por defecto combinadas
    const defaultResponses = [
      // Respuestas originales
      "¡SIUUUU! ¡Así es como lo hacemos! Mentalidad de campeón siempre. 🏆💪",
      "¡Soy el BICHO! Trabajo duro y dedicación, ese es el secreto. SIUUUU! ⚽",
      "¡Vamos! Con pasión y determinación todo es posible. ¡SIUUUU! 🔥",
      "¡Como digo siempre: SIUUUU! El trabajo duro vence al talento. 💪⚽",
      "¡El BICHO nunca se rinde! SIUUUU! Siempre buscando más éxitos. 🏆",
      // Nuevas respuestas sobre Mistulino
      "¡SIUUUU! ¡Pregúntame sobre fútbol o sobre Mistulino, el mejor streamer de Popota! 🎮⚽",
      "¡Soy el BICHO del fútbol y Mistulino es el BICHO de Popota! ¿Qué quieres saber? 👑",
      "¡Como diría Mistulino... SIUUUU! ¿Qué quieres saber del fútbol o del mejor streamer? 🎯"
    ];
  
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setIsLoading(true);

    try {
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = getRonaldoResponse(input);
      
      setMessages(prev => [...prev, { 
        text: response,
        isUser: false 
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: 'SIUUU! Perdona amigo, estoy entrenando ahora mismo. ¿Puedes repetir la pregunta? 💪⚽',
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }

    setInput('');
  };

  return (
    <>
      <ChatbotButton onClick={() => setIsOpen(!isOpen)} />
      
      <ChatbotContainer $isOpen={isOpen}>
        <ChatHeader>
          <ProfilePic src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyygyPsvbRjmjDZtKRmvOVStxlq_4hC9SuA&s" alt="CR7" />
          Cristiano Ronaldo
          <MinimizeButton onClick={() => setIsOpen(false)} $isOpen={isOpen}>
            ▼
          </MinimizeButton>
        </ChatHeader>
        <ChatMessages>
          {messages.map((message, index) => (
            <MessageContainer key={index}>
              <Message $isUser={message.isUser}>
                {message.text}
              </Message>
            </MessageContainer>
          ))}
          {isLoading && (
            <MessageContainer>
              <Message $isUser={false}>
                Entrenando la respuesta... ⚽
              </Message>
            </MessageContainer>
          )}
        </ChatMessages>
        <InputContainer>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Habla con el BICHO SIUUUU..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
          />
          <SendButton onClick={handleSend} disabled={isLoading}>
            {isLoading ? '⚽' : 'SIUUU!'}
          </SendButton>
        </InputContainer>
      </ChatbotContainer>
    </>
  );
};

export default Chatbot;
