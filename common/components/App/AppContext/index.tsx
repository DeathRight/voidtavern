import { ColorScheme } from '@mantine/core';
import { createContext, useContext } from 'react';

interface AppContextI {
  themeValue: ColorScheme;
  onToggleTheme: () => void;
  rtlValue: boolean;
  onToggleRtl: () => void;
  navbarOpened: boolean;
  onNavBarToggle: () => void;
}

const AppContext = createContext<AppContextI | undefined>(undefined);

export const useAppContext = () => {
  const c = useContext(AppContext);
  if (c === undefined) {
    throw new Error('useAppContext must be inside a AppContext Provider!');
  }

  return c;
};

export default AppContext;
