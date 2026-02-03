import fs from "node:fs/promises";
import path from "node:path";
import type { FC } from "react";
import type { BundledLanguage } from "shiki";
import { CodeBlock } from "@/components/misc";
import {
  getRegistryItem,
  type RegistryItemFiles,
} from "@/lib/get-registry-item";
import { CodeCollapsibleWrapper } from "../code-collapsibe-wrapper";

type Props = {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
};

interface CodeFile {
  code: string;
  language: BundledLanguage;
  title?: string;
}

function buildCodeFiles(
  data: RegistryItemFiles,
  defaultTitle?: string,
): CodeFile[] {
  const files: CodeFile[] = [];

  if (data.tsx) {
    files.push({
      code: data.tsx,
      language: "tsx",
      title: defaultTitle,
    });
  }

  if (data.css) {
    files.push({
      code: data.css,
      language: "css",
      title: "style.css",
    });
  }

  return files;
}

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

  let data: RegistryItemFiles | null = null;

  // load components code from the packages/react using name
  if (name) {
    data = await getRegistryItem(name);
  }

  // load particles code from the apps/web using src path
  if (src) {
    const file = await fs.readFile(
      path.join(`${process.cwd()}/src/`, src),
      "utf-8",
    );
    data = { tsx: file };
  }

  if (!data?.tsx) {
    return null;
  }

  const codeFiles = buildCodeFiles(data, title);

  if (!collapsible) {
    return (
      <>
        {codeFiles.map((file, i) => (
          <CodeBlock
            key={i}
            title={file.title}
            code={file.code}
            language={(language as BundledLanguage) ?? file.language}
          />
        ))}
      </>
    );
  }

  return codeFiles.map((file, i) => (
    <CodeCollapsibleWrapper key={i}>
      <CodeBlock
        title={file.title}
        code={file.code}
        language={(language as BundledLanguage) ?? file.language}
      />
    </CodeCollapsibleWrapper>
  ));
};
