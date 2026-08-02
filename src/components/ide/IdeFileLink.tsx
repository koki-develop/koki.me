import clsx from "clsx";

type IdeFileLinkProps = {
  href: string;
  label: string;
  active: boolean;
  /**
   * Base and active classes from the caller's CSS module. The two places this
   * link appears — the tab strip and the Explorer — draw the same thing very
   * differently, and that difference is the only difference between them.
   */
  className: string;
  activeClassName: string;
};

/**
 * A link to one of the site's "files", as rendered in both rows of the IDE
 * chrome. Shared so the two can't drift apart on the part that isn't styling.
 */
export function IdeFileLink({
  href,
  label,
  active,
  className,
  activeClassName,
}: IdeFileLinkProps) {
  return (
    <a
      href={href}
      className={clsx(className, active && activeClassName)}
      // Both rows are primary navigation, and `active` is drawn with a border
      // and a colour change only — `aria-current` is what carries "you are here"
      // to anything that can't see either.
      aria-current={active ? "page" : undefined}
    >
      {label}
    </a>
  );
}
