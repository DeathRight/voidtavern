import { Divider, Stack, Text, Title } from '@mantine/core';
import { useContext, useId } from 'react';
import { SiGithub } from 'react-icons/si';
import ProjectContext from '../ProjectContext';

const ProjectHeading = () => {
  const uId = useId();
  const project = useContext(ProjectContext);

  return (
    <div key={uId}>
      <Stack align="left">
        <Title align="left" ml="2rem">
          {project?.name || 'Project'}
        </Title>
        <Text color="dimmed" variant="link">
          <Text color="dimmed" mr="xs">
            <SiGithub />
            View on Github
          </Text>
        </Text>
      </Stack>
      <Divider />
    </div>
  );
};

export default ProjectHeading;
