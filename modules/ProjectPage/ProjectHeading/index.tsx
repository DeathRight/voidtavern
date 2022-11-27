import { Box, Group, Space, Stack, Text, Title } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { useContext, useId, useMemo } from 'react';
import { SiGithub } from 'react-icons/si';
import SkillBadge from '../../../common/components/Skill/SkillBadge';
import ProjectContext from '../ProjectContext';
import useStyle from './styles';

const ProjectHeading = () => {
  const uId = useId();
  const project = useContext(ProjectContext);
  const { classes } = useStyle();
  const { t } = useTranslation('projects');

  const skillBadges = useMemo(
    () => project?.skills.map((s) => <SkillBadge key={`skillBadge:${s.id}`} skill={s} />),
    []
  );

  const pName = project?.name ?? 'Project';
  //First letter has separate styling
  const fL = pName.substring(0, 1);
  //Rest of the title
  const rL = pName.substring(1);

  return (
    <div key={uId}>
      <Stack align="center" px="xs" pb="xs">
        <Stack className={classes.textStack} align="center">
          <Title dir="ltr" order={1} className={classes.title}>
            <Text className={classes.firstLetter}>{fL}</Text>
            <Text className={classes.restL}>{rL}</Text>
          </Title>
          <Text size="lg" align="center" mt="-1em" color="dimmed" className={classes.desc}>
            {project?.description}
          </Text>
        </Stack>
        <Space />
        <Text
          size="sm"
          component="a"
          href={project?.link}
          target="_blank"
          color="dimmed"
          variant="link"
        >
          <Text>
            <Group spacing="xs">
              <SiGithub />
              <Text color="dimmed">{t('github')}</Text>
            </Group>
          </Text>
        </Text>
        <Box
          id="skillBadges"
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: theme.spacing.sm,
          })}
        >
          {skillBadges}
        </Box>
        <Space />
      </Stack>
    </div>
  );
};

export default ProjectHeading;
