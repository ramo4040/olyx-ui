#!/usr/bin/env node
import { Command } from "commander";
import { add, init } from "./commands/index.js";

const program = new Command();

program
  .name("olyx")
  .description("Add Olyx UI components to your project")
  .version("0.0.1");

program
  .command("init")
  .description("Initialize Olyx UI in your project")
  .action(async () => {
    await init();
  });

program
  .command("add")
  .description("Add components to your project")
  .argument("[components...]", "Components to add")
  .action(add);

program.parse();
