"use client";

import "./style.css";

import { ScrollArea, Spinner } from "@olyx/react";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { type JSX, useLayoutEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import type { BundledLanguage } from "shiki";
import { codeToHast } from "shiki";
import { CopyButton } from "../copy-button";

async function highlight(code: string, lang: BundledLanguage) {
  const hast = await codeToHast(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: "light-dark()",
  });
  return toJsxRuntime(hast, { Fragment, jsx, jsxs }) as JSX.Element;
}

type Props = {
  code: string;
  lang: BundledLanguage;
};

export function CodeBlock({ code, lang }: Props) {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useLayoutEffect(() => {
    let mounted = true;

    highlight(code, lang).then((result) => {
      if (mounted) setContent(result);
    });

    return () => {
      mounted = false;
    };
  }, [code, lang]);

  if (!content) {
    return (
      <div data-ui="code-loading">
        <Spinner size="sm" />
      </div>
    );
  }

  return (
    <ScrollArea data-slot="code-block">
      {content}
      <CopyButton className="copy-btn" value={code} />
    </ScrollArea>
  );
}
