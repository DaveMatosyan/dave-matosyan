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
  metadataBase: new URL("https://dave-matosyan.site"),
  title: "David Matosyan — Backend & AI Engineer",
  description:
    "Claude writes most of my code. I do the parts AI can't — knowing what the product needs, catching what's wrong, shipping what's right. Python, C#/.NET, fintech, agentic AI. Yerevan, Armenia.",
  openGraph: {
    title: "David Matosyan — Backend & AI Engineer",
    description:
      "Backend judgment × AI speed. Python, C#/.NET, payments, secrets management, ticketing, multi-agent LLM pipelines.",
    url: "/",
    siteName: "David Matosyan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Matosyan — Backend & AI Engineer",
    description:
      "Backend judgment × AI speed. Python, C#/.NET, payments, secrets management, ticketing, multi-agent LLM pipelines.",
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
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
      <body
        suppressHydrationWarning
        className="bg-ink text-cream font-sans antialiased"
      >
        <SmoothScroll />
        {children}
        <Grain />
      </body>
    </html>
  );
}
