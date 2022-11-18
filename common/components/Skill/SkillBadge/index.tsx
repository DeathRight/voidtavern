import { Badge } from '@mantine/core';
import { useState } from 'react';
import { Skill } from '../../../utils/Skills/types';
import SkillModal from '../SkillModal';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = (props: SkillBadgeProps) => {
  const { skill } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <SkillModal skill={skill} opened={open} onClose={() => setOpen(false)} />
      <Badge
        component="a"
        leftSection={<skill.icon />}
        sx={{ cursor: 'pointer' }}
        onClick={() => setOpen(true)}
      >
        {skill.name}
      </Badge>
    </>
  );
};

export default SkillBadge;
