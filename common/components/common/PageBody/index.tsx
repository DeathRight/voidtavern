import { BoxProps, Stack } from '@mantine/core';
import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import STG from '../STG';
import { StickyTabber, StickyTabberProps } from '../StickyTabber';
import PageContent from '../PageContent';

interface PageBodyProps
  extends Pick<BoxProps, 'style' | 'sx'>,
    Pick<StickyTabberProps, 't' | 'tabs'> {
  id: string;
  children: React.ReactNode;
}

/**
 * PageBody that includes a `PageHeader` with `StickyTabber` and `STG` functionality.
 *
 * Should have `PageSection` children.
 */
const PageBody = (props: PageBodyProps) => {
  const { id, children, t, tabs, ...spread } = props;

  const [scrolledTo, setScrolledTo] = useState('About'); //tabs[0].id as string);

  return (
    <>
      <PageHeader>
        <StickyTabber t={t} tabs={tabs} value={scrolledTo} />
      </PageHeader>
      <PageContent {...spread}>
        <STG.Container
          id={id}
          onScrolledToChange={(sId) => setScrolledTo(sId.substring(id.length + 1))}
          outerStyle={{ width: '100%' }}
        >
          <STG.Window id={`${id}-Window`} offset="35vh" />
          <Stack align="flex-start">{children}</Stack>
        </STG.Container>
      </PageContent>
    </>
  );
};

export default PageBody;
