"use client";

import { motion } from "framer-motion";
import AboutCounters from "@/modules/About/components/AboutCounters";
import AboutTimeline from "@/modules/About/components/AboutTimeline";
import { fadeIn } from "@/utils/variants";
import { aboutData } from "@/modules/About/utils/constants";
import dynamic from "next/dynamic";

const GithubActivity = dynamic(() => import("@/components/github/GithubCalendar"), { ssr: false });

const About = () => {
  const skillsCategory = aboutData.find((cat) => cat.title === "skills");

  return (
    <div className="py-14 md:py-18 xl:py-22 text-center xl:text-left relative flex flex-col justify-center overflow-hidden">
      <div
        className="hidden dark:block absolute top-12 left-1/3 -translate-x-1/2 w-212.5 max-w-full h-125 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_45%,transparent_70%)] pointer-events-none -z-10 blur-2xl"
        aria-hidden="true"
      />

      <div className="container mx-auto h-full flex flex-col justify-center gap-y-12 md:gap-y-14 px-6 md:px-16 xl:px-0 relative z-10">
        {/* Top: Left Column (Bio & Counters) & Right Column (Skills Overview) */}
        <div className="w-full flex flex-col items-center xl:flex-row gap-x-12 gap-y-10">
          {/* Left Column: Text & Counters */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-white"
            >
              Crafting{" "}
              <span className="text-accent-darker dark:text-accent">modern interfaces</span> with
              engineering precision.
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-zinc-600 dark:text-white/70 text-sm md:text-base leading-relaxed"
            >
              Lulusan S1 Teknik Informatika STTIKOM Insan Unggul dengan fokus di bidang Frontend Web
              Development. Berpengalaman mengembangkan antarmuka aplikasi enterprise dan health-tech
              seperti sistem informasi manajemen klinik, CRM portal, HRIS serta portal pemantauan
              CCTV berbasis HTML, CSS, React, Next.js dan TypeScript.
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
                className="relative overflow-hidden w-full flex flex-col items-center xl:items-start bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 p-5 rounded-2xl shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] group"
              >
                {/* Bottom glowing beam line */}
                <div className="hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none" />
                <div className="hidden dark:block absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white/10 via-white/2 to-transparent pointer-events-none" />

                <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-baseline gap-2 mb-1.5 relative z-10">
                  <div className="font-bold text-zinc-900 dark:text-white text-base md:text-lg">
                    {skillGroup.title}
                  </div>
                  <span className="text-sm text-black dark:text-accent bg-accent/25 dark:bg-accent/15 border border-accent/40 px-2.5 py-0.5 rounded-full font-bold">
                    {groupIdx === 0
                      ? "Core Focus"
                      : groupIdx === 1
                        ? "Web Systems"
                        : "Infrastructure"}
                  </span>
                </div>

                {skillGroup.subtitle && (
                  <div className="text-sm md:text-sm text-zinc-500 dark:text-white/60 mb-3 font-normal text-center xl:text-left">
                    {skillGroup.subtitle}
                  </div>
                )}

                {skillGroup.icons && (
                  <div className="flex flex-wrap justify-center xl:justify-start gap-4 text-2xl text-zinc-700 dark:text-white/80">
                    {skillGroup.icons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="hover:text-black dark:hover:text-accent hover:scale-110 transition-all duration-200 cursor-pointer"
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
          className="w-full pt-4 text-center"
        >
          <div className="text-center xl:text-left">
            <h2 className="h2 text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2 text-center">
              Career &amp;{" "}
              <span className="text-accent-darker dark:text-accent">Academic Journey</span>
            </h2>
            <p className="text-sm md:text-base text-center text-zinc-600 dark:text-white/60 max-w-2xl mx-auto w-full">
              Rangkuman perjalanan karier, riwayat pendidikan, sertifikasi kompetensi serta
              kontribusi proyek yang membentuk keahlian teknis saya sampai saat ini.
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
