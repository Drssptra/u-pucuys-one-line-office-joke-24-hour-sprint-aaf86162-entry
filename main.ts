// One-line office joke for make.fun's "One-Line Office Joke: 24-Hour Sprint".
// The program writes exactly one joke, with no trailing newline, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), and echoes
// the same line to stdout.

const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const joke =
  "The office printer only jams on documents marked urgent, which is how I know it can read.";

if (
  joke.length < 1 ||
  joke.length > 200 ||
  joke.includes("\n") ||
  joke.trim() !== joke
) {
  throw new Error("joke must be a single line of 1 to 200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
process.stdout.write(joke + "\n");
