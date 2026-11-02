import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habitat | Find Your Place",
  description: "Discover homes and properties with Habitat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}