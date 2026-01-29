export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      sidebar
      <main>
        header-nav
        {children}
      </main>
    </div>
  );
}
