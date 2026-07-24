import { Heading, Stack, Text } from "@ps1ui/core";

type WorksPageHeaderProps = {
  count: number;
};

export function WorksPageHeader({ count }: WorksPageHeaderProps) {
  return (
    <Stack gap="xs">
      <Heading level={1} size="2xl">
        Works
      </Heading>
      <Text variant="muted">{count} projects</Text>
    </Stack>
  );
}
