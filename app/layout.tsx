import type { Metadata } from "next";
import { Sora, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Eki Dama Rukmana | Frontend Developer Portfolio",
  description:
    "Portfolio of Eki Dama Rukmana — Frontend Developer specializing in React, Next.js, and TypeScript. Informatics Engineering graduate (GPA 3.71) with e-Government and modern web development experience.",
  keywords: [
    "Eki Dama Rukmana",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer Indonesia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", jetbrainsMono.variable)}>
      <body
        className={`${sora.variable} ${poppins.variable} font-sora bg-primary text-white antialiased selection:bg-accent selection:text-white`}
      >
        <SmoothScrollProvider>
          <Layout>{children}</Layout>
        </SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
