import { ActionIcon, Group, GroupProps } from '@mantine/core';
import { IconArrowBack, IconX } from '@tabler/icons';
import { useMemo } from 'react';
import { useHistoryContext } from '../Context';

interface HistoryHeaderProps extends Omit<GroupProps, 'children'> {
  onClose?: () => void;
}

const HistoryHeader = (props: HistoryHeaderProps) => {
  const { onClose, align = 'flex-start', mb = 'sm', ...spread } = props;

  const history = useHistoryContext();

  const BackBtn = useMemo(
    () => (
      <ActionIcon size="xl" onClick={() => history.remove()}>
        <IconArrowBack />
      </ActionIcon>
    ),
    []
  );

  const Header = useMemo(() => {
    if (history.list.length && history.list[history.active]) {
      return <>{history.list[history.active].header}</>;
    }
    return <></>;
  }, [history.active]);

  return history.list.length ? (
    <Group align={align} mb={mb} {...spread}>
      {history.list.length > 1 && BackBtn}
      {Header}
      <ActionIcon
        size="xl"
        ml="auto"
        sx={{ ':hover': { color: 'red' } }}
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
