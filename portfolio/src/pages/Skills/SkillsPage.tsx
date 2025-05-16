import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@mui/material";
import SkillsSection from "../../components/organisms/SkillsSection";

const SkillsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Habilidades | Patryck Sans</title>
        <meta
          name="description"
          content="Conheça as habilidades técnicas de Patryck Sans, incluindo linguagens de programação, frameworks, ferramentas e tecnologias."
        />
      </Helmet>

      <Box component="section" sx={{ pt: 4 }}>
        <Container maxWidth="lg">
          <SkillsSection />
        </Container>
      </Box>
    </>
  );
};

export default SkillsPage;
