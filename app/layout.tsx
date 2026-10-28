import "./globals.css";

import { Header } from "@/components/header";
import { SideBar, SecondarySideBar } from "@/components/sidebar";
import { StatusBar } from "@/components/status-bar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Lex Borisoff",
    default: "Lex Borisoff",
  },
  description: "Lex Borisoff - Software Engineer",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.ReactNode {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col antialiased">
        <Header />
        <div className="flex h-full overflow-hidden">
          <SideBar />
          {children}
          <SecondarySideBar />
        </div>
        <StatusBar />
      </body>
    </html>
  );
}
