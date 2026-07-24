import { Button } from "@ps1ui/core";
import type { CategoryCount } from "../lib";
import styles from "./CategoryFilter.module.css";

type CategoryFilterProps = {
  categories: CategoryCount[];
  active: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.filter}>
      {categories.map((category) => {
        const isActive = category.name === active;
        return (
          <Button
            key={category.name}
            size="md"
            variant={isActive ? "primary" : "secondary"}
            aria-pressed={isActive}
            onClick={() => onChange(category.name)}
          >
            {category.name}
            <span className={styles.count}>{category.count}</span>
          </Button>
        );
      })}
    </div>
  );
}
