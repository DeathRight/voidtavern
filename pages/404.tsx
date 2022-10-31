import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageBody from '../common/components/common/PageBody';

export default function Custom404() {
  return (
    <PageBody>
      <h1>404 - Page Not Found</h1>
    </PageBody>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});
