"use client";

import { motion } from "framer-motion";
import ContactForm from "@/modules/Contact/components/ContactForm";
import { fadeIn } from "@/utils/variants";
// import { Mail, MapPin } from "lucide-react";
// import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-14 md:py-18 xl:py-20 flex items-center relative overflow-hidden">
      {/* White Radial Glow in Dark Mode */}
      <div
        className="hidden dark:block absolute top-16 left-1/2 -translate-x-1/2 w-200 max-w-full h-100 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_45%,transparent_70%)] pointer-events-none -z-10 blur-xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-16 xl:px-0 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="h2 text-center text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white"
          >
            Let&apos;s <span className="text-accent-darker dark:text-accent">Connect</span>
          </motion.h2>

          {/* Quick Contact Info */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 text-sm"
          >
            {/* <Link
              key="Email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ekidama91@gmail.com&su=Hire%20Me&body=Halo,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20anda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 bg-white dark:bg-card hover:border-accent dark:hover:border-accent border border-black/10 dark:border-white/10 px-4 py-2 rounded-full text-zinc-800 dark:text-white/80 transition-all duration-300 shadow-xs hover:shadow-[0_0_15px_rgba(255,221,51,0.2)] font-medium"
              aria-label="Email"
            >
              <Mail className="text-accent-darker dark:text-accent text-base md:text-lg w-4 h-4 md:w-5 md:h-5 stroke-[2.2]" />
              <span>Mail Me</span>
            </Link>
            <Link
              key="Address"
              href="https://maps.app.goo.gl/aavMrueN1Yn9fz3y8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2 bg-white dark:bg-card hover:border-accent dark:hover:border-accent border border-black/10 dark:border-white/10 px-4 py-2 rounded-full text-zinc-800 dark:text-white/80 transition-all duration-300 shadow-xs hover:shadow-[0_0_15px_rgba(255,221,51,0.2)] font-medium"
              aria-label="Address"
            >
              <MapPin className="text-accent-darker dark:text-accent text-base md:text-lg w-4 h-4 md:w-5 md:h-5 stroke-[2.2]" />
              <span>My Address</span>
            </Link> */}
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
