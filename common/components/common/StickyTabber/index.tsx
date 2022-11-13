import { Box, BoxProps, ScrollArea, Tabs, TabsProps } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useId, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import useStyle from './styles';
import common from '../../../../public/locales/en/common.json';

export type SectionTabObj = { id: keyof typeof common.sections; icon: React.ReactNode };
type StickyTabberProps = Omit<TabsProps, 'children'> & {
  boxProps?: BoxProps;
  tabs: SectionTabObj[];
};

export const StickyTabber = (props: StickyTabberProps) => {
  const { tabs, className, boxProps, value, ...tabProps } = props;
  const { classes } = useStyle();
  const uId = useId();
  const { t } = useTranslation('common');
  const router = useRouter();

  /* ---------------------------------- Tabs ---------------------------------- */
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const tabList = useMemo(
    () =>
      tabs.map(({ id, icon }, i) => (
        <Tabs.Tab
          ref={(el) => {
            tabRefs.current[i] = el as HTMLButtonElement;
          }}
          key={uId + id}
          id={uId + id}
          value={id}
          icon={icon}
        >
          {t(`sections.${id}`)}
        </Tabs.Tab>
      )),
    [tabs]
  );

  useEffect(() => {
    if (value) {
      const tabI = tabs.findIndex((v) => v.id === value);
      if (tabI !== -1) {
        const cTab = tabRefs.current[tabI];
        if (cTab) cTab.scrollIntoView();
      }
    }
  }, [value]);
  /* ------------------------------------ * ----------------------------------- */
  return (
    <ScrollArea styles={{ root: { pointerEvents: 'auto' } }}>
      <Box className={classes.main} {...boxProps}>
        <Tabs
          className={classes.btn}
          value={value}
          {...tabProps}
          onTabChange={(id) => router.push(`/#${id}`)}
        >
          <Tabs.List position="center">{tabList}</Tabs.List>
        </Tabs>
      </Box>
    </ScrollArea>
  );
};

export default StickyTabber;
