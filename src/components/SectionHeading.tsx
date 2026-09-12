import { Heading } from "@ps1ui/core";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  children: string;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <Heading level={2} size="sm" variant="subtle" className={styles.heading}>
      {children}
    </Heading>
  );
}
