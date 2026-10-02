import type { Metadata } from "next";
import Testimonials from "@/modules/Testimonials/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Portfolio V2",
  description: "Read recommendations and reviews from satisfied clients",
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
