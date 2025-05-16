import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "./theme/ThemeProvider";
import MainLayout from "./components/templates/MainLayout";

// Páginas
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import SkillsPage from "./pages/Skills";
import ExperiencePage from "./pages/Experience";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Patryck Sans | Desenvolvedor Full Stack</title>
          <meta
            name="description"
            content="Portfólio pessoal de Patryck Sans, Desenvolvedor Full Stack especializado em React, Node.js e outras tecnologias web modernas."
          />
          <link rel="canonical" href="https://seusite.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
