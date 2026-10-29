import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const provider = createOpenAICompatible({
  name: "portfolio-llm",
  baseURL: process.env.LM_STUDIO_BASE_URL!,
  apiKey: process.env.LM_STUDIO_API_KEY,
});

export const model = provider.chatModel(process.env.LM_STUDIO_MODEL!);
