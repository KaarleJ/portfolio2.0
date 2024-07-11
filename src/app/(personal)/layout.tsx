import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

import StarsCanvas from "@/components/StarCanvas";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const LiveVisualEditing = dynamic(
  () => import("@/sanity/loader/LiveVisualEditing")
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className={cn(
          "bg-background font-sans antialiased overflow-x-hidden overflow-y-auto",
          fontSans.variable
        )}
      >
        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
      </div>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  );
}
