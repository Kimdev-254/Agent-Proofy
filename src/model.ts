import OpenAI from "openai";

const client = new OpenAI({
  baseURL: process.env.LLM_BASE_URL,
  apiKey: process.env.LLM_API_KEY,
});

async function main() {
  const models = await client.models.list();
  for await (const m of models) {
    console.log(m.id);
  }
}

main();