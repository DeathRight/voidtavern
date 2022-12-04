import { ColorScheme, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { createContext, useContext } from 'react';

interface AppContextI {
  themeValue: ColorScheme;
  onToggleTheme: () => void;
  rtlValue: boolean;
  onToggleRtl: () => void;
  navbarOpened: boolean;
  onNavBarToggle: () => void;
  isDrawer: boolean;
}

interface AppContextProviderProps {
  value: Omit<AppContextI, 'isDrawer'>;
  children: React.ReactNode;
}

const AppContext = createContext<AppContextI | undefined>(undefined);

export const AppContextProvider = (props: AppContextProviderProps) => {
  const { children, value } = props;
  const theme = useMantineTheme();
  const isDrawer = useMediaQuery(theme.fn.smallerThan('sm').substring(7), false);

  return <AppContext.Provider value={{ ...value, isDrawer }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const c = useContext(AppContext);
  if (c === undefined) {
    throw new Error('useAppContext must be inside a AppContext Provider!');
  }

  return c;
};

export default AppContext;
