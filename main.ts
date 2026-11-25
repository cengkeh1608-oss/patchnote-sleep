import { mkdirSync, writeFileSync } from "node:fs";

// Fix Human Sleep: Funniest Patch Note
// One line of patch notes announcing that human sleep is fixed.
// Winner of a 28-draft pairwise tournament (see drafts.md): the line
// states the fix flatly, carries two concrete details (9 alarms, the
// other eight), and ends on an understated changelog-style kicker.
const ENTRY_TEXT =
  "Fixed: a bug where humans needed 9 alarms to wake up. One alarm is now enough; the other eight have been thanked for their service.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1 to 160 characters of UTF-8 text. Fail loudly
// instead of shipping an invalid entry.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 160) {
  throw new Error(
    "entry must be 1-160 characters, got " + ENTRY_TEXT.length,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
