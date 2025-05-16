import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
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
    <>
      <Helmet>
        <title>Página Não Encontrada | Patryck Sans</title>
        <meta
          name="description"
          content="A página que você está procurando não foi encontrada."
        />
      </Helmet>

      <Box component="section" className={styles.notFound}>
        <Container maxWidth="md">
          <motion.div
            className={styles.content}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Typography variant="h1" className={styles.errorCode}>
                404
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="h2" className={styles.title}>
                Página Não Encontrada
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="body1" className={styles.description}>
                A página que você está procurando não existe ou foi movida.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Home />}
                className={styles.button}
              >
                Voltar para a Página Inicial
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default NotFoundPage;
