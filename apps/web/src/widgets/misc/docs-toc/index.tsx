"use client";

import * as React from "react";
import "./style.css";

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!activeId && itemIds?.length) {
      setActiveId(itemIds[0] ?? null);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%" },
    );

    for (const id of itemIds ?? []) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      }
    };
  }, [itemIds, activeId]);

  return activeId;
}

type Props = {
  toc: {
    title?: React.ReactNode;
    url: string;
    depth: number;
  }[];
};

export function DocsToc({ toc }: Props) {
  const itemIds = React.useMemo(
    () => toc.map((item) => item.url.replace("#", "")),
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);

  if (!toc?.length) {
    return null;
  }

  return (
    <div data-ui="docs-toc">
      <h3>On this page</h3>
      <div className="links">
        {toc.map(({ title, url, depth }) => (
          <a
            key={url}
            href={url}
            data-active={url === `#${activeHeading}`}
            data-depth={depth}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
}
