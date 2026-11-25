import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "I opened a bakery in space. The business has no atmosphere.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, joke, "utf8");
