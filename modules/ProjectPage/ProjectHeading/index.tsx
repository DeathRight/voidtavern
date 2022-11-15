import { Grid, Group, Space, Stack, Text, Title } from '@mantine/core';
import { useContext, useId, useMemo } from 'react';
import { SiGithub } from 'react-icons/si';
import SkillBadge from '../../../common/components/Skill/SkillBadge';
import ProjectContext from '../ProjectContext';

const ProjectHeading = () => {
  const uId = useId();
  const project = useContext(ProjectContext);

  const skillBadges = useMemo(
    () => project?.skills.map((s) => <SkillBadge key={`skillBadge:${s.id}`} skill={s} />),
    []
  );

  return (
    <div key={uId}>
      <Stack align="center" px="xs" pb="xs">
        <Stack align="center">
          <Title order={1}>{project?.name || 'Project'}</Title>
          <Text size="lg" align="center" mt="-0.5rem">
            {project?.description}
          </Text>
        </Stack>
        <Space />
        <Text size="sm" component="a" href={project?.link} color="dimmed" variant="link">
          <Text>
            <Group spacing="xs">
              <SiGithub />
              <Text color="dimmed">View on Github</Text>
            </Group>
          </Text>
        </Text>
        <Grid id="skillBadges">{skillBadges}</Grid>
        <Space />
      </Stack>
    </div>
  );
};

export default ProjectHeading;
