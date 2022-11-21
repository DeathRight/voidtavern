import { Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useMemo } from 'react';
import { Skill } from '../../../utils/Skills/types';
// eslint-disable-next-line import/no-cycle
import SkillModal, { SkillModalBody } from '../SkillModal';

interface SkillBadgeProps {
  skill: Skill;
  onOpen?: (modal: React.ReactNode) => void;
  onClose?: () => void;
  isChildOfModal?: boolean;
}

const SkillBadge = (props: SkillBadgeProps) => {
  const { skill, onOpen, onClose, isChildOfModal = false } = props;
  const [opened, { close, open }] = useDisclosure(false);

  const SModal = useMemo(
    () =>
      isChildOfModal ? (
        <SkillModalBody
          skill={skill}
          onBadgeOpen={onOpen}
          onBadgeClose={onClose}
          isChild={isChildOfModal}
        />
      ) : (
        <SkillModal skill={skill} opened={opened} onClose={close} />
      ),
    [skill, opened, close, isChildOfModal]
  );

  useEffect(() => {
    if (opened) {
      onOpen?.(SModal);
      console.log('Opened');
    } else {
      console.log('Closed!');
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
