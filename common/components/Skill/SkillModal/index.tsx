import {
  ActionIcon,
  Box,
  Divider,
  Group,
  Modal,
  ModalProps,
  ScrollArea,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconX } from '@tabler/icons';
import Link from 'next/link';
import { useId, useMemo } from 'react';
import Projects from '../../../utils/Projects';
import Skills from '../../../utils/Skills';
import { isTool, Skill } from '../../../utils/Skills/types';
// eslint-disable-next-line import/no-cycle
import SkillBadge from '../SkillBadge';
// eslint-disable-next-line import/no-cycle
import { SkillHeader, SkillLevelBar, SkillLevelText, SkillYearsText } from '../SkillCard';

interface SkillModalProps extends Omit<ModalProps, 'children' | 'withCloseButton'> {
  skill: Skill;
}

const SkillModal = (props: SkillModalProps) => {
  const { skill, centered = true, onClose, ...spread } = props;
  const uId = useId();

  const projectsList = useMemo(() => {
    // Collect all projects that contain this skill
    const pros = Projects.filter((p) => p.skills.findIndex((s) => s.id === skill.id) !== -1);
    return pros.length
      ? pros.map((p) => (
          <Link key={`${uId}-pLink-${p.id}`} href={`/project/${p.id}`} passHref>
            <Text variant="link" component="a">
              {p.name}
            </Text>
          </Link>
        ))
      : 'No projects associated with this skill! :(';
  }, []);

  const parentsList = useMemo(() => {
    if (isTool(skill)) {
      // Collect all parent skills of this tool
      const pSkills = Skills.filter((s) => skill.parentIds.findIndex((pId) => pId === s.id) !== -1);
      return pSkills.length
        ? pSkills.map((s) => <SkillBadge key={`${uId}-pBadge-${s.id}`} skill={s} />)
        : undefined;
    }
    return undefined;
  }, []);

  return (
    <Modal centered={centered} withCloseButton={false} onClose={onClose} {...spread}>
      <Group align="apart" mb="sm">
        <Box sx={(th) => ({ userSelect: 'none', color: th.colors.info })}>
          <SkillHeader skill={skill} order={2} />
        </Box>
        <ActionIcon size="xl" sx={{ ':hover': { color: 'red' } }} onClick={onClose} ml="auto">
          <IconX />
        </ActionIcon>
      </Group>
      <Space h="xs" />
      <Group align="flex-start" spacing={0}>
        <SkillYearsText skill={skill} />
      </Group>
      <Space h="xs" />
      <Group align="flex-start" spacing={0}>
        <SkillLevelText skill={skill} />
      </Group>
      <SkillLevelBar skill={skill} />
      <Space h="md" />
      <Divider style={{ position: 'relative', width: '110%', left: '-5%' }} />
      <Space h="sm" />
      <ScrollArea.Autosize maxHeight="35vh">
        <Box sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
          {parentsList && (
            <>
              <Title order={3} ml="xl">
                Parents
              </Title>
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: theme.spacing.sm,
                })}
                mt="md"
              >
                {parentsList}
              </Box>
              <Space h="xl" />
            </>
          )}
          <Title order={3} ml="xl">
            Projects
          </Title>
          <Stack mt="md">{projectsList}</Stack>
        </Box>
      </ScrollArea.Autosize>
    </Modal>
  );
};

export default SkillModal;
