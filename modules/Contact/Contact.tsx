"use client";

import { motion } from "framer-motion";
import ContactForm from "@/modules/Contact/components/ContactForm";
import RadialGlow from "@/components/ui/radial-glow";
import { fadeIn } from "@/utils/variants";
// import { Mail, MapPin } from "lucide-react";
// import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-14 md:py-18 xl:py-20 flex items-center relative overflow-hidden">
      {/* White Radial Glow in Dark Mode */}
      <RadialGlow variant="contact" />

      <div className="container mx-auto px-6 md:px-16 xl:px-0 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="h2 text-center text-3xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Let&apos;s <span className="text-accent">Connect</span>
          </motion.h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
