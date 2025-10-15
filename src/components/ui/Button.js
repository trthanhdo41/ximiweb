import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ButtonBase = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-family: ${props => props.theme.typography.fontFamily.sans.join(', ')};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  line-height: ${props => props.theme.typography.lineHeight.tight};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Size variants */
  ${props => props.size === 'sm' && css`
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
    font-size: ${props.theme.typography.fontSize.sm};
  `}

  ${props => props.size === 'lg' && css`
    padding: ${props.theme.spacing.lg} ${props.theme.spacing.xl};
    font-size: ${props.theme.typography.fontSize.lg};
  `}

  /* Style variants */
  ${props => props.variant === 'primary' && css`
    background: ${props.theme.colors.accent};
    color: white;
    box-shadow: ${props.theme.shadows.sm};
    font-weight: ${props.theme.typography.fontWeight.semibold};

    &:hover:not(:disabled) {
      background: ${props.theme.colors.accentHover};
      box-shadow: ${props.theme.shadows.md};
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background: ${props.theme.colors.background};
    color: ${props.theme.colors.textPrimary};
    border: 1.5px solid ${props.theme.colors.border};
    font-weight: ${props.theme.typography.fontWeight.semibold};

    &:hover:not(:disabled) {
      background: ${props.theme.colors.backgroundSecondary};
      border-color: ${props.theme.colors.textPrimary};
      transform: translateY(-1px);
    }
  `}

  ${props => props.variant === 'ghost' && css`
    background: transparent;
    color: ${props.theme.colors.textPrimary};

    &:hover:not(:disabled) {
      background: ${props.theme.colors.backgroundSecondary};
    }
  `}

  ${props => props.variant === 'danger' && css`
    background: ${props.theme.colors.error};
    color: white;

    &:hover:not(:disabled) {
      background: ${props.theme.colors.error};
      opacity: 0.9;
    }
  `}

  /* Full width */
  ${props => props.fullWidth && css`
    width: 100%;
  `}

  /* Loading state */
  ${props => props.loading && css`
    pointer-events: none;
    opacity: 0.7;
  `}
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className,
  ...props
}) => {
  const handleClick = (e) => {
    if (!loading && !disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <ButtonBase
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
      disabled={disabled || loading}
      onClick={handleClick}
      type={type}
      className={className}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </ButtonBase>
  );
};

export default Button;
