import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fontsource/fira-code";

export const metadata: Metadata = {
  title: "AkohTech | Portfolio",
  description:
    "Creative Portfolio of AkohTech showcasing innovative web design, development, and creative solutions.",
  keywords: [
    "AkohTech",
    "Portfolio",
    "Web Developer",
    "UI/UX",
    "Next.js",
    "Tailwind CSS",
    "Frontend Developer",
  ],
  authors: [{ name: "AkohTech" }],
  creator: "AkohTech",
  openGraph: {
    title: "AkohTech | Portfolio",
    description:
      "Creative Portfolio of AkohTech showcasing innovative web design, development, and creative solutions.",
    url: "https://akohtech.com",
    siteName: "AkohTech",
    images: [
      {
        url: "https://akohtech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AkohTech Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
