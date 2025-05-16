import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/organisms/HeroSection";
import AboutSection from "../../components/organisms/AboutSection";
import ProjectsSection from "../../components/organisms/ProjectsSection";
import SkillsSection from "../../components/organisms/SkillsSection";
import ExperienceSection from "../../components/organisms/ExperienceSection";
import ContactSection from "../../components/organisms/ContactSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Patryck Sans | Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Portfólio pessoal de Patryck Vieira Sans, Desenvolvedor Full Stack especializado em React, Node.js e outras tecnologias web modernas."
        />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;