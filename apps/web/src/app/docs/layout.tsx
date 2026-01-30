import "./style.css";
import { source } from "@/lib/source";
import { DocsSidebar, MainNavbar } from "@/widgets/misc";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(source.pageTree);

  return (
    <div data-ui="docs-layout">
      <header data-ui="docs-header">
        <MainNavbar />
      </header>

      <main>
        <DocsSidebar tree={source.pageTree} />
        {children}
      </main>
    </div>
  );
}
