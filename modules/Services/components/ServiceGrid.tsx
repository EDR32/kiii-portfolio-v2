"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { serviceData } from "@/modules/Services/utils/constants";
import { fadeIn } from "@/utils/variants";

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {serviceData.map((item, index) => {
        return (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.2 + (index % 3) * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="w-full h-full relative group/card-wrapper"
          >
            {/* White Underglow beneath the card (cahaya putih di bawah card) */}
            <div className="hidden dark:block absolute -bottom-3 inset-x-8 h-8 bg-white/25 blur-xl rounded-full pointer-events-none group-hover/card-wrapper:bg-white/45 group-hover/card-wrapper:h-10 transition-all duration-500" />
            <div className="hidden dark:block absolute -bottom-1 inset-x-14 h-4 bg-white/40 blur-md rounded-full pointer-events-none group-hover/card-wrapper:bg-white/65 transition-all duration-500" />

            <CardContainer containerClassName="py-0 w-full h-full" className="w-full h-full">
              <CardBody className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between w-full h-full min-h-85 group/card hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 shadow-sm dark:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.1)]">
                {/* Inner rising white gradient at bottom of card */}
                <div className="hidden dark:block absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white/15 via-white/4 to-transparent pointer-events-none group-hover/card:from-white/22 transition-all duration-500" />

                {/* Bottom glowing beam line at the very bottom edge of card */}
                <div className="hidden dark:block absolute bottom-0 inset-x-4 h-0.5 bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none" />

                <div className="w-full relative z-10">
                  {/* Icon Badge - Yellow Rounded Square */}
                  <CardItem
                    translateZ={50}
                    className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center mb-5 text-2xl shadow-[0_0_15px_rgba(255,221,51,0.35)]"
                  >
                    <div className="transition-transform duration-300 group-hover/card:scale-110">
                      {item.icon}
                    </div>
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    as="h3"
                    translateZ={40}
                    className="mb-2 text-lg sm:text-xl font-bold text-zinc-900 dark:text-white group-hover/card:text-accent-darker dark:group-hover/card:text-accent transition-colors duration-300 w-full block"
                  >
                    {item.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ={30}
                    className="leading-relaxed text-sm text-zinc-600 dark:text-white/70 mb-6 w-full block"
                  >
                    {item.description}
                  </CardItem>
                </div>

                {/* Bottom Arrow */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex justify-end items-center w-full relative z-10">
                  <CardItem
                    translateZ={45}
                    as="div"
                    className="w-10 h-10 rounded-full bg-accent/20 dark:bg-white/10 border border-accent/40 dark:border-white/20 text-black dark:text-white flex items-center justify-center group-hover/card:bg-accent group-hover/card:text-black group-hover/card:border-accent transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform duration-300 stroke-[2.5]" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceGrid;
