"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Circles from "@/components/layout/Circles";
import AboutCounters from "@/modules/About/components/AboutCounters";
import { fadeIn } from "@/utils/variants";
import { aboutData } from "@/modules/About/utils/constants";
import dynamic from "next/dynamic";

const GithubActivity = dynamic(
  () => import("@/components/github/GithubCalendar"),
  { ssr: false }
);

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 py-24 xl:py-32 text-center xl:text-left relative flex flex-col justify-center overflow-hidden">
      <Circles />

      <div className="container mx-auto h-full flex flex-col justify-center gap-y-12 px-6 md:px-16 xl:px-0 relative z-10">
        {/* Top: Left & Right Columns */}
        <div className="w-full flex flex-col items-center xl:flex-row gap-x-8">
          {/* Left Column: Text & Counters */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold leading-tight"
            >
              Crafting <span className="text-accent">modern interfaces</span> with engineering precision.
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-125 mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-white/70 text-sm md:text-base leading-relaxed"
            >
              Lulusan S1 Teknik Informatika STTIKOM Insan Unggul (IPK 3.71) dengan passion
              tinggi di bidang Frontend Development dan teknologi web. Berpengalaman
              membangun antarmuka sistem e-Government seperti portal monitoring CCTV real-time
              di Diskominfo Kota Serang serta aplikasi antarmuka modern dengan React, Next.js, dan TypeScript.
            </motion.p>

            {/* Counters */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <AboutCounters />
            </motion.div>
          </div>

          {/* Right Column: Tabs & Info */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col w-full xl:max-w-[50%] min-h-90"
          >
            {/* Tabs */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 xl:gap-x-7 gap-y-2 mx-auto xl:mx-0 mb-6">
              {aboutData.map((item, itemIndex) => {
                return (
                  <button
                    key={itemIndex}
                    type="button"
                    className={`${
                      index === itemIndex
                        ? "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                        : "text-white/60 hover:text-white"
                    } cursor-pointer capitalize text-sm md:text-base xl:text-lg font-medium relative after:w-8 after:h-0.5 after:bg-white/20 after:absolute after:-bottom-1 after:left-0 pb-1 transition-colors`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            {/* Tab Content List */}
            <div className="py-2 flex flex-col gap-y-4 items-center xl:items-start max-h-95 overflow-y-auto pr-1">
              {aboutData[index].info.map((infoItem, infoIndex) => {
                return (
                  <div
                    key={infoIndex}
                    className="w-full flex flex-col items-center xl:items-start text-white/70 bg-white/5 hover:bg-white/10 transition-colors duration-300 p-4 rounded-xl border border-white/10"
                  >
                    {/* Header Row: Title & Stage */}
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-baseline gap-2 mb-1">
                      <div className="font-semibold text-white/95 text-sm md:text-base">
                        {infoItem.title}
                      </div>
                      {infoItem.stage && (
                        <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full shrink-0 font-medium">
                          {infoItem.stage}
                        </span>
                      )}
                    </div>

                    {/* Subtitle / Institution */}
                    {infoItem.subtitle && (
                      <div className="text-xs md:text-sm text-white/60 mb-2 font-normal">
                        {infoItem.subtitle}
                      </div>
                    )}

                    {/* Description if available */}
                    {infoItem.description && (
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed text-center xl:text-left">
                        {infoItem.description}
                      </p>
                    )}

                    {/* Icons row for Skills */}
                    {infoItem.icons && (
                      <div className="flex flex-wrap gap-4 mt-3 text-2xl text-white/80">
                        {infoItem.icons.map((icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="hover:text-accent hover:scale-110 transition-all duration-200"
                          >
                            {icon}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom: GitHub Calendar */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full mt-4"
        >
          <GithubActivity />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
