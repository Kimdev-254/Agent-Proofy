import { readFileSync } from "node:fs";
import { ask } from "./llm.js";

const SYSTEM_PROMPT = `...same prompt as before...`;

async function main() {
  const jobPost = readFileSync(process.argv[2], "utf-8");
  const raw = await ask(SYSTEM_PROMPT, jobPost);

  // Smaller models sometimes wrap JSON in markdown fences, so strip them.
  const cleaned = raw.replace(/```json|```/g, "").trim();
  const spec = JSON.parse(cleaned);
  console.log(JSON.stringify(spec, null, 2));
}

main();