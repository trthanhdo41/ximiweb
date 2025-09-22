import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiPlay, HiPause, HiSparkles, HiCodeBracket, HiGlobeAlt, HiDevicePhoneMobile } from 'react-icons/hi2';
import { RiRobot2Fill } from 'react-icons/ri';
import TypeWriter from './TypeWriter';
import Button from './ui/Button';
import { useTheme } from '../theme/ThemeProvider';

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.gradients.hero};
  padding-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.background};
    opacity: 0.95;
    z-index: 1;
  }
`;

const HeroContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: center;
  min-height: calc(100vh - 80px);

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${props => props.theme.typography.fontSize['6xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  line-height: ${props => props.theme.typography.lineHeight.tight};
  margin: 0;
  color: ${props => props.theme.colors.textPrimary};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }
`;

const Highlight = styled.span`
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

const HeroDescription = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;
  max-width: 500px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: none;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const HeroFeatures = styled(motion.div)`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.xl};
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const FeatureTag = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.backgroundSecondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  svg {
    color: ${props => props.theme.colors.primary};
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: white;
  }
`;


const HeroVisual = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 16/9;
  border-radius: ${props => props.theme.borderRadius['2xl']};
  border: 2px solid ${props => props.theme.colors.border};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius['2xl']};
  background: ${props => props.theme.colors.backgroundSecondary};
`;

const VideoOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  opacity: ${props => props.isPlaying ? 0 : 1};
  transition: opacity 0.3s ease;

  ${VideoContainer}:hover & {
    opacity: 1;
  }
`;


const PlayButton = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.gradients.primary};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: ${props => props.theme.shadows.lg};
`;

const VideoText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.base};
  margin: 0;
  text-align: center;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatingBubble = styled(motion.div)`
  position: absolute;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  box-shadow: ${props => props.theme.shadows.md};
  backdrop-filter: blur(10px);

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }

  svg {
    color: ${props => props.theme.colors.primary};
    flex-shrink: 0;
  }

  span {
    font-size: ${props => props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    color: ${props => props.theme.colors.textPrimary};
  }
`;


const Hero = () => {
  const { isLight } = useTheme();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const openZalo = () => {
    window.open('https://zalo.me/0888889805', '_blank');
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  const handleVideoClick = () => {
    togglePlayPause();
  };


  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroContainer>
        <HeroContent>
          <HeroText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroTitle>
              <Highlight>XimiWeb</Highlight>
              <br />
              Thiết kế website chuyên nghiệp
            </HeroTitle>
            
            <HeroDescription>
              <TypeWriter 
                text="Thiết kế website chuyên nghiệp, website doanh nghiệp, website bán hàng, website giới thiệu và các dịch vụ web khác."
                speed={30}
                delay={1000}
              />
            </HeroDescription>
            
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={openZalo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nhận báo giá miễn phí
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToServices}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Xem bảng giá
              </Button>
            </HeroButtons>
            
            <HeroFeatures
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FeatureTag>
                <HiSparkles size={16} />
                <span>Thiết kế hiện đại</span>
              </FeatureTag>
              <FeatureTag>
                <HiCodeBracket size={16} />
                <span>Code chất lượng cao</span>
              </FeatureTag>
              <FeatureTag>
                <HiDevicePhoneMobile size={16} />
                <span>Responsive 100%</span>
              </FeatureTag>
            </HeroFeatures>
          </HeroText>
          
          <HeroVisual
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <VideoContainer
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleVideoClick}
            >
              <Video
                ref={videoRef}
                src="/video-gioi-thieu.mp4"
                preload="metadata"
                muted={false}
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              <VideoOverlay isPlaying={isPlaying}>
                <PlayButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                >
                  {isPlaying ? <HiPause size={32} /> : <HiPlay size={32} />}
                </PlayButton>
              </VideoOverlay>
            </VideoContainer>
            
            <FloatingElements>
              <FloatingBubble
                style={{ top: '10%', left: '-10%' }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <HiGlobeAlt size={20} />
                <span>Website</span>
              </FloatingBubble>
              
              <FloatingBubble
                style={{ top: '20%', right: '-15%' }}
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <HiDevicePhoneMobile size={20} />
                <span>Mobile App</span>
              </FloatingBubble>
              
              <FloatingBubble
                style={{ bottom: '20%', left: '-5%' }}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <RiRobot2Fill size={20} />
                <span>AI Solutions</span>
              </FloatingBubble>
              
              <FloatingBubble
                style={{ bottom: '10%', right: '-10%' }}
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <HiCodeBracket size={20} />
                <span>Outsourcing</span>
              </FloatingBubble>
            </FloatingElements>
          </HeroVisual>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;