import type { Metadata } from "next";
import Work from "@/modules/Work/Work";

export const metadata: Metadata = {
  title: "Work | Portfolio V2",
  description: "Browse recent projects and live case studies",
};

export default function WorkPage() {
  return <Work />;
}
