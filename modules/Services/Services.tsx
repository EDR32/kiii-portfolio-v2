"use client";

import { motion } from "framer-motion";
import ServiceGrid from "@/modules/Services/components/ServiceGrid";
import RadialGlow from "@/components/ui/radial-glow";
import { servicesHeaderData } from "@/modules/Services/utils/constants";
import { fadeIn } from "@/utils/variants";

const Services = () => {
  return (
    <div className="py-14 md:py-18 xl:py-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 xl:px-0 relative z-20">
        {/* White Radial Glow behind Headline in Dark Mode */}
        <RadialGlow />

        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-8 md:mb-10">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold mb-4 text-foreground"
            >
              {servicesHeaderData.titlePrefix}
              <span className="text-accent">{servicesHeaderData.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              {servicesHeaderData.description}
            </motion.p>
          </div>

          {/* Grid */}
          <div className="w-full">
            <ServiceGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
