"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { CardUnderglow, CardInnerGlow, cardBaseClasses } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
            {/* White Underglow beneath the card */}
            <CardUnderglow />

            <CardContainer containerClassName="py-0 w-full h-full" className="w-full h-full">
              <CardBody className={cn(cardBaseClasses, "p-6 sm:p-8 flex flex-col justify-between w-full h-full min-h-85")}>
                {/* Inner rising gradient & glowing beam line */}
                <CardInnerGlow />

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
                    className="mb-2 text-lg sm:text-xl font-bold text-foreground group-hover/card:text-accent transition-colors duration-300 w-full block"
                  >
                    {item.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ={30}
                    className="leading-relaxed text-sm text-muted-foreground mb-6 w-full block"
                  >
                    {item.description}
                  </CardItem>
                </div>

                {/* Bottom Arrow */}
                <div className="pt-4 border-t border-border flex justify-end items-center w-full relative z-10">
                  <CardItem
                    translateZ={45}
                    as="div"
                    className="w-10 h-10 rounded-full bg-muted border border-border text-foreground flex items-center justify-center group-hover/card:bg-accent group-hover/card:text-black group-hover/card:border-accent transition-all duration-300"
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
