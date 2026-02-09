import "./style.css";
import "./particles-style.css";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  LinkSquare02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyMDXButton } from "@/components/misc";
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

  const mdxContent = await doc.getText("raw");

  const pageTree = source
    .getPageTree()
    .children.flatMap((child) =>
      child.type === "page"
        ? [child]
        : child.type === "folder"
          ? child.children.filter((c) => c.type === "page")
          : [],
    );

  const currentPageIndex = pageTree.findIndex((p) => p.$id === page.path);
  const prevLink = pageTree[currentPageIndex - 1];
  const nextLink = pageTree[currentPageIndex + 1];

  return (
    <div data-ui="docs-page">
      {/* Render MDX content */}
      <main>
        <div data-ui="docs-content">
          <header className="page-header">
            <h1>{doc.title}</h1>
            <p>{doc.description}</p>
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

              <CopyMDXButton value={mdxContent} path={page.url} />
            </div>
          </header>

          <MDX components={mdxComponents} />

          <div className="pagination">
            {prevLink && (
              <Link href={{ pathname: prevLink.url }}>
                <span>
                  <HugeiconsIcon icon={ArrowLeft02Icon} />
                  Previous
                </span>

                <p>{prevLink.name}</p>
              </Link>
            )}
            {nextLink && (
              <Link href={{ pathname: nextLink.url }}>
                <span>
                  Up next
                  <HugeiconsIcon icon={ArrowRight02Icon} />
                </span>

                <p>{nextLink.name}</p>
              </Link>
            )}
          </div>
        </div>

        <DocsToc toc={doc.toc} />
      </main>
    </div>
  );
}
