import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord — a 100-word villain monologue.
// The lich keeps postponing his eclipse for one more cup of tea:
// his phylactery is the chipped cup he drinks from every dawn.
// Winner D1 (25/25) beat D3/D14/D19 on tie-break: clearest scheme
// (the eclipse postponed twice), most concrete detail (greased
// stairs, chipped-cup phylactery), and the most quotable last line
// ("First, this tea.") — the sting a game performer can land.
const ENTRY = `The eclipse was set for Tuesday. I moved it to Thursday. Then next month. The stars will wait — they have waited a thousand years; they can wait while I finish this tea. My soul lives in a chipped cup. I hid it there during a siege, and now each dawn I drink from my immortality and burn my tongue. The heroes will come. They always come. Let them climb the stairs. The stairs are the trap: seven hundred steps, no rail, and I have greased every tenth one. When they arrive, panting, I shall rise. Eventually. First, this tea.`;

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
