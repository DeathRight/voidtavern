/* eslint-disable jsx-a11y/media-has-caption */
import { Text, Grid, Card, Highlight } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { IconCode, IconInfoCircle } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { useId } from 'react';
import PageBody from '../../../common/components/common/Page/PageBody';
import PageSection from '../../../common/components/common/Page/PageSection';
import { SectionTabObj } from '../../../common/components/common/StickyTabber';
import { Resources } from '../../../types/LocaleTranslation';

export default () => {
  const uId = useId();
  const { t } = useTranslation('projects');

  const tabs: SectionTabObj<Resources['projects']>[] = [
    { id: 'about', icon: <IconInfoCircle /> },
    { id: 'snip', icon: <IconCode /> },
  ];

  return (
    <PageBody id={uId} tabs={tabs as any} t={t}>
      <PageSection globalId={uId} t={t} id="about">
        <Card withBorder>
          <Grid align="center">
            <Grid.Col span={1}>
              <IconInfoCircle />
            </Grid.Col>
            <Grid.Col span={11}>
              <Text>
                This component is used in this very portfolio to highlight the current section in
                the top bar!
              </Text>
            </Grid.Col>
          </Grid>
        </Card>
        <Card pb="0" withBorder>
          <Card.Section>
            <video width="100%" controls loop>
              <source src="https://i.imgur.com/c2Lm5yT.mp4" type="video/mp4" />
            </video>
          </Card.Section>
        </Card>

        <Highlight
          highlight={['sections', 'section', 'window']}
          highlightStyles={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.info[3] : theme.colors.info[6],
            backgroundColor: 'transparent',
            fontWeight: 'bolder',
          })}
        >
          The component is provided sections and window dimensions, and as the user scrolls through
          them the component keeps track of which section overlaps with the window.
        </Highlight>
      </PageSection>
      <PageSection globalId={uId} t={t} id="snip">
        <Card withBorder>
          <Card.Section>
            <Prism withLineNumbers language="tsx">
              {`/* ----------------------------- Scroll Tracking ---------------------------- */
    useScrollPosition(
      ({ currPos }) => {
        if (sections.current && wind.current) {
          const axis = orientation === "vertical" ? "y" : "x";
          const axisEnd = orientation === "vertical" ? "bottom" : "right";
          const s = sections.current;
          let topMost: (SectionObj & { id: string }) | undefined;

          const wRect = currPos;
          const offset = {
            top: orientation === "vertical" ? wRect.top : wRect.left,
            btm: orientation === "vertical" ? wRect.bottom : wRect.right,
          };
          Object.entries(s).forEach(([id, section]) => {
            if (section) {
              const pos = section.position;

              if (
                doesOverlap(
                  { start: offset.top, end: offset.btm },
                  { start: pos[axis], end: pos[axisEnd] }
                )
              ) {
                // If this section's position is further up the page than current topMost section
                // or if topMost hasn't been set, set this section as topMost.
                if (
                  (topMost &&
                    (!flipped
                      ? pos[axis] < topMost.position[axis]
                      : pos[axis] > topMost.position[axis])) ||
                  !topMost
                ) {
                  topMost = { id, ...section };
                }
              }
            }
          });

          if (topMost) setScrolledTo([topMost.id, topMost.element]);
        }
      },
      [wind, flipped, orientation, lastUpdated],
      wind,
      undefined,
      undefined,
      localScroll ? container : undefined
    );`}
            </Prism>
          </Card.Section>
        </Card>
      </PageSection>
    </PageBody>
  );
};
