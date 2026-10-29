import {
  streamText,
  convertToModelMessages,
  toUIMessageStream,
  createUIMessageStreamResponse,
} from "ai";

import { getPortfolioInstructions } from "@/lib/ai/instructions";
import { model } from "@/lib/ai/provider";

export async function POST(req: Request): Promise<Response> {
  const { messages } = await req.json();
  const instructions = await getPortfolioInstructions();

  const result = streamText({
    model,
    messages: await convertToModelMessages(messages),
    instructions,
  });

  const stream = toUIMessageStream({ stream: result.stream });

  return createUIMessageStreamResponse({ stream });
}
