import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../atoms/Button";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  // Variantes de animação para os elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <Box component="section" className={styles.hero}>
      <Container maxWidth="lg">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              component="p"
              color="primary"
              className={styles.greeting}
            >
              Olá, eu sou
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h1" component="h1" className={styles.name}>
              Patryck Sans
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h2" className={styles.title}>
              Desenvolvedor Full Stack
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="body1" className={styles.description}>
              Criando experiências digitais inovadoras e soluções web de alta
              qualidade.
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={styles.buttonContainer}
          >
            <PrimaryButton to="/projects" size="large">
              Veja meus projetos
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Elementos decorativos */}
      <Box className={styles.shapesContainer}>
        <motion.div
          className={`${styles.shape} ${styles.shape1}`}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`${styles.shape} ${styles.shape2}`}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;