import { ChevronDown, ChevronRight } from "lucide-react";
import styles from "./ExplorerFolder.module.css";

type ExplorerFolderProps = {
  open: boolean;
  onToggle: () => void;
  children: string;
};

export function ExplorerFolder({
  open,
  onToggle,
  children,
}: ExplorerFolderProps) {
  const Chevron = open ? ChevronDown : ChevronRight;

  return (
    <button
      type="button"
      className={styles.folder}
      aria-expanded={open}
      onClick={onToggle}
    >
      <Chevron size={14} aria-hidden="true" className={styles.icon} />
      {children}
    </button>
  );
}
