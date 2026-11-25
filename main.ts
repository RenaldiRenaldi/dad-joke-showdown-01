import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "I named my dog 'Stay'. Now when I call him, he never comes.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, joke, "utf8");
