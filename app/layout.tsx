import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Grain from "@/components/Grain";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Matosyan — Backend Engineer × AI-Native Builder",
  description:
    "Claude writes most of my code. I do the parts AI can't — knowing what the product needs, catching what's wrong, shipping what's right.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)requestAnimationFrame(function(){document.documentElement.classList.add("anim")});`,
          }}
        />
      </head>
      <body className="bg-ink text-cream font-sans antialiased">
        <SmoothScroll />
        {children}
        <Grain />
      </body>
    </html>
  );
}
