import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import styles from './SkillBar.module.css';

interface SkillBarProps {
  name: string;
  level: number; // 1-5
  showLabel?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  level, 
  showLabel = true 
}) => {
  // Converter nível de 1-5 para porcentagem (0-100)
  const percentage = (level / 5) * 100;
  
  // Determinar o rótulo baseado no nível
  const getLevelLabel = (level: number): string => {
    switch (level) {
      case 1: return 'Básico';
      case 2: return 'Iniciante';
      case 3: return 'Intermediário';
      case 4: return 'Avançado';
      case 5: return 'Especialista';
      default: return '';
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="body1" className={styles.name}>
          {name}
        </Typography>
        {showLabel && (
          <Typography variant="body2" className={styles.level}>
            {getLevelLabel(level)}
          </Typography>
        )}
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={percentage} 
        className={styles.progressBar}
      />
    </Box>
  );
};

export default SkillBar;