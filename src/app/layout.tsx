import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
