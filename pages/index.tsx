import { Grid } from '@mantine/core';
import { MdOutlineLocalLibrary } from 'react-icons/md';
import { RiCodeBoxLine } from 'react-icons/ri';
import { IconCode, IconDatabase, IconInfoCircle, IconTerminal2 } from '@tabler/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next/types';
import React, { useId, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import PageBody from '../common/components/common/PageBody';
import Row from '../common/components/common/Row';
import Databases from '../common/utils/Skills/Databases';
import Environments from '../common/utils/Skills/Environments';
import Frameworks from '../common/utils/Skills/Frameworks';
import Languages from '../common/utils/Skills/Languages';
import Libraries from '../common/utils/Skills/Libraries';
import About from '../modules/Index/About';
import SkillCard from '../common/components/Skill/SkillCard';
import { SectionTabObj } from '../common/components/common/StickyTabber';
import VoidTavernWelcome from '../modules/Index/VoidTavernWelcome';
import PageHeading from '../common/components/common/PageHeading';
import PageSection from '../common/components/common/PageSection';

export default function HomePage() {
  const sections: SectionTabObj[] = [
    { id: 'about', icon: <IconInfoCircle /> },
    { id: 'lang', icon: <IconCode /> },
    { id: 'fw', icon: <RiCodeBoxLine size="1.5rem" /> },
    { id: 'env', icon: <IconTerminal2 /> },
    { id: 'lib', icon: <MdOutlineLocalLibrary size="1.5rem" /> },
    { id: 'db', icon: <IconDatabase /> },
  ];

  const uId = useId();
  const { t } = useTranslation('home');

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
      <PageBody id={uId} t={t} tabs={sections}>
        <PageSection globalId={uId} t={t} id="about">
          <About />
        </PageSection>
        <PageSection globalId={uId} t={t} id="lang">
          <Grid grow id="langs">
            {langCards}
          </Grid>
        </PageSection>
        <PageSection globalId={uId} t={t} id="fw">
          <Grid grow id="fws">
            {fwCards}
          </Grid>
        </PageSection>
        <PageSection globalId={uId} t={t} id="env">
          <Grid grow id="envs">
            {envCards}
          </Grid>
        </PageSection>
        <PageSection globalId={uId} t={t} id="lib">
          <Grid grow id="libs">
            {libCards}
          </Grid>
        </PageSection>
        <PageSection globalId={uId} t={t} id="db">
          <Grid grow id="dbs">
            {dbCards}
          </Grid>
        </PageSection>
      </PageBody>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'home'])),
  },
});
