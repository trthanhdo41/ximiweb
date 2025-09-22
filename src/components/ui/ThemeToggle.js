import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeProvider';
import { HiSun, HiMoon } from 'react-icons/hi2';

const ToggleContainer = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.backgroundSecondary};
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => props.theme.colors.backgroundTertiary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
  }
`;

const IconContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggle = ({ className, ...props }) => {
  const { theme, toggleTheme, isLight } = useTheme();

  return (
    <ToggleContainer
      onClick={toggleTheme}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <IconContainer
        initial={false}
        animate={{ 
          rotate: isLight ? 0 : 180,
          opacity: 1
        }}
        transition={{ duration: 0.3 }}
      >
        {isLight ? (
          <HiSun 
            style={{ 
              color: '#f59e0b',
              filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.3))'
            }} 
          />
        ) : (
          <HiMoon 
            style={{ 
              color: '#3b82f6',
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
            }} 
          />
        )}
      </IconContainer>
    </ToggleContainer>
  );
};

export default ThemeToggle;
