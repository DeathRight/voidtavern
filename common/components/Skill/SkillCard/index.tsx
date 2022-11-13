import { Card, Divider, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { useId, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';
import DynamicProgress from '../../DynamicProgress';
import {
  isLanguage,
  isTool,
  Skill,
  SkillLevel,
  SkillLevelLength,
} from '../../../utils/Skills/types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = (props: SkillCardProps) => {
  const { skill } = props;
  const uId = useId();
  const { t } = useTranslation('common');

  /* ------------------------------- Components ------------------------------- */
  const SCard = useMemo(() => {
    const lvlP = ((skill.level + 1) / (SkillLevelLength / 2)) * 100;

    const Name = (
      <Title style={{ textTransform: 'none' }} order={3}>
        {skill.name}
      </Title>
    );
    const Header = (
      <Group>
        <ThemeIcon
          color="info"
          variant="light"
          radius="xl"
          size="xl"
          style={{ overflow: 'hidden' }}
        >
          <skill.icon size="100%" />
        </ThemeIcon>
        {Name}
      </Group>
    );

    let YearsText = <></>;
    if (isLanguage(skill) || isTool(skill)) {
      const endDate = dayjs(skill.end ?? new Date(Date.now()));
      const yrs = endDate.diff(skill.start, 'years');
      YearsText = (
        <Divider
          label={
            <>
              {t('skills.expYrs')}:&nbsp;
              <Text color="info" weight="bold">
                {yrs}
              </Text>
            </>
          }
        />
      );
    }

    const LevelText = (
      <Divider
        label={
          <>
            {t('skills.expLvl')}:&nbsp;
            <Text color="info" weight="bold">
              {t(`skills.${SkillLevel[skill.level]}` as 'skills.Beginner')}
            </Text>
          </>
        }
      />
    );
    const LevelBar = (
      <DynamicProgress
        sections={[{ color: 'red' }, { color: 'yellow' }, { color: 'teal' }]}
        value={lvlP}
      />
    );
    /* ------------------------------------ * ----------------------------------- */
    return (
      <Stack key={uId} mr="auto" py="md">
        <Card style={{ minWidth: '320px' }} p="xs" mr="auto" withBorder>
          <Card.Section
            component="a"
            style={{ color: 'unset', textDecoration: 'unset' }}
            href="/#lang"
            p="md"
            withBorder
          >
            {Header}
          </Card.Section>
          {YearsText}
          {LevelText}
          {LevelBar}
        </Card>
      </Stack>
    );
  }, [skill]);

  return <>{SCard}</>;
};

export default SkillCard;
