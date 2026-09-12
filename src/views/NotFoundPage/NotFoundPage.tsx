import { Anchor, Heading, Stack, Text } from "@ps1ui/core";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    // `align="start"` keeps the link the size of its own text: a flex item is
    // blockified, and a blockified anchor takes the whole column with its hover
    // colour and click target.
    <Stack gap="lg" align="start">
      <Heading level={1}>Page not found</Heading>
      <Text variant="muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </Text>
      <Anchor
        variant="subtle"
        href="/"
        leading={<ArrowLeft size={14} aria-hidden="true" />}
      >
        Back to home
      </Anchor>
    </Stack>
  );
}
