import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackTheVibe Hackathon",
  description: "HackTheVibe, A 36-hour vibe coding hackathon",
  icons: {
    // Use the mascot from the public folder as the site icon / favicon
    icon: "/mascot.png",
    shortcut: "/mascot.png",
    apple: "/mascot.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mascot.png" type="image/png" />
        <link rel="apple-touch-icon" href="/mascot.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased poster-theme`}
      >
        {children}
      </body>
    </html>
  );
}
