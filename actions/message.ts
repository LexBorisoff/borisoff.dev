/* eslint-disable @typescript-eslint/require-await */
"use server";

export type State = {
  promptInput: string;
};

export async function sendChatMessage(
  prevState: void | undefined,
  formData: FormData,
): Promise<void> {
  const fields: State = {
    promptInput: (formData.get("promptInput") as string) ?? "",
  };
  console.log("fields >>>", fields);
}
