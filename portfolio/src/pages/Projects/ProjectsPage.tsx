import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@mui/material";
import ProjectsSection from "../../components/organisms/ProjectsSection";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projetos | Patryck Sans</title>
        <meta
          name="description"
          content="Confira os projetos desenvolvidos por Patryck Sans, incluindo aplicações web, mobile e outras soluções tecnológicas."
        />
      </Helmet>

      <Box component="section" sx={{ pt: 4 }}>
        <Container maxWidth="lg">
          <ProjectsSection />
        </Container>
      </Box>
    </>
  );
};

export default ProjectsPage;
