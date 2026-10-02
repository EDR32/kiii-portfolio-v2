"use client";

import { motion } from "framer-motion";
import ServiceSlider from "@/modules/Services/components/ServiceSlider";
import Bulb from "@/components/layout/Bulb";
import Circles from "@/components/layout/Circles";
import { fadeIn } from "@/utils/variants";

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-36 flex items-center relative">
      <Circles />
      <div className="container mx-auto px-6 md:px-16 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-3xl md:text-5xl font-bold xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/70 text-sm md:text-base leading-relaxed"
            >
              Comprehensive digital services designed to scale your business,
              from modern frontend architecture and intuitive UX to full-stack
              engineering and search engine optimization.
            </motion.p>
          </div>

          {/* Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
