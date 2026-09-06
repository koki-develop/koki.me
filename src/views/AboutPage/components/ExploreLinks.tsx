import { SITE_PAGES } from "@/components/site/pages";
import { Anchor, List, ListItem, Text } from "@ps1ui/core";
import styles from "./ExploreLinks.module.css";

export function ExploreLinks() {
  // Derived from SITE_PAGES rather than listed again: the section points at
  // every page other than the About page it sits on, so a new page shows up
  // here as soon as it joins the header nav.
  const pages = SITE_PAGES.filter((page) => page.path !== "/");

  return (
    <List>
      {pages.map((page) => (
        // The label and description are laid out inline rather than in a Stack:
        // List draws its `-` marker as an inline-block ::before, and a flex
        // child would push itself onto the line below it.
        <ListItem key={page.path}>
          {/* The column that lines the descriptions up is this span and not the
              Anchor: sizing the link itself would stretch its box — the hover
              color and the click target with it — past the end of the label it
              underlines. A bare <span> because the box holds no text of its
              own; it exists only to reserve the width. */}
          <span className={styles.labelColumn}>
            <Anchor href={page.path} variant="subtle">
              {page.label}
            </Anchor>
          </span>
          <Text as="span" variant="muted" size="xs">
            {page.description}
          </Text>
        </ListItem>
      ))}
    </List>
  );
}
