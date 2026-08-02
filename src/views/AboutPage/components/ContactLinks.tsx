import { SocialIcon } from "@/components/SocialIcon";
import type { Socials } from "@/types";
import { Button, Stack } from "@ps1ui/core";

type ContactLinksProps = {
  socials: Socials;
};

export function ContactLinks({ socials }: ContactLinksProps) {
  return (
    <Stack direction="row" wrap gap="sm">
      {Object.values(socials).map((social) => (
        <Button
          key={social.name}
          as="a"
          variant="secondary"
          href={social.url}
          title={social.name}
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon name={social.name} width={16} height={16} />@
          {social.handle}
        </Button>
      ))}
    </Stack>
  );
}
