import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import { motion } from 'framer-motion';
import { Experience } from '../../../data/experience';
import CustomChip from '../../atoms/CustomChip';
import styles from './ExperienceCard.module.css';

// Componente de card com animação usando Framer Motion
const MotionCard = motion(Card);

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { 
    title, 
    company, 
    location, 
    startDate, 
    endDate, 
    description, 
    technologies,
    type
  } = experience;

  // Determinar a cor do card baseado no tipo de experiência
  const getCardClass = () => {
    switch (type) {
      case 'education':
        return styles.educationCard;
      case 'certification':
        return styles.certificationCard;
      default:
        return styles.workCard;
    }
  };

  return (
    <MotionCard 
      className={`${styles.card} ${getCardClass()}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <CardContent className={styles.content}>
        <Box className={styles.header}>
          <Typography variant="h6" component="h3" className={styles.title}>
            {title}
          </Typography>
          
          <Typography variant="subtitle1" component="h4" className={styles.company}>
            {company}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" className={styles.location}>
            {location}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" className={styles.period}>
            {startDate} - {endDate || 'Presente'}
          </Typography>
        </Box>
        
        <List className={styles.descriptionList}>
          {description.map((item, index) => (
            <ListItem key={index} className={styles.descriptionItem}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        
        <Box className={styles.technologies}>
          {technologies.map((tech, index) => (
            <CustomChip 
              key={index} 
              label={tech} 
              size="small" 
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default ExperienceCard;