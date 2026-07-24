import config from "@/config";
import { Anchor } from "@ps1ui/core";
import clsx from "clsx";
import { ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./Explorer.module.css";
import { IDE_FILES } from "./files";

export function Explorer() {
  const [open, setOpen] = useState(true);

  return (
    <nav className={styles.explorer} aria-label="Explorer">
      <div className={styles.label}>Explorer</div>
      <button
        type="button"
        className={styles.folder}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <ChevronDown
            size={14}
            aria-hidden="true"
            className={styles.folderIcon}
          />
        ) : (
          <ChevronRight
            size={14}
            aria-hidden="true"
            className={styles.folderIcon}
          />
        )}
        koki-sato/
      </button>
      {open && (
        <div className={styles.tree}>
          {IDE_FILES.map((file) => (
            <NavLink
              key={file.path}
              to={file.path}
              end={file.path === "/"}
              className={({ isActive }) =>
                clsx(styles.file, isActive && styles.active)
              }
            >
              {file.name}
            </NavLink>
          ))}
        </div>
      )}
      <div className={styles.links}>
        <div className={styles.label}>Links</div>
        {config.socials.map((social) => (
          <Anchor
            key={social.name}
            variant="subtle"
            className={styles.link}
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className={styles.linkIcon}
            />
            {social.name.toLowerCase()}
          </Anchor>
        ))}
      </div>
    </nav>
  );
}
