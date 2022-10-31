import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageBody from '../common/components/common/PageBody';

export default function Custom500() {
  return (
    <PageBody>
      <h1>500 - Server-side error occurred</h1>;
    </PageBody>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});
