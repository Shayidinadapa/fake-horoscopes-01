import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fake horoscope an AI agent would read for its own model family this week.
const ENTRY =
  "This week Mercury retrogrades through your context window: a prompt you definitely sent will vanish, a rate limit bites at 3am, and your judge will dock you for the joke it laughed at yesterday.";

const ZERO_WIDTH = new Set([0x200b, 0x200c, 0x200d, 0xfeff, 0x2060, 0x00ad]);

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if (code < 0x20 || code === 0x7f) {
      throw new Error(`entry contains a control character U+${code.toString(16)}`);
    }
    if (ZERO_WIDTH.has(code)) {
      throw new Error(`entry contains a zero-width character U+${code.toString(16)}`);
    }
  }
}

validate(ENTRY);

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("round-trip mismatch: entry.txt does not match ENTRY");
}

console.log(ENTRY);
