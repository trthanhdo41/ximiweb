import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiChatBubbleLeftRight,
  HiSparkles,
  HiArrowPath
} from 'react-icons/hi2';

const ShowcaseSection = styled(motion.section)`
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: ${props => props.theme.colors.background};
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

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

const DemoCard = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  overflow: hidden;
`;

const DemoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const DemoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const DemoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const DemoName = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
  margin: 0;
`;

const DemoTag = styled.span`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.accent};
  color: white;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

const DemoContent = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  min-height: 250px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

// Interactive Chat Demo
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  height: 200px;
  overflow-y: auto;
`;

const ChatMessage = styled(motion.div)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  max-width: 80%;
  background: ${props => props.isUser ? props.theme.colors.primary : props.theme.colors.backgroundSecondary};
  color: ${props => props.isUser ? 'white' : props.theme.colors.textPrimary};
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  font-size: ${props => props.theme.typography.fontSize.sm};
`;

const ChatInput = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  margin-top: auto;
`;

const Input = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.typography.fontSize.sm};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
  }
`;

const Button = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.theme.colors.primaryHover};
  }
`;

const Showcase = () => {
  const [chatMessages, setChatMessages] = useState([
    { text: 'Chào bạn! Tôi có thể giúp gì?', isUser: false }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { text: chatInput, isUser: true },
        { text: 'Tôi đã nhận được tin nhắn của bạn! 👍', isUser: false }
      ]);
      setChatInput('');
    }
  };

  return (
    <ShowcaseSection id="showcase">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Trải nghiệm tính năng thực tế</SectionTitle>
          <SectionSubtitle>
            Tương tác với các demo live để thấy được chất lượng và khả năng của chúng tôi
          </SectionSubtitle>
        </SectionHeader>

        <DemoGrid>
          {/* AI Chatbot Demo */}
          <DemoCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <DemoHeader>
              <DemoTitle>
                <DemoIcon><HiChatBubbleLeftRight /></DemoIcon>
                <DemoName>AI Chatbot</DemoName>
              </DemoTitle>
              <DemoTag>LIVE</DemoTag>
            </DemoHeader>
            <DemoContent>
              <ChatContainer>
                <AnimatePresence>
                  {chatMessages.map((msg, idx) => (
                    <ChatMessage
                      key={idx}
                      isUser={msg.isUser}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {msg.text}
                    </ChatMessage>
                  ))}
                </AnimatePresence>
              </ChatContainer>
              <ChatInput>
                <Input 
                  placeholder="Nhập tin nhắn..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>Gửi</Button>
              </ChatInput>
            </DemoContent>
          </DemoCard>

        </DemoGrid>
      </Container>
    </ShowcaseSection>
  );
};

export default Showcase;

