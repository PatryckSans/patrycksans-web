import React from 'react';
import { Chip, ChipProps } from '@mui/material';
import styles from './CustomChip.module.css';

interface CustomChipProps extends ChipProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium';
}

const CustomChip: React.FC<CustomChipProps> = ({ 
  label, 
  variant = 'filled', 
  size = 'medium',
  ...props 
}) => {
  return (
    <Chip
      label={label}
      variant={variant}
      size={size}
      className={`${styles.chip} ${variant === 'outlined' ? styles.outlined : styles.filled}`}
      {...props}
    />
  );
};

export default CustomChip;