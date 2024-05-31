import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "KaarleJ - portfolio",
  description: "Kaarle's personal portfolio showcasing his projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] font-sans antialiased overflow-x-hidden overflow-y-auto",
          fontSans.variable
        )}
      >
        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
      </body>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </html>
  );
}
