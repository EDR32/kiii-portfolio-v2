"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/modules/Work/components/ProjectCard";
import ProjectModal from "@/modules/Work/components/ProjectModal";
import { FocusCard } from "@/components/ui/focus-cards";
import RadialGlow from "@/components/ui/radial-glow";
import { projectsData, workHeaderData } from "@/modules/Work/utils/constants";
import { ProjectItem } from "@/modules/Work/@types/type";
import { fadeIn } from "@/utils/variants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleOpenDetail = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-14 md:py-18 xl:py-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 xl:px-0 relative z-20">
        <RadialGlow />

        <div className="flex flex-col items-center">
          <div className="text-center flex flex-col items-center mb-8 md:mb-10">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold mb-4 text-foreground"
            >
              {workHeaderData.titlePrefix}
              <span className="text-accent">{workHeaderData.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              {workHeaderData.description}
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto"
          >
            {projectsData.map((project, index) => (
              <FocusCard key={project.id} index={index} hovered={hovered} setHovered={setHovered}>
                <ProjectCard project={project} onOpenDetail={handleOpenDetail} />
              </FocusCard>
            ))}
          </motion.div>
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Work;
