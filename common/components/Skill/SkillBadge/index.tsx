import { Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useId, useMemo } from 'react';
import { HistoryItem } from '../../../hooks/useHistory';
import { Skill } from '../../../utils/Skills/types';
// eslint-disable-next-line import/no-cycle
import SkillModal, { SkillModalBody, SkillModalHeader } from '../SkillModal';

interface SkillBadgeProps {
  skill: Skill;
  onOpen?: (historyItem: HistoryItem) => void;
  isChildOfModal?: boolean;
}

const SkillBadge = (props: SkillBadgeProps) => {
  const { skill, onOpen, isChildOfModal = false } = props;
  const [opened, { close, open }] = useDisclosure(false);
  const uId = useId();

  const SModal = useMemo(
    () => !isChildOfModal && <SkillModal skill={skill} opened={opened} onClose={close} />,
    [skill, opened, close, isChildOfModal]
  );

  useEffect(() => {
    if (opened) {
      onOpen?.({
        key: `${uId}-Modal-${skill.id}-Item`,
        header: <SkillModalHeader key={`${uId}-Modal-${skill.id}-Header`} skill={skill} />,
        body: (
          <SkillModalBody
            key={`${uId}-Modal-${skill.id}-Body`}
            skill={skill}
            isChild={isChildOfModal}
          />
        ),
      });
    }
  }, [opened]);

  return (
    <>
      {!isChildOfModal && SModal}
      <Badge leftSection={<skill.icon />} sx={{ cursor: 'pointer' }} onClick={open}>
        {skill.name}
      </Badge>
    </>
  );
};

export default SkillBadge;
