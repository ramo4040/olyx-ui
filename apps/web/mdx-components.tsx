import { LinkButton, Separator } from "@olyx/react";

export const mdxComponents = {
  h1: ({ ...props }: React.ComponentProps<"h1">) => (
    <h1 data-ui="docs-h1" {...props} />
  ),
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => {
    const id =
      (props as { id?: string }).id ||
      children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase();

    return (
      <h2 {...props} data-ui="docs-h2" id={id}>
        <LinkButton href={`#${id}`}>{children}</LinkButton>
      </h2>
    );
  },
  h3: ({ children, ...props }: React.ComponentProps<"h3">) => {
    const id =
      (props as { id?: string }).id ||
      children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase();

    return (
      <h3 {...props} data-ui="docs-h3" id={id}>
        <LinkButton href={`#${id}`}>{children}</LinkButton>
      </h3>
    );
  },
  h4: ({ ...props }: React.ComponentProps<"h4">) => (
    <h4 data-ui="docs-h4" {...props} />
  ),
  h5: ({ ...props }: React.ComponentProps<"h5">) => (
    <h5 data-ui="docs-h5" {...props} />
  ),
  h6: ({ ...props }: React.ComponentProps<"h6">) => (
    <h6 data-ui="docs-h6" {...props} />
  ),
  hr: ({ ...props }: React.ComponentProps<"div">) => (
    <Separator data-ui="docs-separator" {...props} />
  ),
};
