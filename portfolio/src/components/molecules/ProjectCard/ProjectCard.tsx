import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  CardActions
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Project } from '../../../data/projects';
import CustomChip from '../../atoms/CustomChip';
import { SecondaryButton } from '../../atoms/Button';
import styles from './ProjectCard.module.css';

// Componente de card com animação usando Framer Motion
const MotionCard = motion(Card);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { 
    title, 
    description, 
    image, 
    technologies, 
    githubUrl, 
    demoUrl,
    featured 
  } = project;

  return (
    <MotionCard 
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      whileHover={{ 
        y: -10,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}
      transition={{ duration: 0.3 }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        className={styles.media}
      />
      
      <CardContent className={styles.content}>
        <Typography variant="h5" component="h3" gutterBottom className={styles.title}>
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" className={styles.description}>
          {description}
        </Typography>
        
        <Box className={styles.technologies}>
          {technologies.map((tech, index) => (
            <CustomChip 
              key={index} 
              label={tech} 
              size="small" 
              variant={featured ? "filled" : "outlined"}
            />
          ))}
        </Box>
      </CardContent>
      
      <CardActions className={styles.actions}>
        <SecondaryButton 
          startIcon={<GitHub />} 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          size="small"
        >
          GitHub
        </SecondaryButton>
        
        <SecondaryButton 
          startIcon={<Launch />} 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          size="small"
        >
          Demo
        </SecondaryButton>
      </CardActions>
    </MotionCard>
  );
};

export default ProjectCard;