import { Box, Footer, Select, Stack, useMantineTheme, Text } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import useStyles from '../styles';

const AppFooter = () => {
  const { classes } = useStyles();
  const { t, i18n } = useTranslation('common');
  const theme = useMantineTheme();
  const router = useRouter();

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
  ];

  const handleLanguageChange = (value: string | null) => {
    if (value) {
      router.push(router.pathname, router.asPath, { locale: value });
    }
  };

  // Find the current language label
  const currentLanguageLabel =
    languageOptions.find((lang) => lang.value === i18n.language)?.label || 'Language';

  return (
    <Footer height="128px" p="xs" className={classes.footer}>
      <Box className={classes.footerBox}>
        <Stack spacing="xs">
          <Box>
            <Select
              placeholder={currentLanguageLabel}
              data={languageOptions}
              value={i18n.language}
              onChange={handleLanguageChange}
            />
          </Box>
          <Box>
            <Text color="dimmed" size="sm" sx={{ display: 'inline-flex' }}>
              {t('footer.createdBy')}&nbsp;
              <Text weight="bold" color={theme.primaryColor}>
                Travis Baldwin
              </Text>
            </Text>
          </Box>
        </Stack>
      </Box>
    </Footer>
  );
};

export default AppFooter;
