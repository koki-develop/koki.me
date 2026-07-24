import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Gutter.module.css";

const MIN_LINES = 1;

type GutterProps = {
  height: number;
};

export function Gutter({ height }: GutterProps) {
  const gutterRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(MIN_LINES);

  useLayoutEffect(() => {
    const gutterEl = gutterRef.current;
    if (!gutterEl) return;

    const style = getComputedStyle(gutterEl);
    const lineHeight = parseFloat(style.lineHeight);
    const paddingY =
      parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);

    if (!lineHeight) return;

    const available = height - paddingY;
    setLineCount(Math.max(MIN_LINES, Math.ceil(available / lineHeight)));
  }, [height]);

  const lines = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className={styles.gutter} aria-hidden="true" ref={gutterRef}>
      {lines.map((line) => (
        <div key={line} className={styles.line}>
          {line}
        </div>
      ))}
    </div>
  );
}
