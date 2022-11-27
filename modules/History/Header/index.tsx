import { ActionIcon, Group, GroupProps } from '@mantine/core';
import { IconArrowBack, IconX } from '@tabler/icons';
import { useMemo } from 'react';
import { useHistoryContext } from '../Context';
import useStyle from './styles';

interface HistoryHeaderProps extends Omit<GroupProps, 'children'> {
  onClose?: () => void;
}

const HistoryHeader = (props: HistoryHeaderProps) => {
  const { onClose, align = 'flex-start', mb = 'sm', ...spread } = props;
  const { classes } = useStyle();
  const history = useHistoryContext();

  const BackBtn = useMemo(() => {
    let cN = classes.backBtn;
    const isZeroth = history.active < 1;
    if (isZeroth) cN += ` ${classes.collapsed}`;
    return (
      <ActionIcon
        tabIndex={isZeroth ? -1 : undefined}
        size="xl"
        className={cN}
        aria-label={!isZeroth ? 'Previous' : undefined}
        aria-hidden={isZeroth}
        onClick={() => history.remove()}
      >
        <IconArrowBack />
      </ActionIcon>
    );
  }, [history.active]);

  const Header = useMemo(() => {
    if (history.list[history.active]) {
      return <>{history.list[history.active].header}</>;
    }
    return undefined;
  }, [history.active]);

  return history.list.length ? (
    <Group align={align} mb={mb} {...spread}>
      {BackBtn}
      {Header}
      <ActionIcon
        size="xl"
        className={classes.closeBtn}
        aria-label="Close Modal"
        onClick={() => {
          onClose?.();
          history.clear();
        }}
      >
        <IconX />
      </ActionIcon>
    </Group>
  ) : (
    <></>
  );
};

export default HistoryHeader;
