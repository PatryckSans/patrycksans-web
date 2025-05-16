import React, { createContext, useState, useMemo, useContext, ReactNode, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, PaletteMode, CssBaseline } from '@mui/material';
import { createAppTheme } from './theme';

// Criando o contexto do tema
interface ThemeContextProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  mode: 'dark', // Alterado para 'dark' como padrão
  toggleColorMode: () => {},
});

// Hook personalizado para usar o contexto do tema
export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

// Componente provedor do tema
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Estado para controlar o modo do tema (claro/escuro), inicializado como 'dark'
  const [mode, setMode] = useState<PaletteMode>('dark');

  // Função para alternar entre os modos de tema
  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      // Salvar a preferência no localStorage
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  // Efeito para aplicar a classe correspondente ao modo do tema no body
  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${mode}-mode`);
  }, [mode]);

  // Memoriza o tema para evitar recriações desnecessárias
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // Valores do contexto
  const themeContextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline /> {/* Reset CSS para consistência entre navegadores */}
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};