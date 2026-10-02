"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Circles from "@/components/layout/Circles";
import Avatar from "@/modules/Home/components/Avatar";
import AboutCounters from "@/modules/About/components/AboutCounters";
import { fadeIn } from "@/utils/variants";
import { aboutData } from "@/modules/About/utils/constants";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left relative flex items-center">
      <Circles />

      {/* Avatar Img for Desktop */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] pointer-events-none"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-6 md:px-16 xl:px-0">
        {/* Left Column: Text & Counters */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-3xl md:text-5xl font-bold"
          >
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white/70 text-sm md:text-base leading-relaxed"
          >
            10 years ago, I began freelancing as a developer. Since then, I have done remote work
            for agencies, consulted for startups, and collaborated on digital products for business
            and consumer use.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <AboutCounters />
          </motion.div>
        </div>

        {/* Right Column: Tabs & Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex
                      ? "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                      : "text-white/60"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white/20 after:absolute after:-bottom-1 after:left-0 pb-1`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          {/* Tab Content List */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((infoItem, infoIndex) => {
              return (
                <div
                  key={infoIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* Title */}
                  <div className="font-light mb-2 md:mb-0 text-sm md:text-base text-white/80">
                    {infoItem.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  {/* Stage */}
                  {infoItem.stage && <div>{infoItem.stage}</div>}
                  {/* Icons */}
                  <div className="flex gap-x-4">
                    {infoItem.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
