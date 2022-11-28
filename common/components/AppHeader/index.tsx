import {
  ActionIcon,
  Box,
  Burger,
  ColorScheme,
  Group,
  Header,
  MediaQuery,
  Tooltip,
} from '@mantine/core';
import {
  IconMoon,
  IconSun,
  IconTextDirectionLtr,
  IconTextDirectionRtl,
} from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import useStyles from './styles';

type props = {
  themeValue: ColorScheme;
  onToggleTheme: (theme: ColorScheme) => void;
  rtlValue: boolean;
  onRtlToggle: (rtl: boolean) => void;
  opened: boolean;
  onOpen: (open: boolean) => void;
};

const AppHeader: FC<props> = ({
  themeValue,
  onToggleTheme,
  rtlValue,
  onRtlToggle,
  opened,
  onOpen,
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const themeColor = themeValue === 'light' ? 'violet' : 'yellow';

  return (
    <Header height={48} p="xs" className={classes.header}>
      <Box className={classes.box}>
        <Group spacing="xs" position="left" align="center">
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger className={classes.btn} opened={opened} onClick={() => onOpen(!opened)} />
          </MediaQuery>
          {/*<Link href="/" passHref>
            <ActionIcon className={classes.btn} component="a" key="homeBtn" aria-label="Home">
              {' '}
              <IconHome />{' '}
            </ActionIcon>
          </Link>*/}
        </Group>
        <Group spacing="xs" position="right" align="center">
          <Tooltip
            className={classes.btn}
            label={t('header.tooltips.dir', { mode: rtlValue ? 'LTR' : 'RTL' })}
          >
            <ActionIcon
              onClick={() => onRtlToggle(!rtlValue)}
              key="rtlToggleBtn"
              aria-label="RTL Toggle"
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
              aria-label="Theme Toggle"
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
