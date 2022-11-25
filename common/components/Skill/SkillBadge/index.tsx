import { Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useMemo } from 'react';
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

  const SModal = useMemo(
    () => !isChildOfModal && <SkillModal skill={skill} opened={opened} onClose={close} />,
    [skill, opened, close, isChildOfModal]
  );

  useEffect(() => {
    if (opened) {
      onOpen?.({
        header: <SkillModalHeader skill={skill} />,
        body: <SkillModalBody skill={skill} isChild={isChildOfModal} />,
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
