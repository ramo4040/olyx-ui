import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import z from "zod/v4";
import { transformers } from "@/lib/highlight-code";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      links: z
        .object({
          doc: z.string().optional(),
        })
        .optional(),
    }),
  },
});

const rehypePrettyCodeOptions: Options = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  transformers,
};

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift();
      plugins.push([rehypePrettyCode as never, rehypePrettyCodeOptions]);
      return plugins;
    },
  },
});
