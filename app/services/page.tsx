import type { Metadata } from "next";
import Services from "@/modules/Services/Services";

export const metadata: Metadata = {
  title: "Services | Portfolio V2",
  description: "Explore services in branding, design, development, and more",
};

export default function ServicesPage() {
  return <Services />;
}
