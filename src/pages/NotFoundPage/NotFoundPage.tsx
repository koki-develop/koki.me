import { SourceComment } from "@/components/SourceComment";
import { Text } from "@ps1ui/core";
import { BackToHomeLink } from "./components/BackToHomeLink";
import { NotFoundHeading } from "./components/NotFoundHeading";

export function NotFoundPage() {
  return (
    <div>
      <SourceComment>404</SourceComment>
      <NotFoundHeading />
      <Text variant="muted">
        The file you&apos;re looking for doesn&apos;t exist.
      </Text>
      <BackToHomeLink />
    </div>
  );
}
