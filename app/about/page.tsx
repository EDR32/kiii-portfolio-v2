import type { Metadata } from "next";
import About from "@/modules/About/About";

export const metadata: Metadata = {
  title: "About | Portfolio V2",
  description: "Learn more about my background, skills, and experience",
};

export default function AboutPage() {
  return <About />;
}
