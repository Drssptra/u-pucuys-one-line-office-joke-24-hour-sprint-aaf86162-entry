// One-line office joke for make.fun's "One-Line Office Joke: 24-Hour Sprint".
// Prints the joke to stdout and writes the same line to entry.txt inside
// the directory named by MAKEFUN_OUTPUT_DIR (the current directory when
// the variable is unset, e.g. a run by hand).

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const joke =
  "The meeting that should have been an email ran so long it got its own calendar invite.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke + "\n", "utf8");
process.stdout.write(joke + "\n");
