import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import { Heading, Stack, Text } from "@ps1ui/core";
import { CertificationList } from "./components/CertificationList";
import { ContactLinks } from "./components/ContactLinks";
import { NextFiles } from "./components/NextFiles";
import { ProfileHeader } from "./components/ProfileHeader";
import { SkillList } from "./components/SkillList";

export function AboutPage() {
  return (
    <Stack gap="xl">
      <Stack gap="md">
        <SourceComment>about.md</SourceComment>
        <ProfileHeader name={config.profile.name} role={config.profile.role} />
      </Stack>

      <ContactLinks socials={config.socials} />

      <Text size="md">{config.profile.bio}</Text>

      <Stack gap="md">
        <Heading level={2} size="sm" variant="subtle">
          <span aria-hidden="true">## </span>Skills
        </Heading>
        <SkillList skills={config.skills} />
      </Stack>

      <Stack gap="md">
        <Heading level={2} size="sm" variant="subtle">
          <span aria-hidden="true">## </span>Certifications
        </Heading>
        <CertificationList certifications={config.certifications} />
      </Stack>

      <Stack gap="md">
        <Heading level={2} size="sm" variant="subtle">
          <span aria-hidden="true">## </span>Next
        </Heading>
        <NextFiles />
      </Stack>
    </Stack>
  );
}
