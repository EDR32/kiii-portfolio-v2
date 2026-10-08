"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/modules/Work/components/ProjectCard";
import ProjectModal from "@/modules/Work/components/ProjectModal";
import { projectsData } from "@/modules/Work/utils/constants";
import { ProjectItem } from "@/modules/Work/@types/type";
import { fadeIn } from "@/utils/variants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetail = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary/30 py-28 md:py-32 xl:py-36 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 xl:px-0 relative z-20">
        <div className="flex flex-col items-center">
          <div className="text-center flex flex-col items-center mb-10 md:mb-14">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-3xl md:text-5xl font-bold mb-4"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed"
            >
              Kumpulan proyek pengembangan web, antarmuka portal layanan publik &amp; e-Government
              (seperti sistem monitoring CCTV Diskominfo Kota Serang), aplikasi web modern
              dengan React &amp; Next.js, serta infrastruktur teknologi.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto"
          >
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetail={handleOpenDetail}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Work;
