import clsx from "clsx";
import { NavLink } from "react-router";
import styles from "./ExplorerFile.module.css";

type ExplorerFileProps = {
  to: string;
  end?: boolean;
  children: string;
};

export function ExplorerFile({ to, end, children }: ExplorerFileProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => clsx(styles.file, isActive && styles.active)}
    >
      {children}
    </NavLink>
  );
}
