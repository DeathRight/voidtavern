import { ActionIcon, Tooltip } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { useAppContext } from './AppContext';
import useStyles from './styles';

const ThemeButton = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const { themeValue, onToggleTheme } = useAppContext();

  const themeColor = themeValue === 'light' ? 'violet' : 'yellow';
  return (
    <Tooltip
      className={classes.btn}
      label={t(`header.tooltips.${themeValue}`)}
      position="bottom-end"
      color={themeColor}
    >
      <ActionIcon
        color={themeColor}
        onClick={onToggleTheme}
        key="themeToggleBtn"
        aria-label="Theme Toggle"
      >
        {themeValue === 'light' ? <IconMoon /> : <IconSun />}
      </ActionIcon>
    </Tooltip>
  );
};

export default ThemeButton;
