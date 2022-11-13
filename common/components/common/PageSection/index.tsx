import { TFunction } from 'next-i18next';
import Section, { SectionProps } from '../Section';
import STG from '../STG';

interface PageSectionProps extends Omit<SectionProps, 'title'> {
  /**
   * Unique global ID (should be the same passed to `PageBody`)
   */
  globalId: string;
  t?: TFunction;
  title?: string;
}

const PageSection = (props: PageSectionProps) => {
  const { globalId, id, children, t, title = '(Placeholder)', ...spread } = props;

  return (
    <STG.Section id={`${globalId}.${id}`} style={{ width: '100%' }}>
      <Section id={id} title={t ? t(`sections.${id}`) : title} {...spread}>
        {children}
      </Section>
    </STG.Section>
  );
};

export default PageSection;
