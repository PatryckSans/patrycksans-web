import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, Close, Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "../../../theme/ThemeProvider";
import styles from "./Header.module.css";

// Componente para detectar scroll e mudar a aparência do header
interface ElevationScrollProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: `${children.props.className} ${trigger ? styles.scrolled : ""}`,
  });
}

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleColorMode } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Links de navegação
  const navLinks = [
    { name: "Home", path: "/", section: "" },
    { name: "Sobre", path: "/#about", section: "about" },
    { name: "Habilidades", path: "/#skills", section: "skills" },
    { name: "Experiência", path: "/#experience", section: "experience" },
    { name: "Projetos", path: "/#projects", section: "projects" },
    { name: "Contato", path: "/#contact", section: "contact" },
  ];

  // Fechar o drawer quando a tela for redimensionada para desktop
  useEffect(() => {
    if (!isMobile && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isMobile, drawerOpen]);

  // Manipuladores para o drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Função para rolar suavemente até a seção
  const scrollToSection = (sectionId: string) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  // Renderizar links de navegação
  const renderNavLinks = () => (
    <>
      {navLinks.map((link) => (
        <div
          key={link.name}
          className={styles.navLinkContainer}
        >
          <Typography
            component="a"
            href={link.path}
            className={styles.navLink}
            variant="body1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.section);
            }}
          >
            {link.name}
          </Typography>
        </div>
      ))}
    </>
  );

  return (
    <ElevationScroll>
      <AppBar position="fixed" color="transparent" className={styles.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className={styles.toolbar}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              className={styles.logo}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("");
              }}
            >
              Patryck Sans
            </Typography>

            {/* Links de navegação para desktop */}
            {!isMobile && (
              <Box className={styles.desktopNav}>{renderNavLinks()}</Box>
            )}

            {/* Botão de alternar tema */}
            <IconButton
              onClick={toggleColorMode}
              color="inherit"
              className={styles.themeToggle}
            >
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Menu hamburguer para mobile */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                {drawerOpen ? <Close /> : <Menu />}
              </IconButton>
            )}
          </Toolbar>
        </Container>

        {/* Drawer para navegação mobile */}
        {isMobile && (
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            className={styles.drawer}
          >
            <List className={styles.drawerList}>
              {navLinks.map((link) => (
                <ListItem
                  key={link.name}
                  component="a"
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.section);
                  }}
                  className={styles.drawerItem}
                >
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;