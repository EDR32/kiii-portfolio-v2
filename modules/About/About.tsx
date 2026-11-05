"use client";

import { motion } from "framer-motion";
import AboutCounters from "@/modules/About/components/AboutCounters";
import AboutTimeline from "@/modules/About/components/AboutTimeline";
import RadialGlow from "@/components/ui/radial-glow";
import Card from "@/components/ui/card";
import { fadeIn } from "@/utils/variants";
import {
  aboutData,
  aboutBioData,
  aboutTimelineHeaderData,
} from "@/modules/About/utils/constants";
import dynamic from "next/dynamic";
import Badge from "@/components/badge";

const GithubActivity = dynamic(() => import("@/components/github/GithubCalendar"), { ssr: false });

const About = () => {
  const skillsCategory = aboutData.find((cat) => cat.title === "skills");

  return (
    <div className="py-14 md:py-18 xl:py-22 text-center xl:text-left relative flex flex-col justify-center overflow-hidden">
      {/* White Radial Glow in Dark Mode */}
      <RadialGlow variant="about" />

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
              className="h2 text-3xl md:text-5xl font-bold leading-tight text-foreground"
            >
              {aboutBioData.title.prefix}
              <span className="text-accent">{aboutBioData.title.highlight}</span>
              {aboutBioData.title.suffix}
            </motion.h2>

            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0 text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              {aboutBioData.description}
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
              <Card
                key={groupIdx}
                className="w-full flex flex-col items-center xl:items-start p-5"
              >
                <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-baseline gap-2 mb-1.5 relative z-10">
                  <div className="font-bold text-foreground text-base md:text-lg">
                    {skillGroup.title}
                  </div>
                  <Badge size="sm" variant="accent">
                    {groupIdx === 0
                      ? "Core Focus"
                      : groupIdx === 1
                        ? "Web Systems"
                        : "Infrastructure"}
                  </Badge>
                </div>

                {skillGroup.subtitle && (
                  <div className="text-sm md:text-sm text-muted-foreground mb-3 font-normal text-center xl:text-left">
                    {skillGroup.subtitle}
                  </div>
                )}

                {skillGroup.icons && (
                  <div className="flex flex-wrap justify-center xl:justify-start gap-4 text-2xl text-muted-foreground">
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
              </Card>
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
            <h2 className="h2 text-3xl md:text-5xl font-bold text-foreground mb-2 text-center">
              {aboutTimelineHeaderData.title.prefix}
              <span className="text-accent">
                {aboutTimelineHeaderData.title.highlight}
              </span>
            </h2>
            <p className="text-sm md:text-base text-center text-muted-foreground max-w-2xl mx-auto w-full">
              {aboutTimelineHeaderData.description}
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
