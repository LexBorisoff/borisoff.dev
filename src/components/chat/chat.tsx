"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { cn } from "cn";
import React, { useEffect, useRef, useState } from "react";

export function Chat(): React.ReactNode {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  function focusTextarea(): void {
    textareaRef.current?.focus();
  }

  useEffect(() => {
    focusTextarea();
  }, []);

  function handleSend(): void {
    const text = input.trim();
    if (!text || isLoading) return;

    sendMessage({ text });
    setInput("");
    focusTextarea();
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>): void {
    e.preventDefault();
    handleSend();
  }

  function handleKeydown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSend();
    }
  }

  return (
    <div className="flex h-full w-full max-w-200 min-w-100 flex-col gap-5">
      <div className="flex flex-1 flex-col gap-4 overflow-auto p-5">
        {messages.map((message, i) => (
          <article
            key={`${message}-${i}`}
            className={cn("flex", {
              "justify-end": message.role === "user",
              "justify-start": message.role === "assistant",
            })}
          >
            <p className="w-fit max-w-130 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2">
              {message.parts.map((part, index) =>
                part.type === "text" ? (
                  <React.Fragment key={`${part}-${index}`}>
                    {part.text.includes("—")
                      ? part.text.replace("—", " - ")
                      : part.text}
                  </React.Fragment>
                ) : null,
              )}
            </p>
          </article>
        ))}
      </div>

      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="m-5 mt-0 flex w-full flex-col gap-4 rounded-2xl border border-gray-300 bg-gray-100 p-4"
        >
          <textarea
            ref={textareaRef}
            name="promptInput"
            id="promptInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeydown}
            className="field-sizing-content max-h-40 w-full resize-none border-transparent text-sm ring-0 outline-none"
            placeholder="Ask about my experience, projects, next chapter..."
          />
          <div className="flex items-center justify-between">
            <div></div>
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-emerald-500 px-3 py-2 text-white"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
