import config from "@/config";
import { useState } from "react";
import styles from "./Explorer.module.css";
import { ExplorerFile } from "./ExplorerFile";
import { ExplorerFolder } from "./ExplorerFolder";
import { ExplorerLabel } from "./ExplorerLabel";
import { ExplorerLink } from "./ExplorerLink";
import { IDE_FILES } from "./files";

export function Explorer() {
  const [open, setOpen] = useState(true);

  return (
    <nav className={styles.explorer} aria-label="Explorer">
      <ExplorerLabel>Explorer</ExplorerLabel>
      <ExplorerFolder open={open} onToggle={() => setOpen((prev) => !prev)}>
        koki-sato/
      </ExplorerFolder>
      {open && (
        <div className={styles.tree}>
          {IDE_FILES.map((file) => (
            <ExplorerFile
              key={file.path}
              to={file.path}
              end={file.path === "/"}
            >
              {file.name}
            </ExplorerFile>
          ))}
        </div>
      )}
      <div className={styles.links}>
        <ExplorerLabel>Links</ExplorerLabel>
        {Object.values(config.socials).map((social) => (
          <ExplorerLink key={social.name} href={social.url}>
            {social.name.toLowerCase()}
          </ExplorerLink>
        ))}
      </div>
    </nav>
  );
}
