import { Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Skill } from '../../../utils/Skills/types';
import SkillModal from '../SkillModal';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = (props: SkillBadgeProps) => {
  const { skill } = props;
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <>
      <SkillModal skill={skill} opened={opened} onClose={close} />
      <Badge leftSection={<skill.icon />} sx={{ cursor: 'pointer' }} onClick={open}>
        {skill.name}
      </Badge>
    </>
  );
};

export default SkillBadge;
