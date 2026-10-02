"use client";

import { motion } from "framer-motion";
import ParticlesContainer from "@/modules/Home/components/ParticlesContainer";
import ProjectsBtn from "@/modules/Home/components/ProjectsBtn";
import Avatar from "@/modules/Home/components/Avatar";
import { fadeIn } from "@/utils/variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen relative flex flex-col justify-center">
      {/* Text Container */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 py-24 xl:py-0">
        <div className="text-center flex flex-col justify-center xl:pt-28 xl:text-left h-full container mx-auto px-6 md:px-16 xl:px-0">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-3xl md:text-5xl xl:text-6xl font-bold mb-6"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/70 text-sm md:text-base leading-relaxed"
          >
            Passionate full-stack developer dedicated to crafting intuitive,
            high-performance digital experiences. Specializing in modern web
            technologies, reactive architectures, and interactive animations.
          </motion.p>

          {/* Button on Mobile */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>

          {/* Button on Desktop */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Image & Particles Container */}
      <div className="w-full xl:w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none overflow-hidden">
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
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
