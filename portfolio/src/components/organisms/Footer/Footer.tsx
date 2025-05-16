import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SocialLinks from "../../molecules/SocialLinks";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  // Links de navegação
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Projetos", path: "/projects" },
    { name: "Habilidades", path: "/skills" },
    { name: "Experiência", path: "/experience" },
    { name: "Contato", path: "/contact" },
  ];

  // Ano atual para o copyright
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo e descrição */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={styles.logo}>
              Patryck Sans
            </Typography>
            <Typography variant="body2" className={styles.description}>
              Desenvolvedor Full Stack apaixonado por criar soluções web
              inovadoras e experiências digitais de alta qualidade.
            </Typography>
            <Box mt={2}>
              <SocialLinks />
            </Box>
          </Grid>

          {/* Links de navegação */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className={styles.sectionTitle}>
              Links
            </Typography>
            <Box className={styles.linksList}>
              {navLinks.map((link) => (
                <Typography
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  className={styles.navLink}
                  variant="body2"
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contato */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className={styles.sectionTitle}>
              Contato
            </Typography>
            <Box className={styles.contactInfo}>
              <Typography variant="body2" className={styles.contactItem}>
                Email:{" "}
                <MuiLink href="mailto:patrycksans@gmail.com">
                  patrycksans@gmail.com
                </MuiLink>
              </Typography>
              <Typography variant="body2" className={styles.contactItem}>
                Localização: São Paulo, Brasil
              </Typography>
              <MuiLink
                href="/assets/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadLink}
              >
                Baixar CV
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box className={styles.copyright}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Patryck Vieira Sans. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
