import { Button, Heading, Stack, Text } from "@ps1ui/core";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <Stack gap="lg" align="start">
      <Heading level={1}>Page not found</Heading>
      <Text variant="muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </Text>
      <Button as="a" href="/" variant="secondary">
        <ArrowLeft size={14} aria-hidden="true" />
        Back to home
      </Button>
    </Stack>
  );
}
