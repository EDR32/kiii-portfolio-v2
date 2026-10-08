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
            className="w-full h-full"
          >
            <CardContainer
              containerClassName="py-0 w-full h-full"
              className="w-full h-full"
            >
              <CardBody className="bg-[rgba(65,47,123,0.15)] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between w-full h-full min-h-80 group/card hover:bg-[rgba(89,65,169,0.22)] hover:border-accent/40 transition-all duration-300 shadow-xl shadow-black/20">
                <div className="w-full">
                  {/* Icon */}
                  <CardItem
                    translateZ={50}
                    className="text-4xl text-accent mb-5 inline-block"
                  >
                    <div className="transition-transform duration-300 group-hover/card:scale-110">
                      {item.icon}
                    </div>
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    as="h3"
                    translateZ={40}
                    className="mb-2 text-lg sm:text-xl font-semibold text-white group-hover/card:text-accent transition-colors duration-300 w-full block"
                  >
                    {item.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ={30}
                    className="leading-relaxed text-sm text-white/60 mb-6 w-full block"
                  >
                    {item.description}
                  </CardItem>
                </div>

                {/* Bottom Arrow */}
                <div className="pt-4 border-t border-white/5 flex justify-end items-center w-full">
                  <CardItem
                    translateZ={45}
                    className="flex items-center text-white/40 group-hover/card:text-accent transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6 group-hover/card:rotate-45 transition-transform duration-300" />
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
