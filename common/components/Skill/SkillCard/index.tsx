import {
  Card,
  CardProps,
  Divider,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  TitleOrder,
} from '@mantine/core';
import { useId, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { useDisclosure } from '@mantine/hooks';
import dayjs from 'dayjs';
import DynamicProgress from '../../DynamicProgress';
import {
  isLanguage,
  isTool,
  Language,
  Skill,
  SkillLevel,
  SkillLevelLength,
} from '../../../utils/Skills/types';
// eslint-disable-next-line import/no-cycle
import SkillModal from '../SkillModal';

interface SkillProps {
  skill: Skill;
}

interface SkillCardProps extends Omit<CardProps, 'children'>, SkillProps {
  withModal?: boolean;
}

interface SkillHeaderProps extends SkillProps {
  order?: TitleOrder;
}

export const skillHasYears = (skill: Skill): skill is Language =>
  isLanguage(skill) || isTool(skill);

/* --------------------------------- Modules -------------------------------- */
export const SkillHeader = (props: SkillHeaderProps) => {
  const { skill, order = 3 } = props;

  return (
    <Group>
      <ThemeIcon color="info" variant="light" radius="xl" size="xl" style={{ overflow: 'hidden' }}>
        <skill.icon size="100%" />
      </ThemeIcon>
      <Title style={{ textTransform: 'none' }} order={order}>
        {skill.name}
      </Title>
    </Group>
  );
};

export const SkillYearsText = (props: SkillProps) => {
  const { skill } = props;
  const { t } = useTranslation('common');

  const YearsText = useMemo(() => {
    if (skillHasYears(skill)) {
      const endDate = dayjs(skill.end ?? new Date(Date.now()));
      const startDate = dayjs(skill.start);
      const yrs = endDate.diff(startDate, 'years');
      return (
        <>
          {t('skills.expYrs')}:&nbsp;
          <Text color="info" weight="bolder">
            {yrs}
          </Text>
          &nbsp; ({startDate.year()} - {endDate.year()})
        </>
      );
    }
    return <></>;
  }, [skill]);

  return <>{YearsText}</>;
};

export const SkillLevelText = (props: SkillProps) => {
  const { skill } = props;
  const { t } = useTranslation('common');

  return (
    <>
      {t('skills.expLvl')}:&nbsp;
      <Text color="info" weight="bold">
        {t(`skills.${SkillLevel[skill.level]}` as 'skills.Beginner')}
      </Text>
    </>
  );
};

export const SkillLevelBar = (props: SkillProps) => {
  const { skill } = props;

  const lvlP = ((skill.level + 1) / (SkillLevelLength / 2)) * 100;

  return (
    <DynamicProgress
      sections={[{ color: 'red' }, { color: 'yellow' }, { color: 'teal' }]}
      value={lvlP}
    />
  );
};
/* ----------------------------- End of Modules ----------------------------- */

const SkillCard = (props: SkillCardProps) => {
  const {
    withModal = true,
    skill,
    style = { minWidth: '320px' },
    p = 'xs',
    mr = 'auto',
    withBorder = true,
  } = props;
  const uId = useId();

  const [opened, { close, open }] = useDisclosure(false);

  /* ------------------------------- Components ------------------------------- */
  const SCard = useMemo(
    () => (
      <>
        <Stack key={uId} mr="auto" py="md">
          <Card style={style} p={p} mr={mr} withBorder={withBorder}>
            <Card.Section
              style={{
                color: 'unset',
                textDecoration: 'unset',
                cursor: withModal ? 'pointer' : 'unset',
                userSelect: 'none',
              }}
              p="md"
              withBorder
              onClick={withModal ? open : undefined}
            >
              <SkillHeader skill={skill} />
            </Card.Section>
            {skillHasYears(skill) && <Divider label={<SkillYearsText skill={skill} />} />}
            <Divider label={<SkillLevelText skill={skill} />} />
            <SkillLevelBar skill={skill} />
          </Card>
        </Stack>
      </>
    ),
    [skill]
  );

  return (
    <>
      {withModal && (
        <SkillModal key={`${uId}-SkillModal`} skill={skill} opened={opened} onClose={close} />
      )}
      {SCard}
    </>
  );
};

export default SkillCard;
