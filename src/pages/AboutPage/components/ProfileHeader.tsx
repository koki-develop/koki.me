import { Heading, Stack, Text } from "@ps1ui/core";

type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <Stack gap="xs">
      <Heading level={1}>{name}</Heading>
      <Text size="md" variant="muted">
        {bio}
      </Text>
    </Stack>
  );
}
