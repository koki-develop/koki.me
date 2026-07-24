import styles from "./StatusBar.module.css";
import type { IdeFile } from "./files";

type StatusBarProps = {
  activeFile: IdeFile | undefined;
};

export function StatusBar({ activeFile }: StatusBarProps) {
  return (
    <div className={styles.bar}>
      {activeFile && <span>{activeFile.name}</span>}
      <span className={styles.right}>
        <span>UTF-8</span>
        <span>LF</span>
        {activeFile && <span>{activeFile.language}</span>}
      </span>
    </div>
  );
}
