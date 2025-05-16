import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Tabs, 
  Tab,
  Typography
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../../atoms/SectionTitle';
import SkillCard from '../../molecules/SkillCard';
import { skills, Skill } from '../../../data/skills';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  // Configurando os observadores para detectar quando os elementos entram no viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [tabsRef, tabsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Estado para categoria selecionada
  const [category, setCategory] = useState<string>('all');
  
  // Categorias disponíveis
  const categories = [
    { value: 'all', label: 'Todas' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'database', label: 'Banco de Dados' },
    { value: 'devops', label: 'DevOps' },
    { value: 'tools', label: 'Ferramentas' }
  ];
  
  // Filtrar habilidades com base na categoria selecionada
  const filteredSkills = category === 'all'
    ? skills
    : skills.filter(skill => skill.category === category);
  
  // Manipulador para mudança de categoria
  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setCategory(newValue);
  };
  
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
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
    <Box component="section" className={styles.skills} id="skills">
      <Container maxWidth="lg">
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle 
              title="Minhas Habilidades" 
              subtitle="Tecnologias e ferramentas que utilizo no dia a dia"
            />
          </motion.div>
        </div>
        
        {/* Filtros de categorias */}
        <div ref={tabsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={tabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.filtersContainer}
          >
            <Tabs 
              value={category} 
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              className={styles.tabs}
              centered
            >
              {categories.map((cat) => (
                <Tab 
                  key={cat.value} 
                  label={cat.label} 
                  value={cat.value}
                  className={styles.tab}
                />
              ))}
            </Tabs>
          </motion.div>
        </div>
        
        {/* Grid de habilidades */}
        <div ref={skillsRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            <AnimatePresence mode="wait">
              <Grid container spacing={3} key={category}>
                {filteredSkills.map((skill: Skill, index: number) => (
                  <Grid item xs={6} sm={4} md={3} key={skill.name}>
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate={skillsInView ? "visible" : "hidden"}
                      exit="exit"
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 + (index % 4) * 0.1 // Atraso escalonado por coluna
                      }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  </Grid>
                ))}
                
                {filteredSkills.length === 0 && (
                  <Grid item xs={12}>
                    <Typography variant="body1" align="center" className={styles.noSkills}>
                      Nenhuma habilidade encontrada nesta categoria.
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
};

export default SkillsSection;