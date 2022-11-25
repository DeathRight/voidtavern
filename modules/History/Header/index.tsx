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
    if (history.active < 1) cN += ` ${classes.collapsed}`;
    return (
      <ActionIcon size="xl" className={cN} onClick={() => history.remove()}>
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
