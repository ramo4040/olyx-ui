import "./style.css";
import "./particles-style.css";
import {
  ArrowDown01Icon,
  Copy01Icon,
  LinkSquare02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  ButtonGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@olyx/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClaudeAI } from "@/assets/svg/claude";
import { Markdown } from "@/assets/svg/markdown";
import { OpenAI } from "@/assets/svg/openai";
import { V0 } from "@/assets/svg/v0";
import { source } from "@/lib/source";
import { DocsToc } from "@/widgets/misc";
import { mdxComponents } from "../../../../mdx-components";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  if (!doc.title || !doc.description) {
    notFound();
  }

  return {
    description: doc.description,
    title: `${doc.title} - olyx ui`,
  };
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const doc = page.data;
  const MDX = doc.body;
  const links = doc.links;

  return (
    <div data-ui="docs-page">
      <header>
        <div className="description-container">
          <div>
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
          </div>
          <div className="actions">
            {links?.doc && (
              <Button
                size="sm"
                variant="neutral"
                mode="stroke"
                render={
                  <Link
                    href={links.doc as any}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <HugeiconsIcon icon={LinkSquare02Icon} />
                    API Reference
                  </Link>
                }
              />
            )}

            <ButtonGroup>
              <Button size="sm" variant="neutral" mode="stroke">
                <HugeiconsIcon icon={Copy01Icon} /> Copy page
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
                  <DropdownMenuItem>
                    <Markdown />
                    View as Markdown
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <V0 />
                    Open in v0
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <OpenAI />
                    Open in ChatGPT
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ClaudeAI />
                    Open in Claude
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        </div>
        <div className="example-container">
          <div className="example" />
        </div>
      </header>

      {/* Render MDX content */}
      <main>
        <div data-ui="docs-content">
          <MDX components={mdxComponents} />
        </div>

        <DocsToc toc={doc.toc} />
      </main>
    </div>
  );
}
