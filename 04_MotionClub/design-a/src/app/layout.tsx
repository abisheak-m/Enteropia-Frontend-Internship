import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MotionClub | Move With Purpose",
  description: "Fitness programs, expert trainers and a community that moves together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}