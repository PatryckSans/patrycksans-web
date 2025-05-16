import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Button.module.css';

// Estendendo a interface ButtonProps para incluir propriedades de link e router
interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  to?: string;
  component?: React.ElementType;
}

const PrimaryButton: React.FC<ButtonProps> = ({ children, to, component, ...props }) => {
  // Se tiver a propriedade "to", usar o RouterLink como componente
  const buttonProps = to
    ? { component: RouterLink, to, ...props }
    : props;

  return (
    <MuiButton
      variant="contained"
      color="primary"
      className={styles.primaryButton}
      {...buttonProps}
      sx={{
        '&:hover': {
          transform: 'scale(1.05)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
        transition: 'transform 0.2s',
      }}
    >
      {children}
    </MuiButton>
  );
};

export default PrimaryButton;