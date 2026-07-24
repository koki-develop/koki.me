import { Heading, Stack, Text } from "@ps1ui/core";

type ProfileHeaderProps = {
  name: string;
  role: string;
};

export function ProfileHeader({ name, role }: ProfileHeaderProps) {
  return (
    <Stack gap="xs">
      <Heading level={1}>{name}</Heading>
      <Text variant="primary" size="md">
        {role}
      </Text>
    </Stack>
  );
}
