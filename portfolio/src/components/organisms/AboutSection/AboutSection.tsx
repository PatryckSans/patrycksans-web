import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../../atoms/SectionTitle";
import { skills } from "../../../data/skills";
import SkillBar from "../../atoms/SkillBar";
import styles from "./AboutSection.module.css";
import avatarImage from "../../../assets/images/foto-perfil.png";

const AboutSection: React.FC = () => {
  // Removendo a variável não utilizada theme
  // const theme = useTheme();

  // Configurando os observadores para detectar quando os elementos entram no viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [avatarRef, avatarInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Filtrar habilidades principais para exibir na seção Sobre
  const mainSkills = skills.filter((skill) => skill.level >= 4).slice(0, 5);

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box component="section" className={styles.about} id="about">
      <Container maxWidth="lg">
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle
              title="Sobre Mim"
              subtitle="Conheça um pouco da minha trajetória e habilidades"
            />
          </motion.div>
        </div>

        <Grid container spacing={6} alignItems="center">
          {/* Foto/Avatar */}
          <Grid item xs={12} md={5}>
            <div ref={avatarRef} className={styles.avatarContainer}>
              <motion.img
                src={avatarImage}
                alt="Patryck Sans"
                className={styles.avatar}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  avatarInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.7, delay: 0.2 }}
              />
            </div>
          </Grid>

          {/* Biografia e Habilidades */}
          <Grid item xs={12} md={7}>
            <div ref={bioRef}>
              <motion.div
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h4"
                    component="h3"
                    className={styles.bioTitle}
                  >
                    Desenvolvedor Full Stack
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography variant="body1" className={styles.bioText}>
                    Olá! Sou um desenvolvedor Full Stack apaixonado por criar
                    soluções web inovadoras e experiências digitais de alta
                    qualidade. Com mais de 5 anos de experiência no
                    desenvolvimento de aplicações web, tenho trabalhado com
                    diversas tecnologias e frameworks modernos.
                  </Typography>

                  <Typography variant="body1" className={styles.bioText}>
                    Minha jornada na programação começou durante a faculdade, onde
                    me apaixonei por resolver problemas complexos através do
                    código. Desde então, venho aprimorando minhas habilidades e
                    conhecimentos, sempre buscando as melhores práticas e novas
                    tecnologias.
                  </Typography>

                  <Typography variant="body1" className={styles.bioText}>
                    Atualmente, trabalho como desenvolvedor Full Stack em uma
                    empresa de tecnologia, onde lidero projetos e equipes no
                    desenvolvimento de aplicações web escaláveis e de alto
                    desempenho.
                  </Typography>
                </motion.div>
              </motion.div>
            </div>

            {/* Habilidades Principais */}
            <div ref={skillsRef}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  skillsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Typography variant="h6" className={styles.skillsTitle}>
                  Principais Habilidades
                </Typography>

                <Box className={styles.skillsContainer}>
                  {mainSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, width: 0 }}
                      animate={
                        skillsInView
                          ? { opacity: 1, width: "100%" }
                          : { opacity: 0, width: 0 }
                      }
                      transition={{ duration: 0.7, delay: 0.5 + index * 0.1 }}
                    >
                      <SkillBar
                        name={skill.name}
                        level={skill.level}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;