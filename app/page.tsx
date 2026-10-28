import { Chat } from "@/components/chat/chat";

export default function Home(): React.ReactNode {
  return (
    <main className="flex flex-1 justify-center bg-emerald-100">
      <Chat />
    </main>
  );
}
