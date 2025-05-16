import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Skill } from '../../../data/skills';
import styles from './SkillCard.module.css';

interface SkillCardProps {
  skill: Skill;
}

const MotionPaper = motion(Paper);

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { 
    name, 
    level, 
    // Removendo a variável não utilizada
    // icon, 
    category 
  } = skill;

  // Determinar a cor com base no nível de habilidade
  const getColorByLevel = () => {
    switch (level) {
      case 5:
        return 'var(--mui-palette-primary-main)';
      case 4:
        return 'var(--mui-palette-primary-light)';
      case 3:
        return 'var(--mui-palette-secondary-main)';
      case 2:
        return 'var(--mui-palette-secondary-light)';
      default:
        return 'var(--mui-palette-grey-500)';
    }
  };

  return (
    <MotionPaper
      elevation={2}
      className={styles.card}
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}
      transition={{ duration: 0.3 }}
    >
      <Box className={styles.iconContainer}>
        {/* Renderizando o ícone dinamicamente */}
        {skill.icon && React.createElement(skill.icon, { className: styles.icon })}
      </Box>
      
      <Typography variant="h6" component="h3" className={styles.name}>
        {name}
      </Typography>
      
      <Typography variant="body2" className={styles.category}>
        {category}
      </Typography>
      
      <Box className={styles.levelContainer}>
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            className={`${styles.levelDot} ${i < level ? styles.active : ''}`}
            sx={{ backgroundColor: i < level ? getColorByLevel() : 'var(--mui-palette-grey-300)' }}
          />
        ))}
      </Box>
    </MotionPaper>
  );
};

export default SkillCard;