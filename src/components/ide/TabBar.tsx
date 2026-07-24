import clsx from "clsx";
import { NavLink } from "react-router";
import styles from "./TabBar.module.css";
import { IDE_FILES } from "./files";

export function TabBar() {
  return (
    <nav className={styles.bar} aria-label="Files">
      {IDE_FILES.map((file) => (
        <NavLink
          key={file.path}
          to={file.path}
          end={file.path === "/"}
          className={({ isActive }) =>
            clsx(styles.tab, isActive && styles.active)
          }
        >
          {file.name}
        </NavLink>
      ))}
    </nav>
  );
}
