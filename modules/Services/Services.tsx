"use client";

import { motion } from "framer-motion";
import ServiceGrid from "@/modules/Services/components/ServiceGrid";
import { fadeIn } from "@/utils/variants";

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-28 md:py-32 xl:py-36 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 xl:px-0 relative z-20">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-14">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold mb-4"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed"
            >
              Layanan terintegrasi mulai dari pengembangan antarmuka web modern
              (React, Next.js, TypeScript), implementasi platform digital &amp; e-Government,
              hingga arsitektur sistem dan infrastruktur jaringan komputer.
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
