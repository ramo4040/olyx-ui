import "./style.css";

import { ScrollArea } from "@olyx/react";
import { getIconForLanguageExtension } from "@/lib/get-extension-logo";
import { highlightCode } from "@/lib/highlight-code";
import { CopyButton } from "../copy-button";

type Props = {
  code: string;
  language: string;
  title?: string | undefined;
  copyButton?: boolean;
  showLineNumbers?: boolean;
};

export async function CodeBlock({
  code,
  language,
  title,
  copyButton = true,
  showLineNumbers = true,
}: Props) {
  const highlightedCode = await highlightCode(code, language, {
    showLineNumbers,
  });

  return (
    <figure data-rehype-pretty-code-figure="">
      {title && (
        <figcaption data-language={language} data-rehype-pretty-code-title="">
          {language && getIconForLanguageExtension(language)}
          {title}
        </figcaption>
      )}

      {copyButton && <CopyButton className="copy-button" value={code} />}

      <ScrollArea data-slot="code-block">
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <> */}
        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </ScrollArea>
    </figure>
  );
}
