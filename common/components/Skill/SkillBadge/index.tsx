import { Badge } from '@mantine/core';
import Link from 'next/link';
import { Skill } from '../../../utils/Skills/types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = (props: SkillBadgeProps) => {
  const { skill } = props;

  return (
    <Link href={`/skill/${skill.id}`} passHref>
      <Badge component="a" leftSection={<skill.icon />}>
        {skill.name}
      </Badge>
    </Link>
  );
};

export default SkillBadge;
