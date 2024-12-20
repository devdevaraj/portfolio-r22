import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StarsCanvas } from "@r22/components/star-background";
import Scrollbar from "@r22/components/scrollbar";
import Cursor from "@r22/components/cursor";
import NavMenu from "@r22/components/nav-menu";
import NavBar from "@r22/components/navbar";
import { GlobalContext } from "@r22/providers/context-provider";
import { cn } from "@r22/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devaraj | Portfolio",
  description: "Software Engineer who know how to plan, design and develop!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={cn("bg-[#030014] overflow-y-auto overflow-x-hidden", inter.className)}>
        <GlobalContext>
          {/* <Cursor /> */}
          <StarsCanvas />
          {/* <Scrollbar />
          <NavBar />
          <NavMenu /> */}
          {children}
        </GlobalContext>
      </body>
    </html>
  );
}
