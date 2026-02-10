"use client";

import {
  ArrowDown01Icon,
  Copy01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import { ButtonGroup } from "@olyx/react/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@olyx/react/dropdown-menu";
import type { FC } from "react";
import { ClaudeAI } from "@/assets/svg/claude";
import { Markdown } from "@/assets/svg/markdown";
import { OpenAI } from "@/assets/svg/openai";
import { V0 } from "@/assets/svg/v0";
import { useCopy } from "@/hooks/use-copy";

const openInLlmChat = (llm: string) => {
  const siteName = "Olyx UI";
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${window.location.pathname}`;
  const prompt = `I'm looking at this ${siteName} documentation: ${pageUrl}.md\nHelp me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`;
  const encodedPrompt = encodeURIComponent(prompt);
  window.open(`${llm}?q=${encodedPrompt}`, "_blank");
};

export const CopyMDXButton: FC<{ value: string; path: string }> = ({
  value,
  path,
}) => {
  const { copied, copy } = useCopy();

  const handleViewMarkdown = () => {
    window.open(`${path}.md`, "_blank");
  };

  return (
    <ButtonGroup>
      <Button
        size="sm"
        variant="neutral"
        mode="stroke"
        onClick={() => copy(value)}
        disabled={copied}
      >
        {copied ? (
          <HugeiconsIcon icon={Tick02Icon} />
        ) : (
          <HugeiconsIcon icon={Copy01Icon} />
        )}
        Copy page
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button size="sm" variant="neutral" mode="stroke">
              <HugeiconsIcon icon={ArrowDown01Icon} />
            </Button>
          }
        />
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleViewMarkdown}>
            <Markdown />
            View as Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => openInLlmChat("https://v0.dev")}>
            <V0 />
            Open in v0
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => openInLlmChat("https://chatgpt.com")}
          >
            <OpenAI />
            Open in ChatGPT
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => openInLlmChat("https://claude.ai")}>
            <ClaudeAI />
            Open in Claude
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
};
