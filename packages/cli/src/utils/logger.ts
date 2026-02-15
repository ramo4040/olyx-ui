import * as p from "@clack/prompts";

// Simple ANSI color helpers — no extra dependency needed
const esc = (code: string) => (msg: string) => `\x1b[${code}m${msg}\x1b[0m`;
const cyan = esc("36");
const dim = esc("2");
const bold = esc("1");

export const logger = {
  info(msg: string) {
    p.log.info(msg);
  },

  success(msg: string) {
    p.log.success(msg);
  },

  warn(msg: string) {
    p.log.warn(msg);
  },

  error(msg: string) {
    p.log.error(msg);
  },

  break() {
    console.log("");
  },

  highlight(msg: string) {
    return cyan(msg);
  },

  dim(msg: string) {
    return dim(msg);
  },

  bold(msg: string) {
    return bold(msg);
  },
};
