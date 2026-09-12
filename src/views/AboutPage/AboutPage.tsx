import { SectionHeading } from "@/components/SectionHeading";
import config from "@/config";
import { Stack } from "@ps1ui/core";
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
        <SectionHeading>Socials</SectionHeading>
        <ContactLinks socials={config.socials} />
      </Stack>

      <Stack gap="md">
        <SectionHeading>Skills</SectionHeading>
        <SkillList skills={config.skills} />
      </Stack>

      <Stack gap="md">
        <SectionHeading>Certifications</SectionHeading>
        <CertificationList certifications={config.certifications} />
      </Stack>

      <Stack gap="md">
        <SectionHeading>Explore</SectionHeading>
        <ExploreLinks />
      </Stack>
    </Stack>
  );
}
