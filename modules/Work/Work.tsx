"use client";

import { motion } from "framer-motion";
import WorkSlider from "@/modules/Work/components/WorkSlider";
import Bulb from "@/components/layout/Bulb";
import Circles from "@/components/layout/Circles";
import { fadeIn } from "@/utils/variants";

const Work = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-36 flex items-center relative overflow-hidden">
      <Circles />
      <div className="container mx-auto px-6 md:px-16 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-4 max-w-100 mx-auto lg:mx-0 text-white/70 text-sm md:text-base leading-relaxed"
            >
              Kumpulan proyek pengembangan web, antarmuka portal layanan publik &amp; e-Government
              (seperti sistem monitoring CCTV Diskominfo Kota Serang), aplikasi web modern
              dengan React &amp; Next.js, serta infrastruktur teknologi.
            </motion.p>
          </div>

          {/* Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
