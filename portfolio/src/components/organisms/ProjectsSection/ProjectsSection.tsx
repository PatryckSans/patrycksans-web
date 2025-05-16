import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Tabs, 
  Tab,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../../atoms/SectionTitle';
import ProjectCard from '../../molecules/ProjectCard';
import { projects, Project } from '../../../data/projects';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Configurando os observadores para detectar quando os elementos entram no viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [tabsRef, tabsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Estado para filtro de projetos
  const [filter, setFilter] = useState<string>('all');
  
  // Extrair categorias únicas dos projetos
  const allTechnologies = projects.flatMap(project => project.technologies);
  const uniqueTechnologies = Array.from(new Set(allTechnologies));
  const categories = ['all', ...uniqueTechnologies];
  
  // Filtrar projetos com base na categoria selecionada
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(filter));
  
  // Manipulador para mudança de filtro
  const handleFilterChange = (event: React.SyntheticEvent, newValue: string) => {
    setFilter(newValue);
  };
  
  // Variantes de animação para os cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Box component="section" className={styles.projects} id="projects">
      <Container maxWidth="lg">
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle 
              title="Meus Projetos" 
              subtitle="Confira alguns dos meus trabalhos recentes"
            />
          </motion.div>
        </div>
        
        {/* Filtros de projetos */}
        <div ref={tabsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.filtersContainer}
          >
            <Tabs 
              value={filter} 
              onChange={handleFilterChange}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons={isMobile ? "auto" : false}
              allowScrollButtonsMobile
              className={styles.tabs}
              centered={!isMobile}
            >
              {categories.slice(0, 8).map((category) => (
                <Tab 
                  key={category} 
                  label={category.charAt(0).toUpperCase() + category.slice(1)} 
                  value={category}
                  className={styles.tab}
                />
              ))}
            </Tabs>
          </motion.div>
        </div>
        
        {/* Grid de projetos */}
        <div ref={projectsRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
          >
            <AnimatePresence mode="wait">
              <Grid container spacing={3} key={filter}>
                {filteredProjects.map((project: Project, index: number) => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      animate={projectsInView ? "visible" : "hidden"}
                      exit="exit"
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 + (index % 3) * 0.1 // Atraso escalonado por coluna
                      }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
};

export default ProjectsSection;