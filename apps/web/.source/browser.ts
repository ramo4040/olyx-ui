// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"components/accordion.mdx": () => import("../content/docs/components/accordion.mdx?collection=docs"), "(root)/index.mdx": () => import("../content/docs/(root)/index.mdx?collection=docs"), }),
};
export default browserCollections;