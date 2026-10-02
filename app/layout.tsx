import type { Metadata } from "next";
import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

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
  title: "Portfolio V2",
  description: "Modern & interactive personal developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${poppins.variable} font-sora bg-primary text-white antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
