import fs from "node:fs/promises";
import path from "node:path";
import type { FC } from "react";
import type { BundledLanguage } from "shiki";
import { CodeBlock } from "@/components/misc";
import { getRegistryItem } from "@/lib/get-registry-item";
import { CodeCollapsibleWrapper } from "../code-collapsibe-wrapper";

type Props = {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
};

export const ComponentSource: FC<Props> = async ({
  name,
  language,
  src,
  title,
  collapsible = true,
}) => {
  if (!name && !src) {
    return null;
  }

  let code: string | undefined;

  // load components code from the packages/react using name
  if (name) {
    const data = await getRegistryItem(name);
    code = data ?? undefined;
  }

  // load particles code from the apps/web using src path
  if (src) {
    const file = await fs.readFile(
      path.join(`${process.cwd()}/src/`, src),
      "utf-8",
    );
    code = file;
  }

  if (!code) {
    return null;
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  if (!collapsible) {
    return (
      <CodeBlock title={title} code={code} language={lang as BundledLanguage} />
    );
  }

  return (
    <CodeCollapsibleWrapper>
      <CodeBlock title={title} code={code} language={lang as BundledLanguage} />
    </CodeCollapsibleWrapper>
  );
};
