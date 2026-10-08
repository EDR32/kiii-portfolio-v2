"use client";

import { motion } from "framer-motion";
import ParticlesContainer from "@/modules/Home/components/ParticlesContainer";
import AboutBtn from "@/modules/Home/components/AboutBtn";
import Avatar from "@/modules/Home/components/Avatar";
import { fadeIn } from "@/utils/variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen relative flex flex-col justify-center">
      {/* Text Container */}
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10 py-24 xl:py-0">
        <div className="text-center flex flex-col justify-center xl:pt-28 xl:text-left h-full container mx-auto px-6 md:px-16 xl:px-0">
          {/* Intro & Title */}
          <motion.div variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden">
            <div className="inline-block px-3.5 py-1 mb-4 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm md:text-sm font-medium tracking-wider uppercase">
              Hi, I&apos;m Eki Dama Rukmana — Frontend Developer
            </div>
            <h1 className="h1 text-3xl md:text-5xl xl:text-6xl font-bold mb-6">
              Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/70 text-sm md:text-base leading-relaxed"
          >
            Frontend Developer lulusan S1 Teknik Informatika (IPK 3.71) yang berdedikasi membangun
            aplikasi web modern, responsif, dan berperforma tinggi. Berpengalaman dengan React,
            Next.js, TypeScript, dan implementasi sistem informasi publik.
          </motion.p>

          {/* Button on Mobile */}
          <div className="flex justify-center xl:hidden relative z-10">
            <AboutBtn />
          </div>

          {/* Button on Desktop */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <AboutBtn />
          </motion.div>
        </div>
      </div>

      {/* Image & Particles Container */}
      <div className="w-full xl:w-300 h-full absolute right-0 bottom-0 pointer-events-none overflow-hidden">
        {/* Background Explosion Image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />

        {/* Particles */}
        <ParticlesContainer />

        {/* Avatar Image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-184.25 max-h-169.5 absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
