import "./style.css";
import "./particles-style.css";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  LinkSquare02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@olyx/react/button";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyMDXButton } from "@/components/misc";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/config";
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
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  if (!doc.title || !doc.description) {
    notFound();
  }

  const ogDescription = `${doc.description} — Olyx UI React component library.`;
  const ogImageUrl = params.slug
    ? `${siteConfig.url}/api/og/${params.slug.join("/")}`
    : `${siteConfig.url}/api/og/docs`;

  return {
    title: doc.title,
    description: ogDescription,
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      title: `${doc.title} - ${siteConfig.name}`,
      description: ogDescription,
      url: `${siteConfig.url}${page.url}`,
      type: "article",
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doc.title} - ${siteConfig.name}`,
      description: ogDescription,
      images: [ogImageUrl],
    },
  };
}

function buildBreadcrumbSchema(slug: string[] | undefined, title: string) {
  const items = [
    { name: "Home", url: siteConfig.url },
    { name: "Docs", url: `${siteConfig.url}/docs` },
  ];

  if (slug && slug.length > 1) {
    const section = slug[0].charAt(0).toUpperCase() + slug[0].slice(1);
    items.push({
      name: section,
      url: `${siteConfig.url}/docs/${slug[0]}`,
    });
  }

  items.push({
    name: title,
    url: `${siteConfig.url}/docs/${slug?.join("/") ?? ""}`,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
      <JsonLd data={buildBreadcrumbSchema(params.slug, doc.title)} />
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
