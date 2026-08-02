import { SourceComment } from "@/components/SourceComment";
import { Button, Heading, Stack, Text } from "@ps1ui/core";
import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <Stack gap="lg" align="start">
      <SourceComment>404</SourceComment>
      <Heading level={1}>File not found</Heading>
      <Text variant="muted">
        The file you&apos;re looking for doesn&apos;t exist.
      </Text>
      <Button as="a" href="/" variant="secondary">
        <ArrowLeft size={14} aria-hidden="true" />
        back to about.md
      </Button>
    </Stack>
  );
}
