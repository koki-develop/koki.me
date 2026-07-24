import { LinkChip } from "@/components/LinkChip";
import { SocialIcon } from "@/components/SocialIcon";
import type { Social } from "@/types";
import styles from "./ContactLinks.module.css";

type ContactLinksProps = {
  socials: Social[];
};

export function ContactLinks({ socials }: ContactLinksProps) {
  return (
    <div className={styles.contacts}>
      {socials.map((social) => (
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
