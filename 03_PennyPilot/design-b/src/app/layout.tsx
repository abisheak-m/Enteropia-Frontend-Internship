import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PennyPilot | Premium Finance Dashboard",
  description: "Manage your personal finances with PennyPilot.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}