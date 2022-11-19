import { ActionIcon, Box, ColorScheme, Group, Header, Tooltip } from '@mantine/core';
import {
  IconHome,
  IconMoon,
  IconSun,
  IconTextDirectionLtr,
  IconTextDirectionRtl,
} from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FC } from 'react';
import useStyles from './AppHeader.styles';

type props = {
  themeValue: ColorScheme;
  onToggleTheme: (theme: ColorScheme) => void;
  rtlValue: boolean;
  onRtlToggle: (rtl: boolean) => void;
};

const AppHeader: FC<props> = ({ themeValue, onToggleTheme, rtlValue, onRtlToggle }) => {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const themeColor = themeValue === 'light' ? 'violet' : 'yellow';

  return (
    <Header height={48} p="xs" className={classes.header}>
      <Box className={classes.box}>
        <Group spacing="xs" position="left" align="center">
          <Link href="/" passHref>
            <ActionIcon
              className={classes.btn}
              component="a"
              key="homeBtn"
              aria-label="Home Button"
            >
              {' '}
              <IconHome />{' '}
            </ActionIcon>
          </Link>
        </Group>
        <Group spacing="xs" position="right" align="center">
          <Tooltip
            className={classes.btn}
            label={t('header.tooltips.dir', { mode: rtlValue ? 'LTR' : 'RTL' })}
          >
            <ActionIcon
              onClick={() => onRtlToggle(!rtlValue)}
              key="rtlToggleBtn"
              aria-label="RTL Toggle Button"
            >
              {rtlValue ? <IconTextDirectionLtr /> : <IconTextDirectionRtl />}
            </ActionIcon>
          </Tooltip>
          <Tooltip
            className={classes.btn}
            label={t(`header.tooltips.${themeValue}`)}
            position="bottom-end"
            color={themeColor}
          >
            <ActionIcon
              color={themeColor}
              onClick={() => onToggleTheme(themeValue === 'light' ? 'dark' : 'light')}
              key="themeToggleBtn"
              aria-label="Theme Toggle Button"
            >
              {themeValue === 'light' ? <IconMoon /> : <IconSun />}
            </ActionIcon>
          </Tooltip>
        </Group>
      </Box>
    </Header>
  );
};

export default AppHeader;
