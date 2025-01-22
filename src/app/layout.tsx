import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Realtime Chat",
  description: "A realtime chat application built with Next.js",
  applicationName: "Realtime Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased">{children}</body>
    </html>
  );
}
