import {
  LinkButton,
  Separator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@olyx/react";
import { CodeTabs, CopyButton } from "@/components/misc";
import { CodeCommandTabs, ComponentPreview } from "@/widgets/misc";

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
  code: ({
    __raw__,
    __bun__,
    __npm__,
    __pnpm__,
    __yarn__,
    ...props
  }: React.ComponentProps<"code"> & {
    __raw__?: string;
    __pnpm__?: string;
    __yarn__?: string;
    __bun__?: string;
    __npm__?: string;
  }) => {
    const isCodeCommandMenu = __npm__ && __pnpm__ && __yarn__ && __bun__;

    if (isCodeCommandMenu) {
      return (
        <CodeCommandTabs
          __bun__={__bun__}
          __npm__={__npm__}
          __pnpm__={__pnpm__}
          __yarn__={__yarn__}
        />
      );
    }

    return (
      <>
        {__raw__ && <CopyButton value={__raw__} />}
        <code {...props} />
      </>
    );
  },
  CodeTabs,
  TabsList,
  TabsTab,
  TabsPanel,
  ComponentPreview,
};
