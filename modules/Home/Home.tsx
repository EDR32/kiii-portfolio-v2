"use client";

import { motion } from "framer-motion";
import ParticlesContainer from "@/modules/Home/components/ParticlesContainer";
import AboutBtn from "@/modules/Home/components/AboutBtn";
import Avatar from "@/modules/Home/components/Avatar";
import RadialGlow from "@/components/ui/radial-glow";
import Badge from "@/components/ui/badge";
import { homeData } from "@/modules/Home/utils/constants";
import { fadeIn } from "@/utils/variants";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4.5rem)] relative flex flex-col justify-center overflow-hidden">
      {/* White Radial Glow behind Hero in Dark Mode */}
      <RadialGlow variant="hero" />

      {/* Text Container */}
      <div className="w-full h-full py-20 xl:py-0 relative z-10">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto px-6 md:px-16 xl:px-0">
          {/* Intro & Title */}
          <motion.div variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden">
            <Badge size="lg" variant="accent" uppercase className="mb-4">
              {homeData.badge}
            </Badge>
            <h1 className="h1 text-3xl md:text-5xl xl:text-6xl font-extrabold mb-6 text-foreground">
              {homeData.title.line1} <br /> {homeData.title.line2Prefix}
              <span className="text-accent dark:drop-shadow-[0_0_25px_rgba(255,221,51,0.35)]">
                {homeData.title.highlight}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            {homeData.subtitle}
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
        {/* Background Explosion Image: visible in both light & dark mode */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute opacity-55 dark:opacity-40 dark:mix-blend-color-dodge translate-z-0 mask-[linear-gradient(to_left,black_70%,transparent_100%)]" />

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
