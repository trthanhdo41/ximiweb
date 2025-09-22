import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const CardBase = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-2px);
  }

  /* Variants */
  ${props => props.variant === 'elevated' && css`
    box-shadow: ${props.theme.shadows.lg};
    border: none;

    &:hover {
      box-shadow: ${props.theme.shadows.xl};
    }
  `}

  ${props => props.variant === 'outlined' && css`
    box-shadow: none;
    border: 2px solid ${props.theme.colors.border};

    &:hover {
      border-color: ${props.theme.colors.primary};
    }
  `}

  ${props => props.variant === 'gradient' && css`
    background: ${props.theme.gradients.card};
    border: none;
  `}

  /* Interactive */
  ${props => props.interactive && css`
    cursor: pointer;
    user-select: none;

    &:active {
      transform: translateY(0);
    }
  `}

  /* Padding variants */
  ${props => props.padding === 'none' && css`
    padding: 0;
  `}

  ${props => props.padding === 'sm' && css`
    padding: ${props.theme.spacing.md};
  `}

  ${props => props.padding === 'md' && css`
    padding: ${props.theme.spacing.lg};
  `}

  ${props => props.padding === 'lg' && css`
    padding: ${props.theme.spacing.xl};
  `}
`;

const CardHeader = styled.div`
  padding: ${props => props.theme.spacing.lg};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.backgroundSecondary};
`;

const CardBody = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const CardFooter = styled.div`
  padding: ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.backgroundSecondary};
`;

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  onClick,
  className,
  ...props
}) => {
  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  return (
    <CardBase
      variant={variant}
      padding={padding}
      interactive={interactive}
      onClick={handleClick}
      className={className}
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </CardBase>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
