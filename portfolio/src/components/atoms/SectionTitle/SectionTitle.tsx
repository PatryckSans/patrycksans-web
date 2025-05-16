import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  return (
    <Box className={styles.container} sx={{ textAlign: align, mb: 4 }}>
      <Typography 
        variant="h2" 
        component="h2" 
        className={styles.title}
        gutterBottom
      >
        {title}
      </Typography>
      
      {subtitle && (
        <Typography 
          variant="subtitle1" 
          component="p" 
          className={styles.subtitle}
          color="text.secondary"
        >
          {subtitle}
        </Typography>
      )}
      
      <Box className={styles.underline} sx={{ mx: align === 'center' ? 'auto' : 0 }} />
    </Box>
  );
};

export default SectionTitle;