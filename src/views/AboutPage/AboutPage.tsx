import config from "@/config";
import { Heading, Stack } from "@ps1ui/core";
import { CertificationList } from "./components/CertificationList";
import { ContactLinks } from "./components/ContactLinks";
import { ExploreLinks } from "./components/ExploreLinks";
import { ProfileHeader } from "./components/ProfileHeader";
import { SkillList } from "./components/SkillList";

export function AboutPage() {
  return (
    <Stack gap="xl">
      <ProfileHeader name={config.profile.name} bio={config.profile.bio} />

      <Stack gap="md">
        <Heading level={2} size="sm" variant="subtle">
          Socials
        </Heading>
        <ContactLinks socials={config.socials} />
      </Stack>

      <Stack gap="md">
        <Heading level={2} size="sm" variant="subtle">
          Skills
        </Heading>
        <SkillList skills={config.skills} />
      </Stack>

      <Stack gap="md">
        <Heading level={2} size="sm" variant="subtle">
          Certifications
        </Heading>
        <CertificationList certifications={config.certifications} />
      </Stack>

      <Stack gap="md">
        <Heading level={2} size="sm" variant="subtle">
          Explore
        </Heading>
        <ExploreLinks />
      </Stack>
    </Stack>
  );
}
