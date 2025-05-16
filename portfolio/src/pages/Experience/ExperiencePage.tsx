import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@mui/material";
import ExperienceSection from "../../components/organisms/ExperienceSection";

const ExperiencePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Experiência | Patryck Sans</title>
        <meta
          name="description"
          content="Conheça a experiência profissional, formação acadêmica e certificações de Patryck Sans."
        />
      </Helmet>

      <Box component="section" sx={{ pt: 4 }}>
        <Container maxWidth="lg">
          <ExperienceSection />
        </Container>
      </Box>
    </>
  );
};

export default ExperiencePage;
