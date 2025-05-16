import React from 'react';
import { Box } from '@mui/material';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box className={styles.layout}>
      <Header />
      <Box component="main" className={styles.main}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;