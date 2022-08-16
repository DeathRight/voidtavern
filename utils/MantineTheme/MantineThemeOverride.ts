import {
  ActionIconProps,
  ButtonProps,
  DEFAULT_THEME,
  DividerProps,
  MantineThemeOverride,
  TooltipProps,
} from '@mantine/core';

/* --------------------------------- Colors --------------------------------- */
const colors: MantineThemeOverride = {
  colors: {
    warning: DEFAULT_THEME.colors.orange,
    success: DEFAULT_THEME.colors.green,
    info: DEFAULT_THEME.colors.cyan,
  },
  primaryColor: 'indigo',
};

/* ----------------------------- Component Props ---------------------------- */
const ButtonProps: Partial<ButtonProps> = {
  radius: 'md',
  uppercase: true,
};

const ActionIconProps: Partial<ActionIconProps> = {
  radius: 'md',
  size: 'lg',
};

const TooltipProps: Partial<TooltipProps> = {
  withArrow: true,
};

const DividerProps: Partial<DividerProps> = {
  sx: { width: '100%' },
};

const componentProps: MantineThemeOverride = {
  components: {
    Button: { defaultProps: ButtonProps },
    ActionIcon: { defaultProps: ActionIconProps },
    Tooltip: { defaultProps: TooltipProps },
    Divider: { defaultProps: DividerProps },
  },
  fontFamily: 'Oxygen, sans-serif',
  fontFamilyMonospace: 'Nanum Gothic Coding, monospace',
  headings: { fontFamily: 'Lobster Two, cursive' },
};

/* --------------------------------- Export --------------------------------- */
const theme: MantineThemeOverride = { ...componentProps, ...colors };

export default theme;
