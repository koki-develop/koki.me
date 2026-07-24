import { LinkChip } from "@/components/LinkChip";
import { SocialIcon } from "@/components/SocialIcon";
import type { Socials } from "@/types";
import styles from "./ContactLinks.module.css";

type ContactLinksProps = {
  socials: Socials;
};

export function ContactLinks({ socials }: ContactLinksProps) {
  return (
    <div className={styles.contacts}>
      {Object.values(socials).map((social) => (
        <LinkChip
          key={social.name}
          href={social.url}
          title={social.name}
          icon={<SocialIcon name={social.name} width={18} height={18} />}
        >
          @{social.handle}
        </LinkChip>
      ))}
    </div>
  );
}
