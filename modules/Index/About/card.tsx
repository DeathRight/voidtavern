import { Card, Image, Stack, Text, Title } from '@mantine/core';

const StatText = (props: { children: React.ReactNode }) => (
  <Text size="sm" pl="xs">
    {props.children}
  </Text>
);

const AboutCard = () => {
  const bDate = new Date(1997, 8, 8);
  const diffD = Date.now() - bDate.getTime();
  const age = Math.abs(new Date(diffD).getUTCFullYear() - 1970);

  return (
    <Card shadow="xs" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src="/images/me.jpg" height={248} />
      </Card.Section>
      <Text color="dimmed" size="xs" pt="xs">
        Pictured: Travis Baldwin, 2019, Colorized
      </Text>
      <Stack mt="md" spacing="xs">
        <Title order={3}>Character</Title>
        <StatText>Name: Travis Baldwin</StatText>
        <StatText>Created on: {`${bDate.toLocaleDateString()}`}</StatText>
        <StatText>Level: {`${age}`}</StatText>
      </Stack>
    </Card>
  );
};

export default AboutCard;
