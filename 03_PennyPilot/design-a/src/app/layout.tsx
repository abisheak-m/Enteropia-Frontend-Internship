import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PennyPilot | Personal Finance",
  description: "A smarter way to track your money, budgets and savings.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}