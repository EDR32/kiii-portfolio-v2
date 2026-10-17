"use client";

import { motion } from "framer-motion";
import ServiceGrid from "@/modules/Services/components/ServiceGrid";
import { fadeIn } from "@/utils/variants";

const Services = () => {
  return (
    <div className="py-14 md:py-18 xl:py-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 xl:px-0 relative z-20">
        {/*  White Radial Glow behind Headline in Dark Mode */}
        <div
          className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-212.5 max-w-full h-95 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_45%,transparent_70%)] pointer-events-none -z-10 blur-xl"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-8 md:mb-10">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white"
            >
              My services <span className="text-accent-darker dark:text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl mx-auto text-zinc-600 dark:text-white/70 text-sm md:text-base leading-relaxed"
            >
              Layanan terintegrasi mulai dari pengembangan antarmuka web modern (React, Next.js,
              TypeScript), implementasi platform digital &amp; e-Government, hingga arsitektur
              sistem dan infrastruktur jaringan komputer.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="w-full max-w-6xl">
            <ServiceGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
