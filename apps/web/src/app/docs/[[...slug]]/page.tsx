import { notFound } from "next/navigation";
import { source } from "@/lib/source";

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <div className="flex">
      {/* YOUR UI components */}
      <h1>{page.data.title}</h1>
      <p>{page.data.description}</p>

      {/* Render MDX content */}
      <MDX />
    </div>
  );
}
