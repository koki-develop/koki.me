import { Stack } from "@ps1ui/core";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Explorer } from "./Explorer";
import { findIdeFile } from "./files";
import { Gutter } from "./Gutter";
import styles from "./IdeShell.module.css";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import { TitleBar } from "./TitleBar";

export function IdeShell() {
  const { pathname } = useLocation();
  const activeFile = findIdeFile(pathname);
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const mainEl = mainRef.current;
    const contentEl = contentRef.current;
    if (!scrollEl || !mainEl || !contentEl) return;

    const measure = () => {
      const mainStyle = getComputedStyle(mainEl);
      const mainPaddingBlock =
        parseFloat(mainStyle.paddingTop) + parseFloat(mainStyle.paddingBottom);
      const contentHeight = contentEl.offsetHeight + mainPaddingBlock;
      setContentHeight(Math.max(contentHeight, scrollEl.clientHeight));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(contentEl);
    observer.observe(scrollEl);

    return () => observer.disconnect();
  }, []);

  return (
    <Stack gap="none" className={styles.window}>
      <TitleBar />
      <Stack direction="row" gap="none" className={styles.middle}>
        <Explorer />
        <Stack gap="none" className={styles.editor}>
          <TabBar />
          <Stack
            direction="row"
            gap="none"
            align="start"
            className={styles.scroll}
            ref={scrollRef}
          >
            <Gutter height={contentHeight} />
            <main className={styles.main} ref={mainRef}>
              <div ref={contentRef}>
                <Outlet />
              </div>
            </main>
          </Stack>
          <StatusBar activeFile={activeFile} />
        </Stack>
      </Stack>
    </Stack>
  );
}
