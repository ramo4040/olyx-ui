import "./style.css";
import { source } from "@/lib/source";
import { DocsSidebar, MainNavbar } from "@/widgets/misc";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-ui="docs-layout">
      <MainNavbar />

      <main>
        <DocsSidebar tree={source.pageTree} />
        {children}
      </main>
    </div>
  );
}
