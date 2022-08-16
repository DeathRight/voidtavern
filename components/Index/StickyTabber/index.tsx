import { ActionIcon, Box, BoxProps, Group, Tabs, TabsProps } from '@mantine/core';
import { IconMoon, IconTextDirectionLtr } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import React, { useId, useMemo } from 'react';
import useStyle from './styles';
import common from '../../../public/locales/en/common.json';

export type SectionTabObj = { id: keyof typeof common.sections; icon: React.ReactNode };
type StickyTabberProps = Omit<TabsProps, 'children'> & {
  boxProps?: BoxProps;
  tabs: SectionTabObj[];
};

export default React.forwardRef<HTMLDivElement, StickyTabberProps>((props, ref) => {
  const { tabs, className, boxProps, ...tabProps } = props;
  const { classes } = useStyle();
  const uId = useId();
  const { t } = useTranslation('common');

  const tabList = useMemo(
    () =>
      tabs.map(({ id, icon }) => (
        <Tabs.Tab key={uId + id} id={uId + id} value={id} icon={icon}>
          {t(`sections.${id}`)}
        </Tabs.Tab>
      )),
    [tabs]
  );

  // ? Spacer to ensure correct positioning when the header catchs up
  const headerButtonSpacers = useMemo(
    () => (
      <Group
        sx={{ visibility: 'hidden', flexWrap: 'nowrap' }}
        spacing="xs"
        position="right"
        align="center"
      >
        <ActionIcon>
          <IconTextDirectionLtr />
        </ActionIcon>
        <ActionIcon>
          <IconMoon />
        </ActionIcon>
      </Group>
    ),
    []
  );

  return (
    <Box ref={ref} className={classes.main} {...boxProps}>
      <Tabs className={classes.btn} {...tabProps}>
        <Tabs.List>{tabList}</Tabs.List>
      </Tabs>
      {headerButtonSpacers}
    </Box>
  );
});
