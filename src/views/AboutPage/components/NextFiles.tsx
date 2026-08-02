import { IDE_FILES } from "@/components/ide/files";
import { Anchor, List, ListItem, Text } from "@ps1ui/core";
import styles from "./NextFiles.module.css";

export function NextFiles() {
  // Derived from IDE_FILES rather than listed again: the section points at every
  // file other than the About page it sits on, so a new page shows up here as
  // soon as it joins the Explorer.
  const files = IDE_FILES.filter((file) => file.path !== "/");

  return (
    <List>
      {files.map((file) => (
        // The name and description are laid out inline rather than in a Stack:
        // List draws its `-` marker as an inline-block ::before, and a flex
        // child would push itself onto the line below it.
        <ListItem key={file.path}>
          {/* The column that lines the descriptions up is this span and not the
              Anchor: sizing the link itself would stretch its box — the hover
              color and the click target with it — past the end of the filename
              it underlines. A bare <span> because the box holds no text of its
              own; it exists only to reserve the width. */}
          <span className={styles.nameColumn}>
            <Anchor href={file.path} variant="subtle">
              {file.name}
            </Anchor>
          </span>
          <Text as="span" variant="muted" size="xs">
            {file.description}
          </Text>
        </ListItem>
      ))}
    </List>
  );
}
