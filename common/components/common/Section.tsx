import { Stack, Title, TitleProps } from '@mantine/core';

export interface SectionProps {
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
  const { children, id, titleProps, title, headerSize = '50px' } = props;

  const defTitleProps: TitleProps = { order: 2, align: 'left', ml: '2rem' };
  const tProps: TitleProps = titleProps ? { ...defTitleProps, ...titleProps } : defTitleProps;

  return (
    <>
      <div style={{ position: 'relative', top: `-${headerSize}` }} id={id} />
      <Stack align="left">
        {title && <Title {...tProps}>{title}</Title>}
        {children}
      </Stack>
    </>
  );
};

export default Section;
