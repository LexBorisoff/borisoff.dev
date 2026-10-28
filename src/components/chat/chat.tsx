"use client";

import { cn } from "cn";
import { useState } from "react";

import { ChatForm } from "./chat-form";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export function Chat(): React.ReactNode {
  const [messages, setMessages] = useState<Message[]>([]);

  function addUserMessage(text: string): void {
    setMessages((prev) => [...prev, { text, sender: "user" }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "AI response", sender: "bot" }]);
    }, 2000);
  }

  return (
    <div className="flex h-full w-full max-w-200 min-w-100 flex-col gap-5">
      <div className="flex flex-1 flex-col gap-2 overflow-auto p-5">
        {messages.map((message, i) => (
          <article
            key={`${message}-${i}`}
            className={cn("flex", {
              "justify-end": message.sender === "user",
              "justify-start": message.sender === "bot",
            })}
          >
            <p className="w-fit max-w-130 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2">
              {message.text}
            </p>
          </article>
        ))}
      </div>

      <div className="flex">
        <ChatForm action={addUserMessage} />
      </div>
    </div>
  );
}
