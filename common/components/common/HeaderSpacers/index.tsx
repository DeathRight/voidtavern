import { Group, Space } from '@mantine/core';

/**
 * Spacers that mock 2 header buttons (e.g.: left - burger & home, right - ltr & theme switchers)
 *
 * This is for space consistency where header buttons would float over content.
 */
const HeaderSpacers = () => (
  <Group
    sx={{ visibility: 'hidden', flexWrap: 'nowrap', flex: 0 }}
    px="lg"
    spacing="xs"
    position="right"
    align="center"
  >
    <Space w={24} />
    <Space w={24} />
  </Group>
);

export default HeaderSpacers;
