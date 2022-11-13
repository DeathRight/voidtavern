import { Grid, Stack } from '@mantine/core';
import { IconCode, IconInfoCircle } from '@tabler/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import React, { useId, useMemo, useState } from 'react';
import PageBody from '../common/components/common/PageBody';
import Row from '../common/components/common/Row';
import Section from '../common/components/common/Section';
import Databases from '../common/utils/Skills/Databases';
import Environments from '../common/utils/Skills/Environments';
import Frameworks from '../common/utils/Skills/Frameworks';
import Languages from '../common/utils/Skills/Languages';
import Libraries from '../common/utils/Skills/Libraries';
import About from '../modules/Index/About';
import SkillCard from '../common/components/Skill/SkillCard';
import STG from '../common/components/common/STG';
import { StickyTabber, SectionTabObj } from '../common/components/common/StickyTabber';
import VoidTavernWelcome from '../modules/Index/VoidTavernWelcome';
import PageHeading from '../common/components/common/PageHeading';
import PageHeader from '../common/components/common/PageHeader';

export default function HomePage() {
  const sections: SectionTabObj[] = [
    { id: 'about', icon: <IconInfoCircle /> },
    { id: 'lang', icon: <IconCode /> },
    { id: 'fw', icon: <IconCode /> },
    { id: 'env', icon: <IconCode /> },
    { id: 'lib', icon: <IconCode /> },
    { id: 'db', icon: <IconCode /> },
  ];

  const [scrolledTo, setScrolledTo] = useState('About');

  const uId = useId();

  /* ------------------------------- Card Groups ------------------------------ */
  const langCards = useMemo(
    () =>
      Languages.sort((a, b) => b.level - a.level).map((v) => (
        <SkillCard key={`langCard-${v.id}`} skill={v} />
      )),
    []
  );

  const fwCards = useMemo(
    () =>
      Frameworks.sort((a, b) => b.level - a.level).map((v) => (
        <SkillCard key={`fwCard-${v.id}`} skill={v} />
      )),
    []
  );

  const envCards = useMemo(
    () =>
      Environments.sort((a, b) => b.level - a.level).map((v) => (
        <SkillCard key={`envCard-${v.id}`} skill={v} />
      )),
    []
  );

  const libCards = useMemo(
    () =>
      Libraries.sort((a, b) => b.level - a.level).map((v) => (
        <SkillCard key={`libCard-${v.id}`} skill={v} />
      )),
    []
  );

  const dbCards = useMemo(
    () =>
      Databases.sort((a, b) => b.level - a.level).map((v) => (
        <SkillCard key={`dbCard-${v.id}`} skill={v} />
      )),
    []
  );
  /* ------------------------------------ * ----------------------------------- */

  return (
    <>
      <PageHeading>
        <Row>
          <VoidTavernWelcome />
        </Row>
      </PageHeading>
      <PageHeader>
        <StickyTabber tabs={sections} value={scrolledTo} />
      </PageHeader>
      <PageBody>
        <STG.Container
          id={uId}
          onScrolledToChange={(id) => setScrolledTo(id.substring(uId.length + 1))}
          outerStyle={{ width: '100%' }}
        >
          <STG.Window id={`${uId}.Window`} offset="35vh" />
          <Stack align="flex-start">
            <STG.Section id={`${uId}.about`} style={{ width: '100%' }}>
              <Section id="about" title="About Me">
                <About />
              </Section>
            </STG.Section>
            <STG.Section id={`${uId}.lang`} style={{ width: '100%' }}>
              <Section id="lang" title="Languages">
                <Grid grow id="langs">
                  {langCards}
                </Grid>
              </Section>
            </STG.Section>
            <STG.Section id={`${uId}.fw`} style={{ width: '100%' }}>
              <Section id="fw" title="Frameworks">
                <Grid grow id="fws">
                  {fwCards}
                </Grid>
              </Section>
            </STG.Section>
            <STG.Section id={`${uId}.env`} style={{ width: '100%' }}>
              <Section id="env" title="Environments">
                <Grid grow id="envs">
                  {envCards}
                </Grid>
              </Section>
            </STG.Section>
            <STG.Section id={`${uId}.lib`} style={{ width: '100%' }}>
              <Section id="lib" title="Libraries">
                <Grid grow id="libs">
                  {libCards}
                </Grid>
              </Section>
            </STG.Section>
            <STG.Section id={`${uId}.db`} style={{ width: '100%' }}>
              <Section id="db" title="Databases">
                <Grid grow id="dbs">
                  {dbCards}
                </Grid>
              </Section>
            </STG.Section>
          </Stack>
        </STG.Container>
      </PageBody>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});
