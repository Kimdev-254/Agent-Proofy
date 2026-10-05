import OpenAI from "openai";

const client = new OpenAI({
  baseURL: process.env.LLM_BASE_URL,
  apiKey: process.env.LLM_API_KEY,
});

export async function ask(system: string, user: string): Promise<string> {
  const res = await client.chat.completions.create({
    model: process.env.LLM_MODEL!,
    max_tokens: 2000,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  });
  return res.choices[0].message.content ?? "";
}