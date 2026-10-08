"use client";

import { motion } from "framer-motion";
import AboutCounters from "@/modules/About/components/AboutCounters";
import AboutTimeline from "@/modules/About/components/AboutTimeline";
import { fadeIn } from "@/utils/variants";
import { aboutData } from "@/modules/About/utils/constants";
import dynamic from "next/dynamic";

const GithubActivity = dynamic(
  () => import("@/components/github/GithubCalendar"),
  { ssr: false }
);

const About = () => {
  const skillsCategory = aboutData.find((cat) => cat.title === "skills");

  return (
    <div className="min-h-screen bg-primary/30 py-24 xl:py-32 text-center xl:text-left relative flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto h-full flex flex-col justify-center gap-y-16 px-6 md:px-16 xl:px-0 relative z-10">
        {/* Top: Left Column (Bio & Counters) & Right Column (Skills Overview) */}
        <div className="w-full flex flex-col items-center xl:flex-row gap-x-12 gap-y-10">
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
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-4"
            >
              <AboutCounters />
            </motion.div>
          </div>

          {/* Right Column: Skills Overview */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col w-full xl:max-w-[48%] gap-4"
          >
            {skillsCategory?.info.map((skillGroup, groupIdx) => (
              <div
                key={groupIdx}
                className="w-full flex flex-col items-center xl:items-start text-white/70 bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.22)] border border-white/10 hover:border-accent/40 transition-all duration-300 p-5 rounded-2xl shadow-lg shadow-black/20"
              >
                <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-baseline gap-2 mb-1.5">
                  <div className="font-semibold text-white text-base md:text-lg">
                    {skillGroup.title}
                  </div>
                  <span className="text-sm text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-medium">
                    {groupIdx === 0 ? "Core Focus" : groupIdx === 1 ? "Web Systems" : "Infrastructure"}
                  </span>
                </div>

                {skillGroup.subtitle && (
                  <div className="text-sm md:text-sm text-white/60 mb-3 font-normal text-center xl:text-left">
                    {skillGroup.subtitle}
                  </div>
                )}

                {skillGroup.icons && (
                  <div className="flex flex-wrap justify-center xl:justify-start gap-4 text-2xl text-white/80">
                    {skillGroup.icons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="hover:text-accent hover:scale-110 transition-all duration-200 cursor-pointer"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Middle: Timeline (Career, Education, & Credentials) */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full pt-4"
        >
          <div className="text-center xl:text-left mb-6">
            <h3 className="h3 text-2xl md:text-4xl font-bold text-white mb-2">
              Career &amp; Academic <span className="text-accent">Journey</span>
            </h3>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto xl:mx-0">
              Perjalanan profesional, riwayat pendidikan formal, dan kredensial kompetensi terstandarisasi.
            </p>
          </div>
          <AboutTimeline />
        </motion.div>

        {/* Bottom: GitHub Calendar */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <GithubActivity />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
