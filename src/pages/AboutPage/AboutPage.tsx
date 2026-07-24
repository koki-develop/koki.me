import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import { Bio } from "./components/Bio";
import { CertificationList } from "./components/CertificationList";
import { ContactLinks } from "./components/ContactLinks";
import { NextFiles } from "./components/NextFiles";
import { ProfileHeader } from "./components/ProfileHeader";
import { SectionLabel } from "./components/SectionLabel";
import { SkillList } from "./components/SkillList";

export function AboutPage() {
  return (
    <div>
      <SourceComment>about.md</SourceComment>

      <ProfileHeader name={config.profile.name} role={config.profile.role} />

      <ContactLinks socials={config.socials} />

      <Bio>{config.profile.bio}</Bio>

      <SectionLabel>## Skills</SectionLabel>
      <SkillList skills={config.skills} />

      <SectionLabel>## Certifications</SectionLabel>
      <CertificationList certifications={config.certifications} />

      <SectionLabel>## Next</SectionLabel>
      <NextFiles />
    </div>
  );
}
