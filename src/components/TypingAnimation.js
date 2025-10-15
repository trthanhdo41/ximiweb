import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypingText = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.accent};
  white-space: nowrap;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background: ${props => props.theme.colors.accent};
  margin-left: 2px;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const TypingAnimation = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }
  }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <TypingText>
      {displayText}
      <Cursor />
    </TypingText>
  );
};

export default TypingAnimation;

