"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/modules/Work/components/ProjectCard";
import ProjectModal from "@/modules/Work/components/ProjectModal";
import { FocusCard } from "@/components/ui/focus-cards";
import { projectsData } from "@/modules/Work/utils/constants";
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
        <div
          className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-212.5 max-w-full h-95 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_45%,transparent_70%)] pointer-events-none -z-10 blur-xl"
          aria-hidden="true"
        />

        <div className="flex flex-col items-center">
          <div className="text-center flex flex-col items-center mb-8 md:mb-10">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white"
            >
              My <span className="text-accent-darker dark:text-accent">Work</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl mx-auto text-zinc-600 dark:text-white/70 text-sm md:text-base leading-relaxed"
            >
              Kumpulan proyek pengembangan aplikasi web modern, mulai dari CRM Portal &amp; CMS,
              sistem management fast tournament, sistem informasi manajemen klinik serta portal
              monitoring CCTV.
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
