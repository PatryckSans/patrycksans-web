import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import ScrollReveal from '../../atoms/ScrollReveal';
import SectionTitle from '../../atoms/SectionTitle';
import { experiences } from '../../../data/experiences';
import styles from './ExperienceSection.module.css';

const ExperienceSection: React.FC = () => {
  return (
    <Box component="section" className={styles.experience} id="experience">
      <Container maxWidth="lg">
        <ScrollReveal>
          <SectionTitle 
            title="Experiência Profissional" 
            subtitle="Minha jornada profissional até aqui"
          />
        </ScrollReveal>
        
        <Box className={styles.timeline}>
          {experiences.map((exp, index) => (
            <ScrollReveal 
              key={index}
              delay={0.2 * index} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <Paper elevation={3} className={styles.timelineItem}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <Box className={styles.timelinePeriod}>
                      <Typography variant="subtitle1" className={styles.period}>
                        {exp.period}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={9}>
                    <Box className={styles.timelineContent}>
                      <Typography variant="h6" component="h3" className={styles.jobTitle}>
                        {exp.title}
                      </Typography>
                      
                      <Typography variant="subtitle1" className={styles.company}>
                        {exp.company}
                      </Typography>
                      
                      <Typography variant="body2" className={styles.description}>
                        {exp.description}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;