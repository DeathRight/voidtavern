import { Modal, ModalProps, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { useId, useMemo } from 'react';
import Projects from '../../../utils/Projects';
import { Skill } from '../../../utils/Skills/types';
// eslint-disable-next-line import/no-cycle
import SkillCard from '../SkillCard';

interface SkillModalProps extends Omit<ModalProps, 'children'> {
  skill: Skill;
}

const SkillModal = (props: SkillModalProps) => {
  const { skill, centered = true, ...spread } = props;
  const uId = useId();

  const projectsList = useMemo(() => {
    // Collect all projects that contain this skill
    const pros = Projects.filter((p) => p.skills.findIndex((s) => s.id === skill.id) !== -1);
    return pros.length > 0
      ? pros.map((p) => (
          <Link key={`${uId}-pLink-${p.id}`} href={`/project/${p.id}`} passHref>
            <Text variant="link" component="a">
              {p.name}
            </Text>
          </Link>
        ))
      : 'No projects associated with this skill! :(';
  }, []);

  return (
    <Modal centered={centered} {...spread}>
      <SkillCard skill={skill} style={{ minWidth: '100%' }} withModal={false} />
      <Title order={3} ml="xl">
        Projects
      </Title>
      <Stack mt="md">{projectsList}</Stack>
    </Modal>
  );
};

export default SkillModal;
