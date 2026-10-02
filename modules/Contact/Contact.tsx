"use client";

import { motion } from "framer-motion";
import ContactForm from "@/modules/Contact/components/ContactForm";
import Circles from "@/components/layout/Circles";
import { fadeIn } from "@/utils/variants";

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 flex items-center relative">
      <Circles />
      <div className="container mx-auto px-6 md:px-16 xl:px-0">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center text-3xl md:text-5xl font-bold mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Form */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full max-w-[700px] mx-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
