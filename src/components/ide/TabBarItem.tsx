import clsx from "clsx";
import { NavLink } from "react-router";
import styles from "./TabBarItem.module.css";

type TabBarItemProps = {
  to: string;
  end?: boolean;
  children: string;
};

export function TabBarItem({ to, end, children }: TabBarItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => clsx(styles.tab, isActive && styles.active)}
    >
      {children}
    </NavLink>
  );
}
