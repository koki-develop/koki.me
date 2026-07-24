import config from "@/config";
import { GitBranch } from "lucide-react";
import styles from "./TitleBar.module.css";

export function TitleBar() {
  return (
    <div className={styles.bar}>
      <span className={styles.dots} aria-hidden="true">
        <span className={`${styles.dot} ${styles.dotDanger}`} />
        <span className={`${styles.dot} ${styles.dotAccent}`} />
        <span className={`${styles.dot} ${styles.dotPrimary}`} />
      </span>
      <span className={styles.title}>{config.profile.name}</span>
      <span className={styles.branch}>
        <GitBranch size={13} aria-hidden="true" className={styles.branchIcon} />
        main
      </span>
    </div>
  );
}
