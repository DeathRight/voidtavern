import { DefaultMantineColor, Tuple } from '@mantine/core';

type ExtendedColors = 'success' | 'warning' | 'info' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColors, Tuple<string, 10>>;
  }
}
