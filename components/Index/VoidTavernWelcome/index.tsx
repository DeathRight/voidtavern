import { Box, Title, Text, useMantineTheme, Divider } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import useStyle from './styles';

export default () => {
  const { classes } = useStyle();
  const theme = useMantineTheme();
  const { t } = useTranslation('common');
  return (
    <Box
      dir="ltr"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title
        className={classes.title}
        mb="-24px"
        sx={{
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          flexDirection: 'row',
        }}
      >
        <Text className={classes.void}>V</Text>
        <Text className={classes.tavern}>oid</Text>
      </Title>
      <Title order={1} className={classes.welcome}>
        {t('welcome')}
      </Title>
      <Title
        className={classes.title}
        mt="-12px"
        sx={{
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          flexDirection: 'row',
        }}
      >
        <Text className={classes.void}>T</Text>
        <Text className={classes.tavern}>avern</Text>
      </Title>
      <Text
        color="dimmed"
        size="xs"
        sx={{
          display: 'inline-flex',
        }}
      >
        {t('portfolio')}&nbsp;
        <Text weight="bold" color={theme.primaryColor}>
          Travis Baldwin
        </Text>
      </Text>
      <Divider />
    </Box>
  );
};
