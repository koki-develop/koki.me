import { SourceComment } from "@/components/SourceComment";
import { Anchor, Heading, Text } from "@ps1ui/core";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <div>
      <SourceComment>404</SourceComment>
      <Heading level={1} className={styles.heading}>
        File not found
      </Heading>
      <Text variant="muted">
        The file you&apos;re looking for doesn&apos;t exist.
      </Text>
      <Anchor as={Link} to="/" className={styles.back}>
        <ArrowLeft size={14} aria-hidden="true" />
        back to about.md
      </Anchor>
    </div>
  );
}
