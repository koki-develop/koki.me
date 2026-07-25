import { Button, Stack } from "@ps1ui/core";
import type { CategoryCount, CategoryFilterValue } from "../lib";
import styles from "./CategoryFilter.module.css";

type CategoryFilterProps = {
  categories: CategoryCount[];
  active: CategoryFilterValue;
  onChange: (category: CategoryFilterValue) => void;
};

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <Stack direction="row" wrap gap="sm">
      {categories.map((category) => {
        const isActive = category.name === active;
        return (
          <Button
            key={category.name}
            variant={isActive ? "primary" : "secondary"}
            aria-pressed={isActive}
            onClick={() => onChange(category.name)}
          >
            {category.name}
            {/* Deliberately not a <Text>: every Text variant pins a colour
                token, which would break the count's contrast on the filled
                primary button. `currentColor` at reduced opacity is the only
                treatment that reads correctly on both button variants. */}
            <span className={styles.count}>{category.count}</span>
          </Button>
        );
      })}
    </Stack>
  );
}
