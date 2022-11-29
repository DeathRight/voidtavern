import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageContent from '../common/components/common/Page/PageContent';

export default function Custom404() {
  return (
    <PageContent>
      <h1>404 - Page Not Found</h1>
    </PageContent>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});
