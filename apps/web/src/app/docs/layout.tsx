import { MainNavbar } from "@/widgets/misc";
import "./style.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-ui="docs-layout">
      <header data-ui="docs-header">
        <MainNavbar />
      </header>

      <main>
        sidebar
        {children}
      </main>
    </div>
  );
}
