import { Heading, Text } from "@ps1ui/core";
import styles from "./ProfileHeader.module.css";

type ProfileHeaderProps = {
  name: string;
  role: string;
};

export function ProfileHeader({ name, role }: ProfileHeaderProps) {
  return (
    <>
      <Heading level={1} className={styles.name}>
        {name}
      </Heading>
      <Text as="span" variant="primary" size="md" className={styles.role}>
        {role}
      </Text>
    </>
  );
}
