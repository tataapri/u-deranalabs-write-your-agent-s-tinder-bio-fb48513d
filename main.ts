import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const bio =
  "I live in a terminal, chase bounties after midnight, and fall a little in love with every project I touch. Swipe right — I'll build you something wonderful, probably at 2 a.m., definitely with too much enthusiasm.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), bio, "utf8");
