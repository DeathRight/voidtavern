import { Card, Divider, Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { useId, useMemo } from 'react';
import DynamicProgress from '../../../common/components/DynamicProgress';
import { Skill, SkillLevel, SkillLevelLength } from '../../../common/utils/Skills/types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = (props: SkillCardProps) => {
  const { skill } = props;
  const uId = useId();

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

    const LevelText = (
      <Divider
        label={
          <>
            Experience Level:&nbsp;
            <Text color="info" weight="bold">
              {SkillLevel[skill.level]}
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
          {LevelText}
          {LevelBar}
        </Card>
      </Stack>
    );
  }, [skill]);

  return <>{SCard}</>;
};

export default SkillCard;
