"use client";

import { motion } from "framer-motion";
import ContactForm from "@/modules/Contact/components/ContactForm";
import { fadeIn } from "@/utils/variants";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-28 pb-36 md:pb-44 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 xl:px-0">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="h2 text-center text-3xl md:text-5xl font-bold mb-4"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Quick Contact Info */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 text-xs md:text-sm text-white/80"
          >
            {/* <a
              href="mailto:ekidama91@gmail.com"
              className="flex items-center gap-x-2 bg-white/5 hover:bg-white/10 hover:border-accent border border-white/10 px-4 py-2 rounded-full transition-all duration-300"
            >
              <Mail className="text-accent text-base md:text-lg w-4 h-4 md:w-5 md:h-5" />
              <span>ekidama91@gmail.com</span>
            </a> */}
            <Link
              key="Email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ekidama91@gmail.com&su=Hire%20Me&body=Halo,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20anda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 bg-white/5 hover:bg-white/10 hover:border-accent border border-white/10 px-4 py-2 rounded-full transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="text-accent text-base md:text-lg w-4 h-4 md:w-5 md:h-5" />
              <span>Mail Me</span>
            </Link>
            <Link
              key="Address"
              href="https://maps.app.goo.gl/aavMrueN1Yn9fz3y8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 bg-white/5 hover:bg-white/10 hover:border-accent border border-white/10 px-4 py-2 rounded-full transition-all duration-300"
              aria-label="Address"
            >
              <MapPin className="text-accent text-base md:text-lg w-4 h-4 md:w-5 md:h-5" />
              <span>My Address</span>
            </Link>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-175 mx-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
