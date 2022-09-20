import { Stack, Title, TitleProps } from '@mantine/core';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  titleProps?: TitleProps;
  title?: string;
  /**
   * Header size to correctly position a div so when hash (#) navigating the Section is below the header.
   *
   * Default: 50px
   */
  headerSize?: string;
}

/**
 * A hash (#) navigateable Section of content.
 */
const Section = (props: SectionProps) => {
  const {
    children,
    id,
    titleProps = { order: 1, align: 'left', ml: '2rem' },
    title,
    headerSize = '50px',
  } = props;

  return (
    <>
      <div style={{ position: 'relative', top: `-${headerSize}` }} id={id} />
      <Stack align="left">
        {title && <Title {...titleProps}>{title}</Title>}
        {children}
      </Stack>
    </>
  );
};

export default Section;
