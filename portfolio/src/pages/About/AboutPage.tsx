import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@mui/material";
import AboutSection from "../../components/organisms/AboutSection";
import ExperienceSection from "../../components/organisms/ExperienceSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Patryck Sans</title>
        <meta
          name="description"
          content="Conheça mais sobre Patryck Sans, sua trajetória profissional, formação acadêmica e experiências."
        />
      </Helmet>

      <Box component="section" sx={{ pt: 4 }}>
        <Container maxWidth="lg">
          <AboutSection />
          <ExperienceSection />
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
