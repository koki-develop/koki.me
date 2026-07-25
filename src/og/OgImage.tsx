import { findIdeFile, StatusBar, TitleBar } from "@/components/ide";
import config from "@/config";
import { Heading, Stack, Text } from "@ps1ui/core";
import styles from "./OgImage.module.css";

// The chrome is the site's own TitleBar / StatusBar, so the preview image
// keeps tracking the real UI. Explorer, TabBar and Gutter are left out — at
// the size a social timeline renders this, they read as noise, and both of the
// first two depend on a router context this entry has no reason to set up.
export function OgImage() {
  return (
    <Stack gap="none" className={styles.window}>
      {/* Untitled on purpose — the heading below already says the name. */}
      <TitleBar />
      <Stack gap="xs" justify="center" className={styles.content}>
        <Heading level={1}>{config.profile.name}</Heading>
        {/* `role`, not `bio` — the full bio wraps to two lines at this width. */}
        <Text size="md" variant="muted">
          {config.profile.role}
        </Text>
      </Stack>
      {/* Looked up rather than hardcoded so reordering the IDE file list can't
          bake a stale filename into the image. */}
      <StatusBar activeFile={findIdeFile("/")} />
    </Stack>
  );
}
