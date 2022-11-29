import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageContent from '../common/components/common/Page/PageContent';

export default function Custom500() {
  return (
    <PageContent>
      <h1>500 - Server-side error occurred</h1>;
    </PageContent>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});
