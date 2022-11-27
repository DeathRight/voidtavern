import { Box, BoxProps, ScrollArea, Tabs, TabsProps } from '@mantine/core';
import { TFunction } from 'next-i18next';
import React, { useEffect, useId, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import useStyle from './styles';
import { Resources } from '../../../../types/LocaleTranslation';

/**
 * Object containing ID and Icon to be used for tabs, with
 * dynamic typing for specific translation namespaces
 */
export type SectionTabObj<S extends { sections: { [K: string]: string } } = Resources['home']> = {
  id: keyof S['sections'];
  icon: React.ReactNode;
};

export interface StickyTabberProps extends Omit<TabsProps, 'children'> {
  boxProps?: BoxProps;
  tabs: SectionTabObj[];
  /**
   * i18next `t` function attached to a namespace that has a
   * `sections` subnamespace, which must
   * have IDs that match those in the `tabs` property
   *
   * e.g.:
   * ```ts
   * const { t } = useTranslation('home');
   * // home.json: { ..., sections: { ... } }
   * return (<StickyTabber ... t={t} />)
   * ```
   */
  t: TFunction;
}

export const StickyTabber = (props: StickyTabberProps) => {
  const { tabs, t, className, boxProps, value, ...tabProps } = props;
  const { classes } = useStyle();
  const uId = useId();
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
          aria-label={t(`sections.${id}`)}
        >
          {t(`sections.${id}`) as React.ReactNode}
        </Tabs.Tab>
      )),
    [tabs]
  );

  useEffect(() => {
    if (value) {
      const tabI = tabs.findIndex((v) => v.id === value);
      if (tabI !== -1) {
        const cTab = tabRefs.current[tabI];
        if (cTab) cTab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }
  }, [value]);
  /* ------------------------------------ * ----------------------------------- */
  return (
    <ScrollArea styles={{ root: { pointerEvents: 'auto' } }}>
      <Box className={classes.main} {...boxProps}>
        <Tabs
          className={classes.btn}
          classNames={{ tabLabel: classes.tabLabel, tabIcon: classes.tabIcon }}
          value={value}
          {...tabProps}
          onTabChange={(id) => router.push(`#${id}`)}
        >
          <Tabs.List position="center" aria-label="Table of Contents">
            {tabList}
          </Tabs.List>
        </Tabs>
      </Box>
    </ScrollArea>
  );
};

export default StickyTabber;
