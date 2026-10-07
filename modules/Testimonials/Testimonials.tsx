"use client";

import { motion } from "framer-motion";
import TestimonialSlider from "@/modules/Testimonials/components/TestimonialSlider";
import { fadeIn } from "@/utils/variants";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center relative flex items-center">
      <div className="container mx-auto h-full flex flex-col justify-center px-6 md:px-16 xl:px-0">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="h2 mb-8 xl:mb-0 text-3xl md:text-5xl font-bold"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
