import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gatherly | Be There. Feel It.",
  description: "Discover events, music, art, food and experiences.",
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