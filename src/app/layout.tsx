import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/data/resume";

export const metadata: Metadata = {
  title: `${personal.name} — Portfolio`,
  description: personal.bio,
  keywords: ["portfolio", "developer", "full-stack", "data analyst", "BIT Mesra", "Mayank Narayan"],
  openGraph: {
    title: `${personal.name} — Portfolio`,
    description: personal.bio,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
