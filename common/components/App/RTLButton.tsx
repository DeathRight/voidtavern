import { ActionIcon, Tooltip } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { useAppContext } from './AppContext';
import useStyles from './styles';

const RTLButton = () => {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const { rtlValue, onToggleRtl } = useAppContext();

  return (
    <Tooltip
      className={classes.btn}
      label={t('header.tooltips.dir', { mode: rtlValue ? 'LTR' : 'RTL' })}
    >
      <ActionIcon onClick={onToggleRtl} key="rtlToggleBtn" aria-label="RTL Toggle">
        {rtlValue ? <IconTextDirectionLtr /> : <IconTextDirectionRtl />}
      </ActionIcon>
    </Tooltip>
  );
};

export default RTLButton;
