import type { Metadata } from "next";
import Contact from "@/modules/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact | Portfolio V2",
  description: "Get in touch with me for collaborations, jobs, or projects",
};

export default function ContactPage() {
  return <Contact />;
}
