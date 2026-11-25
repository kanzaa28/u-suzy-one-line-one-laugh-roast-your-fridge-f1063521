// One Line, One Laugh: Roast Your Fridge
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
//
// Writes a single roast line (<= 200 chars, one line, no trailing newline)
// to /output/entry.txt. Deterministic: the same bytes on every run.
//
// The line was picked by drafting 12 candidates and self-judging them
// head-to-head against the kit's published judge criteria, in order:
//   1. roasts a fridge (the named target) in a single line
//   2. a specific, recognisable detail (the crisper drawer, the lettuce)
//   3. a twist paying off in the last few words ("a dare nobody takes")
//   4. reads cleanly aloud as one line
//   5. fresh image ("hospice for vegetables") rather than a worn-out joke
// Winner over the runner-up ("pickles from 2019 ... salad bag that achieved
// sentience"): the hospice metaphor is a single coherent escalating image
// and fresher than the expired-food trope.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge's crisper drawer is a hospice for vegetables: the lettuce went in crisp and hopeful, and came out a science experiment that smells like a dare nobody takes.";

// Enforce the sealed gate ourselves before writing: 1-200 characters,
// a single line, not only whitespace. A bad line must fail the run,
// never ship as an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate requires 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
