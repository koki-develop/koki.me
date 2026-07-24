import { SourceComment } from "@/components/SourceComment";
import config from "@/config";
import { Heading, Text } from "@ps1ui/core";
import styles from "./AboutPage.module.css";
import { CertificationList } from "./components/CertificationList";
import { ContactLinks } from "./components/ContactLinks";
import { NextFiles } from "./components/NextFiles";
import { SectionLabel } from "./components/SectionLabel";
import { SkillList } from "./components/SkillList";

export function AboutPage() {
  return (
    <div>
      <SourceComment>about.md</SourceComment>

      <Heading level={1} className={styles.name}>
        {config.profile.name}
      </Heading>
      <Text as="span" variant="primary" size="md" className={styles.role}>
        {config.profile.role}
      </Text>

      <ContactLinks socials={config.socials} />

      <Text size="md" className={styles.bio}>
        {config.profile.bio}
      </Text>

      <SectionLabel>## Skills</SectionLabel>
      <SkillList skills={config.skills} />

      <SectionLabel>## Certifications</SectionLabel>
      <CertificationList certifications={config.certifications} />

      <SectionLabel>## Next</SectionLabel>
      <NextFiles />
    </div>
  );
}
