// Charm the Commuter: Forecast a City That Isn't
// One line of weather, at most 140 characters, for a city that does not exist.
// Writes the forecast to /output/entry.txt (MAKEFUN_OUTPUT_DIR or /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT =
  "Good morning from Drizzlewick: light rain, 12 degrees, and the 7:15 bus is on time for the first time since 2019.";

// Sealed gate, mirrored locally: UTF-8 text of 1 to 140 characters,
// a single line, not only white space. Fail loudly instead of
// writing an entry the gate would refuse.
const chars = [...OUTPUT];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, gate allows 1-140`);
}
if (OUTPUT.includes("\n") || OUTPUT.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), OUTPUT, "utf8");
