import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { HiSparkles, HiChatBubbleLeftRight } from 'react-icons/hi2';
import TypingAnimation from './TypingAnimation';

const GamesSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize['6xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const GameCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  overflow: hidden;
`;

const GameHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const GameTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const GameTag = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.accent};
  color: white;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

const GameCanvas = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  cursor: crosshair;
  will-change: transform;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 300px;
  }
`;

const Instructions = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`;


// Emoji falling animation - rơi xuống và biến mất
const fall = keyframes`
  to {
    transform: translateY(250px) rotate(720deg);
    opacity: 0;
  }
`;

const Emoji = styled(motion.div)`
  position: absolute;
  font-size: ${props => props.size || '32px'};
  animation: ${fall} ${props => props.duration || '2s'} linear forwards;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  pointer-events: none;
  user-select: none;
  will-change: transform, opacity;
`;

// Chatbot UI
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  height: 300px;
  overflow-y: auto;
  margin-bottom: ${props => props.theme.spacing.md};
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: 2px;
  }
`;

const TypingDots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  
  span {
    width: 4px;
    height: 4px;
    background: ${props => props.theme.colors.textSecondary};
    border-radius: 50%;
    animation: typing 1.4s infinite ease-in-out;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
  }
  
  @keyframes typing {
    0%, 80%, 100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ChatMessage = styled(motion.div)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  max-width: 80%;
  align-self: ${props => props.isBot ? 'flex-start' : 'flex-end'};
  background: ${props => props.isBot ? props.theme.colors.backgroundSecondary : props.theme.colors.accent};
  color: ${props => props.isBot ? props.theme.colors.textPrimary : 'white'};
  font-size: ${props => props.theme.typography.fontSize.sm};
  line-height: 1.5;
`;

const ChatInput = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const Input = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const SendButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.theme.colors.accentHover};
  }
`;

const InteractiveGames = () => {
  const [emojis, setEmojis] = useState([]);
  const [chatMessages, setChatMessages] = useState([
    { text: 'Xin chào! Tôi là chatbot của XimiWeb. Hỏi tôi bất cứ điều gì!', isBot: true }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const emojiIdRef = useRef(0);
  const intervalRef = useRef(null);

  const emojiList = ['😀', '🎉', '🚀', '💻', '⭐', '🔥', '💡', '🎨', '🌟', '✨'];

  const shootEmoji = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const duration = Math.random() * 0.5 + 1; // Duration in seconds (faster)
    
    const newEmoji = {
      id: emojiIdRef.current++,
      emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      left: x,
      top: y,
      size: Math.random() * 16 + 20 + 'px',
      duration: duration + 's'
    };
    
    setEmojis(prev => [...prev, newEmoji]);
    
    // Cleanup emoji sau khi animation kết thúc
    setTimeout(() => {
      setEmojis(prev => prev.filter(emoji => emoji.id !== newEmoji.id));
    }, duration * 1000);
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    shootEmoji(e); // Shoot immediately
    
    // Start continuous shooting when holding still
    const canvas = e.currentTarget;
    intervalRef.current = setInterval(() => {
      const fakeEvent = {
        currentTarget: canvas,
        clientX: e.clientX,
        clientY: e.clientY
      };
      shootEmoji(fakeEvent);
    }, 100); // Shoot every 100ms (faster)
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseMove = (e) => {
    if (isMouseDown) {
      shootEmoji(e);
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = chatInput;
    setChatInput('');
    
    // Add user message
    setChatMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    
    // Auto scroll after adding user message
    setTimeout(() => {
      const chatContainer = document.querySelector('[data-chat-container]');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 50);
    
    // Add typing indicator
    setChatMessages(prev => [...prev, { text: 'Đang trả lời', isBot: true, isTyping: true }]);
    
    try {
      // Prepare conversation history for Gemini (exclude current user message)
      const conversationHistory = chatMessages
        .filter(msg => !msg.isTyping)
        .slice(0, -1) // Remove the last message (current user input)
        .map(msg => ({
          role: msg.isBot ? 'model' : 'user',
          parts: [{ text: msg.text }]
        }));
      
      // System prompt about XimiWeb
      const systemPrompt = `Bạn là chatbot AI của XimiWeb - công ty chuyên cung cấp giải pháp IT toàn diện.

THÔNG TIN XIMI WEB:
- Chủ sở hữu: Trần Thanh Độ, sinh năm 2004, học tại Đại học Kinh tế - Tài chính TP.HCM (UEF), sống tại Vinhomes Grand Park, TP.HCM
- Dịch vụ: Thiết kế website, phát triển app mobile (Android & iOS), ứng dụng AI & chatbot, làm đồ án CNTT
- Công nghệ: React, Next.js, Node.js, Python, AI (OpenAI, Claude, Gemini), React Native, Flutter, Cloud (AWS, GCP), Docker, CI/CD
- Website: Responsive 100%, SEO tối ưu, tốc độ nhanh, bảo mật cao
- App Mobile: Cross-platform với React Native/Flutter, deploy lên App Store & Google Play
- AI/Chatbot: Tích hợp OpenAI, Claude, Gemini, RAG system, custom training, tích hợp Zalo/Facebook Messenger
- Đồ án CNTT: Code clean, document đầy đủ, hướng dẫn demo, bảo hành đến khi bảo vệ xong
- Thời gian: Website 3-10 ngày | App Mobile 1-2 tuần | Chatbot AI 1-2 ngày | Đồ án CNTT 1-2 tuần
- Bảo hành: 12 tháng, hỗ trợ 24/7 qua Zalo
- Liên hệ: Zalo 0888889805

QUAN TRỌNG: 
- KHÔNG sử dụng robot icon (🤖) trong câu trả lời
- KHÔNG sử dụng các icon robot khác như 👨‍💻, 🤖, 🦾, etc.
- Chỉ sử dụng emoji thông thường như 😊, 👍, 💻, 📱, ⭐, etc.
- Trả lời ngắn gọn, thân thiện, chuyên nghiệp.`;

      console.log('Sending to OpenAI:', { userMessage, conversationHistory });
      
      const response = await fetch(
        `https://v98store.com/v1/chat/completions`,
        {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-LWQpkAwZ8DDsOZGI1ltmFhxBlliQBvl3trzGOrUPwgy0FR2J'
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: systemPrompt
              },
              ...conversationHistory.map(msg => ({
                role: msg.role === 'model' ? 'assistant' : msg.role,
                content: msg.parts[0].text
              })),
              {
                role: 'user',
                content: userMessage
              }
            ],
            temperature: 0.7,
            max_tokens: 200,
          })
        }
      );

      const data = await response.json();
      console.log('OpenAI response:', data);
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${data.error?.message || 'Unknown error'}`);
      }
      
      // Remove typing indicator and add real response with typing effect
      setChatMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        const botResponse = data.choices?.[0]?.message?.content || 'Xin lỗi, tôi không hiểu. Bạn có thể hỏi lại được không? 😊';
        
        // Add response with character-by-character typing effect
        const fullText = botResponse;
        let currentText = '';
        
        // Type out character by character
        for (let i = 0; i < fullText.length; i++) {
          setTimeout(() => {
            currentText += fullText[i];
            const isLastChar = i === fullText.length - 1;
            
            setChatMessages(prev => {
              const withoutTyping = prev.filter(msg => !msg.isTyping);
              return [...withoutTyping, { text: currentText, isBot: true, isTyping: !isLastChar }];
            });
            
            // Auto scroll after each character
            setTimeout(() => {
              const chatContainer = document.querySelector('[data-chat-container]');
              if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
              }
            }, 20);
          }, i * 50); // 50ms delay between characters (smooth like instructions)
        }
        
        return filtered;
      });
      
      // Auto scroll to bottom after adding message
      setTimeout(() => {
        const chatContainer = document.querySelector('[data-chat-container]');
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
      
    } catch (error) {
      console.error('Gemini API Error:', error);
      // Remove typing indicator and show error
      setChatMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { 
          text: 'Xin lỗi, có lỗi xảy ra. Vui lòng liên hệ Zalo: 0888889805 để được hỗ trợ! 😊', 
          isBot: true 
        }];
      });
    }
  };

  return (
    <GamesSection id="games">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Interactive Demo</SectionTitle>
          <SectionSubtitle>
            Khám phá khả năng tương tác & animation - Click để trải nghiệm!
          </SectionSubtitle>
        </SectionHeader>

        <GamesGrid>
          {/* Emoji Cannon Game */}
          <GameCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GameHeader>
              <GameTitle>
                <HiSparkles />
                Emoji Cannon
              </GameTitle>
              <GameTag>INTERACTIVE</GameTag>
            </GameHeader>
            <Instructions>
              Giữ chuột và di chuyển để bắn emoji liên tục! 🔫✨
            </Instructions>
            <GameCanvas 
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {emojis.map(emoji => (
                <Emoji
                  key={emoji.id}
                  left={emoji.left}
                  top={emoji.top}
                  size={emoji.size}
                  duration={emoji.duration}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {emoji.emoji}
                </Emoji>
              ))}
            </GameCanvas>
          </GameCard>

          {/* AI Chatbot Demo */}
          <GameCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GameHeader>
              <GameTitle>
                <HiChatBubbleLeftRight />
                AI Chatbot Demo
              </GameTitle>
              <GameTag>AI-POWERED</GameTag>
            </GameHeader>
            <Instructions>
              <TypingAnimation 
                words={[
                  'Chat với AI bot - Thử hỏi về dịch vụ của chúng tôi!',
                  'Hỏi về website, app mobile, AI chatbot...',
                  'Tư vấn miễn phí 24/7 với AI thông minh!'
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={2000}
              />
            </Instructions>
            <GameCanvas style={{ height: '400px', background: 'white', cursor: 'default', padding: props => props.theme.spacing.md }}>
              <ChatContainer data-chat-container>
                {chatMessages.map((msg, idx) => (
                  <ChatMessage
                    key={idx}
                    isBot={msg.isBot}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {msg.isTyping ? (
                      <>
                        {msg.text} <TypingDots><span></span><span></span><span></span></TypingDots>
                      </>
                    ) : (
                      msg.text
                    )}
                  </ChatMessage>
                ))}
              </ChatContainer>
              <ChatInput>
                <Input 
                  placeholder="Nhập câu hỏi của bạn..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <SendButton onClick={handleSendMessage}>Gửi</SendButton>
              </ChatInput>
            </GameCanvas>
          </GameCard>
        </GamesGrid>
      </Container>
    </GamesSection>
  );
};

export default InteractiveGames;

