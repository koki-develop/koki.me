import { Heading } from "@ps1ui/core";
import styles from "./NotFoundHeading.module.css";

export function NotFoundHeading() {
  return (
    <Heading level={1} className={styles.heading}>
      File not found
    </Heading>
  );
}
