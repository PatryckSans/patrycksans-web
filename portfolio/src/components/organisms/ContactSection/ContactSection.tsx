import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../../atoms/SectionTitle";
import ContactForm from "../../molecules/ContactForm";
import SocialLinks from "../../molecules/SocialLinks";
import styles from "./ContactSection.module.css";

const ContactSection: React.FC = () => {
  // Configurando os observadores para detectar quando os elementos entram no viewport
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    <Box component="section" className={styles.contact} id="contact">
      <Container maxWidth="lg">
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionTitle
              title="Entre em Contato"
              subtitle="Vamos conversar sobre seu projeto ou oportunidade"
            />
          </motion.div>
        </div>

        <Grid container spacing={4}>
          {/* Informações de contato */}
          <Grid item xs={12} md={5}>
            <div ref={infoRef}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
              >
                <Paper elevation={3} className={styles.contactInfo}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h5"
                      component="h3"
                      className={styles.infoTitle}
                    >
                      Informações de Contato
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography variant="body1" className={styles.infoText}>
                      Estou disponível para trabalhos freelance, oportunidades de
                      emprego ou apenas para trocar ideias sobre tecnologia e
                      desenvolvimento.
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box className={styles.infoItem}>
                      <Typography
                        variant="subtitle1"
                        className={styles.infoLabel}
                      >
                        Email:
                      </Typography>
                      <Typography variant="body1" className={styles.infoValue}>
                        patrycksans@gmail.com
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box className={styles.infoItem}>
                      <Typography
                        variant="subtitle1"
                        className={styles.infoLabel}
                      >
                        Localização:
                      </Typography>
                      <Typography variant="body1" className={styles.infoValue}>
                        São Paulo, Brasil
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box className={styles.infoItem}>
                      <Typography
                        variant="subtitle1"
                        className={styles.infoLabel}
                      >
                        Disponibilidade:
                      </Typography>
                      <Typography variant="body1" className={styles.infoValue}>
                        Freelance / Tempo Integral
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="subtitle1"
                      className={styles.socialTitle}
                    >
                      Redes Sociais:
                    </Typography>
                    <SocialLinks />
                  </motion.div>
                </Paper>
              </motion.div>
            </div>
          </Grid>

          {/* Formulário de contato */}
          <Grid item xs={12} md={7}>
            <div ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Paper elevation={3} className={styles.formContainer}>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={styles.formTitle}
                  >
                    Envie uma Mensagem
                  </Typography>
                  <ContactForm />
                </Paper>
              </motion.div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;