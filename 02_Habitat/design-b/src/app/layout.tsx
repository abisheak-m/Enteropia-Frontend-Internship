import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habitat | Private Property Collection",
  description: "Discover exceptional homes and distinctive spaces with Habitat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
