import fs from "node:fs/promises";
import path from "node:path";
import type { FC } from "react";
import type { BundledLanguage } from "shiki";
import { CodeBlock } from "@/components/misc";

type Props = {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
};

export const ComponentSource: FC<Props> = async ({
  name,
  language,
  src,
  title,
}) => {
  if (!name && !src) {
    return null;
  }

  let code: string | undefined;

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

  return <CodeBlock code={code} lang={lang as BundledLanguage} />;
};
