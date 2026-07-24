import Bluesky from "@/assets/social/bluesky.svg?react";
import GitHub from "@/assets/social/github.svg?react";
import X from "@/assets/social/x.svg?react";
import Zenn from "@/assets/social/zenn.svg?react";
import type { FunctionComponent, SVGProps } from "react";

const ICONS: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  GitHub,
  X,
  Bluesky,
  Zenn,
};

type SocialIconProps = { name: string } & SVGProps<SVGSVGElement>;

export function SocialIcon({ name, ...props }: SocialIconProps) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
