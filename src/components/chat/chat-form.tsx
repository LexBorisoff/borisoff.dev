"use client";

import { useActionState, useRef } from "react";

import { sendChatMessage } from "@/actions/message";

type ChatFormProps = {
  action: (message: string) => void;
};

export function ChatForm({ action }: ChatFormProps): React.ReactNode {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function sendChatMessageAction(
    prevState: void | undefined,
    formData: FormData,
  ): Promise<void> {
    const message = (formData.get("promptInput") as string) || "";
    action(message);
    await sendChatMessage(prevState, formData);
    textareaRef.current?.focus();
  }

  const [state, formAction] = useActionState(sendChatMessageAction, undefined);

  return (
    <form
      action={formAction}
      className="m-5 mt-0 flex w-full flex-col gap-4 rounded-2xl border border-gray-300 bg-gray-100 p-4"
    >
      <textarea
        ref={textareaRef}
        name="promptInput"
        id="promptInput"
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
  );
}
