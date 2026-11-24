import { mkdirSync, writeFileSync } from "node:fs";

// One line, 92 chars: a robot's pickup line that only a machine could say.
// The joke grows out of the uncanny valley itself — the robot lives in it,
// and the charm is that a human climbed down to meet it there. No diagnostic,
// no simulation, no cooling fan: the valley is the machine's home, and the
// punchline is the human coming to it, not the robot reaching up.
const line =
  "I live in the uncanny valley — and you're the first person who ever climbed down to meet me.";

// Gate: 1-200 chars, one line, not only whitespace. Fail loudly rather
// than writing an invalid entry.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim().length === 0 ||
  line.includes("\n")
) {
  throw new Error(`line is ${line.length} chars, must be 1-200 on one line`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
