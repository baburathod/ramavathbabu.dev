import type { Metadata } from "next";
import { Syne, JetBrains_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Ramavath Babu | MERN Full Stack Developer",
  description: "Portfolio of Ramavath Babu, a MERN Full Stack Developer building scalable, production-ready web applications.",
  keywords: ["MERN Stack", "Full Stack Developer", "React", "Node.js", "Next.js", "TypeScript", "Ramavath Babu", "Software Engineer"],
  authors: [{ name: "Ramavath Babu" }],
  creator: "Ramavath Babu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramavathbabu.dev", // Replace with your actual domain later
    title: "Ramavath Babu | MERN Full Stack Developer",
    description: "Building scalable, production-ready full-stack web applications using MongoDB, Express, React, and Node.js.",
    siteName: "Ramavath Babu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramavath Babu | MERN Full Stack Developer",
    description: "Building scalable, production-ready full-stack web applications.",
    creator: "@baburathod",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} ${jetbrains.variable} min-h-screen bg-background antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
