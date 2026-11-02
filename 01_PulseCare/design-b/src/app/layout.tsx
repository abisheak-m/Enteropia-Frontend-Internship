import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PulseCare | Healthcare with a Human Touch",
  description:
    "Discover thoughtful healthcare, experienced specialists and personalised wellness at PulseCare.",
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