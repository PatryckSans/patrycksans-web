import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@mui/material";
import ContactSection from "../../components/organisms/ContactSection";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Patryck Sans</title>
        <meta
          name="description"
          content="Entre em contato com Patryck Sans para discutir projetos, oportunidades ou colaborações."
        />
      </Helmet>

      <Box component="section" sx={{ pt: 4 }}>
        <Container maxWidth="lg">
          <ContactSection />
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
