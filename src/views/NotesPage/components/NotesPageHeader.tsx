import { Heading, Stack, Text } from "@ps1ui/core";

export function NotesPageHeader() {
  return (
    <Stack gap="xs">
      <Heading level={1} size="2xl">
        Notes
      </Heading>
      <Text variant="muted">Tech articles published on Zenn.</Text>
    </Stack>
  );
}
